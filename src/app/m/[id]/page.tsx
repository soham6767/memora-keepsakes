"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import FloatingReactions from "@/components/FloatingReactions";
import { getMemoryById } from "@/lib/storage";
import { MemoryData, THEME_TEMPLATES_CONFIG, ThemeTemplate } from "@/lib/types";
import {
  Heart,
  Sparkles,
  Calendar,
  MapPin,
  Lock,
  QrCode,
  Copy,
  Check,
  Flame,
} from "lucide-react";

export default function RecipientMemoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const memoryId = resolvedParams.id;

  const [memory, setMemory] = useState<MemoryData | null>(null);
  const [isLockedNow, setIsLockedNow] = useState(false);
  const [countdownText, setCountdownText] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const fetched = getMemoryById(memoryId);
    if (fetched) {
      setMemory(fetched);

      if (fetched.isLocked && fetched.unlockDate) {
        const unlockMs = new Date(fetched.unlockDate).getTime();
        const nowMs = Date.now();

        if (unlockMs > nowMs) {
          setIsLockedNow(true);

          const interval = setInterval(() => {
            const diff = unlockMs - Date.now();
            if (diff <= 0) {
              setIsLockedNow(false);
              clearInterval(interval);
            } else {
              const hours = Math.floor(diff / (1000 * 60 * 60));
              const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
              const secs = Math.floor((diff % (1000 * 60)) / 1000);
              setCountdownText(`${hours}h ${mins}m ${secs}s`);
            }
          }, 1000);

          return () => clearInterval(interval);
        }
      }
    }
  }, [memoryId]);

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff8f5]">
        <div className="animate-spin text-[#e11d48]">
          <Heart className="w-8 h-8 fill-current" />
        </div>
      </div>
    );
  }

  const activeThemeKey: ThemeTemplate = memory.themeTemplate || "rose";
  const themeConfig = THEME_TEMPLATES_CONFIG[activeThemeKey];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div
      className="min-h-screen text-[#1e1b19] flex flex-col font-sans transition-colors duration-300"
      style={{ backgroundColor: themeConfig.bgColor }}
    >
      <Navbar />

      {/* TEAR-AWAY DATE LOCK OVERLAY */}
      {isLockedNow ? (
        <div className="flex-1 pt-32 pb-20 max-w-xl mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#ffddb8] text-[#815100] flex items-center justify-center mx-auto shadow-xl border-4 border-white animate-bounce">
            <Lock className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span
              className="px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm"
              style={{ backgroundColor: themeConfig.primaryColor }}
            >
              Scheduled Midnight Unlock ⏰
            </span>
            <h1 className="font-headline-lg text-4xl text-[#1e1b19]">
              This keepsake is locked for {memory.recipientName}
            </h1>
            <p className="text-sm text-[#5c3f40] max-w-md mx-auto">
              {memory.senderName} has scheduled this memory to unlock automatically on{" "}
              {new Date(memory.unlockDate!).toLocaleString()}.
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="p-6 rounded-3xl bg-white border border-[#e5bdbe]/40 shadow-xl space-y-2">
            <span className="text-xs uppercase font-bold text-[#815100] tracking-widest">
              Unlocks in
            </span>
            <div
              className="font-headline-lg text-4xl md:text-5xl font-bold"
              style={{ color: themeConfig.primaryColor }}
            >
              {countdownText || "00h 00m 00s"}
            </div>
          </div>
        </div>
      ) : (
        <main className="flex-1 pt-24 pb-28">
          {/* Ambient Glows */}
          <div className="relative w-full overflow-hidden">
            <div
              className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b ${themeConfig.accentGlow} blur-3xl pointer-events-none -z-10 rounded-full`}
            />

            {/* HERO COVER SECTION */}
            <section className="max-w-[1000px] mx-auto px-4 text-center space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-bold shadow-md"
                style={{ backgroundColor: themeConfig.primaryColor }}
              >
                <span>{themeConfig.emoji}</span>
                <span>Made especially for {memory.recipientName}</span>
              </div>

              <h1 className="font-headline-lg text-4xl md:text-6xl text-[#1e1b19] tracking-tight">
                {memory.title}
              </h1>

              <p
                className="text-lg md:text-xl italic max-w-2xl mx-auto font-serif"
                style={{ color: themeConfig.primaryColor }}
              >
                "{memory.headline}"
              </p>

              {/* Sender Badge */}
              <div className="text-xs text-[#78716c] flex items-center justify-center gap-2">
                <span>Created by <strong>{memory.senderName}</strong></span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />{" "}
                  {memory.createdAt.slice(0, 10)}
                </span>
              </div>

              {/* UNCONSTRAINED FLUID COVER PHOTO (ANY LENGTH/WIDTH) */}
              <div className="mt-8 relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-2 flex items-center justify-center">
                <img
                  src={memory.coverImage}
                  alt={memory.title}
                  className="w-full h-auto max-h-[850px] object-contain rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-4 rounded-xl text-white text-left flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#ffddb8] tracking-wider block">
                      Digital Keepsake
                    </span>
                    <h2 className="font-headline-md text-xl font-bold">
                      {memory.recipientName} & {memory.senderName}
                    </h2>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    {themeConfig.badge}
                  </span>
                </div>
              </div>

              {/* Voice Note Player Component */}
              {memory.audioVoiceNoteUrl && (
                <div className="pt-6 flex justify-center">
                  <VoiceNotePlayer
                    audioUrl={memory.audioVoiceNoteUrl}
                    duration={memory.voiceNoteDuration || "0:42"}
                    caption={memory.voiceNoteCaption}
                  />
                </div>
              )}
            </section>

            {/* ROMANTIC LETTER SECTION */}
            <section className="max-w-[800px] mx-auto px-4 py-16">
              <div
                className="rounded-3xl p-8 md:p-12 border border-[#e5bdbe]/40 shadow-xl space-y-6 text-left relative overflow-hidden"
                style={{ backgroundColor: themeConfig.cardBg }}
              >
                <div className="space-y-2">
                  <span
                    className="text-xs font-bold uppercase tracking-wider block"
                    style={{ color: themeConfig.primaryColor }}
                  >
                    A Letter For You
                  </span>
                  <h3 className="font-headline-md text-3xl text-[#1e1b19]">
                    Dearest {memory.recipientName},
                  </h3>
                </div>

                <p className="font-serif text-base md:text-lg text-[#1e1b19] leading-relaxed whitespace-pre-line italic">
                  {memory.letter}
                </p>

                <div className="pt-4 border-t border-[#e5bdbe]/30 flex items-center justify-between text-xs text-[#5c3f40] font-semibold">
                  <span>Forever yours,</span>
                  <span
                    className="font-headline-sm text-lg font-bold"
                    style={{ color: themeConfig.primaryColor }}
                  >
                    {memory.senderName} ❤️
                  </span>
                </div>
              </div>
            </section>

            {/* MOMENTS TIMELINE */}
            <section className="max-w-[1000px] mx-auto px-4 py-12 space-y-12">
              <div className="text-center space-y-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: themeConfig.primaryColor }}
                >
                  Our Timeline
                </span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-[#1e1b19]">
                  Moments We'll Keep Forever
                </h2>
              </div>

              <div className="space-y-12">
                {memory.moments.map((moment, idx) => (
                  <div
                    key={moment.id}
                    className={`bg-white rounded-3xl p-6 md:p-8 border border-[#e5bdbe]/40 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left ${
                      idx % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:col-span-6 space-y-3">
                      {moment.tag && (
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                          style={{ backgroundColor: themeConfig.primaryColor }}
                        >
                          {moment.tag}
                        </span>
                      )}
                      <h3 className="font-headline-md text-2xl text-[#1e1b19]">
                        {moment.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#5c3f40]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />{" "}
                          {moment.date}
                        </span>
                        {moment.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" style={{ color: themeConfig.primaryColor }} />{" "}
                            {moment.location}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#5c3f40] leading-relaxed">
                        {moment.description}
                      </p>
                    </div>

                    <div className="md:col-span-6 min-h-64 rounded-2xl overflow-hidden shadow-md border-2 border-[#faf2ee] flex items-center justify-center bg-[#faf2ee] p-1">
                      <img
                        src={moment.imageUrl}
                        alt={moment.title}
                        className="w-full h-auto max-h-[500px] object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SHARE & KEEPSAKE BUTTONS */}
            <section className="max-w-[800px] mx-auto px-4 pt-12 pb-16 text-center">
              <div
                className="rounded-3xl p-8 border border-[#e5bdbe]/40 shadow-md space-y-6"
                style={{ backgroundColor: themeConfig.cardBg }}
              >
                <h3 className="font-headline-md text-2xl text-[#1e1b19]">
                  Keep this link safe ❤️
                </h3>
                <p className="text-xs text-[#5c3f40]">
                  You can copy this link anytime or share it with your partner.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleCopyLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-full shadow-md hover:opacity-95 transition-opacity"
                    style={{ backgroundColor: themeConfig.primaryColor }}
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4" /> Link Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy Keepsake Link
                      </>
                    )}
                  </button>

                  <Link
                    href={`/share/${memory.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-[#1e1b19] border border-[#e5bdbe]/50 px-6 py-3 rounded-full shadow-sm hover:bg-white/80"
                  >
                    <QrCode className="w-4 h-4" style={{ color: themeConfig.primaryColor }} /> Generate Keepsake QR
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* FLOATING REACTION BAR */}
          <FloatingReactions initialReactions={memory.reactions} />
        </main>
      )}

      <Footer />
    </div>
  );
}
