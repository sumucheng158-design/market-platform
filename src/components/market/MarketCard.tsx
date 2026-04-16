import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, Flame } from 'lucide-react';
import type { Market } from '@/data/mockData';
import { categories } from '@/data/mockData';

interface MarketCardProps {
  market: Market;
  variant?: 'default' | 'compact' | 'featured';
}

function formatDate(date: string, endDate?: string): string {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  if (endDate) {
    const e = new Date(endDate);
    return `${month}/${day} – ${e.getMonth() + 1}/${e.getDate()}`;
  }
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  return `${month}/${day}（${weekdays[d.getDay()]}）`;
}

function getCapacityPercent(registered: number, capacity: number): number {
  return Math.min(Math.round((registered / capacity) * 100), 100);
}

export default function MarketCard({ market, variant = 'default' }: MarketCardProps) {
  const mainCategory = categories.find((c) => c.slug === market.categories[0]);
  const pct = getCapacityPercent(market.registered, market.capacity);

  if (variant === 'compact') {
    return (
      <Link href={`/markets/${market.id}`} className="card flex gap-4 p-4 group">
        <div className="relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden">
          <Image src={market.coverImage} alt={market.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-sm font-semibold text-ink line-clamp-1">{market.name}</h3>
          <div className="flex items-center gap-1 mt-1 text-xs text-latte-500">
            <Calendar size={11} />
            <span>{formatDate(market.date, market.endDate)}</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5 text-xs text-latte-500">
            <MapPin size={11} />
            <span className="line-clamp-1">{market.location}</span>
          </div>
        </div>
        {market.hot && (
          <div className="flex-shrink-0 flex items-center gap-1 text-orange-500 text-xs font-medium">
            <Flame size={14} />
          </div>
        )}
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link href={`/markets/${market.id}`} className="group relative rounded-3xl overflow-hidden shadow-warm-lg block h-[480px]">
        <Image
          src={market.coverImage}
          alt={market.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-2 mb-3">
            {market.hot && (
              <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                <Flame size={11} /> 熱門
              </span>
            )}
            {mainCategory && (
              <span className={`tag ${mainCategory.color}`}>{mainCategory.icon} {mainCategory.name}</span>
            )}
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-2">{market.name}</h2>
          <p className="text-white/80 text-sm mb-4 line-clamp-2">{market.tagline}</p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} />{formatDate(market.date, market.endDate)}</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} />{market.location}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link href={`/markets/${market.id}`} className="card group block">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={market.coverImage}
          alt={market.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {market.hot && (
            <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
              <Flame size={10} /> 熱門
            </span>
          )}
          {market.admissionFee === 0 && (
            <span className="bg-sage-300 text-sage-500 text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">免費入場</span>
          )}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base font-semibold text-ink line-clamp-1">{market.name}</h3>
          {mainCategory && (
            <span className={`tag flex-shrink-0 ${mainCategory.color}`}>{mainCategory.icon}</span>
          )}
        </div>
        <p className="text-xs text-latte-500 line-clamp-2 mb-4 leading-relaxed">{market.tagline}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-latte-600">
            <Calendar size={13} className="flex-shrink-0 text-latte-400" />
            <span>{formatDate(market.date, market.endDate)} {market.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-latte-600">
            <MapPin size={13} className="flex-shrink-0 text-latte-400" />
            <span className="line-clamp-1">{market.location}，{market.address.split('市')[0]}市</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-latte-600">
            <Users size={13} className="flex-shrink-0 text-latte-400" />
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-cream-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-latte-500 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-latte-400">{pct}%</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {market.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag text-xs"># {tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
