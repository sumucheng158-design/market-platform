import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-latte-900 text-cream-200 mt-20">
      <div className="container-base py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-latte-700 rounded-lg flex items-center justify-center">
                <span className="text-cream-50 font-display text-sm font-semibold">市</span>
              </div>
              <span className="font-display text-base font-semibold text-cream-100 tracking-tight">市集平台</span>
            </div>
            <p className="text-sm text-latte-400 leading-relaxed max-w-xs">
              連結在地市集與職人，讓每個週末都有好事發生。發現台灣最真實的生活氣息。
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-latte-700 flex items-center justify-center hover:bg-latte-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} strokeWidth={1.8} />
              </a>
              <a
                href="mailto:hello@ichiji.tw"
                className="w-9 h-9 rounded-xl bg-latte-700 flex items-center justify-center hover:bg-latte-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={15} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-cream-300 mb-4 font-display tracking-widest uppercase">探索</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/markets', label: '所有市集' },
                { href: '/markets?category=food', label: '美食市集' },
                { href: '/markets?category=craft', label: '手作市集' },
                { href: '/markets?category=vintage', label: '古物市集' },
                { href: '/vendors', label: '攤商專區' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-latte-400 hover:text-cream-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-cream-300 mb-4 font-display tracking-widest uppercase">攤商</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/apply', label: '申請擺攤' },
                { href: '/blog', label: '市集文章' },
                { href: '/about', label: '關於我們' },
                { href: '/contact', label: '聯絡我們' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-latte-400 hover:text-cream-200 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-latte-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-latte-500">© 2025 市集平台. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-latte-500">
            <MapPin size={11} strokeWidth={1.8} />
            <span>Made in Taiwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
