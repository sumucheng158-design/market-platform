import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { Vendor } from '@/data/mockData';
import { categories } from '@/data/mockData';

interface VendorCardProps {
  vendor: Vendor;
  dark?: boolean;
}

export default function VendorCard({ vendor, dark = false }: VendorCardProps) {
  const category = categories.find((c) => c.slug === vendor.category);

  return (
    <Link href={`/vendors/${vendor.id}`} className={`group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${dark ? 'bg-white/6 border border-white/8 hover:bg-white/10' : 'bg-white shadow-card hover:shadow-card-hover border border-cream-100'}`}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vendor.coverImage}
          alt={vendor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {vendor.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-latte-800/85 text-cream-100 text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              精選攤商
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className={`font-display text-base font-semibold line-clamp-1 ${dark ? 'text-cream-100' : 'text-ink'}`}>
            {vendor.name}
          </h3>
          {category && (
            <span className={`tag flex-shrink-0 text-xs ${dark ? 'bg-white/10 text-cream-300' : `${category.color} ${category.textColor}`}`}>
              {category.name}
            </span>
          )}
        </div>
        <p className={`text-xs line-clamp-2 mb-4 leading-relaxed ${dark ? 'text-latte-300' : 'text-latte-500'}`}>
          {vendor.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {vendor.tags.slice(0, 2).map((tag) => (
              <span key={tag} className={`tag text-xs ${dark ? 'bg-white/8 text-cream-400' : ''}`}>{tag}</span>
            ))}
          </div>
          {vendor.instagram && (
            <div className={`flex items-center gap-1 text-xs ${dark ? 'text-latte-400' : 'text-latte-400'}`}>
              <Instagram size={11} strokeWidth={1.8} />
              <span>{vendor.instagram}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
