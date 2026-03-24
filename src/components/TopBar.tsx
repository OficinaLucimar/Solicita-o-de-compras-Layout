import { Bell, Menu } from 'lucide-react';

export const TopBar = ({ title, onMenuClick }: { title: string, onMenuClick?: () => void }) => {
  return (
    <header className="h-16 glass-panel flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 border-b border-outline-variant/10">
      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
        <span className="text-lg md:text-xl font-bold tracking-tight text-primary font-headline truncate max-w-[150px] md:max-w-none">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <Bell size={20} className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
        </div>
        
        <div className="h-8 w-px bg-outline-variant/20"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-primary leading-none">Lucimar Silva</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mt-1">Purchasing Manager</p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrRIj-qG2o21P5WID65rrV5ctP7VMrMPnicNuH8pXMuIYLzeZq3AhbXSuTxSM3vBINSTpIip0aynJYpYcK2phm3z_Ewg_ta6cBxGG4nX88TBDgUF7STlQhY0tNTIoxmqyKz-6NlzqiawXJ3FBf7TOQgdRaTvcWXMFRi2HyNQWgmb4tZAi3vnCy_8H4kywWiKaWsI0T1YADlXaLGxjhBkhCEcg_VTabhwci0V0uLU3vej20tY0a3iYFUjObHQQDue-o-wP4U7FuAzE"
            alt="User profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
