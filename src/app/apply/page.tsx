import type { Metadata } from 'next';
import ApplyForm from './ApplyForm';
import { CheckCircle2, Users, Calendar, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: '申請擺攤',
  description: '填寫申請表，加入台灣最活躍的市集社群，讓更多人認識你的品牌。',
};

const benefits = [
  {
    icon: <Users size={20} strokeWidth={1.6} className="text-latte-600" />,
    title: '觸及真實客群',
    desc: '每場市集吸引數百至數千名喜愛手作與文創的訪客',
  },
  {
    icon: <Calendar size={20} strokeWidth={1.6} className="text-latte-600" />,
    title: '固定週末檔期',
    desc: '穩定的出攤時間，讓你的品牌建立熟客與口碑',
  },
  {
    icon: <MapPin size={20} strokeWidth={1.6} className="text-latte-600" />,
    title: '精選地點場域',
    desc: '全台最優質的公園、園區與文化空間，打造理想的展售環境',
  },
  {
    icon: <CheckCircle2 size={20} strokeWidth={1.6} className="text-latte-600" />,
    title: '簡單快速申請',
    desc: '填寫表單後，3 個工作天內由專人與你確認出攤資訊',
  },
];

export default function ApplyPage() {
  return (
    <div className="container-base py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left col: intro */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="section-title text-3xl md:text-4xl mb-3">申請擺攤</h1>
            <p className="text-latte-600 leading-relaxed">
              無論你是剛起步的手作新手，還是已有口碑的品牌，我們都歡迎你帶著故事來市集。
            </p>
          </div>

          <div className="space-y-5">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-cream-100 border border-cream-200 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-ink mb-1">{b.title}</p>
                  <p className="text-xs text-latte-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cream-100 rounded-2xl p-6 border border-cream-200">
            <p className="font-display text-sm font-semibold text-ink mb-3">常見問題</p>
            <div className="space-y-3 text-xs text-latte-600 leading-relaxed">
              <p><span className="font-medium text-ink">攤位費用是多少？</span><br />依市集場地與規模而異，確認後由專員通知。</p>
              <p><span className="font-medium text-ink">可以只申請特定場次嗎？</span><br />可以，申請表中可填寫希望參加的市集。</p>
              <p><span className="font-medium text-ink">需要什麼審核資料？</span><br />品牌介紹與商品說明即可，不需要正式文件。</p>
            </div>
          </div>
        </div>

        {/* Right col: form */}
        <div className="lg:col-span-3">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
}
