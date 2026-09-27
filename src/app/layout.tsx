import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memora — Personalized Digital Memories & Keepsakes",
  description: "Create beautiful, private digital memory experiences filled with photos, letters, voice notes, and special moments for someone you love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fff8f5] text-[#1e1b19] antialiased selection:bg-[#ffdada] selection:text-[#b80035]">
        {children}
      </body>
    </html>
  );
}
