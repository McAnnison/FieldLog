"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, FolderKanban, FileEdit, Database,
  BarChart3, Download, User, Settings, FileText,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Builder", href: "/builder", icon: FileEdit },
  { name: "Responses", href: "/responses", icon: Database },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Export", href: "/export", icon: Download },
];

const bottomItems = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 bottom-0 left-0 z-50 w-64 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border-r border-white/20 dark:border-white/10 p-4 hidden lg:flex flex-col">
      <div className="flex items-center px-3 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
            F
          </div>
          <span className="font-semibold text-xl tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FieldLog
          </span>
        </Link>
      </div>

      <nav className="mt-8 flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 dark:text-slate-300 hover:bg-primary/5 hover:text-primary"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 pt-4 border-t border-slate-200/50 dark:border-slate-800">
        {bottomItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary text-sm font-medium"
          >
            <item.icon size={18} /> {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};