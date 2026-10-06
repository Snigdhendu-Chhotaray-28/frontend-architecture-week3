import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce rapidly changing values (such as search input queries).
 * Delays updating the debounced value until after the specified delay has elapsed 
 * without any new changes.
 * 
 * Why Debouncing is useful:
 * 1. Prevents unnecessary re-filtering on every single keystroke.
 * 2. Improves UI responsiveness and frame rates during fast typing.
 * 3. Prepares architecture for API-driven searches to avoid rate limiting.
 * 
 * @param {*} value - The input value to debounce
 * @param {number} delay - Delay in milliseconds (default: 300ms)
 * @returns {*} The debounced value
 */
export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timer if value changes (e.g. user continues typing) or on unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
