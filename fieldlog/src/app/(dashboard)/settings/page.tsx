"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Bell, Shield, Palette, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage application preferences</p>
      </div>

      <div className="space-y-6">
        {[
          { title: "Notifications", desc: "Manage email and in-app notification preferences", icon: Bell },
          { title: "Privacy & Security", desc: "Control your data sharing and security settings", icon: Shield },
          { title: "Appearance", desc: "Customize theme, colors, and display options", icon: Palette },
          { title: "Regional", desc: "Language, timezone, and date format preferences", icon: Globe },
        ].map((section, idx) => (
          <GlassCard key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-primary">
                <section.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold">{section.title}</h3>
                <p className="text-sm text-slate-500">{section.desc}</p>
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Configure
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}