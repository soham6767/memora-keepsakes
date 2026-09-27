"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getMemoryById } from "@/lib/storage";
import { MemoryData } from "@/lib/types";
import {
  Heart,
  QrCode,
  Copy,
  Check,
  Share2,
  Printer,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ShareKeepsakePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const memoryId = resolvedParams.id;

  const [memory, setMemory] = useState<MemoryData | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    const fetched = getMemoryById(memoryId);
    if (fetched) setMemory(fetched);
    if (typeof window !== "undefined") {
      setFullUrl(`${window.location.origin}/m/${memoryId}`);
    }
  }, [memoryId]);

  if (!memory) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    fullUrl
  )}`;

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#1e1b19] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 max-w-2xl mx-auto px-4 w-full text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdada] text-[#b80035] text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-current" /> Printable Keepsake Card
          </div>
          <h1 className="font-headline-lg text-3xl md:text-4xl text-[#1e1b19]">
            Share your memory with {memory.recipientName}
          </h1>
          <p className="text-sm text-[#5c3f40]">
            You can copy the link below, send it over WhatsApp, or print this physical QR code card to place inside an envelope!
          </p>
        </div>

        {/* PRINTABLE KEEPSAKE CARD */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#e11d48]/20 space-y-6 text-center max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#e11d48] text-white flex items-center justify-center mx-auto shadow-md">
            <Heart className="w-6 h-6 fill-current" />
          </div>

          <div className="space-y-1">
            <span className="text-[11px] uppercase font-bold text-[#815100] tracking-widest">
              Digital Keepsake
            </span>
            <h2 className="font-headline-md text-2xl text-[#1e1b19]">
              {memory.title}
            </h2>
            <p className="text-xs text-[#5c3f40]">
              From {memory.senderName} to {memory.recipientName}
            </p>
          </div>

          {/* QR Code */}
          <div className="p-4 bg-[#faf2ee] rounded-2xl inline-block border border-[#e5bdbe]/30 shadow-inner">
            <img
              src={qrImageUrl}
              alt="Memory QR Code"
              className="w-48 h-48 mx-auto rounded-lg"
            />
          </div>

          <p className="text-xs italic text-[#e11d48]">
            "Scan with your phone camera to unlock your special memory experience"
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#e11d48] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#b80035] transition-colors"
          >
            {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiedLink ? "Link Copied!" : "Copy Link"}
          </button>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `I created something special for you ❤️ View it here: ${fullUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#25D366] text-white px-6 py-3 rounded-full shadow-md hover:opacity-95"
          >
            <MessageCircle className="w-4 h-4" /> Share on WhatsApp
          </a>

          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-[#1e1b19] border border-[#e5bdbe]/50 px-6 py-3 rounded-full shadow-sm hover:bg-[#faf2ee]"
          >
            <Printer className="w-4 h-4" /> Print Card
          </button>
        </div>

        <div className="pt-6">
          <Link
            href={`/m/${memoryId}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#b80035] hover:underline"
          >
            Open Experience Live →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
