import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-base py-32 text-center">
      <div className="text-6xl mb-6">🌿</div>
      <h1 className="font-display text-4xl font-semibold text-ink mb-4">找不到頁面</h1>
      <p className="text-latte-500 mb-10 max-w-md mx-auto">
        這個頁面似乎已經消失了，就像市集結束後散去的攤位一樣。
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">回到首頁</Link>
        <Link href="/markets" className="btn-secondary">探索市集</Link>
      </div>
    </div>
  );
}
