import { LayoutDashboard, FileText, LogOut, PlusCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ activeTab, onTabChange, isOpen, onClose }: SidebarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'requests', label: 'Solicitações', icon: FileText },
  ];

  const sidebarContent = (
    <aside className={cn(
      "fixed left-0 top-0 h-full w-64 border-r border-outline-variant/20 bg-slate-50 flex flex-col py-6 px-4 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="mb-10 px-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-extrabold text-primary font-headline leading-tight">
            Oficina do Hardware
          </h1>
          <p className="text-[10px] font-headline text-on-surface-variant uppercase tracking-widest mt-1">
            Solicitações de Compras
          </p>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-out font-headline text-sm',
              activeTab === item.id
                ? 'bg-white text-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-outline-variant/20 space-y-4">
        <button
          onClick={() => onTabChange('new-request')}
          className="w-full py-3 px-4 primary-gradient text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
        >
          <PlusCircle size={18} />
          <span className="text-sm">Nova Solicitação</span>
        </button>

        <button
          onClick={() => onTabChange('login')}
          className="w-full flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-error transition-colors text-sm font-headline"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );

  return sidebarContent;
};
