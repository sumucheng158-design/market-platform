'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { href: '/markets', label: '探索市集' },
  { href: '/vendors', label: '攤商專區' },
  { href: '/blog', label: '文章' },
  { href: '/apply', label: '申請攤位' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Item 9: clicking search icon scrolls to / focuses homepage search bar
  function handleSearchClick() {
    const el = document.getElementById('hero-search-input');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => (el as HTMLInputElement).focus(), 400);
    } else {
      router.push('/markets');
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-cream-200" role="banner">
      <nav className="container-base" aria-label="主要導覽">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="市集平台 首頁">
            <div className="w-8 h-8 bg-latte-800 rounded-lg flex items-center justify-center group-hover:bg-latte-900 transition-colors" aria-hidden="true">
              <span className="text-cream-50 font-display text-sm font-semibold">市</span>
            </div>
            <span className="font-display text-base font-semibold text-ink hidden sm:block tracking-tight">市集平台</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="btn-ghost text-sm" role="listitem">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Item 9: Search icon → focus homepage search bar */}
            <button
              className="btn-ghost p-2 rounded-lg"
              aria-label="搜尋市集"
              onClick={handleSearchClick}
            >
              <Search size={17} strokeWidth={1.8} aria-hidden="true" />
            </button>
            <Link href="/apply" className="btn-primary hidden md:inline-flex text-sm py-2 px-5">
              我要擺攤
            </Link>
            {/* Item 5: Hamburger with aria-expanded */}
            <button
              className="md:hidden btn-ghost p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? '關閉選單' : '開啟選單'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.8} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Item 5: Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-cream-200 animate-fade-up"
            role="navigation"
            aria-label="行動裝置選單"
          >
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
