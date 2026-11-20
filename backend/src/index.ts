import cors from 'cors';
import express, { ErrorRequestHandler } from 'express';
import { Server } from 'http';
import { ApiError } from './apiError';
import { closeDb, getDb } from './db/connection';
import { createSchema } from './db/schema';
import { hasDemoSeedData, seedDatabase } from './db/seed';
import { apiRouter } from './routes/api';

const defaultOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];
const configuredOrigins = process.env.CORS_ORIGIN
  ?.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowedOrigins = configuredOrigins?.length ? configuredOrigins : defaultOrigins;

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const host = process.env.HOST?.trim() || '127.0.0.1';

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535.');
}

app.disable('x-powered-by');
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  try {
    getDb().prepare('SELECT 1').get();
    res.status(200).json({
      status: 'ok',
      database: 'connected',
      demoData: hasDemoSeedData(),
    });
  } catch (error) {
    console.error('Health check could not reach the database.', error);
    res.status(503).json({ status: 'error', database: 'unavailable' });
  }
});

app.use('/api', apiRouter);

app.use((_req, res) => {
  res.status(404).json({
    error: { code: 'NOT_FOUND', message: 'Route not found.' },
  });
});

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  let status = error instanceof ApiError ? error.statusCode : 500;
  if (
    !(error instanceof ApiError) &&
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof error.status === 'number' &&
    error.status >= 400 &&
    error.status < 600
  ) {
    status = error.status;
  }

  if (status >= 500) {
    console.error('Unhandled request error.', error);
  }

  const code =
    error instanceof ApiError
      ? error.code
      : status < 500
        ? 'INVALID_REQUEST'
        : 'INTERNAL_SERVER_ERROR';
  const message =
    error instanceof ApiError
      ? error.message
      : status < 500 && error instanceof Error
        ? error.message
        : 'Internal server error.';
  res.status(status).json({ error: { code, message } });
};

app.use(errorHandler);

let server: Server;
try {
  createSchema();
  const allowDemoSeed =
    process.env.DABBADASH_DEMO_SEED === 'true' ||
    (process.env.NODE_ENV !== 'production' && process.env.DABBADASH_DEMO_SEED !== 'false');
  if (allowDemoSeed) seedDatabase();
  server = app.listen(port, host, () => {
    console.log(`DabbaDash API listening on http://${host}:${port}`);
  });
} catch (error) {
  closeDb();
  console.error('Failed to initialize the DabbaDash API.', error);
  throw error;
}

server.on('error', (error) => {
  console.error('DabbaDash API server failed.', error);
  closeDb();
  process.exitCode = 1;
});

function shutdown(signal: string): void {
  console.log(`${signal} received; shutting down the API.`);
  server.close((error) => {
    if (error) {
      console.error('Error while closing the API server.', error);
      process.exitCode = 1;
    }
    closeDb();
  });
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));
