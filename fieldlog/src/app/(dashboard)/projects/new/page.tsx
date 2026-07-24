"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center gap-4">
        <Link href="/projects" className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create New Project</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Set up a new research project</p>
        </div>
      </div>

      <GlassCard className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Project Name</label>
          <input
            type="text"
            placeholder="e.g., Urban Biodiversity Mapping 2026"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            rows={4}
            placeholder="Describe the goals and scope of this research project..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <input type="text" placeholder="e.g., Nairobi, Kenya" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Target Responses</label>
            <input type="number" placeholder="e.g., 500" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <button className="px-6 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors">Create Project</button>
          <Link href="/projects" className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</Link>
        </div>
      </GlassCard>
    </div>
  );
}