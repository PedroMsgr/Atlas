// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utilidad para los ompoentes de Tailwind CSS de Shadcn UI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
