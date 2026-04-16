import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from '@/data/mockData';

export const metadata: Metadata = {
  title: '市集文章',
  description: '台北市集推薦、職人專訪、市集攻略，找到你的下一個市集靈感。',
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="container-base py-10">
      <div className="mb-10">
        <h1 className="section-title text-3xl md:text-4xl mb-2">市集誌</h1>
        <p className="section-subtitle">職人故事、市集攻略、生活靈感</p>
      </div>

      {/* Featured Article */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-64 md:h-auto min-h-[280px]">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                {featured.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4 leading-snug group-hover:text-latte-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-latte-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-latte-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {featured.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime} 分鐘閱讀
                  </span>
                </div>
                <span className="text-xs font-medium text-latte-600 flex items-center gap-1">
                  閱讀全文 <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <Link key={article.id} href={`/blog/${article.slug}`} className="card group block">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
              <h3 className="font-display text-base font-semibold text-ink mb-2 line-clamp-2 group-hover:text-latte-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-latte-400 line-clamp-2 mb-4 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-latte-400">
                <span>{article.author}</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {article.readTime} 分鐘
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO-friendly category section */}
      <section className="mt-16 p-8 bg-cream-100 rounded-3xl">
        <h2 className="font-display text-xl font-semibold text-ink mb-6">熱門主題</h2>
        <div className="flex flex-wrap gap-3">
          {['台北市集', '台中市集', '台南市集', '手作市集', '美食市集', '古物市集', '職人專訪', '週末活動', '文創市集'].map((topic) => (
            <Link
              key={topic}
              href={`/blog?tag=${encodeURIComponent(topic)}`}
              className="tag text-sm hover:bg-latte-700 hover:text-cream-50 transition-colors py-2 px-4"
            >
              {topic}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
