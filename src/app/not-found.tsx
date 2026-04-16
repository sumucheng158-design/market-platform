import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-base py-32 text-center">
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-cream-100 border border-cream-200 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-latte-400" aria-hidden="true">
            <path d="M12 22V12 M12 12C12 7 7 3 3 3c0 4 3 8 9 9 M12 12c0-5 5-9 9-9-1 4-4 8-9 9" />
          </svg>
        </div>
      </div>
      <h1 className="font-display text-4xl font-semibold text-ink mb-4">找不到頁面</h1>
      <p className="text-latte-500 mb-8 max-w-sm mx-auto">
        這個頁面似乎已經消失了，就像市集結束後散去的攤位一樣。
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">回到首頁</Link>
        <Link href="/markets" className="btn-secondary">探索市集</Link>
      </div>
    </div>
  );
}
