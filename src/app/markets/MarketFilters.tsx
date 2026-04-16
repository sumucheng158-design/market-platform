'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import type { Category, Region } from '@/data/mockData';

interface Props {
  categories: Category[];
  regions: Region[];
  selectedCategory?: string;
  selectedRegion?: string;
}

export default function MarketFilters({ categories, regions, selectedCategory, selectedRegion }: Props) {
  const router = useRouter();

  function update(key: string, value: string | undefined) {
    const params = new URLSearchParams();
    if (key !== 'category' && selectedCategory) params.set('category', selectedCategory);
    if (key !== 'region' && selectedRegion) params.set('region', selectedRegion);
    if (value) params.set(key, value);
    router.push(`/markets?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div>
        <p className="text-xs font-semibold text-latte-600 uppercase tracking-wider mb-3">類型</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => update('category', undefined)}
            className={`tag transition-all ${!selectedCategory ? 'bg-latte-700 text-cream-50' : 'hover:bg-cream-200'}`}
          >
            全部
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => update('category', selectedCategory === cat.slug ? undefined : cat.slug)}
              className={`tag transition-all ${selectedCategory === cat.slug ? 'bg-latte-700 text-cream-50' : `${cat.color} hover:opacity-80`}`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Region Filter */}
      <div>
        <p className="text-xs font-semibold text-latte-600 uppercase tracking-wider mb-3">地區</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => update('region', undefined)}
            className={`tag transition-all ${!selectedRegion ? 'bg-latte-700 text-cream-50' : 'hover:bg-cream-200'}`}
          >
            全部地區
          </button>
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => update('region', selectedRegion === region.slug ? undefined : region.slug)}
              className={`tag transition-all ${selectedRegion === region.slug ? 'bg-latte-700 text-cream-50' : 'hover:bg-cream-200'}`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
