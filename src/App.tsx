import { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Overview } from './pages/Overview';
import { AllOrders } from './pages/AllOrders';
import { KitchenBoard } from './pages/KitchenBoard';
import { RiderDispatch } from './pages/RiderDispatch';
import { DeliveryBatching } from './pages/DeliveryBatching';
import { LiveMap } from './pages/LiveMap';
import { CustomerTracking } from './pages/CustomerTracking';
import { Analytics } from './pages/Analytics';
import type { NavPage } from './types';
import { ApiDataProvider } from './contexts/ApiDataContext';

function App() {
  const [activePage, setActivePage] = useState<NavPage>('overview');

  function renderPage() {
    switch (activePage) {
      case 'overview':          return <Overview onNavigate={setActivePage} />;
      case 'all-orders':        return <AllOrders />;
      case 'kitchen-board':     return <KitchenBoard />;
      case 'rider-dispatch':    return <RiderDispatch />;
      case 'delivery-batching': return <DeliveryBatching />;
      case 'live-map':          return <LiveMap />;
      case 'customer-tracking': return <CustomerTracking />;
      case 'analytics':         return <Analytics />;
    }
  }

  return (
    <ApiDataProvider>
      <Layout activePage={activePage} onNavigate={setActivePage}>
        {renderPage()}
      </Layout>
    </ApiDataProvider>
  );
}

export default App;
