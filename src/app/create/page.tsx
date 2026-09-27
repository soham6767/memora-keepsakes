"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpiPaymentModal from "@/components/UpiPaymentModal";
import { saveMemory } from "@/lib/storage";
import { MemoryData, MemoryMoment, ThemeTemplate, THEME_TEMPLATES_CONFIG } from "@/lib/types";
import {
  Heart,
  Sparkles,
  ArrowLeft,
  Upload,
  Plus,
  Trash2,
  Lock,
  Mic,
  Image as ImageIcon,
  CheckCircle2,
  ShieldCheck,
  Edit3,
} from "lucide-react";

export default function CreateWizardPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Form State
  const [senderName, setSenderName] = useState("Soham");
  const [recipientName, setRecipientName] = useState("Viddhi");
  const [occasion, setOccasion] = useState<"anniversary" | "birthday" | "love_letter" | "milestone">("anniversary");
  const [themeTemplate, setThemeTemplate] = useState<ThemeTemplate>("rose");
  const [title, setTitle] = useState("Viddhi & Soham — 1 Year Together");
  const [headline, setHeadline] = useState("365 Days of Laughing, Rain Walks & Endless Chai");
  const [merchantUpiId, setMerchantUpiId] = useState("memora@upi");

  const [letter, setLetter] = useState(
    "I still remember how you laughed when it started pouring in Bandra and we both dropped our umbrellas. From late-night coffee talks to exploring hidden street cafes, every single day with you feels like my favorite chapter."
  );

  // Cover Image (Unconstrained dimensions, local gallery upload supported)
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop"
  );
  const [audioVoiceNoteUrl, setAudioVoiceNoteUrl] = useState(
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  );
  const [voiceNoteCaption, setVoiceNoteCaption] = useState(
    "Voice note recorded under the Bandra promenade rain shelter..."
  );

  const [isLocked, setIsLocked] = useState(false);
  const [unlockDate, setUnlockDate] = useState("2026-10-01T00:00");

  const [moments, setMoments] = useState<MemoryMoment[]>([
    {
      id: "m1",
      title: "The First Rainy Chai in Bandra",
      date: "22 April 2024",
      location: "Third Wave Roasters, Mumbai",
      description: "We met for a 30-minute coffee that turned into a 4-hour conversation about books and playlists.",
      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      tag: "First Date ❤️",
    },
    {
      id: "m2",
      title: "Weekend Getaway to Alibaug",
      date: "14 August 2024",
      location: "Varsoli Beach, Alibaug",
      description: "Watching the sunset while sitting on sandy towels, eating hot vada pavs, and collecting sea shells.",
      imageUrl: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
      tag: "Beach Escape 🌊",
    },
  ]);

  // Gallery File Picker Handler (Cover Photo - any dimensions supported)
  const handleCoverPhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCoverImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Gallery File Picker Handler (Moment Photo)
  const handleMomentPhotoUpload = (e: ChangeEvent<HTMLInputElement>, momentIndex: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const updated = [...moments];
          updated[momentIndex].imageUrl = event.target.result as string;
          setMoments(updated);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addMoment = () => {
    const newM: MemoryMoment = {
      id: `m_${Date.now()}`,
      title: "New Special Moment",
      date: "Today",
      location: "Our Favorite Spot",
      description: "Add your memory description here...",
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
      tag: "Memories ✨",
    };
    setMoments([...moments, newM]);
  };

  const removeMoment = (id: string) => {
    setMoments(moments.filter((m) => m.id !== id));
  };

  const triggerUpiPayment = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentSuccessAndPublish = () => {
    const slug = `${recipientName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-and-${senderName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`;
    const uniqueId = slug || `memory-${Date.now()}`;

    const newMemory: MemoryData = {
      id: uniqueId,
      title: title || `${recipientName} & ${senderName}`,
      senderName,
      recipientName,
      occasion,
      themeTemplate,
      themeColor: THEME_TEMPLATES_CONFIG[themeTemplate].primaryColor,
      headline,
      letter,
      coverImage,
      audioVoiceNoteUrl,
      voiceNoteDuration: "0:42",
      voiceNoteCaption,
      isLocked,
      unlockDate: isLocked ? unlockDate : undefined,
      moments,
      reactions: { heart: 12, hug: 6, tears: 3, sparkles: 15 },
      createdAt: new Date().toISOString(),
    };

    saveMemory(newMemory);
    router.push(`/m/${uniqueId}`);
  };

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 max-w-4xl mx-auto px-4 w-full">
        {/* Progress Bar */}
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdada] text-[#b80035] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Step {step} of 4 — Create Keepsake
          </div>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-[#1e1b19]">
            {step === 1 && "Choose Theme Template & Cover Photo"}
            {step === 2 && "Sender, Recipient & Letter"}
            {step === 3 && "Gallery Photo Moments & Voice Note"}
            {step === 4 && "Review & Direct UPI Payment"}
          </h1>

          <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i <= step ? "bg-[#e11d48]" : "bg-[#e5bdbe]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: CUTE THEMES & UNCONSTRAINED COVER PHOTO */}
        {step === 1 && (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#e5bdbe]/40 space-y-8 text-left">
            {/* 4 CUTE THEMES SELECTOR */}
            <div>
              <label className="block text-sm font-bold text-[#1e1b19] mb-3">
                Select Aesthetic Theme Template (4 Cute Styles)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(
                  Object.keys(THEME_TEMPLATES_CONFIG) as ThemeTemplate[]
                ).map((key) => {
                  const tmpl = THEME_TEMPLATES_CONFIG[key];
                  const isSelected = themeTemplate === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setThemeTemplate(key)}
                      className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between space-y-3 ${
                        isSelected
                          ? "border-[#e11d48] ring-2 ring-[#e11d48]/30 shadow-md bg-gradient-to-br " +
                            tmpl.accentGlow
                          : "border-[#e7e5e4] bg-[#faf2ee] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{tmpl.emoji}</span>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white shadow-sm"
                          style={{ backgroundColor: tmpl.primaryColor }}
                        >
                          {tmpl.badge}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-lg font-bold text-[#1e1b19]">
                          {tmpl.name}
                        </h4>
                        <p className="text-xs text-[#5c3f40] mt-1">{tmpl.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* OCCASION */}
            <div>
              <label className="block text-sm font-bold text-[#1e1b19] mb-3">
                Select Occasion
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: "anniversary", label: "Anniversary", emoji: "❤️" },
                  { id: "birthday", label: "Birthday Surprise", emoji: "🎂" },
                  { id: "distance", label: "Long Distance", emoji: "✈️" },
                  { id: "love_letter", label: "Romantic Letter", emoji: "✉️" },
                ].map((occ) => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setOccasion(occ.id as any)}
                    className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center gap-2 ${
                      occasion === occ.id
                        ? "border-[#e11d48] bg-[#ffdada]/30 text-[#b80035] font-bold shadow-sm"
                        : "border-[#e7e5e4] text-[#5c3f40] hover:bg-[#faf2ee]"
                    }`}
                  >
                    <span className="text-2xl">{occ.emoji}</span>
                    <span className="text-xs">{occ.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1e1b19] mb-1">
                Keepsake Page Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Viddhi & Soham — 1 Year Together"
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48]"
              />
            </div>

            {/* UNCONSTRAINED COVER PHOTO GALLERY PICKER */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-[#1e1b19]">
                Select Cover Photo (Any dimensions, width & height, no crop limit)
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#ffdada] text-[#b80035] font-bold text-xs hover:bg-[#e11d48] hover:text-white transition-colors shadow-sm">
                  <Upload className="w-4 h-4" />
                  <span>Choose Photo from Device / Gallery</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverPhotoUpload}
                    className="hidden"
                  />
                </label>
                <span className="text-xs text-[#78716c]">or paste image URL below</span>
              </div>

              <input
                type="text"
                value={coverImage.startsWith("data:") ? "[Local Gallery Image Selected]" : coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-xs focus:outline-none focus:border-[#e11d48]"
              />

              {/* FLUID UNCONSTRAINED PREVIEW */}
              {coverImage && (
                <div className="mt-3 relative w-full rounded-2xl overflow-hidden border-2 border-[#e5bdbe]/40 shadow-sm bg-[#faf2ee] p-2 flex items-center justify-center">
                  <img
                    src={coverImage}
                    alt="Cover Preview"
                    className="w-full h-auto max-h-[600px] object-contain rounded-xl"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-bold backdrop-blur-md">
                    Fluid Dimensions Preview
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#e11d48] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#b80035] transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: NAMES & LETTER */}
        {step === 2 && (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#e5bdbe]/40 space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-[#1e1b19] mb-1">
                  Your Name (Sender)
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48]"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1e1b19] mb-1">
                  Their Name (Recipient)
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1e1b19] mb-1">
                Main Headline
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="e.g. 365 Days of Laughing, Rain Walks & Endless Chai"
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48]"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#1e1b19] mb-1">
                Your Personal Letter / Message
              </label>
              <textarea
                rows={5}
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
                placeholder="Write your sentimental note..."
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48] font-serif"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#5c3f40] px-6 py-3 rounded-full hover:bg-[#faf2ee]"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#e11d48] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#b80035] transition-colors"
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: GALLERY PHOTO MOMENTS & VOICE NOTE */}
        {step === 3 && (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#e5bdbe]/40 space-y-8 text-left">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#1e1b19]">
                  Photo Moments Gallery ({moments.length})
                </h3>
                <button
                  type="button"
                  onClick={addMoment}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#ffdada] text-[#b80035] px-4 py-2 rounded-full hover:bg-[#e11d48] hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" /> Add Moment
                </button>
              </div>

              <div className="space-y-4">
                {moments.map((m, idx) => (
                  <div
                    key={m.id}
                    className="p-5 rounded-2xl bg-[#faf2ee] border border-[#e5bdbe]/40 space-y-4 relative"
                  >
                    <button
                      type="button"
                      onClick={() => removeMoment(m.id)}
                      className="absolute top-4 right-4 text-[#ba1a1a] p-1.5 rounded-full hover:bg-[#ffdad6]"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-10">
                      <div>
                        <label className="block text-xs font-bold text-[#5c3f40] mb-1">
                          Moment Title
                        </label>
                        <input
                          type="text"
                          value={m.title}
                          onChange={(e) => {
                            const copy = [...moments];
                            copy[idx].title = e.target.value;
                            setMoments(copy);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-[#e7e5e4] text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#5c3f40] mb-1">
                          Tag Badge
                        </label>
                        <input
                          type="text"
                          value={m.tag}
                          onChange={(e) => {
                            const copy = [...moments];
                            copy[idx].tag = e.target.value;
                            setMoments(copy);
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-[#e7e5e4] text-xs"
                        />
                      </div>
                    </div>

                    {/* MOMENT GALLERY PHOTO */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-[#5c3f40]">
                        Moment Photo (Select from Gallery / Phone)
                      </label>
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#e11d48]/40 text-[#b80035] font-bold text-xs hover:bg-[#ffdada] transition-colors">
                          <ImageIcon className="w-4 h-4" />
                          <span>Choose Gallery Image</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleMomentPhotoUpload(e, idx)}
                            className="hidden"
                          />
                        </label>
                        {m.imageUrl && (
                          <div className="w-14 h-14 rounded-lg overflow-hidden border border-[#e5bdbe]">
                            <img src={m.imageUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Voice Note */}
            <div className="pt-4 border-t border-[#e5bdbe]/40 space-y-3">
              <h3 className="text-base font-bold text-[#1e1b19] flex items-center gap-2">
                <Mic className="w-5 h-5 text-[#8b5cf6]" /> Voice Note Audio
              </h3>
              <input
                type="text"
                value={audioVoiceNoteUrl}
                onChange={(e) => setAudioVoiceNoteUrl(e.target.value)}
                placeholder="https://...mp3 audio link"
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#8b5cf6]"
              />
              <input
                type="text"
                value={voiceNoteCaption}
                onChange={(e) => setVoiceNoteCaption(e.target.value)}
                placeholder="Voice note caption/description"
                className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#8b5cf6]"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#5c3f40] px-6 py-3 rounded-full hover:bg-[#faf2ee]"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#e11d48] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#b80035] transition-colors"
              >
                Review & Proceed to Payment →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW & DIRECT UPI PAYMENT */}
        {step === 4 && (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#e5bdbe]/40 space-y-8 text-left">
            <div className="p-6 rounded-2xl bg-[#faf2ee] border border-[#e5bdbe]/40 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-md text-2xl text-[#1e1b19]">{title}</h3>
                <span className="px-3 py-1 rounded-full bg-[#ffddb8] text-[#2a1700] font-bold text-xs">
                  Theme: {THEME_TEMPLATES_CONFIG[themeTemplate].name}
                </span>
              </div>
              <p className="text-xs text-[#5c3f40]">
                From: <strong>{senderName}</strong> • To: <strong>{recipientName}</strong>
              </p>
              <p className="text-sm italic text-[#e11d48]">"{headline}"</p>
              <p className="text-xs text-[#5c3f40]">
                Included: <strong>{moments.length} Gallery Photos</strong> + <strong>1 Voice Note</strong>
              </p>
            </div>

            {/* Merchant UPI ID Config Input */}
            <div className="p-6 rounded-2xl border border-[#e11d48]/20 bg-[#ffdada]/30 space-y-3">
              <label className="block text-xs font-bold text-[#b80035] uppercase tracking-wider">
                Your Merchant UPI VPA (Direct Account Transfer)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={merchantUpiId}
                  onChange={(e) => setMerchantUpiId(e.target.value)}
                  placeholder="e.g. 9876543210@paytm or soham@upi"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#e7e5e4] text-sm font-semibold focus:outline-none focus:border-[#e11d48]"
                />
              </div>
              <p className="text-[11px] text-[#78716c]">
                Payments will be credited directly to this UPI VPA via QR Code / GPay / PhonePe.
              </p>
            </div>

            {/* Tear Away Lock */}
            <div className="p-6 rounded-2xl border border-[#f59e0b]/40 bg-[#ffddb8]/20 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Lock className="w-5 h-5 text-[#815100]" />
                  <h4 className="font-bold text-sm text-[#1e1b19]">
                    Enable Midnight / Tear-Away Date Lock (Optional)
                  </h4>
                </div>
                <input
                  type="checkbox"
                  checked={isLocked}
                  onChange={(e) => setIsLocked(e.target.checked)}
                  className="w-5 h-5 accent-[#e11d48]"
                />
              </div>

              {isLocked && (
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-[#815100]">
                    Select Unlock Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={unlockDate}
                    onChange={(e) => setUnlockDate(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-white border border-[#e7e5e4] text-sm"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#5c3f40] px-6 py-3 rounded-full hover:bg-[#faf2ee]"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={triggerUpiPayment}
                className="inline-flex items-center gap-2 text-base font-bold bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white px-9 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                <span>Pay ₹149 to {merchantUpiId} & Get Live Link ✨</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* UPI PAYMENT MODAL */}
      <UpiPaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccessAndPublish}
        amount={149}
        recipientName={recipientName}
        senderName={senderName}
        merchantUpiId={merchantUpiId}
      />

      <Footer />
    </div>
  );
}
