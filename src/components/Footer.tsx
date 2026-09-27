import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4ece8] border-t border-[#e5bdbe]/40 text-[#1e1b19] pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#e11d48] text-white flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <span className="font-headline-sm text-xl font-bold text-[#b80035]">Memora</span>
          </Link>
          <p className="text-sm text-[#5c3f40] max-w-sm leading-relaxed">
            Crafting intimate digital keepsakes for milestones, anniversaries, birthdays, and slow romantic confessions. Made with love for couples worldwide.
          </p>
          <div className="pt-2 text-xs text-[#815100] font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse"></span>
            Private • Ad-free • ₹149 One-time Forever Access
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-3">
          <h4 className="font-label-md text-sm font-bold text-[#1e1b19] uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-[#5c3f40]">
            <li>
              <Link href="/" className="hover:text-[#b80035] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/create" className="hover:text-[#b80035] transition-colors">
                Create Memory Wizard
              </Link>
            </li>
            <li>
              <Link href="/m/viddhi-and-soham" className="hover:text-[#b80035] transition-colors">
                Live Sample Memory
              </Link>
            </li>
            <li>
              <a href="#occasions" className="hover:text-[#b80035] transition-colors">
                Anniversary Templates
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Occasions */}
        <div className="space-y-3">
          <h4 className="font-label-md text-sm font-bold text-[#1e1b19] uppercase tracking-wider">
            Occasions
          </h4>
          <ul className="space-y-2 text-sm text-[#5c3f40]">
            <li>First Anniversary Keepsakes</li>
            <li>Long-Distance Love Letters</li>
            <li>Midnight Birthday Surprises</li>
            <li>Proposal & Engagement Stories</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-[#e5bdbe]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c3f40] gap-4">
        <p>© 2026 Memora Love Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with <Heart className="w-3.5 h-3.5 text-[#e11d48] fill-current inline" /> for sweet memories.
        </p>
      </div>
    </footer>
  );
}
