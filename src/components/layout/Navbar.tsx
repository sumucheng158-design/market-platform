'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { href: '/markets', label: '探索市集' },
  { href: '/vendors', label: '攤商專區' },
  { href: '/blog', label: '文章' },
  { href: '/apply', label: '申請攤位' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200">
      <nav className="container-base">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-latte-700 rounded-lg flex items-center justify-center group-hover:bg-latte-800 transition-colors">
              <span className="text-cream-50 font-display text-sm font-semibold">市</span>
            </div>
            <span className="font-display text-lg font-semibold text-ink hidden sm:block">市集平台</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn-ghost text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="btn-ghost p-2" aria-label="搜尋">
              <Search size={18} />
            </button>
            <Link href="/apply" className="btn-primary hidden md:inline-flex text-sm py-2">
              我要擺攤
            </Link>
            <button
              className="md:hidden btn-ghost p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="選單"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cream-200 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-latte-700 hover:bg-cream-100 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link href="/apply" className="btn-primary w-full justify-center" onClick={() => setIsOpen(false)}>
                  我要擺攤
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
