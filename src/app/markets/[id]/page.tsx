import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar, MapPin, Clock, Users, Tag, ExternalLink, Heart,
  Share2, ArrowLeft, Ticket
} from 'lucide-react';
import { getMarketById, getVendorsByMarket, categories, markets } from '@/data/mockData';
import VendorCard from '@/components/vendor/VendorCard';

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return markets.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const market = getMarketById(params.id);
  if (!market) return {};
  return {
    title: market.name,
    description: market.description,
    openGraph: { images: [{ url: market.coverImage }] },
  };
}

export default function MarketDetailPage({ params }: Props) {
  const market = getMarketById(params.id);
  if (!market) notFound();

  const vendors = getVendorsByMarket(market.id);
  const mainCategory = categories.find((c) => c.slug === market.categories[0]);
  const pct = Math.round((market.registered / market.capacity) * 100);

  const startDate = new Date(market.date);
  const dateStr = `${startDate.getFullYear()} 年 ${startDate.getMonth() + 1} 月 ${startDate.getDate()} 日`;

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={market.coverImage}
          alt={market.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-6 left-0 right-0">
          <div className="container-base">
            <Link href="/markets" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors bg-black/20 backdrop-blur-sm px-3 py-2 rounded-xl">
              <ArrowLeft size={14} /> 返回列表
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-base pb-8">
            <div className="flex items-center gap-2 mb-3">
              {mainCategory && (
                <span className={`tag ${mainCategory.color}`}>{mainCategory.icon} {mainCategory.name}</span>
              )}
              {market.admissionFee === 0 && (
                <span className="tag bg-sage-200 text-sage-500">免費入場</span>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-white mb-2 drop-shadow-sm">
              {market.name}
            </h1>
            <p className="text-white/80 text-base">{market.tagline}</p>
          </div>
        </div>
      </div>

      <div className="container-base py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <section>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">關於這個市集</h2>
              <p className="text-latte-700 leading-loose">{market.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {market.tags.map((tag) => (
                  <span key={tag} className="tag"># {tag}</span>
                ))}
              </div>
            </section>

            {/* Images */}
            {market.images.length > 1 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink mb-4">活動照片</h2>
                <div className="grid grid-cols-2 gap-3">
                  {market.images.slice(1).map((img, i) => (
                    <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
                      <Image src={img} alt={`${market.name} 照片 ${i + 2}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vendors */}
            {vendors.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink mb-2">本次攤商</h2>
                <p className="text-sm text-latte-500 mb-6">共 {vendors.length} 個攤位參與本次市集</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {vendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                  ))}
                </div>
              </section>
            )}

            {/* Map placeholder */}
            <section>
              <h2 className="font-display text-xl font-semibold text-ink mb-4">活動地點</h2>
              <div className="relative h-48 md:h-64 bg-cream-100 rounded-2xl overflow-hidden border border-cream-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-latte-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-ink">{market.location}</p>
                  <p className="text-xs text-latte-500 mt-1">{market.address}</p>
                  <a
                    href={market.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs mt-3 inline-flex"
                  >
                    在 Google Maps 開啟 <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Info Card */}
            <div className="card p-6 sticky top-20">
              <h3 className="font-display text-base font-semibold text-ink mb-5">活動資訊</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Calendar size={18} className="text-latte-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-latte-400">日期</p>
                    <p className="text-sm font-medium text-ink">{dateStr}</p>
                    {market.endDate && (
                      <p className="text-xs text-latte-500">
                        至 {new Date(market.endDate).getMonth() + 1}/{new Date(market.endDate).getDate()}（共兩天）
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock size={18} className="text-latte-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-latte-400">時間</p>
                    <p className="text-sm font-medium text-ink">{market.time}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="text-latte-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-latte-400">地點</p>
                    <p className="text-sm font-medium text-ink">{market.location}</p>
                    <p className="text-xs text-latte-500 mt-0.5">{market.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Ticket size={18} className="text-latte-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-latte-400">入場費</p>
                    <p className="text-sm font-medium text-ink">
                      {market.admissionFee === 0 ? '免費入場' : `NT$ ${market.admissionFee}`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users size={18} className="text-latte-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs text-latte-400">報名人數</p>
                    <p className="text-sm font-medium text-ink">{market.registered.toLocaleString()} / {market.capacity.toLocaleString()} 人</p>
                    <div className="mt-2 h-2 bg-cream-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-latte-500 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-xs text-latte-400 mt-1">剩餘 {market.capacity - market.registered} 個名額</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <Link href={`/apply?market=${market.id}`} className="btn-primary w-full justify-center">
                  立即報名
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <button className="btn-secondary flex items-center justify-center gap-2 py-2.5">
                    <Heart size={15} /> 收藏
                  </button>
                  <button className="btn-secondary flex items-center justify-center gap-2 py-2.5">
                    <Share2 size={15} /> 分享
                  </button>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-cream-200 text-xs text-latte-400">
                主辦單位：{market.organizer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
