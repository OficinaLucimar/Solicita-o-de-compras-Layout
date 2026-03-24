import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Filter, 
  Eye, 
  Edit3, 
  ChevronLeft, 
  ChevronRight,
  PlusCircle,
  Clock,
  AlertCircle,
  CheckCircle2,
  Search,
  Calendar
} from 'lucide-react';
import { cn } from '../lib/utils';

export const RequestsListView = ({ onNewRequest }: { onNewRequest: () => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [dateFilter, setDateFilter] = useState('');
  
  const itemsPerPage = 5;

  const allRequests = [
    { id: '#45892', date: '2023-10-24', displayDate: '24 Out, 2023', user: 'Ricardo Hiroshi', initials: 'RH', category: 'Equipamentos TI', urgency: 'ALTA', status: 'Autorizado' },
    { id: '#45891', date: '2023-10-23', displayDate: '23 Out, 2023', user: 'Marina Torres', initials: 'MT', category: 'Manutenção', urgency: 'MÉDIA', status: 'Pendente' },
    { id: '#45889', date: '2023-10-22', displayDate: '22 Out, 2023', user: 'Felipe Santos', initials: 'FS', category: 'Suprimentos', urgency: 'BAIXA', status: 'Autorizado' },
    { id: '#45888', date: '2023-10-21', displayDate: '21 Out, 2023', user: 'Ana Paula', initials: 'AP', category: 'Mobiliário', urgency: 'MÉDIA', status: 'Autorizado' },
    { id: '#45887', date: '2023-10-20', displayDate: '20 Out, 2023', user: 'Carlos Lima', initials: 'CL', category: 'Limpeza', urgency: 'BAIXA', status: 'Pendente' },
    { id: '#45886', date: '2023-10-19', displayDate: '19 Out, 2023', user: 'Juliana Silva', initials: 'JS', category: 'TI', urgency: 'ALTA', status: 'Autorizado' },
    { id: '#45885', date: '2023-10-18', displayDate: '18 Out, 2023', user: 'Marcos Oliveira', initials: 'MO', category: 'Escritório', urgency: 'BAIXA', status: 'Pendente' },
    { id: '#45884', date: '2023-10-17', displayDate: '17 Out, 2023', user: 'Beatriz Costa', initials: 'BC', category: 'Segurança', urgency: 'ALTA', status: 'Autorizado' },
    { id: '#45883', date: '2023-10-16', displayDate: '16 Out, 2023', user: 'Rodrigo Alves', initials: 'RA', category: 'TI', urgency: 'MÉDIA', status: 'Pendente' },
    { id: '#45882', date: '2023-10-15', displayDate: '15 Out, 2023', user: 'Fernanda Souza', initials: 'FS', category: 'Manutenção', urgency: 'BAIXA', status: 'Autorizado' },
  ];

  const filteredRequests = allRequests.filter(req => {
    const matchesSearch = req.user.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || req.status === statusFilter;
    const matchesDate = !dateFilter || req.date === dateFilter;
    return matchesSearch && matchesStatus && matchesDate;
  });

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      {/* Stats Bento Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Tudo', value: allRequests.length.toString(), trend: '+12%', color: 'text-primary' },
          { label: 'Pendentes', value: allRequests.filter(r => r.status === 'Pendente').length.toString(), icon: Clock, color: 'text-on-surface-variant' },
          { label: 'Urgentes', value: allRequests.filter(r => r.urgency === 'ALTA').length.toString(), icon: AlertCircle, color: 'text-error', highlight: true },
          { label: 'Autorizado', value: allRequests.filter(r => r.status === 'Autorizado').length.toString(), icon: CheckCircle2, color: 'text-on-tertiary-fixed-variant' },
        ].map((stat, idx) => (
          <div 
            key={idx}
            className={cn(
              "bg-white p-4 md:p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between",
              stat.highlight && "ring-2 ring-error/20"
            )}
          >
            <span className="text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">{stat.label}</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className={cn("text-2xl md:text-3xl font-extrabold font-headline", stat.color)}>{stat.value}</span>
              {stat.trend && <span className="text-[10px] md:text-xs text-emerald-600 font-bold">{stat.trend}</span>}
              {stat.icon && <stat.icon size={16} className={cn("md:w-[18px] md:h-[18px]", stat.color)} />}
            </div>
          </div>
        ))}
      </section>

      {/* Filters and Actions */}
      <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Solicitado Por</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
              <input 
                type="text" 
                placeholder="Pesquisar nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-low rounded-lg text-sm border-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Data</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
              <input 
                type="date" 
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-low rounded-lg text-sm border-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Status</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface-low rounded-lg text-sm border-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
              >
                <option value="Todos">Todos</option>
                <option value="Pendente">Pendente</option>
                <option value="Autorizado">Autorizado</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-outline-variant/10">
        <div className="p-6 border-b border-surface-low">
          <h3 className="font-headline font-bold text-lg text-primary">Lista de Solicitações</h3>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-0">
            <thead>
              <tr className="bg-surface-low/50">
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline"># ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline">Data</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline">Solicitado Por</th>
                <th className="hidden md:table-cell px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline">Classificação</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline">Urgência</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider font-headline text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-low">
              {currentRequests.map((req, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-headline font-bold text-primary">{req.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-on-surface-variant">{req.displayDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                        {req.initials}
                      </div>
                      <span className="text-sm font-medium truncate max-w-[120px]">{req.user}</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-on-surface-variant">{req.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                      req.urgency === 'ALTA' ? "bg-error-container text-on-error-container" :
                      req.urgency === 'MÉDIA' ? "bg-surface-highest text-on-surface-variant" :
                      "bg-surface-low text-on-surface-variant/50"
                    )}>
                      {req.urgency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                      req.status === 'Autorizado' ? "bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant" : "bg-amber-100 text-amber-800"
                    )}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-on-surface-variant hover:bg-surface-highest rounded-lg transition-colors">
                        <Edit3 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {currentRequests.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-on-surface-variant font-medium">
                    Nenhuma solicitação encontrada com os filtros aplicados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-4 md:px-6 py-4 bg-surface-low/30 border-t border-surface-low flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-on-surface-variant font-medium order-2 sm:order-1">
            Exibindo {filteredRequests.length > 0 ? startIndex + 1 : 0} a {Math.min(startIndex + itemsPerPage, filteredRequests.length)} de {filteredRequests.length} solicitações
          </span>
          <div className="flex gap-1 order-1 sm:order-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={cn(
                "p-2 rounded-lg bg-white border border-outline-variant/30 transition-colors",
                currentPage === 1 ? "text-on-surface-variant/40 cursor-not-allowed" : "text-primary hover:bg-primary/5"
              )}
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className={cn(
                "p-2 rounded-lg bg-white border border-outline-variant/30 transition-colors",
                currentPage === totalPages || totalPages === 0 ? "text-on-surface-variant/40 cursor-not-allowed" : "text-primary hover:bg-primary/5"
              )}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button 
          onClick={onNewRequest}
          className="w-full sm:w-auto px-10 py-4 rounded-xl primary-gradient text-white font-headline font-extrabold text-sm shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <PlusCircle size={18} />
          <span>Nova Solicitação</span>
        </button>
      </div>
    </div>
  );
};
