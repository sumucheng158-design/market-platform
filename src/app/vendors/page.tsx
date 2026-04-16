import type { Metadata } from 'next';
import VendorCard from '@/components/vendor/VendorCard';
import { vendors, categories } from '@/data/mockData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '攤商專區',
  description: '認識在台灣市集中販售獨特商品的職人與品牌，從手作陶藝到精品咖啡，都在這裡。',
};

export default function VendorsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const { category } = searchParams;
  const filtered = category ? vendors.filter((v) => v.category === category) : vendors;

  return (
    <div className="container-base py-10">
      <div className="mb-10">
        <h1 className="section-title text-3xl md:text-4xl mb-2">攤商專區</h1>
        <p className="section-subtitle">認識那些讓市集更有溫度的職人們</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/vendors"
          className={`tag transition-all ${!category ? 'bg-latte-700 text-cream-50' : 'hover:bg-cream-200'}`}
        >
          全部
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/vendors?category=${cat.slug}`}
            className={`tag transition-all ${category === cat.slug ? 'bg-latte-700 text-cream-50' : `${cat.color} hover:opacity-80`}`}
          >
            {cat.icon} {cat.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}
