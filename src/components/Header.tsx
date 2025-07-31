"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react for icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-300 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">TechXiz-Solutions</h1>

        {/* Desktop Menu */}
        <div className="bg-blue-500 rounded-xl p-1">
        <nav className="hidden md:flex space-x-6 text-bold text-gray-100 mx-1.5">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/services" className="hover:text-blue-700">Services</Link>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <Link href="/contact" className="hover:text-blue-700"><span className="text-sm"> Contact </span></Link>
        </nav>

        </div>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-800 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-blue-800 shadow-md">
          <Link href="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/blog" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
