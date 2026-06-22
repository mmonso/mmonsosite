import React from 'react';
import { CONTENT } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-stone-800">{CONTENT.name}</span>
          <span className="text-stone-300">·</span>
          <span className="text-sm text-stone-400">{CONTENT.crp}</span>
        </div>
        <div className="flex gap-6 items-center text-sm text-stone-400">
          <span>Psicologia com Ética</span>
          <a href="/privacidade" className="hover:text-sage-600 transition-colors">Política de Privacidade</a>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
