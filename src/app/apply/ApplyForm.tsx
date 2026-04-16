'use client';
import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { markets } from '@/data/mockData';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const PRODUCT_TYPES = [
  '手作工藝', '陶藝 / 器皿', '布料 / 織品', '文具 / 紙品',
  '美食 / 飲品', '烘焙甜點', '植物 / 花藝',
  '二手古物', '古著服飾', '藝術創作 / 插畫',
  '香氛 / 保養', '其他',
];

export default function ApplyForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    brandName: '',
    email: '',
    phone: '',
    instagram: '',
    productType: '',
    targetMarket: '',
    description: '',
    experience: '',
    agreeTerms: false,
  });

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = '請填寫姓名';
    if (!form.brandName.trim()) e.brandName = '請填寫品牌名稱';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = '請填寫正確的 Email';
    if (!form.phone.trim()) e.phone = '請填寫聯絡電話';
    if (!form.productType) e.productType = '請選擇商品類型';
    if (!form.description.trim()) e.description = '請填寫品牌介紹';
    if (!form.agreeTerms) e.agreeTerms = '請同意服務條款';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setState('loading');
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setState('success');
  }

  function handleChange(key: string, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  }

  if (state === 'success') {
    return (
      <div className="card p-10 text-center">
        <div className="w-16 h-16 bg-sage-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-sage-500" />
        </div>
        <h2 className="font-display text-2xl font-semibold text-ink mb-3">申請成功！</h2>
        <p className="text-latte-500 leading-relaxed mb-2">
          感謝你的申請，我們已收到 <strong className="text-ink">{form.brandName}</strong> 的資料。
        </p>
        <p className="text-latte-500 text-sm mb-8">
          我們會在 3 個工作天內透過 <strong className="text-ink">{form.email}</strong> 與你聯繫。
        </p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', brandName: '', email: '', phone: '', instagram: '', productType: '', targetMarket: '', description: '', experience: '', agreeTerms: false }); }}
          className="btn-secondary"
        >
          再次申請
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6">
      {/* Personal Info */}
      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink mb-5 pb-3 border-b border-cream-200 w-full">
          👤 申請人資料
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="姓名" error={errors.name} required>
            <input
              type="text"
              placeholder="王小明"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={inputCls(errors.name)}
            />
          </Field>
          <Field label="品牌 / 攤位名稱" error={errors.brandName} required>
            <input
              type="text"
              placeholder="山丘陶作"
              value={form.brandName}
              onChange={(e) => handleChange('brandName', e.target.value)}
              className={inputCls(errors.brandName)}
            />
          </Field>
          <Field label="Email" error={errors.email} required>
            <input
              type="email"
              placeholder="hello@brand.com"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={inputCls(errors.email)}
            />
          </Field>
          <Field label="聯絡電話" error={errors.phone} required>
            <input
              type="tel"
              placeholder="0912-345-678"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={inputCls(errors.phone)}
            />
          </Field>
          <Field label="Instagram 帳號" hint="選填">
            <input
              type="text"
              placeholder="@your.brand"
              value={form.instagram}
              onChange={(e) => handleChange('instagram', e.target.value)}
              className={inputCls()}
            />
          </Field>
        </div>
      </fieldset>

      {/* Brand Info */}
      <fieldset>
        <legend className="font-display text-lg font-semibold text-ink mb-5 pb-3 border-b border-cream-200 w-full">
          🛍️ 品牌資料
        </legend>
        <div className="space-y-5">
          <Field label="商品類型" error={errors.productType} required>
            <select
              value={form.productType}
              onChange={(e) => handleChange('productType', e.target.value)}
              className={inputCls(errors.productType)}
            >
              <option value="">請選擇商品類型</option>
              {PRODUCT_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="希望參加的市集" hint="選填">
            <select
              value={form.targetMarket}
              onChange={(e) => handleChange('targetMarket', e.target.value)}
              className={inputCls()}
            >
              <option value="">不指定 / 開放安排</option>
              {markets.map((m) => (
                <option key={m.id} value={m.id}>{m.name} — {m.date}</option>
              ))}
            </select>
          </Field>
          <Field label="品牌介紹" error={errors.description} required>
            <textarea
              rows={4}
              placeholder="請介紹你的品牌理念、商品特色，以及你為什麼想來市集..."
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className={inputCls(errors.description) + ' resize-none'}
            />
          </Field>
          <Field label="擺攤經驗" hint="選填">
            <textarea
              rows={3}
              placeholder="曾參加過哪些市集或活動？（若為新手也歡迎！）"
              value={form.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              className={inputCls() + ' resize-none'}
            />
          </Field>
        </div>
      </fieldset>

      {/* Terms */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.agreeTerms}
            onChange={(e) => handleChange('agreeTerms', e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-latte-700"
          />
          <span className="text-sm text-latte-600 leading-relaxed">
            我已閱讀並同意
            <a href="/terms" className="text-latte-800 underline underline-offset-2 mx-1">服務條款</a>
            與
            <a href="/privacy" className="text-latte-800 underline underline-offset-2 mx-1">隱私政策</a>
          </span>
        </label>
        {errors.agreeTerms && <p className="text-red-500 text-xs mt-1 ml-7">{errors.agreeTerms}</p>}
      </div>

      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn-primary w-full justify-center text-base py-4"
      >
        {state === 'loading' ? (
          <><Loader2 size={18} className="animate-spin" /> 送出中...</>
        ) : (
          <><Send size={16} /> 送出申請</>
        )}
      </button>
    </form>
  );
}

// ── Helpers ──────────────────────────────────────────

function inputCls(error?: string) {
  return `w-full px-4 py-3 rounded-2xl border text-sm text-ink placeholder:text-latte-300 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-latte-400 transition-shadow ${
    error ? 'border-red-300 bg-red-50/40' : 'border-cream-300 hover:border-latte-300'
  }`;
}

function Field({
  label,
  children,
  error,
  hint,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <label className="text-sm font-medium text-ink">
          {label}
          {required && <span className="text-red-400 ml-0.5">*</span>}
        </label>
        {hint && <span className="text-xs text-latte-400">（{hint}）</span>}
      </div>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
