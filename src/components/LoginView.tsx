import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Lock, Eye, EyeOff, LogIn, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const LoginView = ({ onLogin }: { onLogin: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://oficinadohardware.com.br/img/intro-carousel/1.jpeg"
          alt="Corporate Background"
          className="w-full h-full object-cover filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </div>

      {/* Login Container */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-[480px]"
      >
        {/* Branding Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center p-4 mb-4 bg-white rounded-2xl shadow-2xl">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          <h1 className="font-headline text-3xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Oficina do Hardware
          </h1>
          <p className="font-body text-white/80 text-sm tracking-wide uppercase font-semibold mt-1">
            OH - Solicitações de Compras
          </p>
        </div>

        {/* Central Login Card */}
        <div className="glass-panel p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border border-white/40">
          <header className="mb-8">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary mb-2">
              Acesso Restrito
            </h2>
            <p className="text-on-surface-variant text-sm">
              Insira suas credenciais para gerenciar solicitações.
            </p>
          </header>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            {/* User Field */}
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">
                Usuário
              </label>
              <div className="relative group">
                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="nome.sobrenome"
                  className="w-full h-14 pl-12 pr-4 bg-surface-highest/50 border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  Senha
                </label>
                <button type="button" className="text-[10px] font-bold text-primary hover:underline">
                  Esqueceu sua senha?
                </button>
              </div>
              <div className="relative group">
                <Lock
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors"
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-14 pl-12 pr-12 bg-surface-highest/50 border-none rounded-xl text-on-surface font-medium focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 px-1">
              <input
                type="checkbox"
                id="remember"
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm font-medium text-on-surface-variant cursor-pointer">
                Manter conectado neste dispositivo
              </label>
            </div>

            {/* Submit Button */}
            <Button size="lg" className="w-full h-14">
              <span>Entrar</span>
              <LogIn size={20} />
            </Button>
          </form>

          {/* Card Footer */}
          <footer className="mt-10 pt-8 border-t border-outline-variant/30 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-tighter">
                  Segurança
                </span>
                <ShieldCheck size={20} className="text-tertiary-fixed-dim" />
              </div>
              <div className="w-px h-8 bg-outline-variant/30"></div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-on-surface-variant leading-relaxed">
                  Sistema de Gerenciamento de compras v4.2<br />
                  © 2026 Oficina do Hardware.
                </p>
              </div>
            </div>
          </footer>
        </div>

        {/* System Status Hint */}
        <div className="mt-8 flex items-center justify-center gap-4 text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shadow-[0_0_8px_rgba(112,216,200,0.6)] animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Sistemas Online</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20"></div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest">Suporte Técnico</span>
          </div>
        </div>
      </motion.main>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-8 z-0 pointer-events-none opacity-10 hidden md:block">
        <span className="font-headline text-[12rem] font-black text-white leading-none select-none">
          OH
        </span>
      </div>
    </div>
  );
};
