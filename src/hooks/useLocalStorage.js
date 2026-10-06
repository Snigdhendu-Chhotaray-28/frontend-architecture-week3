import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to manage persistent state synchronized with browser localStorage.
 * 
 * Features:
 * - Resilient JSON serialization & deserialization with fallback.
 * - Handles both direct values and functional updates (like useState).
 * - Listens to cross-tab 'storage' events for synchronization.
 * - Gracefully degrades in incognito/disabled storage modes.
 * 
 * @param {string} key - The localStorage key
 * @param {*} initialValue - Fallback value if key is absent or invalid
 * @returns {[any, Function]} State and setter function
 */
export const useLocalStorage = (key, initialValue) => {
  // Read initial state from localStorage or use provided fallback
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`[useLocalStorage] Error reading key "${key}" from localStorage:`, error);
      return initialValue;
    }
  });

  // Setter function supporting functional updates
  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue((prev) => {
          const valueToStore = value instanceof Function ? value(prev) : value;
          if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          }
          return valueToStore;
        });
      } catch (error) {
        console.error(`[useLocalStorage] Error setting key "${key}" into localStorage:`, error);
      }
    },
    [key]
  );

  // Sync state if another browser tab/window updates localStorage
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch (error) {
          console.warn(`[useLocalStorage] Failed to parse updated storage event for "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
};
