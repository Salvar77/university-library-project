import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.slice(0, 2).toUpperCase())
    .join("");
};

export default getInitials;
