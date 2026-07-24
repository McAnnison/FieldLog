"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileSpreadsheet, FileText, FileImage, Download } from "lucide-react";

export default function ExportPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Export Data</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Download your collected data in various formats
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: "CSV", desc: "Comma-separated values, compatible with Excel", icon: FileSpreadsheet, color: "text-emerald-500" },
          { title: "Excel", desc: "Formatted .xlsx workbook with sheets", icon: FileSpreadsheet, color: "text-emerald-600" },
          { title: "PDF Report", desc: "Formatted report with charts and summaries", icon: FileText, color: "text-red-500" },
        ].map((format, idx) => (
          <GlassCard key={idx} hoverEffect className="space-y-4">
            <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 w-fit ${format.color}`}>
              <format.icon size={24} />
            </div>
            <div>
              <h3 className="font-semibold">{format.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{format.desc}</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors w-full justify-center">
              <Download size={16} /> Export
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}