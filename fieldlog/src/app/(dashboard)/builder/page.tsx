"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Plus, GripVertical, Trash2, Eye, Save } from "lucide-react";

type QuestionType = "text" | "voice" | "multiple_choice" | "rating" | "photo";

interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
}

export default function BuilderPage() {
  const [questions, setQuestions] = useState<Question[]>([
    { id: "1", type: "text", title: "Describe the ecological changes observed", required: true },
    { id: "2", type: "voice", title: "Record your field observations", required: true },
    { id: "3", type: "multiple_choice", title: "Select the habitat type", required: true, options: ["Forest", "Wetland", "Grassland", "Urban"] },
  ]);

  const addQuestion = (type: QuestionType) => {
    const newQ: Question = {
      id: Date.now().toString(),
      type,
      title: "New question",
      required: false,
    };
    setQuestions([...questions, newQ]);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Questionnaire Builder</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Drag and drop to build your field data collection form</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800">
            <Eye size={16} /> Preview
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark">
            <Save size={16} /> Save Form
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {questions.map((q, idx) => (
            <GlassCard key={q.id} className="flex items-start gap-4">
              <button className="mt-1 text-slate-400 hover:text-slate-600 cursor-grab">
                <GripVertical size={18} />
              </button>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                    Q{idx + 1}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {q.type.replace("_", " ")}
                  </span>
                </div>
                <input
                  value={q.title}
                  onChange={(e) => {
                    const updated = [...questions];
                    updated[idx].title = e.target.value;
                    setQuestions(updated);
                  }}
                  className="w-full text-lg font-medium bg-transparent border-b border-transparent focus:border-primary/30 focus:outline-none pb-1"
                />
                {q.type === "multiple_choice" && q.options && (
                  <div className="space-y-2 pt-2">
                    {q.options.map((opt, oi) => (
                      <div key={oi} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                        <input value={opt} readOnly className="text-sm bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-1.5 flex-1" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="text-red-400 hover:text-red-500 p-1">
                <Trash2 size={16} />
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Add Question</p>
          {(["text", "voice", "multiple_choice", "rating", "photo"] as QuestionType[]).map((type) => (
            <button
              key={type}
              onClick={() => addQuestion(type)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl glass text-sm font-medium hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors"
            >
              <Plus size={16} className="text-primary" />
              {type === "multiple_choice" ? "Multiple Choice" : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}