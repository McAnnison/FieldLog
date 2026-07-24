"use client";

import React from "react";
import { GripVertical, Trash2, Copy } from "lucide-react";

export type QuestionType = "text" | "voice" | "multiple_choice" | "rating" | "photo";

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
}

interface QuestionCardProps {
  question: Question;
  index: number;
  onUpdate: (id: string, updates: Partial<Question>) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  onUpdate,
  onDelete,
  onDuplicate,
}) => {
  return (
    <div className="glass p-5 space-y-4">
      <div className="flex items-start gap-3">
        <button className="mt-1 text-slate-400 hover:text-slate-600 cursor-grab">
          <GripVertical size={18} />
        </button>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
              Q{index + 1}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 capitalize">
              {question.type.replace("_", " ")}
            </span>
            <label className="flex items-center gap-1.5 ml-auto text-xs text-slate-500">
              <input
                type="checkbox"
                checked={question.required}
                onChange={(e) => onUpdate(question.id, { required: e.target.checked })}
                className="rounded border-slate-300"
              />
              Required
            </label>
          </div>
          <input
            value={question.title}
            onChange={(e) => onUpdate(question.id, { title: e.target.value })}
            className="w-full text-base font-medium bg-transparent border-b border-transparent focus:border-primary/30 focus:outline-none pb-1"
            placeholder="Enter your question..."
          />
          {question.type === "multiple_choice" && question.options && (
            <div className="space-y-2 pt-2">
              {question.options.map((opt, oi) => (
                <div key={oi} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-300 flex-shrink-0" />
                  <input
                    value={opt}
                    readOnly
                    className="text-sm bg-slate-50 dark:bg-slate-800/50 rounded-lg px-3 py-1.5 flex-1"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => onDuplicate(question.id)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
            <Copy size={14} />
          </button>
          <button onClick={() => onDelete(question.id)} className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-400">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};