
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white p-4 flex flex-col md:flex-row items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center mb-2 md:mb-0 container w-full justify-between">
        <div className="flex items-center">
          <Image src="/Images/logo.jpg" alt="Logo" width={40} height={40} className="mr-2 rounded animate-fade-in" />
          <h1 className="text-2xl font-bold">Logic Miners</h1>
        </div>
        {/* Hamburger menu icon for mobile */}
        <button
          className="md:hidden block text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <nav className={`w-full md:w-auto ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center md:items-center bg-primary md:bg-transparent p-4 md:p-0 rounded md:rounded-none shadow md:shadow-none">
          <li><Link href="#home" className="hover:underline hover:text-white transition-colors font-bold">Home</Link></li>
          <li><Link href="#about" className="hover:underline hover:text-white transition-colors font-bold">About</Link></li>
          <li><Link href="#projects" className="hover:underline hover:text-white transition-colors font-bold">Projects</Link></li>
          <li><Link href="#services" className="hover:underline hover:text-white transition-colors font-bold">Services</Link></li>
          <li><Link href="#contact" className="hover:underline hover:text-white transition-colors font-bold">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
