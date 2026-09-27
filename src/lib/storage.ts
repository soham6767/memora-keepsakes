import { MemoryData, DEFAULT_SAMPLE_MEMORY } from "./types";

const STORAGE_KEY = "memora_user_memories";

export function getSavedMemories(): MemoryData[] {
  if (typeof window === "undefined") return [DEFAULT_SAMPLE_MEMORY];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([DEFAULT_SAMPLE_MEMORY]));
      return [DEFAULT_SAMPLE_MEMORY];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [DEFAULT_SAMPLE_MEMORY];
  } catch {
    return [DEFAULT_SAMPLE_MEMORY];
  }
}

export function getMemoryById(id: string): MemoryData | undefined {
  const memories = getSavedMemories();
  const match = memories.find((m) => m.id === id);
  if (match) return match;
  if (id === "viddhi-and-soham" || id === "demo") return DEFAULT_SAMPLE_MEMORY;
  return DEFAULT_SAMPLE_MEMORY;
}

export function saveMemory(memory: MemoryData): MemoryData {
  if (typeof window === "undefined") return memory;
  const memories = getSavedMemories();
  const index = memories.findIndex((m) => m.id === memory.id);
  if (index >= 0) {
    memories[index] = memory;
  } else {
    memories.push(memory);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memories));
  return memory;
}
