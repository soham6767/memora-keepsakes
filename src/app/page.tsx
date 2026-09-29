"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
import { OCCASIONS_CONFIG, OccasionType } from "@/lib/types";
import {
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Gift,
  Lock,
  Share2,
  Volume2,
  ChevronDown,
  Clock,
  MapPin,
  Flame,
  Check,
} from "lucide-react";

export default function LandingPage() {
  const [activeOccasion, setActiveOccasion] = useState<OccasionType>("anniversary");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the recipient open their digital memory?",
      a: "You will get a unique, beautiful link (e.g. memora.love/viddhi-and-soham). You can send it via WhatsApp, hide it inside a card, or share a printable QR code keepsake.",
    },
    {
      q: "What is the ₹149 token fee for?",
      a: "It is a simple one-time payment for permanent cloud hosting of your photos, voice notes, and private link. No monthly subscriptions, ever.",
    },
    {
      q: "How does the Tear-Away Date Lock work?",
      a: "If you set an unlock date (e.g., midnight on their birthday), the recipient will see a beautiful countdown screen until the exact second it unlocks!",
    },
    {
      q: "Is my memory private?",
      a: "Yes! Memories are unlisted and accessible only by your custom link. You can also add an optional passkey password.",
    },
  ];

  const occasionsList = Object.keys(OCCASIONS_CONFIG) as OccasionType[];

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Background Ambient Glows */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#ffdada]/50 via-[#f4ece8]/60 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
          <div className="absolute top-96 -right-24 w-[420px] h-[420px] bg-[#e9ddff]/40 blur-3xl pointer-events-none -z-10 rounded-full" />
          <div className="absolute top-[1600px] -left-24 w-[500px] h-[500px] bg-[#ffddb8]/40 blur-3xl pointer-events-none -z-10 rounded-full" />

          {/* 1. HERO SECTION */}
          <section className="max-w-[1240px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-20 text-center relative">
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Rose Pill Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4ece8] shadow-sm backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] animate-pulse" />
                <span className="text-xs font-bold text-[#b80035] tracking-wide">
                  Create something they’ll remember forever ✨
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-headline-lg text-4xl sm:text-6xl text-[#1e1b19] tracking-tight leading-tight">
                Your memories deserve <br className="hidden sm:inline" />
                <span className="italic font-normal bg-gradient-to-r from-[#b80035] to-[#e11d48] bg-clip-text text-transparent">
                  more than a photo gallery.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-[#5c3f40] max-w-2xl mx-auto leading-relaxed font-normal">
                Choose from 4 beautifully crafted experiences — Anniversaries, Midnight Birthdays, Long-Distance Love, and Romantic Letters — made especially for someone you cherish.
              </p>

              {/* Quick Occasion Shortcut Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {occasionsList.map((occKey) => {
                  const occ = OCCASIONS_CONFIG[occKey];
                  return (
                    <Link
                      key={occKey}
                      href={`/create?occasion=${occKey}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e5bdbe]/50 text-xs font-semibold text-[#1e1b19] hover:border-[#e11d48] hover:text-[#e11d48] shadow-sm transition-all"
                    >
                      <span>{occ.emoji}</span>
                      <span>{occ.title.replace(" Keepsakes", "").replace(" Surprises", "")}</span>
                    </Link>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/create"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white px-8 py-3.5 rounded-full shadow-lg shadow-[#e11d48]/25 hover:-translate-y-0.5 transition-all"
                >
                  <span>Create your memory</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/m/viddhi-and-soham"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold bg-white text-[#1e1b19] border border-[#e5bdbe]/50 px-7 py-3.5 rounded-full shadow-sm hover:bg-[#faf2ee] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
                  <span>View Live Sample</span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#5c3f40]">
                <div className="flex -space-x-2 overflow-hidden items-center">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="User"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="User"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                    alt="User"
                  />
                  <div className="h-8 w-8 rounded-full bg-[#ffddb8] text-[#2a1700] font-bold text-[11px] flex items-center justify-center ring-2 ring-white">
                    1k+
                  </div>
                </div>
                <span>
                  Loved by <strong className="text-[#1e1b19]">1,000+ memory makers</strong> across India & worldwide.
                </span>
              </div>
            </div>

            {/* HERO VISUAL MOCKUP */}
            <div className="mt-14 relative max-w-4xl mx-auto">
              {/* Floating Chips */}
              <div className="hidden lg:flex items-center gap-2 absolute -top-6 -left-10 z-20 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform border border-[#e11d48]/15">
                <Heart className="w-5 h-5 text-[#e11d48] fill-current" />
                <div className="text-left">
                  <p className="text-xs font-bold text-[#1e1b19]">First Date ❤️</p>
                  <p className="text-[11px] text-[#5c3f40]">22 April 2024</p>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-3 absolute top-28 -right-12 z-20 bg-white/90 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform border border-[#8b5cf6]/15">
                <div className="w-8 h-8 rounded-full bg-[#e9ddff] text-[#6b38d4] flex items-center justify-center font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#1e1b19]">365 Days Together</p>
                  <p className="text-[11px] text-[#5c3f40]">Since the rooftop café talk</p>
                </div>
              </div>

              {/* Main Frame Mockup */}
              <div className="bg-[#faf2ee] rounded-3xl p-3 md:p-6 shadow-2xl border border-[#e5bdbe]/40 backdrop-blur-md">
                <div className="flex items-center justify-between px-3 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#e5bdbe]" />
                    <span className="w-3 h-3 rounded-full bg-[#e5bdbe]" />
                    <span className="w-3 h-3 rounded-full bg-[#e5bdbe]" />
                  </div>
                  <div className="bg-white px-4 py-1 rounded-full text-xs font-semibold text-[#5c3f40] flex items-center gap-1.5 shadow-sm border border-[#e5bdbe]/30">
                    <Lock className="w-3 h-3 text-[#e11d48]" />
                    memora.love/viddhi-and-soham
                  </div>
                  <div className="w-12" />
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden border border-[#e5bdbe]/20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
                    {/* Left Story Preview */}
                    <div className="md:col-span-7 space-y-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#ffdada] text-[#40000c] text-xs font-bold">
                        Anniversary Edition ❤️
                      </span>
                      <h3 className="font-headline-md text-3xl text-[#1e1b19]">
                        Viddhi & Soham
                      </h3>
                      <p className="text-base italic text-[#5c3f40] leading-relaxed">
                        “I still remember how you laughed when it started pouring in Bandra and we both dropped our umbrellas.”
                      </p>

                      <VoiceNotePlayer
                        audioUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                        duration="0:42"
                        caption="Recorded under the Bandra promenade rain shelter..."
                      />
                    </div>

                    {/* Right Photo Duo */}
                    <div className="md:col-span-5 relative flex justify-center">
                      <div className="relative w-56 h-64 bg-[#faf2ee] rounded-2xl p-2.5 shadow-md transform rotate-2">
                        <img
                          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop"
                          alt="Couple"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="absolute -bottom-4 -left-4 w-36 h-40 bg-white p-2 rounded-2xl shadow-xl transform -rotate-6 border border-[#e5bdbe]/30">
                        <img
                          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop"
                          alt="Holding hands"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. HOW IT WORKS */}
          <section id="how-it-works" className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-[#e5bdbe]/30">
            <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#e11d48] font-bold">
                Simple, Slow & Sentimental
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-[#1e1b19]">
                From memories to magic in 3 simple steps.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 01 */}
              <div className="bg-[#faf2ee] rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm border border-[#e5bdbe]/30 hover:shadow-md transition-shadow">
                <div className="space-y-4 text-left">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ffdada] text-[#b80035] font-headline-sm text-xl font-bold">
                    01
                  </span>
                  <h3 className="font-title-lg text-xl text-[#1e1b19]">Choose your occasion</h3>
                  <p className="text-sm text-[#5c3f40] leading-relaxed">
                    Pick from 4 dedicated aesthetics: Anniversary, Birthday Midnight Surprise, Long-Distance, or Romantic Letters.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#e11d48] font-semibold text-sm">
                  <Sparkles className="w-4 h-4" /> 4 Curated experiences
                </div>
              </div>

              {/* Step 02 */}
              <div className="bg-[#faf2ee] rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm border border-[#e5bdbe]/30 hover:shadow-md transition-shadow">
                <div className="space-y-4 text-left">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#e9ddff] text-[#6b38d4] font-headline-sm text-xl font-bold">
                    02
                  </span>
                  <h3 className="font-title-lg text-xl text-[#1e1b19]">Add your memories</h3>
                  <p className="text-sm text-[#5c3f40] leading-relaxed">
                    Upload gallery photos with unconstrained dimensions, record a voice note, pinpoint milestone dates, and write your letter.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#6b38d4] font-semibold text-sm">
                  <Heart className="w-4 h-4" /> Live instant preview
                </div>
              </div>

              {/* Step 03 */}
              <div className="bg-[#faf2ee] rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm border border-[#e5bdbe]/30 hover:shadow-md transition-shadow">
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ffddb8] text-[#815100] font-headline-sm text-xl font-bold">
                      03
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] text-xs font-bold">
                      ₹149 one-time
                    </span>
                  </div>
                  <h3 className="font-title-lg text-xl text-[#1e1b19]">Share the surprise</h3>
                  <p className="text-sm text-[#5c3f40] leading-relaxed">
                    Pay once via direct UPI, get your instant live link, send over WhatsApp, or print the keepsake QR card.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#815100] font-semibold text-sm">
                  <Share2 className="w-4 h-4" /> Private keepsake link
                </div>
              </div>
            </div>
          </section>

          {/* 3. 4 DEDICATED OCCASIONS SHOWCASE (SEPARATED INTERFACE) */}
          <section id="occasions" className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-[#e5bdbe]/30">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#e11d48] font-bold">
                Tailored Romantic Sanctuaries
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-[#1e1b19]">
                4 Distinct Keepsake Experiences
              </h2>
              <p className="text-sm sm:text-base text-[#5c3f40]">
                Each occasion features its own dedicated color palette, custom interactive widgets, and romantic atmosphere.
              </p>
            </div>

            {/* 4 LARGE SEPARATED CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {occasionsList.map((occKey) => {
                const occ = OCCASIONS_CONFIG[occKey];
                return (
                  <div
                    key={occKey}
                    className={`rounded-3xl p-8 bg-white border-2 ${occ.cardBorder} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 text-left relative overflow-hidden group`}
                  >
                    <div className="space-y-4">
                      {/* Badge & Emoji */}
                      <div className="flex items-center justify-between">
                        <span className="text-3xl">{occ.emoji}</span>
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-bold ${occ.badgeBg} ${occ.badgeText}`}
                        >
                          {occ.badge}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="font-headline-md text-2xl md:text-3xl text-[#1e1b19] group-hover:text-[#e11d48] transition-colors">
                          {occ.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#815100] uppercase tracking-wide mt-1">
                          {occ.tagline}
                        </p>
                      </div>

                      {/* Image Preview with Unconstrained Height */}
                      <div className="relative h-56 rounded-2xl overflow-hidden shadow-inner border border-[#e5bdbe]/30">
                        <img
                          src={occ.image}
                          alt={occ.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                          <p className="text-white text-xs italic font-serif">
                            {occ.quote}
                          </p>
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-sm text-[#5c3f40] leading-relaxed">
                        {occ.subtitle}
                      </p>

                      {/* Dedicated Features List */}
                      <ul className="space-y-2 pt-2 border-t border-[#faf2ee]">
                        {occ.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-[#1e1b19]">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: occ.primaryColor }}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Direct Action Link */}
                    <div className="pt-4 border-t border-[#faf2ee]">
                      <Link
                        href={`/create?occasion=${occ.id}`}
                        className="w-full py-3.5 px-6 rounded-full text-white font-bold text-sm shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                        style={{ backgroundColor: occ.primaryColor }}
                      >
                        <span>Start {occ.title.replace(" Keepsakes", "").replace(" Surprises", "")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* INTERACTIVE COMPARISON DEEP-DIVE SWITCHER */}
            <div className="bg-[#faf2ee] rounded-3xl p-6 md:p-10 border border-[#e5bdbe]/40 text-left space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#e11d48] font-bold">
                    Interactive Comparison
                  </span>
                  <h3 className="font-headline-md text-2xl text-[#1e1b19]">
                    Preview & Choose Your Vibe
                  </h3>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                  {occasionsList.map((key) => {
                    const occ = OCCASIONS_CONFIG[key];
                    const isSelected = activeOccasion === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveOccasion(key)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-[#e11d48] text-white shadow-md shadow-[#e11d48]/20"
                            : "bg-white text-[#5c3f40] hover:text-[#1e1b19] border border-[#e5bdbe]/40"
                        }`}
                      >
                        <span>{occ.emoji}</span>
                        <span>{occ.title.replace(" Keepsakes", "").replace(" Surprises", "")}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Occasion Feature Deep Dive */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5bdbe]/40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${OCCASIONS_CONFIG[activeOccasion].badgeBg} ${OCCASIONS_CONFIG[activeOccasion].badgeText}`}
                    >
                      {OCCASIONS_CONFIG[activeOccasion].badge}
                    </span>
                    <span className="text-xs text-[#815100] font-semibold">
                      ₹149 one-time lifetime link
                    </span>
                  </div>

                  <h4 className="font-headline-lg text-2xl md:text-3xl text-[#1e1b19]">
                    {OCCASIONS_CONFIG[activeOccasion].title}
                  </h4>
                  <p className="text-sm text-[#5c3f40] leading-relaxed">
                    {OCCASIONS_CONFIG[activeOccasion].subtitle}
                  </p>

                  <div className="p-4 rounded-xl bg-[#faf2ee] border border-[#e11d48]/15 italic text-xs text-[#b80035]">
                    {OCCASIONS_CONFIG[activeOccasion].quote}
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-bold text-[#1e1b19] uppercase tracking-wide">Included in this template:</p>
                    {OCCASIONS_CONFIG[activeOccasion].features.map((feat, fIdx) => (
                      <p key={fIdx} className="text-xs text-[#5c3f40] flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#e11d48]" /> {feat}
                      </p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/create?occasion=${OCCASIONS_CONFIG[activeOccasion].id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-white px-7 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
                      style={{ backgroundColor: OCCASIONS_CONFIG[activeOccasion].primaryColor }}
                    >
                      <span>Build This Keepsake Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-[#e5bdbe]/40">
                  <img
                    src={OCCASIONS_CONFIG[activeOccasion].image}
                    alt={OCCASIONS_CONFIG[activeOccasion].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 4. PRICING SECTION */}
          <section id="pricing" className="max-w-[1240px] mx-auto px-4 md:px-8 py-20 border-t border-[#e5bdbe]/30 text-center">
            <div className="max-w-xl mx-auto space-y-3 mb-12">
              <span className="text-xs uppercase tracking-widest text-[#815100] font-bold">
                Transparent & Honest
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-[#1e1b19]">
                One simple price for all 4 occasions.
              </h2>
            </div>

            <div className="max-w-md mx-auto bg-gradient-to-b from-white to-[#faf2ee] rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-[#e11d48]/30 relative text-left">
              <div className="absolute -top-4 right-6 bg-[#ffddb8] text-[#2a1700] text-xs font-bold px-3 py-1 rounded-full border border-[#f59e0b]/40 shadow-sm">
                Keepsake Edition
              </div>

              <div className="space-y-4">
                <h3 className="font-headline-md text-2xl text-[#1e1b19]">Permanent Memory Link</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-5xl font-bold text-[#b80035]">₹149</span>
                  <span className="text-sm font-semibold text-[#5c3f40]">one-time fee</span>
                </div>
                <p className="text-xs text-[#78716c]">
                  Pay once via UPI, keep forever. No monthly recurring bills.
                </p>
              </div>

              <hr className="my-6 border-[#e5bdbe]/40" />

              <ul className="space-y-3 text-sm text-[#1e1b19] font-medium">
                {[
                  "Choice of all 4 occasion templates",
                  "Unlimited gallery photos (any dimensions/ratio)",
                  "Voice note audio player with waveform",
                  "Midnight tear-away date lock countdown",
                  "Instant private shareable link",
                  "Floating heart & emotion micro-reactions",
                  "Printable keepsake QR code card",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/create"
                  className="w-full inline-flex items-center justify-center gap-2 text-base font-semibold bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white py-3.5 rounded-full shadow-lg shadow-[#e11d48]/25 hover:opacity-95 transition-opacity"
                >
                  <span>Start Building Now →</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 5. FAQ SECTION */}
          <section className="max-w-[800px] mx-auto px-4 md:px-8 py-16 text-center">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#1e1b19] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-left">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#e5bdbe]/40 shadow-sm cursor-pointer transition-all"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4 font-semibold text-[#1e1b19] text-base">
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#e11d48] transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openFaq === idx && (
                    <p className="mt-3 text-sm text-[#5c3f40] leading-relaxed pt-2 border-t border-[#faf2ee]">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="max-w-[1240px] mx-auto px-4 md:px-8 py-16">
            <div className="bg-gradient-to-r from-[#b80035] to-[#e11d48] rounded-3xl p-10 md:p-16 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
              <div className="max-w-2xl mx-auto space-y-4">
                <h2 className="font-headline-lg text-3xl md:text-5xl text-white">
                  Ready to make them smile?
                </h2>
                <p className="text-base md:text-lg text-white/90">
                  Pick your occasion, add your photos and heartfelt letter, and unlock their surprise in minutes.
                </p>
                <Link
                  href="/create"
                  className="inline-flex items-center gap-2 text-base font-bold bg-white text-[#b80035] px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  <span>Create Your Memory Now ✨</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
