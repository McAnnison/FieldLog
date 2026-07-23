import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FolderKanban, Users, CheckCircle2, Activity, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, Dr. Alex</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Here is an overview of your active research projects.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium text-sm shadow-md transition-all">
          <Plus size={16} /> Create Project
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: "Total Projects", value: "12", icon: FolderKanban, color: "text-primary" },
          { title: "Total Responses", value: "1,428", icon: Users, color: "text-secondary" },
          { title: "Completed Interviews", value: "312", icon: CheckCircle2, color: "text-accent" },
          { title: "Active Projects", value: "5", icon: Activity, color: "text-indigo-400" },
        ].map((stat, idx) => (
          <GlassCard key={idx} className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 ${stat.color}`}>
              <stat.icon size={22} />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Recent Projects & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Recent Projects</h2>
            <button className="text-sm text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { name: "Urban Biodiversity Mapping", status: "Active", responses: 240, progress: 75 },
              { name: "Rural Healthcare Access", status: "Active", responses: 112, progress: 40 },
              { name: "Digital Literacy Survey '26", status: "In Review", responses: 890, progress: 100 },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/40 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-sm">{p.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.responses} responses collected</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">{p.status}</span>
                  <p className="text-xs text-slate-400 mt-1">{p.progress}% completed</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Activity Timeline */}
        <GlassCard className="space-y-4">
          <h2 className="font-semibold text-lg">Activity Timeline</h2>
          <div className="relative pl-4 border-l border-slate-200 dark:border-slate-800 space-y-6">
            {[
              { title: "50 new responses added", project: "Urban Biodiversity", time: "10m ago" },
              { title: "Voice log transcribed", project: "Healthcare Access", time: "1h ago" },
              { title: "Project published", project: "Digital Literacy", time: "1d ago" },
            ].map((act, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900" />
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{act.title}</p>
                <p className="text-xs text-slate-500">{act.project} • {act.time}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}