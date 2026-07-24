"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { User, Mail, Building, Globe } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your account details</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-1 flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-3xl">
            JD
          </div>
          <div>
            <h2 className="font-semibold text-lg">Dr. Jane Doe</h2>
            <p className="text-sm text-slate-500">Principal Researcher</p>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2 space-y-6">
          <h2 className="font-semibold text-lg">Personal Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "First Name", value: "Jane", icon: User },
              { label: "Last Name", value: "Doe", icon: User },
              { label: "Email", value: "jane.doe@research.org", icon: Mail },
              { label: "Organization", value: "Research Institute", icon: Building },
              { label: "Location", value: "Nairobi, Kenya", icon: Globe },
            ].map((field, idx) => (
              <div key={idx} className="space-y-1">
                <label className="text-xs font-medium text-slate-500">{field.label}</label>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-sm">
                  <field.icon size={14} className="text-slate-400" />
                  <span>{field.value}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors">
            Update Profile
          </button>
        </GlassCard>
      </div>
    </div>
  );
}