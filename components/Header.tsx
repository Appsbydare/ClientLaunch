"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Process", href: "/process" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b-4 border-black z-50 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-black text-black uppercase tracking-tight">
              WebAgency
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-bold text-black hover:text-blue-600 transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-3 bg-black text-white font-black uppercase tracking-wide hover:bg-blue-600 transition-all"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-black border-2 border-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t-2 border-black">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-lg font-bold text-black hover:bg-black hover:text-white uppercase tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-3 mt-4 px-6 py-4 bg-black text-white font-black text-center uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              GET STARTED
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

