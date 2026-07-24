"use client";

import React, { useState } from "react";
import { Mic, Square, Play } from "lucide-react";

interface AudioRecorderProps {
  onRecordingComplete?: (blob: Blob) => void;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        onRecordingComplete?.(blob);
        setRecorded(true);
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch {
      console.error("Microphone access denied");
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
          isRecording
            ? "bg-red-500 text-white animate-pulse"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        {isRecording ? <Square size={20} /> : <Mic size={24} />}
      </button>
      <span className="text-xs text-slate-500">
        {isRecording ? "Recording..." : recorded ? "Voice capture saved" : "Tap to record"}
      </span>
    </div>
  );
};