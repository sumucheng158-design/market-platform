import type { Metadata } from 'next';
import { Noto_Serif_TC, Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
  preload: false,
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: '市集平台 — 發現台灣最美好的市集活動',
    template: '%s | 市集平台',
  },
  description: '整合台灣各地市集活動資訊、攤商介紹與報名系統。每個週末，找到讓你想出門的理由。',
  openGraph: {
    title: '市集平台',
    description: '發現台灣最美好的市集活動',
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${notoSerifTC.variable} ${notoSansTC.variable}`}>
      <body>
        {/* Item 11: Skip to main content for accessibility */}
        <a href="#main-content" className="skip-link">跳到主要內容</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
