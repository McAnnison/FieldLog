"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search, Filter, Download, Eye } from "lucide-react";

export default function ResponsesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Responses</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">View and manage collected field data</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors">
          <Download size={16} /> Export All
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input type="text" placeholder="Search responses..." className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm"><Filter size={16} /> Filter</button>
      </div>

      <GlassCard className="overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left px-6 py-3 font-medium text-slate-500">Respondent</th>
              <th className="text-left px-6 py-3 font-medium text-slate-500">Project</th>
              <th className="text-left px-6 py-3 font-medium text-slate-500">Date</th>
              <th className="text-left px-6 py-3 font-medium text-slate-500">Status</th>
              <th className="text-right px-6 py-3 font-medium text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { respondent: "RES-001", project: "Urban Biodiversity", date: "2026-07-22", status: "Complete" },
              { respondent: "RES-002", project: "Urban Biodiversity", date: "2026-07-22", status: "Complete" },
              { respondent: "RES-003", project: "Healthcare Access", date: "2026-07-21", status: "Partial" },
              { respondent: "RES-004", project: "Digital Literacy", date: "2026-07-20", status: "Complete" },
            ].map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="px-6 py-4 font-medium">{row.respondent}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.project}</td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.date}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    row.status === "Complete" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}>{row.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400"><Eye size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </div>
  );
}