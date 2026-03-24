import { motion } from 'motion/react';
import { 
  PlusCircle, 
  Clock, 
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from 'recharts';
import { Button } from './Button';
import { cn } from '../lib/utils';

export const DashboardView = ({ onNewRequest }: { onNewRequest: () => void }) => {
  const recentActivities = [
    { id: 'MC', title: 'Modern Coffee - Lote 45', status: 'CONCLUÍDO', date: 'Hoje, 14:30', user: 'João M.', amount: 'R$ 4.200', reqId: 'REQ-2024-089' },
    { id: 'TI', title: 'Upgrade Servidor - AWS Hub', status: 'EM ANÁLISE', date: 'Ontem, 09:15', user: 'Lucimar S.', statusColor: 'bg-amber-100 text-amber-800', amount: 'R$ 28.900', reqId: 'REQ-2024-092' },
    { id: 'LM', title: 'Limpeza Industrial - Setor B', status: 'URGENTE', date: '12 Mai, 16:45', user: 'Carla V.', amount: 'R$ 1.850', reqId: 'REQ-2024-085' },
  ];

  const chartData = [
    { name: 'Pendentes', value: 5, color: '#3b82f6' }, // primary color roughly
    { name: 'Autorizado', value: 12, color: '#10b981' }, // emerald-500
  ];

  const totalOpen = chartData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-extrabold text-primary font-headline tracking-tight">
            Bem-vindo de volta, Lucimar
          </h2>
          <p className="text-on-surface-variant font-medium">
            Dashboard: OH - Solicitações de Compras
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={onNewRequest} className="h-12">
            <PlusCircle size={18} />
            <span>Nova Solicitação</span>
          </Button>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 gap-6">
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]"
        >
          <h4 className="text-lg font-bold text-primary font-headline">Status das Solicitações do Mês</h4>
          <div className="relative w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-4xl font-black text-primary font-headline">{totalOpen}</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Aberto</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-8">
        {/* Activity List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold text-primary font-headline">Atividade Recente</h3>
            <button className="text-sm font-semibold text-primary hover:underline">Ver todas</button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {recentActivities.map((activity, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                className="group bg-white p-4 md:p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-low rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <span className="text-lg md:text-xl font-black font-headline tracking-tighter">{activity.id}</span>
                  </div>
                  <div className="flex-1 sm:hidden">
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-on-surface text-sm truncate">{activity.title}</h5>
                      <p className="font-black text-primary font-headline text-sm">{activity.amount}</p>
                    </div>
                    <p className="text-[10px] text-on-surface-variant/60 font-medium">{activity.reqId}</p>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="hidden sm:block font-bold text-on-surface">{activity.title}</h5>
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-bold rounded-full",
                      activity.status === 'CONCLUÍDO' ? "bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant" :
                      activity.status === 'URGENTE' ? "bg-error-container text-on-error-container" :
                      "bg-amber-100 text-amber-800"
                    )}>
                      {activity.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1"><Clock size={14} /> {activity.date}</span>
                    <span className="flex items-center gap-1">Por: {activity.user}</span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <p className="font-black text-primary font-headline">{activity.amount}</p>
                  <p className="text-[10px] text-on-surface-variant/60 font-medium">{activity.reqId}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
