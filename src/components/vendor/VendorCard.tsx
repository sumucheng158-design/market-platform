import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { Vendor } from '@/data/mockData';
import { categories } from '@/data/mockData';

interface VendorCardProps {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const category = categories.find((c) => c.slug === vendor.category);

  return (
    <Link href={`/vendors/${vendor.id}`} className="card group block">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={vendor.coverImage}
          alt={vendor.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {vendor.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-latte-700 text-cream-100 text-xs px-3 py-1 rounded-full font-medium">精選攤商</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base font-semibold text-ink">{vendor.name}</h3>
          {category && (
            <span className={`tag flex-shrink-0 text-xs ${category.color}`}>{category.icon} {category.name}</span>
          )}
        </div>
        <p className="text-xs text-latte-500 line-clamp-2 mb-4 leading-relaxed">{vendor.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {vendor.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag text-xs">{tag}</span>
            ))}
          </div>
          {vendor.instagram && (
            <div className="flex items-center gap-1 text-xs text-latte-400">
              <Instagram size={12} />
              <span>{vendor.instagram}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
