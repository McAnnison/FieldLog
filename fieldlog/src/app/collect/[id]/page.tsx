"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mic, Square, Play, ChevronLeft, ChevronRight, Check } from "lucide-react";

export default function FieldDataCollectionScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [textResponse, setTextResponse] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Top Header / Progress */}
      <div className="w-full max-w-2xl mb-8 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Question 3 of 10</span>
        <div className="w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-secondary h-full w-[30%]" />
        </div>
      </div>

      {/* Core Question Glass Container */}
      <GlassCard className="w-full max-w-2xl bg-slate-800/50 border-white/10 space-y-8 p-8">
        <div className="space-y-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium">Voice / Text Response</span>
          <h2 className="text-xl sm:text-2xl font-medium leading-relaxed">
            "Describe the primary ecological changes observed in this sector over the past 12 months."
          </h2>
        </div>

        {/* Audio Recording Interface */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex flex-col items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsRecording(!isRecording);
              if (isRecording) setRecorded(true);
            }}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? "bg-red-500 animate-pulse text-white shadow-lg shadow-red-500/30" 
                : "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30"
            }`}
          >
            {isRecording ? <Square size={28} /> : <Mic size={32} />}
          </button>

          <span className="text-xs text-slate-400">
            {isRecording ? "Recording in progress... Tap to stop" : recorded ? "Voice capture stored" : "Tap to record response"}
          </span>

          {recorded && !isRecording && (
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors">
              <Play size={12} /> Play Back Capture
            </button>
          )}
        </div>

        {/* Text Area Fallback */}
        <div className="space-y-2">
          <label className="text-xs text-slate-400">Or type manual notes:</label>
          <textarea
            value={textResponse}
            onChange={(e) => setTextResponse(e.target.value)}
            rows={3}
            placeholder="Type field observations here..."
            className="w-full bg-slate-900/40 border border-slate-700/50 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Dynamic Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 text-sm">
            <ChevronLeft size={16} /> Previous
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary-hover">
            Next Question <ChevronRight size={16} />
          </button>
        </div>
      </GlassCard>
    </div>
  );
}