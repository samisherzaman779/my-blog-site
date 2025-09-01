"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-200/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href={"/"}>
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          TechXiz-Solutions
        </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6 font-medium text-gray-900 dark:text-gray-100">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="text-blue-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 text-blue-800 dark:text-gray-100 shadow-md rounded-b-lg">
          <Link href="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/blog" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </header>
  );
}
