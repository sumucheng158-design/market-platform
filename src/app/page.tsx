import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import MarketCard from '@/components/market/MarketCard';
import VendorCard from '@/components/vendor/VendorCard';
import {
  markets, vendors, categories, regions,
  getFeaturedMarkets, getHotMarkets
} from '@/data/mockData';

export const metadata: Metadata = {
  title: '市集 — 發現台灣最美好的市集活動',
  description: '整合台灣各地市集活動資訊、攤商介紹與報名系統。每個週末，找到讓你想出門的理由。',
};

export default function HomePage() {
  const hotMarkets = getHotMarkets();
  const featuredMarkets = getFeaturedMarkets();
  const featuredVendors = vendors.filter((v) => v.featured);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-latte-900 to-latte-800 text-cream-50 grain-overlay">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=60"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative container-base py-24 md:py-36 z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cream-100/10 border border-cream-100/20 text-cream-200 text-xs px-4 py-2 rounded-full mb-6 animate-fade-up">
              <Sparkles size={12} />
              <span>台灣最大市集資訊平台</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-6 animate-fade-up delay-100">
              在市集裡，<br />
              找到生活的<br />
              <span className="text-cream-300">溫度</span>
            </h1>
            <p className="text-cream-300 text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
              手作、美食、古物、文創──每個週末，全台灣最精彩的市集活動都在這裡。
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link href="/markets" className="btn-primary bg-cream-200 text-latte-900 hover:bg-cream-50">
                探索市集 <ArrowRight size={16} />
              </Link>
              <Link href="/apply" className="btn-secondary bg-transparent border-cream-300/30 text-cream-200 hover:bg-cream-100/10">
                申請擺攤
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Pills ── */}
      <section className="container-base py-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <Link href="/markets" className="flex-shrink-0 btn-secondary text-xs py-2 px-4">全部</Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/markets?category=${cat.slug}`}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-medium border border-transparent hover:border-latte-300 transition-all ${cat.color}`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Hot Markets ── */}
      <section className="container-base pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">🔥 本週熱門市集</h2>
            <p className="section-subtitle">人氣最旺、最多人關注的市集活動</p>
          </div>
          <Link href="/markets" className="btn-ghost text-sm hidden sm:flex">
            查看全部 <ArrowRight size={15} />
          </Link>
        </div>
        {hotMarkets.length > 0 && (
          <div className="grid gap-6">
            <MarketCard market={hotMarkets[0]} variant="featured" />
            {hotMarkets.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {hotMarkets.slice(1, 3).map((m) => (
                  <MarketCard key={m.id} market={m} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── Region Filter ── */}
      <section className="bg-cream-100 py-12">
        <div className="container-base">
          <h2 className="section-title mb-2">📍 依地區找市集</h2>
          <p className="section-subtitle mb-8">選擇你的城市，找到附近的好市集</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={`/markets?region=${region.slug}`}
                className="card p-4 text-center hover:bg-latte-700 hover:text-cream-50 group transition-colors duration-200"
              >
                <div className="text-2xl mb-2">
                  {region.slug === 'taipei' ? '🏙️' :
                   region.slug === 'taichung' ? '🌳' :
                   region.slug === 'tainan' ? '🏛️' :
                   region.slug === 'kaohsiung' ? '🌊' :
                   region.slug === 'hsinchu' ? '💨' : '🌺'}
                </div>
                <div className="text-sm font-medium text-ink group-hover:text-cream-50 transition-colors">{region.name}</div>
                <div className="text-xs text-latte-400 group-hover:text-cream-200 transition-colors mt-0.5">
                  {markets.filter((m) => m.region === region.slug).length} 場
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Markets ── */}
      <section className="container-base py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">📅 最新市集</h2>
            <p className="section-subtitle">即將到來的精彩活動，趕快排進行事曆</p>
          </div>
          <Link href="/markets" className="btn-ghost text-sm hidden sm:flex">
            查看全部 <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.slice(0, 6).map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/markets" className="btn-secondary">
            看更多市集 <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Featured Vendors ── */}
      <section className="bg-latte-900 py-16 relative overflow-hidden grain-overlay">
        <div className="container-base relative z-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title text-cream-100">✨ 精選攤商</h2>
              <p className="text-latte-400 text-sm">認識這些讓市集更有靈魂的創作者</p>
            </div>
            <Link href="/vendors" className="btn-ghost text-cream-300 hover:bg-latte-700 text-sm hidden sm:flex">
              看所有攤商 <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="container-base py-20">
        <div className="bg-gradient-to-br from-latte-100 to-cream-200 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cream-300/40 rounded-full -translate-y-12 translate-x-12 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage-200/40 rounded-full translate-y-8 -translate-x-8 blur-2xl" />
          <div className="relative z-10">
            <span className="text-3xl mb-4 block">🌿</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              想在市集擺攤？
            </h2>
            <p className="text-latte-600 mb-8 max-w-md mx-auto text-base">
              無論你是手作職人、獨立品牌或是美食達人，我們都歡迎你帶著故事來市集。
            </p>
            <Link href="/apply" className="btn-primary text-base px-8 py-4">
              立即申請攤位 <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
