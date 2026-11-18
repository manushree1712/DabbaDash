import { Bell, Search, RefreshCw } from 'lucide-react';
import type { NavPage } from '../../types';

const pageLabels: Record<NavPage, string> = {
  'overview':           'Overview',
  'all-orders':         'All Orders',
  'kitchen-board':      'Kitchen Board',
  'rider-dispatch':     'Rider Dispatch',
  'delivery-batching':  'Delivery Batching',
  'live-map':           'Live Map',
  'customer-tracking':  'Customer Tracking',
  'analytics':          'Analytics',
};

interface HeaderProps {
  activePage: NavPage;
}

export function Header({ activePage }: HeaderProps) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
      {/* Left */}
      <div>
        <h1 className="text-lg font-bold text-slate-900">{pageLabels[activePage]}</h1>
        <p className="text-xs text-slate-400">{dateStr} • {timeStr}</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search orders, riders…"
            className="pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl w-56 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all"
          />
        </div>

        {/* Refresh */}
        <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900">
          <RefreshCw size={15} />
        </button>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-600 hover:text-slate-900">
          <Bell size={15} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-orange-400 flex items-center justify-center text-white text-sm font-bold shadow-sm cursor-pointer">
          M
        </div>
      </div>
    </header>
  );
}
