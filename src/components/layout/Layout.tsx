import { Sidebar } from './Sidebar';
import { Header } from './Header';
import type { NavPage } from '../../types';
import { useApiData } from '../../contexts/ApiDataContext';

interface LayoutProps {
  activePage: NavPage;
  onNavigate: (page: NavPage) => void;
  children: React.ReactNode;
}

export function Layout({ activePage, onNavigate, children }: LayoutProps) {
  const { error, liveUpdateError } = useApiData();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header activePage={activePage} />
        <main className="flex-1 p-6">
          {liveUpdateError && !error && (
            <p
              role="status"
              className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800"
            >
              Live updates are temporarily unavailable. Showing the most recent data: {liveUpdateError}
            </p>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
