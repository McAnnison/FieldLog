"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Plus, Search, Filter } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage your research projects</p>
        </div>
        <Link
          href="/projects/new"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-dark transition-colors"
        >
          <Plus size={16} /> New Project
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { name: "Urban Biodiversity Mapping", status: "Active", responses: 240, updated: "2h ago" },
          { name: "Rural Healthcare Access", status: "Active", responses: 112, updated: "1d ago" },
          { name: "Digital Literacy Survey '26", status: "In Review", responses: 890, updated: "3d ago" },
          { name: "Water Quality Assessment", status: "Draft", responses: 0, updated: "5d ago" },
        ].map((project, idx) => (
          <GlassCard key={idx} hoverEffect className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                project.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                project.status === "In Review" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="font-semibold">{project.name}</h3>
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{project.responses} responses</span>
              <span>Updated {project.updated}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}