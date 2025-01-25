export {}; // Pollyfill hack to present as a module.

// Extend Window to include Google Analytics var for Typed compliance
declare global {
  interface Window {
    ga: (...args: any[]) => void;
  }
}
