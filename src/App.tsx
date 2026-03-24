import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { LoginView } from './components/LoginView';
import { DashboardView } from './components/DashboardView';
import { RequestsListView } from './components/RequestsListView';
import { NewRequestView } from './components/NewRequestView';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

type View = 'login' | 'dashboard' | 'requests' | 'new-request';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('login');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onNewRequest={() => setCurrentView('new-request')} />;
      case 'requests':
        return <RequestsListView onNewRequest={() => setCurrentView('new-request')} />;
      case 'new-request':
        return <NewRequestView onSave={() => setCurrentView('requests')} />;
      default:
        return null;
    }
  };

  if (currentView === 'login') {
    return <LoginView onLogin={() => setCurrentView('dashboard')} />;
  }

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'requests': return 'Solicitações de Compras';
      case 'new-request': return 'Nova Solicitação';
      default: return 'Oficina do Hardware';
    }
  };

  return (
    <div className="flex min-h-screen bg-background relative overflow-x-hidden">
      <Sidebar 
        activeTab={currentView} 
        onTabChange={(tab) => {
          setCurrentView(tab as View);
          setIsSidebarOpen(false);
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className={cn(
        "flex-1 flex flex-col transition-all duration-300 ease-in-out",
        "lg:ml-64 w-full"
      )}>
        <TopBar 
          title={getTitle()} 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <div className="flex-1 overflow-y-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Visual Layering Element (Background) */}
      <div className="fixed inset-0 -z-10 bg-background pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-40 left-80 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
