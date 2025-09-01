"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 hover:bg-gray-300 dark:hover:bg-gray-700 shadow-md transition-all duration-300 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <span className="flex items-center justify-center transition-transform duration-500 transform">
        {isDark ? (
          <Sun size={20} className="animate-spin-slow text-yellow-400" />
        ) : (
          <Moon size={20} className="text-indigo-500" />
        )}
      </span>
    </button>
  );
}
