"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FolderKanban, 
  FileEdit, 
  Database, 
  BarChart3, 
  Download, 
  User, 
  Settings, 
  Bell, 
  Search, 
  Menu, 
  X,
  Sun,
  Moon
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Builder", href: "/builder", icon: FileEdit },
  { name: "Responses", href: "/responses", icon: Database },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Export", href: "/export", icon: Download },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-slate-950 text-slate-100" : "bg-gradient-to-br from-slate-50 via-indigo-50/20 to-cyan-50/30 text-slate-800"}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Collapsible Left Sidebar */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 
        bg-white/70 dark:bg-slate-900/60 backdrop-blur-glass 
        border-r border-white/20 dark:border-white/10 
        p-4 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex items-center justify-between px-3 py-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FieldLog
            </span>
          </Link>
          <button className="lg:hidden text-slate-500" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="mt-8 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4 space-y-1 pt-4 border-t border-slate-200/50 dark:border-slate-800">
          <Link href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary">
            <User size={18} /> Profile
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary">
            <Settings size={18} /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-30 h-16 bg-white/40 dark:bg-slate-900/40 backdrop-blur-glass border-b border-white/20 dark:border-white/10 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-600" onClick={() => setSidebarOpen(true)}>
              <Menu size={22} />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search projects, forms, data..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-full bg-white/50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-primary/40 w-64 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent" />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-primary/20 overflow-hidden ml-2">
              <div className="w-full h-full bg-indigo-500 text-white flex items-center justify-center font-medium text-xs">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Page Container */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}