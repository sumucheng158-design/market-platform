import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import MarketCard from '@/components/market/MarketCard';
import VendorCard from '@/components/vendor/VendorCard';
import {
  markets, vendors, categories, regions,
  getFeaturedMarkets, getHotMarkets,
} from '@/data/mockData';

export const metadata: Metadata = {
  title: '市集 — 發現台灣最美好的市集活動',
  description: '整合台灣各地市集活動資訊、攤商介紹與報名系統。每個週末，找到讓你想出門的理由。',
};

export default function HomePage() {
  const hotMarkets = getHotMarkets();
  const featuredVendors = vendors.filter((v) => v.featured);

  return (
    <div>

      {/* ══════════════════════════════════════════════════════
          HERO
          Items 1 (gradient overlay), 2 (font weight+shadow),
          3 (badge readable), 6 (clamp responsive), 8 (proof),
          11 (alt text), 12 (aria)
          ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden grain-overlay"
        style={{ minHeight: 'clamp(520px, 82vh, 860px)', display: 'flex', alignItems: 'center' }}
        aria-label="首頁主視覺"
      >
        {/* Item 11: Descriptive alt for decorative hero bg */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="台灣市集攤位展示服飾與手作商品的熱鬧場景"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Item 1: Strong gradient overlay — left dark → right light */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(108deg, rgba(28,16,6,0.82) 0%, rgba(28,16,6,0.62) 45%, rgba(28,16,6,0.18) 100%)',
          }}
        />

        {/* Warm grain sits on top of overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 1 }} />

        <div className="relative container-base py-24 md:py-36" style={{ zIndex: 2 }}>
          <div className="max-w-2xl">

            {/* Item 3: Platform badge — now high-contrast with backdrop */}
            <div
              className="inline-flex items-center gap-2 border text-xs px-4 py-2 rounded-full mb-6 animate-fade-up tracking-widest uppercase"
              style={{
                background: 'rgba(255,255,255,0.10)',
                borderColor: 'rgba(255,255,255,0.30)',
                backdropFilter: 'blur(8px)',
                color: 'rgba(255,255,255,0.95)',
              }}
              aria-label="台灣最大市集資訊平台"
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4a853' }} aria-hidden="true" />
              台灣最大市集資訊平台
            </div>

            {/* Item 2 & 6: Bold headline + text-shadow + clamp for RWD */}
            <h1
              className="font-display font-bold leading-tight mb-6 animate-fade-up delay-100"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
                color: '#ffffff',
                textShadow: '0 2px 24px rgba(0,0,0,0.45)',
              }}
            >
              在市集裡，<br />
              找到生活的<br />
              <em
                className="not-italic"
                style={{
                  color: '#d4a853',
                  textShadow: '0 2px 24px rgba(0,0,0,0.45), 0 0 40px rgba(212,168,83,0.25)',
                }}
              >
                溫度
              </em>
            </h1>

            {/* Item 3: Subtitle — max-width + text-shadow, never overlaps photo */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-200"
              style={{
                color: 'rgba(255,255,255,0.88)',
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}
            >
              手作、美食、古物、文創——每個週末，<br className="hidden sm:block" />
              全台灣最精彩的市集活動都在這裡。
            </p>

            {/* Item 7: CTA buttons — primary is gold for contrast */}
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="/markets"
                className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: '#d4a853',
                  color: '#2a1505',
                  boxShadow: '0 4px 20px rgba(212,168,83,0.4)',
                  fontSize: '0.925rem',
                }}
              >
                探索市集 <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.95)',
                  border: '1.5px solid rgba(255,255,255,0.40)',
                  backdropFilter: 'blur(4px)',
                  fontSize: '0.925rem',
                }}
              >
                申請擺攤
              </Link>
            </div>

            {/* Item 8: Social proof strip */}
            <div
              className="flex flex-wrap items-center gap-6 mt-10 pt-8 animate-fade-up delay-400"
              style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
              aria-label="平台統計數據"
            >
              {[
                { number: '500+', label: '收錄市集' },
                { number: '每週', label: '持續更新' },
                { number: '22', label: '縣市涵蓋' },
                { number: '3k+', label: '攤商夥伴' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="font-display font-bold leading-none"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)', color: '#ffffff', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
                  >
                    {item.number}
                  </span>
                  <span className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.60)', letterSpacing: '0.03em' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SEARCH BAR — Item 9
          ══════════════════════════════════════════════════════ */}
      <section className="container-base pt-8 pb-2" aria-label="市集搜尋">
        <div
          className="flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-all duration-200"
          style={{
            background: '#ffffff',
            border: '1.5px solid #dccbb5',
            boxShadow: '0 4px 20px rgba(122,79,40,0.08)',
            maxWidth: 680,
            margin: '0 auto',
          }}
          role="search"
        >
          <Search size={19} strokeWidth={1.8} className="text-latte-400 flex-shrink-0" aria-hidden="true" />
          <input
            id="hero-search-input"
            type="search"
            placeholder="搜尋市集名稱、地區、類型…"
            aria-label="搜尋市集"
            className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-latte-400"
            style={{ fontFamily: 'var(--font-body)' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const q = (e.target as HTMLInputElement).value.trim();
                if (q) window.location.href = `/markets?q=${encodeURIComponent(q)}`;
              }
            }}
          />
          <a
            href="/markets"
            className="flex-shrink-0 text-xs font-semibold px-4 py-2 rounded-xl transition-colors duration-200"
            style={{ background: '#604830', color: '#fdfaf5' }}
          >
            搜尋
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CATEGORY QUICK NAV — Item 10
          ══════════════════════════════════════════════════════ */}
      <section className="container-base py-5" aria-label="市集分類篩選">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-hide" role="list">
          <Link
            href="/markets"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#604830', color: '#fdfaf5', borderColor: '#604830', boxShadow: '0 3px 10px rgba(96,72,48,0.2)' }}
            role="listitem"
          >
            ✨ 全部
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/markets?category=${cat.slug}`}
              className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-transparent hover:border-latte-200 hover:-translate-y-0.5 transition-all duration-200 ${cat.color} ${cat.textColor}`}
              role="listitem"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={cat.iconPath} />
              </svg>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOT MARKETS
          ══════════════════════════════════════════════════════ */}
      <section className="container-base pb-16" aria-labelledby="hot-markets-title">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title" id="hot-markets-title">本週熱門市集</h2>
            <p className="section-subtitle">人氣最旺、最多人關注的市集活動</p>
          </div>
          <Link href="/markets" className="btn-ghost text-sm hidden sm:flex" aria-label="查看全部市集">
            查看全部 <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
        {hotMarkets.length > 0 && (
          <div className="grid gap-5">
            <MarketCard market={hotMarkets[0]} variant="featured" />
            {hotMarkets.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {hotMarkets.slice(1, 3).map((m) => (
                  <MarketCard key={m.id} market={m} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Region Filter */}
      <section className="bg-cream-100 py-14" aria-labelledby="region-title">
        <div className="container-base">
          <h2 className="section-title mb-1" id="region-title">依地區找市集</h2>
          <p className="section-subtitle mb-8">選擇你的城市，找到附近的好市集</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {regions.map((region) => (
              <Link
                key={region.id}
                href={`/markets?region=${region.slug}`}
                className="card p-5 text-center hover:bg-latte-800 hover:text-cream-50 group transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2.5">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-latte-400 group-hover:text-cream-200 transition-colors" aria-hidden="true">
                    <path d={region.iconPath} />
                  </svg>
                </div>
                <div className="text-sm font-medium text-ink group-hover:text-cream-50 transition-colors">{region.name}</div>
                <div className="text-xs text-latte-400 group-hover:text-cream-300 transition-colors mt-0.5">
                  {markets.filter((m) => m.region === region.slug).length} 場
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Markets */}
      <section className="container-base py-16" aria-labelledby="upcoming-title">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title" id="upcoming-title">最新市集</h2>
            <p className="section-subtitle">即將到來的精彩活動，趕快排進行事曆</p>
          </div>
          <Link href="/markets" className="btn-ghost text-sm hidden sm:flex" aria-label="查看全部市集">
            查看全部 <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.slice(0, 6).map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/markets" className="btn-secondary">
            看更多市集 <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="bg-latte-900 py-16 relative overflow-hidden grain-overlay" aria-labelledby="vendors-title">
        <div className="container-base relative z-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title text-cream-100" id="vendors-title">精選攤商</h2>
              <p className="text-latte-400 text-sm">認識這些讓市集更有靈魂的創作者</p>
            </div>
            <Link href="/vendors" className="btn-ghost text-cream-300 hover:bg-latte-700 text-sm hidden sm:flex" aria-label="查看所有攤商">
              看所有攤商 <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} dark />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER — Item 7: Strong dark CTA
          ══════════════════════════════════════════════════════ */}
      <section className="container-base py-20" aria-label="申請攤位">
        <div
          className="rounded-3xl p-10 md:p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #453323 0%, #604830 50%, #7d5e3f 100%)',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-20 translate-x-20 pointer-events-none" style={{ background: 'rgba(255,255,255,0.04)' }} aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-12 -translate-x-12 pointer-events-none" style={{ background: 'rgba(212,168,83,0.08)' }} aria-hidden="true" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>攤商招募中</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight" style={{ color: '#ffffff' }}>
                想在市集擺攤？
              </h2>
              <p className="text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.72)' }}>
                無論你是手作職人、獨立品牌或是美食達人，<br className="hidden md:block" />
                我們都歡迎你帶著故事來市集。
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: '#d4a853',
                  color: '#2a1505',
                  boxShadow: '0 6px 24px rgba(212,168,83,0.35)',
                  fontSize: '1rem',
                }}
              >
                立即申請攤位 <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
