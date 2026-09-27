"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, Mic } from "lucide-react";

interface VoiceNotePlayerProps {
  audioUrl?: string;
  duration?: string;
  caption?: string;
}

export default function VoiceNotePlayer({
  audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  duration = "0:42",
  caption = "Recorded under the Bandra rain shelter...",
}: VoiceNotePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-[#f4ece8]/90 backdrop-blur-md border border-[#e11d48]/15 rounded-3xl p-4 shadow-sm max-w-md w-full">
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-11 h-11 rounded-full bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white flex items-center justify-center shadow-md shadow-[#e11d48]/20 hover:scale-105 transition-transform"
          aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>

        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between text-xs text-[#5c3f40] font-semibold">
            <span className="flex items-center gap-1 text-[#8b5cf6]">
              <Mic className="w-3.5 h-3.5" /> Voice Note
            </span>
            <span>{duration}</span>
          </div>

          {/* Animated Waveform Bars */}
          <div className="flex items-center gap-1 h-6">
            {[40, 70, 35, 90, 60, 100, 45, 80, 50, 30, 85, 65, 40, 75, 55, 30].map(
              (heightPercent, idx) => (
                <span
                  key={idx}
                  className={`flex-1 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? "bg-[#e11d48] animate-pulse"
                      : "bg-[#906f70]/40"
                  }`}
                  style={{
                    height: isPlaying
                      ? `${Math.max(20, Math.sin(idx + Date.now()) * 40 + heightPercent)}%`
                      : `${heightPercent}%`,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>

      {caption && (
        <p className="mt-2 text-xs italic text-[#5c3f40] pl-1 flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5 text-[#e11d48] shrink-0" />
          "{caption}"
        </p>
      )}
    </div>
  );
}
