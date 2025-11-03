"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "CASE STUDIES", href: "/case-studies" },
    { name: "PROCESS", href: "/process" },
    { name: "PRICING", href: "/pricing" },
    { name: "ABOUT", href: "/about" },
    { name: "BLOG", href: "/blog" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white border-b-4 border-black z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-black text-black uppercase tracking-tight hover:text-blue-600 transition-colors">
              WEBAGENCY
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8 items-center">
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
              className="ml-6 px-8 py-4 bg-black text-white font-black uppercase tracking-wide hover:bg-blue-600 transition-all"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-black border-2 border-black hover:bg-black hover:text-white transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
          <div className="lg:hidden py-6 space-y-1 border-t-4 border-black">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-4 text-lg font-bold text-black hover:bg-black hover:text-white uppercase tracking-wide transition-all border-b-2 border-black/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-6 px-8 py-5 bg-black text-white font-black text-center uppercase tracking-wide text-lg hover:bg-blue-600 transition-all"
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
