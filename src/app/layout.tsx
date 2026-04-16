import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: '市集 — 發現台灣最美好的市集活動',
    template: '%s | 市集平台',
  },
  description: '整合台灣各地市集活動資訊、攤商介紹與報名系統。找到你最愛的手作、美食、文創市集。',
  keywords: ['市集', '台北市集', '台中市集', '手作市集', '文創市集', '美食市集'],
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://ichiji.tw',
    siteName: '市集平台',
    title: '市集 — 發現台灣最美好的市集活動',
    description: '整合台灣各地市集活動資訊、攤商介紹與報名系統。',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
