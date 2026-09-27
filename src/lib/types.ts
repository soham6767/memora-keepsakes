export interface MemoryMoment {
  id: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  imageUrl?: string;
  audioUrl?: string;
  tag?: string;
}

export type ThemeTemplate = "rose" | "lavender" | "gold" | "sage";

export interface MemoryData {
  id: string;
  title: string;
  senderName: string;
  recipientName: string;
  occasion: "anniversary" | "birthday" | "love_letter" | "milestone";
  themeTemplate?: ThemeTemplate;
  themeColor: string;
  headline: string;
  letter: string;
  coverImage: string;
  audioVoiceNoteUrl?: string;
  voiceNoteDuration?: string;
  voiceNoteCaption?: string;
  isLocked?: boolean;
  unlockDate?: string;
  moments: MemoryMoment[];
  reactions?: {
    heart: number;
    hug: number;
    tears: number;
    sparkles: number;
  };
  createdAt: string;
}

export const THEME_TEMPLATES_CONFIG: Record<
  ThemeTemplate,
  {
    name: string;
    badge: string;
    primaryColor: string;
    secondaryColor: string;
    bgColor: string;
    cardBg: string;
    accentGlow: string;
    emoji: string;
    description: string;
  }
> = {
  rose: {
    name: "Warm Rose Velvet",
    badge: "Romantic Rose 🌹",
    primaryColor: "#e11d48",
    secondaryColor: "#ffdada",
    bgColor: "#fff8f5",
    cardBg: "#faf2ee",
    accentGlow: "from-[#ffdada]/60 to-[#f4ece8]",
    emoji: "🌹",
    description: "Classic passionate crimson, tender flush blush & warm editorial serif",
  },
  lavender: {
    name: "Midnight Lavender Glow",
    badge: "Twilight Lilac 💜",
    primaryColor: "#8b5cf6",
    secondaryColor: "#e9ddff",
    bgColor: "#fdf8ff",
    cardBg: "#f5ebff",
    accentGlow: "from-[#e9ddff]/70 to-[#f3e8ff]",
    emoji: "💜",
    description: "Dreamy evening purple, mystical lilac glow & floating starlight vibes",
  },
  gold: {
    name: "Champagne Sunset Gold",
    badge: "Sunset Gold 🌟",
    primaryColor: "#f59e0b",
    secondaryColor: "#ffddb8",
    bgColor: "#fffbf2",
    cardBg: "#fef3c7",
    accentGlow: "from-[#ffddb8]/70 to-[#fef3c7]",
    emoji: "🌟",
    description: "Festive golden sparkles, warm amber luminescence & luxury keepsakes",
  },
  sage: {
    name: "Earthy Sage & Matcha",
    badge: "Natural Matcha 🌿",
    primaryColor: "#10b981",
    secondaryColor: "#d1fae5",
    bgColor: "#f4fbf7",
    cardBg: "#e6f4ed",
    accentGlow: "from-[#d1fae5]/70 to-[#e6f4ed]",
    emoji: "🌿",
    description: "Calming natural sage green, serene matcha tones & organic linen depth",
  },
};

export const DEFAULT_SAMPLE_MEMORY: MemoryData = {
  id: "viddhi-and-soham",
  title: "Viddhi & Soham — 1 Year Together",
  senderName: "Soham",
  recipientName: "Viddhi",
  occasion: "anniversary",
  themeTemplate: "rose",
  themeColor: "#e11d48",
  headline: "365 Days of Laughing, Rain Walks & Endless Chai",
  letter:
    "I still remember how you laughed when it started pouring in Bandra and we both dropped our umbrellas. From late-night coffee talks to exploring hidden street cafes, every single day with you feels like my favorite chapter. Here is to our first 365 days and a lifetime more.",
  coverImage:
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
  audioVoiceNoteUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  voiceNoteDuration: "0:42",
  voiceNoteCaption: "Voice note recorded under the Bandra promenade rain shelter...",
  isLocked: false,
  unlockDate: "2026-10-01T00:00:00",
  moments: [
    {
      id: "m1",
      title: "The First Rainy Chai in Bandra",
      date: "22 April 2024",
      location: "Third Wave Roasters, Mumbai",
      description:
        "We met for a 30-minute coffee that turned into a 4-hour conversation about books, favorite playlists, and ocean sunsets.",
      imageUrl:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
      tag: "First Date ❤️",
    },
    {
      id: "m2",
      title: "Weekend Getaway to Alibaug",
      date: "14 August 2024",
      location: "Varsoli Beach, Alibaug",
      description:
        "Watching the sunset while sitting on sandy towels, eating hot vada pavs, and collecting sea shells.",
      imageUrl:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
      tag: "Beach Escape 🌊",
    },
    {
      id: "m3",
      title: "Surprise Birthday Midnight Cake",
      date: "05 November 2024",
      location: "Roof Garden, Mumbai",
      description:
        "You showed up at 11:59 PM with a candle stuck inside a bakery cupcake because you couldn't wait until morning.",
      imageUrl:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
      tag: "Pure Joy ✨",
    },
  ],
  reactions: {
    heart: 48,
    hug: 24,
    tears: 12,
    sparkles: 35,
  },
  createdAt: "2026-09-27",
};
