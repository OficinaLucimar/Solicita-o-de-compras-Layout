import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingCart, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  ListTodo,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { RequestItem } from '../types';

export const NewRequestView = ({ onSave }: { onSave: () => void }) => {
  const [items, setItems] = useState<RequestItem[]>([
    { sku: 'EL-40291', description: 'Ergonomic Office Chair - Model X-200', quantity: 5, noRegistration: false },
    { sku: 'MN-11022', description: 'Dell UltraSharp 27" 4K Monitor', quantity: 2, noRegistration: false },
  ]);

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
      {/* Form Header Area */}
      <header className="flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-16 bg-white/80 backdrop-blur-md rounded-xl px-6 py-4 sm:py-0 shadow-sm mb-4 gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <ShoppingCart size={24} className="text-primary shrink-0" />
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-primary font-headline truncate">OH - Solicitações de Compras</h2>
        </div>
      </header>

      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-1">Procurement Management</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary font-headline tracking-tight">Nova Solicitação</h3>
        </div>
        <div className="flex gap-3">
          <span className="bg-tertiary-fixed-dim/20 text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
            <ShieldCheck size={14} />
            DRAFT
          </span>
        </div>
      </section>

      {/* Form Canvas */}
      <div className="space-y-8">
        {/* Main Form Card */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface-variant font-headline ml-1">Classification</label>
                <select className="w-full bg-surface-low border-none rounded-xl h-12 md:h-14 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                  <option>Office Supplies</option>
                  <option>IT Hardware</option>
                  <option>Maintenance</option>
                  <option>Consulting Services</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface-variant font-headline ml-1">Urgency</label>
                <div className="grid grid-cols-3 gap-2 md:gap-3">
                  <button className="h-12 md:h-14 rounded-xl border-2 border-surface-low text-xs md:text-sm font-semibold hover:bg-surface-low transition-all">Low</button>
                  <button className="h-12 md:h-14 rounded-xl border-2 border-primary text-primary text-xs md:text-sm font-bold bg-primary/5 transition-all">Medium</button>
                  <button className="h-12 md:h-14 rounded-xl border-2 border-surface-low text-xs md:text-sm font-semibold hover:bg-error-container/20 transition-all">High</button>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface-variant font-headline ml-1">Sector</label>
                <select className="w-full bg-surface-low border-none rounded-xl h-12 md:h-14 px-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                  <option disabled selected value="">Select Sector</option>
                  <option value="finance">Finance</option>
                  <option value="operations">Operations</option>
                  <option value="it">IT</option>
                  <option value="hr">HR</option>
                  <option value="logistics">Logistics</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-on-surface-variant font-headline ml-1">Observations</label>
                <textarea 
                  className="w-full bg-surface-low border-none rounded-xl p-4 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/20 transition-all resize-none" 
                  placeholder="Additional details or justification..." 
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="bg-surface-low rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                <ListTodo size={24} />
              </div>
              <h4 className="text-xl font-bold text-primary font-headline">Itens</h4>
            </div>
            <Button size="sm" className="h-10 w-full sm:w-auto">
              <Plus size={18} />
              <span>Adicionar Item</span>
            </Button>
          </div>

          {/* Items Table Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/5">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-left border-collapse min-w-[600px] lg:min-w-0">
                <thead>
                  <tr className="bg-slate-50 text-on-surface-variant border-b border-outline-variant/10">
                    <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest font-headline">SKU</th>
                    <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest font-headline">Description</th>
                    <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest font-headline text-center">Quantity</th>
                    <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-widest font-headline text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-5 font-headline font-bold text-primary whitespace-nowrap">{item.sku}</td>
                      <td className="px-6 py-5 text-sm text-on-surface">
                        <p className="font-medium">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <input 
                            type="checkbox" 
                            id={`no-reg-${idx}`} 
                            className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer"
                          />
                          <label htmlFor={`no-reg-${idx}`} className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight cursor-pointer">
                            Sem cadastro
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="bg-surface-low text-primary px-3 py-1 rounded-md font-bold text-sm">
                          {item.quantity.toString().padStart(2, '0')}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-1">
                          <button className="p-2 text-on-surface-variant/40 hover:text-error transition-colors">
                            <Trash2 size={18} />
                          </button>
                          <button className="p-2 text-on-surface-variant/40 hover:text-primary transition-colors">
                            <Edit3 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 border-t border-outline-variant/10 bg-slate-50/30 flex justify-between items-center">
              <span className="text-xs text-on-surface-variant font-medium">Showing {items.length} items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Form Footer */}
      <footer className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6">
        <button 
          onClick={() => onSave()}
          className="w-full sm:w-auto px-8 py-3 text-on-surface-variant font-bold hover:bg-surface-low rounded-xl transition-all"
        >
          Cancelar
        </button>
        <Button onClick={onSave} size="lg" className="w-full sm:w-auto px-12">
          <Save size={20} />
          <span>Salvar Solicitação</span>
        </Button>
      </footer>
    </div>
  );
};
