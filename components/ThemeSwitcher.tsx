'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-mewtwo-primary/20 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-mewtwo-primary/20 hover:bg-mewtwo-primary/30 transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-5 h-5">
        <Sun
          size={18}
          className={`absolute inset-0 text-mewtwo-secondary transition-all duration-500 ${
            resolvedTheme === 'dark'
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon
          size={18}
          className={`absolute inset-0 text-mewtwo-secondary transition-all duration-500 ${
            resolvedTheme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-mewtwo-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />

      {/* Ripple effect on click */}
      <div className="absolute inset-0 bg-mewtwo-primary/20 rounded-lg scale-0 opacity-0 group-active:scale-110 group-active:opacity-100 transition-all duration-200" />
    </button>
  );
}

// Alternative compact version for mobile
export function ThemeSwitcherCompact() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-md bg-mewtwo-primary/20 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 rounded-md bg-mewtwo-primary/20 hover:bg-mewtwo-primary/30 transition-all duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <div className="relative w-4 h-4">
        <Sun
          size={16}
          className={`absolute inset-0 text-mewtwo-secondary transition-all duration-300 ${
            resolvedTheme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        <Moon
          size={16}
          className={`absolute inset-0 text-mewtwo-secondary transition-all duration-300 ${
            resolvedTheme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}