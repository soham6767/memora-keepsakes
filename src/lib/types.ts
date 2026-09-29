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
export type OccasionType = "anniversary" | "birthday" | "distance" | "love_letter";

export interface MemoryData {
  id: string;
  title: string;
  senderName: string;
  recipientName: string;
  occasion: OccasionType | "milestone";
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

export const OCCASIONS_CONFIG: Record<
  OccasionType,
  {
    id: OccasionType;
    title: string;
    tagline: string;
    subtitle: string;
    badge: string;
    emoji: string;
    themeTemplate: ThemeTemplate;
    primaryColor: string;
    badgeBg: string;
    badgeText: string;
    cardBorder: string;
    image: string;
    quote: string;
    features: string[];
    defaultTitle: string;
    defaultHeadline: string;
    defaultLetter: string;
  }
> = {
  anniversary: {
    id: "anniversary",
    title: "Anniversary Keepsakes",
    tagline: "Relive every chapter, cafe date & rain walk",
    subtitle: "Celebrate your love milestones with a romantic timeline, photo gallery, and love note.",
    badge: "Anniversary Edition ❤️",
    emoji: "🌹",
    themeTemplate: "rose",
    primaryColor: "#e11d48",
    badgeBg: "bg-[#ffdada]",
    badgeText: "text-[#b80035]",
    cardBorder: "border-[#e11d48]/25",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
    quote: "“1 year with you felt like 100 sweet afternoons under the Mumbai rain.”",
    features: [
      "365 Days Together Counter & Milestones",
      "Curated Date-by-Date Photo Journey",
      "Heartfelt Handwritten-Style Anniversary Letter",
      "Romantic Background Music & Audio",
    ],
    defaultTitle: "Viddhi & Soham — 1 Year Together",
    defaultHeadline: "365 Days of Laughing, Rain Walks & Endless Chai",
    defaultLetter: "I still remember how you laughed when it started pouring in Bandra and we both dropped our umbrellas. From late-night coffee talks to exploring hidden street cafes, every single day with you feels like my favorite chapter. Happy Anniversary, my love!",
  },
  birthday: {
    id: "birthday",
    title: "Birthday Midnight Surprises",
    tagline: "A gift that unlocks at exactly 12:00 AM",
    subtitle: "Create a tear-away midnight lock countdown with confetti, candles, and your sweetest memories.",
    badge: "Midnight Lock ⏰",
    emoji: "🎂",
    themeTemplate: "gold",
    primaryColor: "#f59e0b",
    badgeBg: "bg-[#ffddb8]",
    badgeText: "text-[#815100]",
    cardBorder: "border-[#f59e0b]/25",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop",
    quote: "“Happy Birthday to my favorite human in the whole universe!”",
    features: [
      "Automatic Midnight 12:00 AM Tear-Away Lock",
      "Interactive Confetti Bursts & Candle Sparkles",
      "Voice Note Wishes from Friends & Loved Ones",
      "Memory Vault of Your Funniest & Sweetest Moments",
    ],
    defaultTitle: "Happy Birthday Aisha — Midnight Surprise!",
    defaultHeadline: "Wishing the Sweetest Birthday to My Favorite Human ✨",
    defaultLetter: "Happy Birthday! I wanted to give you something you could open right at midnight and keep forever. You make life so much brighter, funnier, and warmer. Here's to making this year your best adventure yet!",
  },
  distance: {
    id: "distance",
    title: "Long-Distance Love Keepsakes",
    tagline: "Miles apart, but always in each other's hearts",
    subtitle: "Bridge the time zones with audio voice notes, shared countdowns, and pin maps.",
    badge: "Miles Apart ✈️",
    emoji: "✈️",
    themeTemplate: "lavender",
    primaryColor: "#8b5cf6",
    badgeBg: "bg-[#e9ddff]",
    badgeText: "text-[#6b38d4]",
    cardBorder: "border-[#8b5cf6]/25",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=800&auto=format&fit=crop",
    quote: "“Distance means so little when someone means so much.”",
    features: [
      "Voice Note Waveforms for Late Night Calls",
      "Two-City Location Pins & Flight Countdowns",
      "Digital Keepsake Box Accessible Across Any Device",
      "Virtual Hug & Emotional Micro-Reactions",
    ],
    defaultTitle: "Mumbai to London — Our Story Across Miles",
    defaultHeadline: "Counting Down the Days Until I See You Again ✈️",
    defaultLetter: "Even with 4,000 miles between us, not a single day goes by without me feeling your warmth. Listening to your voice notes on my morning walks makes you feel right next to me. See you so very soon!",
  },
  love_letter: {
    id: "love_letter",
    title: "Quiet Romantic Letters",
    tagline: "For the unspoken words you want them to keep",
    subtitle: "A digital wax-sealed love letter surrounded by your most intimate snapshots.",
    badge: "Wax Sealed ✉️",
    emoji: "✉️",
    themeTemplate: "sage",
    primaryColor: "#10b981",
    badgeBg: "bg-[#d1fae5]",
    badgeText: "text-[#065f46]",
    cardBorder: "border-[#10b981]/25",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    quote: "“Just wanted you to know how deeply and effortlessly you are loved.”",
    features: [
      "Deckle-Edged Editorial Stationery Layout",
      "Wax Seal Tap-to-Open Letter Experience",
      "Intimate Candid Photo Album",
      "Private Password / Link Protection",
    ],
    defaultTitle: "A Love Letter Just for You",
    defaultHeadline: "The Words I've Always Wanted You to Keep Forever 🌿",
    defaultLetter: "I wrote this because some feelings are too quiet and special for a quick text message. You have brought so much peace, laughter, and light into my life. Keep this letter whenever you need a reminder of how cherished you are.",
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
