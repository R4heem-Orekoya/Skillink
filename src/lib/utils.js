import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function sortByCreatedAt(data) {
  return data.sort((a, b) => {
    // Ensure valid Date objects for comparison
    const dateA = new Date(a._createdAt);
    const dateB = new Date(b._createdAt);
    
  return dateA - dateB
  });
}