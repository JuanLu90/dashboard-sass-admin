import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomDelay(min = 800, max = 2500): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
