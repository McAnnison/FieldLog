"use client";

import React from "react";
import { Search, Bell, Menu, Sun, Moon } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  darkMode,
  onDarkModeToggle,
}) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-b border-white/20 dark:border-white/10 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-slate-600" onClick={onMenuClick}>
          <Menu size={22} />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-1.5 text-sm rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-primary/40 w-64 transition-all"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onDarkModeToggle}
          className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-medium text-xs ml-2">
          JD
        </div>
      </div>
    </header>
  );
};