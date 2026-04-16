export const dynamic = "force-dynamic";
import type { Metadata } from 'next';
import MarketCard from '@/components/market/MarketCard';
import { markets, categories, regions } from '@/data/mockData';
import MarketFilters from './MarketFilters';

export const metadata: Metadata = {
  title: '所有市集',
  description: '探索台灣各地的市集活動，依地區或類型篩選，找到最適合你的市集體驗。',
};

export default function MarketsPage({
  searchParams,
}: {
  searchParams: { category?: string; region?: string };
}) {
  const { category, region } = searchParams;

  const filtered = markets.filter((m) => {
    if (category && !m.categories.includes(category)) return false;
    if (region && m.region !== region) return false;
    return true;
  });

  return (
    <div className="container-base py-10">
      <div className="mb-10">
        <h1 className="section-title text-3xl md:text-4xl mb-2">探索市集</h1>
        <p className="section-subtitle">找到你的下一個週末好去處</p>
      </div>

      <MarketFilters
        categories={categories}
        regions={regions}
        selectedCategory={category}
        selectedRegion={region}
      />

      <div className="flex items-center justify-between mb-6 mt-8">
        <p className="text-sm text-latte-500">共 <span className="font-semibold text-ink">{filtered.length}</span> 個市集</p>
        {(category || region) && (
          <a href="/markets" className="text-xs text-latte-400 hover:text-ink underline underline-offset-2">清除篩選</a>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="flex items-center justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-latte-400" aria-hidden="true">
                <path d="M12 22V12 M12 12C12 7 7 3 3 3c0 4 3 8 9 9 M12 12c0-5 5-9 9-9-1 4-4 8-9 9" />
              </svg>
            </div>
          </div>
          <h3 className="font-display text-xl font-semibold text-ink mb-2">找不到符合的市集</h3>
          <p className="text-latte-500 text-sm">試試看調整篩選條件吧</p>
        </div>
      )}
    </div>
  );
}
