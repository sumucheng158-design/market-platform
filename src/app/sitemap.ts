import { MetadataRoute } from 'next';
import { markets, vendors, articles } from '@/data/mockData';

const BASE_URL = 'https://ichiji.tw';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${BASE_URL}/markets`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${BASE_URL}/vendors`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${BASE_URL}/apply`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];

  const marketRoutes = markets.map((m) => ({
    url: `${BASE_URL}/markets/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const vendorRoutes = vendors.map((v) => ({
    url: `${BASE_URL}/vendors/${v.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...marketRoutes, ...vendorRoutes, ...articleRoutes];
}
