"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { BarChart3, TrendingUp, PieChart, Download } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Visualize and analyze your response data
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { title: "Total Responses", value: "1,428", change: "+12%", icon: BarChart3 },
          { title: "Completion Rate", value: "87%", change: "+5%", icon: TrendingUp },
          { title: "Avg. Time per Form", value: "4m 32s", change: "-8%", icon: PieChart },
          { title: "Export Requests", value: "24", change: "+3%", icon: Download },
        ].map((stat, idx) => (
          <GlassCard key={idx} className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <span className="text-xs text-emerald-500 font-medium">{stat.change} this month</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary">
              <stat.icon size={22} />
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="space-y-4">
          <h2 className="font-semibold text-lg">Response Trends</h2>
          <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <p className="text-sm text-slate-400">Chart placeholder - Response trends over time</p>
          </div>
        </GlassCard>
        <GlassCard className="space-y-4">
          <h2 className="font-semibold text-lg">Question Breakdown</h2>
          <div className="h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <p className="text-sm text-slate-400">Chart placeholder - Per-question analytics</p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}