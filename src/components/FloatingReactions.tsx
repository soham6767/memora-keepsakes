"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Smile, Flame } from "lucide-react";

interface FloatingReactionsProps {
  initialReactions?: {
    heart: number;
    hug: number;
    tears: number;
    sparkles: number;
  };
}

export default function FloatingReactions({
  initialReactions = { heart: 48, hug: 24, tears: 12, sparkles: 35 },
}: FloatingReactionsProps) {
  const [counts, setCounts] = useState(initialReactions);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);

  const triggerReaction = (type: "heart" | "hug" | "tears" | "sparkles") => {
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setActiveReaction(type);

    // Confetti effect burst
    const colors =
      type === "heart"
        ? ["#e11d48", "#f43f5e", "#ffdada"]
        : type === "hug"
        ? ["#8b5cf6", "#a78bfa", "#e9ddff"]
        : type === "sparkles"
        ? ["#f59e0b", "#fbbf24", "#ffddb8"]
        : ["#e11d48", "#8b5cf6", "#f59e0b"];

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.85 },
      colors: colors,
      scalar: 1.2,
    });

    setTimeout(() => setActiveReaction(null), 1000);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#fffdf9]/90 backdrop-blur-xl border border-[#e11d48]/20 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3">
      <span className="text-xs font-bold text-[#815100] uppercase tracking-wider hidden sm:inline border-r border-[#e5bdbe]/40 pr-3">
        Send Love ✨
      </span>

      {/* Heart */}
      <button
        onClick={() => triggerReaction("heart")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
          activeReaction === "heart"
            ? "bg-[#e11d48] text-white scale-110"
            : "bg-[#ffdada] text-[#b80035] hover:bg-[#e11d48] hover:text-white"
        }`}
      >
        <Heart className="w-4 h-4 fill-current" />
        <span>{counts.heart}</span>
      </button>

      {/* Hug / Love */}
      <button
        onClick={() => triggerReaction("hug")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
          activeReaction === "hug"
            ? "bg-[#8b5cf6] text-white scale-110"
            : "bg-[#e9ddff] text-[#6b38d4] hover:bg-[#8b5cf6] hover:text-white"
        }`}
      >
        <Smile className="w-4 h-4" />
        <span>{counts.hug}</span>
      </button>

      {/* Tears of Joy */}
      <button
        onClick={() => triggerReaction("tears")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
          activeReaction === "tears"
            ? "bg-[#e11d48] text-white scale-110"
            : "bg-[#f4ece8] text-[#5c3f40] hover:bg-[#e11d48] hover:text-white"
        }`}
      >
        <Flame className="w-4 h-4" />
        <span>{counts.tears}</span>
      </button>

      {/* Sparkles */}
      <button
        onClick={() => triggerReaction("sparkles")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
          activeReaction === "sparkles"
            ? "bg-[#f59e0b] text-white scale-110"
            : "bg-[#ffddb8] text-[#815100] hover:bg-[#f59e0b] hover:text-white"
        }`}
      >
        <Sparkles className="w-4 h-4" />
        <span>{counts.sparkles}</span>
      </button>
    </div>
  );
}
