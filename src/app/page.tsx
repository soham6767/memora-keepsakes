"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoiceNotePlayer from "@/components/VoiceNotePlayer";
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
} from "lucide-react";

export default function LandingPage() {
  const [activeOccasion, setActiveOccasion] = useState<"anniversary" | "birthday" | "distance" | "love">("anniversary");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const occasionsData = {
    anniversary: {
      title: "Anniversary Keepsakes",
      subtitle: "Relive every month, rain walk, café date, and chapter together.",
      badge: "Most Popular ❤️",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
      quote: "“1 year with you felt like 100 sweet afternoons.”",
    },
    birthday: {
      title: "Midnight Birthday Surprises",
      subtitle: "Set a tear-away date lock that unlocks automatically at 12:00 AM.",
      badge: "Midnight Lock ⏰",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
      quote: "“Happy Birthday to my favorite human in the world!”",
    },
    distance: {
      title: "Long-Distance Love Letters",
      subtitle: "Bridge the miles with voice notes, shared countdowns, and photo maps.",
      badge: "Miles Apart ✈️",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
      quote: "“Distance means so little when someone means so much.”",
    },
    love: {
      title: "Quiet Romantic Confessions",
      subtitle: "Write the unspoken words you have always wanted them to keep.",
      badge: "Handwritten Letters ✉️",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      quote: "“Just wanted you to know how deeply you are loved.”",
    },
  };

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
                Create a beautiful private digital experience filled with your photos, words, voice notes, and moments — made especially for someone you love.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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
                  Loved by <strong className="text-[#1e1b19]">1,000+ memory makers</strong> for anniversaries & everyday love.
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
                    Pick a warm aesthetic template tailored for anniversaries, birthdays, long distance, or quiet love notes.
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#e11d48] font-semibold text-sm">
                  <Sparkles className="w-4 h-4" /> Curated templates
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
                    Upload special photos, record a voice note, pinpoint milestone dates, and write the unspoken letter.
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
                    Get your private shareable link. Send it over chat, print a QR code keepsake card, or schedule a midnight unlock!
                  </p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-[#815100] font-semibold text-sm">
                  <Share2 className="w-4 h-4" /> Private keepsake link
                </div>
              </div>
            </div>
          </section>

          {/* 3. OCCASIONS SHOWCASE */}
          <section id="occasions" className="max-w-[1240px] mx-auto px-4 md:px-8 py-16">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#e11d48] font-bold">
                Every Milestone Counts
              </span>
              <h2 className="font-headline-lg text-3xl md:text-5xl text-[#1e1b19]">
                Made for every special moment.
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {(
                [
                  { key: "anniversary", label: "Anniversary" },
                  { key: "birthday", label: "Birthday Midnight Surprise" },
                  { key: "distance", label: "Long Distance" },
                  { key: "love", label: "Romantic Letter" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveOccasion(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeOccasion === tab.key
                      ? "bg-[#e11d48] text-white shadow-md shadow-[#e11d48]/20"
                      : "bg-white text-[#5c3f40] border border-[#e5bdbe]/40 hover:bg-[#faf2ee]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Occasion Feature Card */}
            <div className="bg-[#f4ece8] rounded-3xl p-8 md:p-12 border border-[#e5bdbe]/40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left shadow-lg">
              <div className="space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] text-xs font-bold">
                  {occasionsData[activeOccasion].badge}
                </span>
                <h3 className="font-headline-lg text-3xl md:text-4xl text-[#1e1b19]">
                  {occasionsData[activeOccasion].title}
                </h3>
                <p className="text-base text-[#5c3f40] leading-relaxed">
                  {occasionsData[activeOccasion].subtitle}
                </p>
                <div className="p-4 rounded-2xl bg-white/80 border border-[#e11d48]/15 italic text-sm text-[#b80035]">
                  {occasionsData[activeOccasion].quote}
                </div>
                <Link
                  href="/create"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-[#e11d48] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#b80035] transition-colors"
                >
                  <span>Build this keepsake</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={occasionsData[activeOccasion].image}
                  alt={occasionsData[activeOccasion].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
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
                One simple price. Forever memories.
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
                  Pay once, keep forever. No recurring monthly subscriptions.
                </p>
              </div>

              <hr className="my-6 border-[#e5bdbe]/40" />

              <ul className="space-y-3 text-sm text-[#1e1b19] font-medium">
                {[
                  "Unlimited photo uploads & captions",
                  "Voice note audio player with visualizer",
                  "Tear-away date lock (midnight unlock)",
                  "Custom shareable link (memora.love/name)",
                  "Floating heart & hug micro-reactions",
                  "Printable keepsake QR Code generator",
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
                  It takes less than 5 minutes to build a keepsake they will treasure forever.
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
