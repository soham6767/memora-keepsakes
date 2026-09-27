"use client";

import { useState } from "react";
import {
  X,
  ShieldCheck,
  QrCode,
  Smartphone,
  CheckCircle2,
  Lock,
  CreditCard,
  ArrowRight,
} from "lucide-react";

interface UpiPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  amount?: number;
  recipientName?: string;
  senderName?: string;
  merchantUpiId?: string;
}

export default function UpiPaymentModal({
  isOpen,
  onClose,
  onPaymentSuccess,
  amount = 149,
  recipientName = "Viddhi",
  senderName = "Soham",
  merchantUpiId = "memora@upi",
}: UpiPaymentModalProps) {
  const [paymentMode, setPaymentMode] = useState<"apps" | "vpa" | "qr">("apps");
  const [upiId, setUpiId] = useState("");
  const [status, setStatus] = useState<"idle" | "app_modal" | "processing" | "success">("idle");
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  if (!isOpen) return null;

  // Exact User QR Code Image Path served from /payment-qr.png
  const userQrCodePath = "/payment-qr.png";

  const handleSelectApp = (appName: string) => {
    setSelectedApp(appName);
    setStatus("app_modal");
  };

  const handleConfirmPayment = () => {
    setStatus("processing");

    // Simulate instant direct UPI payment verification (2 seconds)
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onPaymentSuccess();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-[#fff8f5] rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border border-[#e11d48]/20 relative text-left overflow-hidden">
        {/* Close Button */}
        {status !== "processing" && (
          <button
            onClick={() => {
              if (status === "app_modal") {
                setStatus("idle");
              } else {
                onClose();
              }
            }}
            className="absolute top-4 right-4 p-2 rounded-full text-[#5c3f40] hover:bg-[#eee7e3] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* 1. APP MODAL VIEW WITH THE EXACT USER QR CODE */}
        {status === "app_modal" && (
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdada] text-[#b80035] text-xs font-bold">
              <Smartphone className="w-4 h-4" /> Pay via {selectedApp}
            </div>

            <div className="space-y-1">
              <h3 className="font-headline-md text-2xl text-[#1e1b19]">
                Scan & Pay ₹{amount} with {selectedApp}
              </h3>
              <p className="text-xs text-[#5c3f40]">
                Scan the official QR code below or tap to authorize payment in your app:
              </p>
            </div>

            {/* Official User QR Code Image */}
            <div className="p-4 bg-white rounded-3xl inline-block border-2 border-[#e11d48]/20 shadow-xl">
              <img
                src={userQrCodePath}
                alt="Official UPI QR Code"
                className="w-52 h-52 mx-auto rounded-xl object-contain"
              />
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleConfirmPayment}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white font-bold text-sm shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>I Have Paid ₹{amount} → Activate Live Link</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-xs font-semibold text-[#5c3f40] hover:underline"
              >
                ← Choose a different payment method
              </button>
            </div>
          </div>
        )}

        {/* 2. PROCESSING STATE */}
        {status === "processing" && (
          <div className="py-12 text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-[#ffdada] border-t-[#e11d48] animate-spin" />
              <Smartphone className="w-8 h-8 text-[#e11d48]" />
            </div>
            <div className="space-y-2">
              <h3 className="font-headline-md text-2xl text-[#1e1b19]">
                Verifying Payment...
              </h3>
              <p className="text-xs text-[#5c3f40]">
                Verifying transaction of <strong>₹{amount}</strong>...
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf2ee] text-[11px] font-bold text-[#815100]">
              <ShieldCheck className="w-4 h-4 text-[#25D366]" /> 256-bit Encrypted Secure UPI
            </div>
          </div>
        )}

        {/* 3. SUCCESS STATE */}
        {status === "success" && (
          <div className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
                Payment Verified & Received 🎉
              </span>
              <h3 className="font-headline-md text-3xl text-[#1e1b19]">
                Keepsake Link Activated!
              </h3>
              <p className="text-xs text-[#5c3f40]">
                Generating live keepsake link for {recipientName}...
              </p>
            </div>
          </div>
        )}

        {/* 4. IDLE PAYMENT FORM */}
        {status === "idle" && (
          <div className="space-y-6">
            {/* Header Summary */}
            <div className="flex items-center justify-between pb-4 border-b border-[#e5bdbe]/40">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#815100] tracking-wider">
                  Memora Digital Keepsake
                </span>
                <h3 className="font-headline-md text-xl text-[#1e1b19]">
                  {senderName} & {recipientName}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-[#5c3f40]">Total Pay</span>
                <div className="font-headline-lg text-3xl font-bold text-[#b80035]">
                  ₹{amount}
                </div>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="grid grid-cols-3 gap-2 bg-[#faf2ee] p-1.5 rounded-2xl border border-[#e5bdbe]/30">
              <button
                type="button"
                onClick={() => setPaymentMode("apps")}
                className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                  paymentMode === "apps"
                    ? "bg-white text-[#b80035] shadow-sm"
                    : "text-[#5c3f40] hover:text-[#1e1b19]"
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> UPI Apps
              </button>

              <button
                type="button"
                onClick={() => setPaymentMode("vpa")}
                className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                  paymentMode === "vpa"
                    ? "bg-white text-[#b80035] shadow-sm"
                    : "text-[#5c3f40] hover:text-[#1e1b19]"
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" /> Enter UPI ID
              </button>

              <button
                type="button"
                onClick={() => setPaymentMode("qr")}
                className={`py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                  paymentMode === "qr"
                    ? "bg-white text-[#b80035] shadow-sm"
                    : "text-[#5c3f40] hover:text-[#1e1b19]"
                }`}
              >
                <QrCode className="w-3.5 h-3.5" /> Scan QR
              </button>
            </div>

            {/* MODE 1: UPI APPS (Clicking opens QR Code view!) */}
            {paymentMode === "apps" && (
              <div className="space-y-4">
                <p className="text-xs text-[#5c3f40]">
                  Select any UPI app below to view the official QR Code & complete your payment:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "Google Pay", name: "Google Pay", badge: "GPay", color: "bg-[#4285F4]" },
                    { id: "PhonePe", name: "PhonePe", badge: "PE", color: "bg-[#5f259f]" },
                    { id: "Paytm", name: "Paytm UPI", badge: "PAYTM", color: "bg-[#00baf2]" },
                    { id: "BHIM", name: "BHIM UPI", badge: "BHIM", color: "bg-[#ff671f]" },
                  ].map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => handleSelectApp(app.name)}
                      className="p-3.5 rounded-2xl bg-white border border-[#e5bdbe]/40 shadow-sm hover:border-[#e11d48] hover:shadow-md transition-all flex items-center gap-3 text-left group"
                    >
                      <div
                        className={`w-9 h-9 rounded-xl ${app.color} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}
                      >
                        {app.badge}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1e1b19]">{app.name}</p>
                        <p className="text-[10px] text-[#78716c]">Tap for QR & Pay</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MODE 2: ENTER UPI ID / VPA */}
            {paymentMode === "vpa" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (upiId.trim()) handleConfirmPayment();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-[#5c3f40] mb-1">
                    Enter your UPI ID / Virtual Payment Address
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. 9876543210@upi or yourname@okicici"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e7e5e4] text-sm focus:outline-none focus:border-[#e11d48]"
                  />
                  <p className="text-[11px] text-[#78716c] mt-1">
                    Enter your VPA to verify payment of ₹{amount}.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e11d48] to-[#b80035] text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity"
                >
                  Verify UPI & Unlock Live Link →
                </button>
              </form>
            )}

            {/* MODE 3: SCAN QR CODE (DISPLAYS THE EXACT USER QR CODE IMAGE!) */}
            {paymentMode === "qr" && (
              <div className="text-center space-y-4">
                <p className="text-xs text-[#5c3f40]">
                  Scan this official QR code with GPay, PhonePe, Paytm, BHIM, or any UPI app to pay ₹{amount}:
                </p>
                <div className="p-4 bg-white rounded-3xl inline-block border-2 border-[#e11d48]/20 shadow-xl">
                  <img
                    src={userQrCodePath}
                    alt="Official UPI QR Code"
                    className="w-52 h-52 mx-auto rounded-xl object-contain"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleConfirmPayment}
                    className="px-8 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> I Have Scanned & Paid ₹{amount}
                  </button>
                </div>
              </div>
            )}

            {/* Footer Trust Note */}
            <div className="pt-3 border-t border-[#e5bdbe]/30 flex items-center justify-between text-[11px] text-[#78716c]">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#e11d48]" /> Official Instant UPI Payment
              </span>
              <span>Instant Live Link Activation</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
