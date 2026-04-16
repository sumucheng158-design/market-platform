import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, Globe, ArrowLeft, Calendar } from 'lucide-react';
import { getVendorById, getMarketsByVendor, categories, vendors } from '@/data/mockData';
import MarketCard from '@/components/market/MarketCard';

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return vendors.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const vendor = getVendorById(params.id);
  if (!vendor) return {};
  return {
    title: vendor.name,
    description: vendor.description,
    openGraph: { images: [{ url: vendor.coverImage }] },
  };
}

export default function VendorDetailPage({ params }: Props) {
  const vendor = getVendorById(params.id);
  if (!vendor) notFound();

  const participatedMarkets = getMarketsByVendor(vendor.id);
  const category = categories.find((c) => c.slug === vendor.category);

  return (
    <div>
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image src={vendor.coverImage} alt={vendor.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute top-6 left-0 right-0">
          <div className="container-base">
            <Link href="/vendors" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm bg-black/20 backdrop-blur-sm px-3 py-2 rounded-xl transition-colors">
              <ArrowLeft size={14} strokeWidth={2} /> 返回攤商列表
            </Link>
          </div>
        </div>
      </div>

      <div className="container-base py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-card -mt-16 bg-cream-100">
                  <Image src={vendor.coverImage} alt={vendor.name} fill className="object-cover" />
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="font-display text-2xl md:text-3xl font-semibold text-ink">{vendor.name}</h1>
                    {vendor.featured && (
                      <span className="tag bg-latte-700 text-cream-50 text-xs">精選</span>
                    )}
                  </div>
                  {category && (
                    <span className={`tag text-xs ${category.color} ${category.textColor}`}>{category.name}</span>
                  )}
                </div>
              </div>
              <p className="text-latte-700 leading-loose">{vendor.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {vendor.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </section>

            {vendor.images.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink mb-4">商品圖片</h2>
                <div className="grid grid-cols-2 gap-3">
                  {vendor.images.map((img, i) => (
                    <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-64' : 'h-44'}`}>
                      <Image src={img} alt={`${vendor.name} 商品 ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {participatedMarkets.length > 0 && (
              <section>
                <h2 className="font-display text-xl font-semibold text-ink mb-2">曾參加的市集</h2>
                <p className="text-sm text-latte-500 mb-6">在這些市集都可以找到 {vendor.name}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {participatedMarkets.map((market) => (
                    <MarketCard key={market.id} market={market} variant="compact" />
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            <div className="card p-6 sticky top-20">
              <h3 className="font-display text-base font-semibold text-ink mb-5">聯絡資訊</h3>
              <div className="space-y-3">
                {vendor.instagram && (
                  <a
                    href={`https://instagram.com/${vendor.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Instagram size={15} strokeWidth={1.8} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-latte-400">Instagram</p>
                      <p className="text-sm font-medium text-ink">{vendor.instagram}</p>
                    </div>
                  </a>
                )}
                {vendor.contact && (
                  <a
                    href={`mailto:${vendor.contact}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100 hover:bg-cream-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-latte-100 flex items-center justify-center flex-shrink-0">
                      <Mail size={15} strokeWidth={1.8} className="text-latte-600" />
                    </div>
                    <div>
                      <p className="text-xs text-latte-400">Email</p>
                      <p className="text-sm font-medium text-ink">{vendor.contact}</p>
                    </div>
                  </a>
                )}
                {vendor.website && (
                  <a
                    href={vendor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100 hover:bg-cream-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-latte-100 flex items-center justify-center flex-shrink-0">
                      <Globe size={15} strokeWidth={1.8} className="text-latte-600" />
                    </div>
                    <div>
                      <p className="text-xs text-latte-400">官方網站</p>
                      <p className="text-sm font-medium text-ink truncate">{vendor.website}</p>
                    </div>
                  </a>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-cream-200">
                <div className="flex items-center gap-2 text-xs text-latte-400 mb-3">
                  <Calendar size={12} strokeWidth={1.8} />
                  <span>參加過 {participatedMarkets.length} 場市集</span>
                </div>
                <Link href="/apply" className="btn-primary w-full justify-center text-sm">
                  申請下次擺攤
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
