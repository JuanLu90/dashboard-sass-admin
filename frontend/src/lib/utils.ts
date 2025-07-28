import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomDelay(min = 800, max = 3500): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateDays() {
  const days = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date(Date.now() - (29 - i) * 86400000).toISOString().slice(2, 10);
    const users = 80 + Math.floor(Math.random() * 40);
    days.push({ date, users });
  }
  return days;
}
