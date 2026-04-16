import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { articles } from '@/data/mockData';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.coverImage }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.id !== article.id && a.tags.some((t) => article.tags.includes(t)))
    .slice(0, 2);

  return (
    <div>
      <div className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute top-6 left-0 right-0">
          <div className="container-base">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm bg-black/20 backdrop-blur-sm px-3 py-2 rounded-xl transition-colors">
              <ArrowLeft size={14} strokeWidth={2} /> 返回文章列表
            </Link>
          </div>
        </div>
      </div>

      <div className="container-base py-10 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-5">
          {article.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink leading-snug mb-5">
          {article.title}
        </h1>

        <div className="flex items-center gap-5 text-sm text-latte-400 mb-10 pb-8 border-b border-cream-200">
          <span className="font-medium text-latte-600">{article.author}</span>
          <span className="flex items-center gap-1.5"><Calendar size={13} strokeWidth={1.8} />{article.publishedAt}</span>
          <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.8} />{article.readTime} 分鐘閱讀</span>
        </div>

        <p className="text-latte-700 text-lg leading-loose mb-8 font-medium">{article.excerpt}</p>

        <div className="space-y-6 text-latte-700 leading-loose">
          <p>
            台灣的市集文化在過去十年間蓬勃發展，從早期零星的跳蚤市場，到現在每個週末在各大城市舉行的精緻文創市集，這股風潮反映了台灣人對於慢生活的渴望，以及對在地職人手作的重視。
          </p>
          <h2 className="font-display text-xl font-semibold text-ink pt-4">市集的魅力所在</h2>
          <p>
            不同於電商購物的便利快速，市集的吸引力來自於「當下的相遇」。當你在市集中停下腳步，親手觸摸一件陶碗，聽著攤主娓娓道來它的製作過程，那一刻的溫度是任何網路圖片都無法傳遞的。
          </p>
          <div className="relative h-64 rounded-3xl overflow-hidden my-8">
            <Image src={article.coverImage} alt="文章圖片" fill className="object-cover" />
          </div>
          <h2 className="font-display text-xl font-semibold text-ink pt-4">如何找到好市集</h2>
          <p>
            選擇市集最重要的是「主題契合度」。如果你熱愛手作工藝，可以尋找強調職人精神的文創市集；若是美食愛好者，則可以關注以在地食材與小農產品為主的農夫市集；喜歡翻尋舊物的你，古著與古物市集絕對是周末最好的去處。
          </p>
          <p>
            除此之外，時間與地點的便利性也很重要。許多市集選在交通便利的公園或文創園區舉行，週末帶著輕便的袋子出門，就能展開一段愉快的市集之旅。
          </p>
          <div className="bg-cream-100 border border-cream-200 rounded-3xl p-8 my-8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-latte-500" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 7v3l2 2" />
                </svg>
              </div>
              <p className="font-display text-base font-semibold text-ink">小提醒</p>
            </div>
            <p className="text-sm text-latte-600 leading-relaxed">
              市集通常在戶外舉行，建議提前確認天氣，並攜帶環保購物袋。部分熱門攤商商品有限，建議早點到場！
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link key={tag} href={`/blog?tag=${tag}`} className="tag hover:bg-latte-700 hover:text-cream-50 transition-colors inline-flex items-center gap-1">
              <Tag size={11} strokeWidth={1.8} /> {tag}
            </Link>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-cream-100 mt-16 py-16">
          <div className="container-base">
            <h2 className="section-title mb-8">相關文章</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((a) => (
                <Link key={a.id} href={`/blog/${a.slug}`} className="card group flex gap-4 p-4">
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden">
                    <Image src={a.coverImage} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm font-semibold text-ink line-clamp-2 mb-2 group-hover:text-latte-700 transition-colors">{a.title}</h3>
                    <p className="text-xs text-latte-400">{a.author} · {a.readTime} 分鐘</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
