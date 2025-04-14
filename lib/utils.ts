import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Format a date string to a readable format
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format a time string to a readable format
 */
export function formatTime(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Format a date and time string to a readable format
 */
export function formatDateTime(date: Date | string): string {
  const d = new Date(date);
  return `${formatDate(d)} at ${formatTime(d)}`;
}

/**
 * Get the initials from a name
 */
export function getInitials(name: string): string {
  return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
}

/**
 * Truncate a string to a specific length and add ellipsis
 */
export function truncate(str: string, length: number): string {
  if (!str) return '';
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

/**
 * Create a debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Parse a sort string into field and direction
 */
export function parseSort(sort: string): { field: string; direction: 'asc' | 'desc' } {
  const [field, direction] = sort.split(':');
  return {
    field,
    direction: direction === 'desc' ? 'desc' : 'asc',
  };
}

/**
 * Convert a file to a data URL
 */
export function fileToDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


/**
 * Format a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (e.g., USD, EUR, GBP)
 * @param locale - The locale to use for formatting (defaults to user's locale)
 * @returns Formatted currency string
 */
export function formatCurrency(
    amount: number,
    currency: string = "USD",
    locale?: string
): string {
  // Use the browser's locale if not specified
  const userLocale = locale || navigator.language || "en-US";

  return new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0, // Don't show cents for whole numbers
    maximumFractionDigits: 2, // Show up to 2 decimal places
  }).format(amount);
}

