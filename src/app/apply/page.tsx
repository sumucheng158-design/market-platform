import type { Metadata } from 'next';
import ApplyForm from './ApplyForm';

export const metadata: Metadata = {
  title: '申請擺攤',
  description: '加入市集攤商行列，帶著你的作品與故事，在市集與更多人相遇。',
};

export default function ApplyPage() {
  return (
    <div className="container-base py-16 max-w-3xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-5">🌿</div>
        <h1 className="section-title text-3xl md:text-4xl mb-3">申請擺攤</h1>
        <p className="text-latte-500 max-w-lg mx-auto leading-relaxed">
          無論你是手作職人、獨立食品品牌，或是有故事的二手賣家，<br />
          都歡迎來市集和更多人相遇。
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { step: '01', title: '填寫資料', desc: '告訴我們你是誰' },
          { step: '02', title: '等待審核', desc: '3 個工作天內回覆' },
          { step: '03', title: '確認參加', desc: '繳費並完成報名' },
        ].map((item) => (
          <div key={item.step} className="text-center p-4 rounded-2xl bg-cream-100">
            <div className="font-display text-2xl font-semibold text-latte-300 mb-2">{item.step}</div>
            <div className="text-sm font-semibold text-ink mb-1">{item.title}</div>
            <div className="text-xs text-latte-400">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Form */}
      <ApplyForm />
    </div>
  );
}
