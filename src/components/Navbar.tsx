"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Sparkles, Menu, X, ArrowRight, User } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f5]/85 backdrop-blur-xl border-b border-[#e11d48]/10 shadow-[0_8px_24px_-4px_rgba(41,37,36,0.05)]">
        <div className="h-20 max-w-[1240px] mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e11d48] to-[#f43f5e] flex items-center justify-center text-white shadow-md shadow-[#e11d48]/20 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-2xl font-bold tracking-tight text-[#b80035]">
                Memora
              </span>
              <span className="text-[10px] uppercase font-bold text-[#815100] tracking-widest -mt-1">
                Digital Keepsakes
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-[#5c3f40] hover:text-[#1e1b19] transition-colors"
            >
              How it works
            </a>
            <a
              href="#occasions"
              className="text-sm font-semibold text-[#5c3f40] hover:text-[#1e1b19] transition-colors"
            >
              Occasions
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-[#5c3f40] hover:text-[#1e1b19] transition-colors flex items-center gap-1.5"
            >
              Pricing
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ffddb8] text-[#2a1700]">
                ₹149
              </span>
            </a>
            <Link
              href="/m/viddhi-and-soham"
              className="text-sm font-semibold text-[#6b38d4] hover:text-[#5516be] transition-colors flex items-center gap-1"
            >
              Live Demo ✨
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLoginModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#5c3f40] hover:text-[#1e1b19] px-3 py-1.5 rounded-full transition-colors"
            >
              <User className="w-4 h-4" />
              Login
            </button>
            <Link
              href="/create"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white px-5 py-2.5 rounded-full shadow-[0_12px_28px_-4px_rgba(225,29,72,0.25)] hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <span>Create yours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#5c3f40] hover:bg-[#eee7e3]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e11d48]/10 bg-[#fff8f5] px-6 py-6 space-y-4 shadow-lg">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1e1b19]"
            >
              How it works
            </a>
            <a
              href="#occasions"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1e1b19]"
            >
              Occasions
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#1e1b19]"
            >
              Pricing (₹149)
            </a>
            <Link
              href="/m/viddhi-and-soham"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#6b38d4]"
            >
              Live Demo ✨
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setLoginModalOpen(true);
              }}
              className="block w-full text-left text-base font-semibold text-[#5c3f40] pt-2 border-t border-[#eee7e3]"
            >
              Login / Sign In
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-[#fff8f5] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#e11d48]/20 relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#5c3f40] hover:bg-[#eee7e3]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#ffdada] text-[#b80035] flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-headline-md text-2xl text-[#1e1b19]">Welcome back to Memora</h3>
              <p className="text-xs text-[#5c3f40]">
                Enter your phone number or email to view your saved digital keepsakes.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Successfully logged in! You can now view and create memories.");
                setLoginModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-[#5c3f40] mb-1">
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  placeholder="soham@example.com or +91 98765 43210"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#fffdf9] border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                Send One-Time Passcode →
              </button>

              <p className="text-[11px] text-center text-[#78716c]">
                No password required. We will text or email a quick 4-digit code.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
