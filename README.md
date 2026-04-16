# 市集平台 — Market Platform

台灣市集活動資訊整合平台，結合市集資訊、攤商曝光與報名系統。

## ✨ 功能特色

- 🏠 **首頁** — 熱門市集、地區篩選、精選攤商
- 📅 **市集列表** — 依地區 / 類型篩選
- 🗺️ **市集詳細頁** — 攤商列表、地圖、報名
- 👤 **攤商頁** — 品牌介紹、商品圖、聯絡方式
- 📝 **申請擺攤** — 完整表單驗證
- 📰 **文章頁** — SEO 優化市集指南

## 🚀 快速開始

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 📦 技術棧

- **框架**: Next.js 14 (App Router)
- **樣式**: Tailwind CSS
- **語言**: TypeScript
- **部署**: Vercel

## 🗂️ 專案結構

```
src/
├── app/                    # App Router 頁面
│   ├── page.tsx            # 首頁
│   ├── markets/            # 市集列表 + 詳細
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── vendors/            # 攤商列表 + 詳細
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── apply/              # 申請擺攤
│   │   ├── page.tsx
│   │   └── ApplyForm.tsx
│   ├── blog/               # 文章
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── layout.tsx          # 根 Layout
│   ├── globals.css         # 全域樣式
│   ├── sitemap.ts          # SEO Sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── market/             # MarketCard
│   └── vendor/             # VendorCard
└── data/
    └── mockData.ts         # Mock 資料 + 型別定義
```

## 🔧 擴充建議

### 串接真實資料

**Airtable**:
```bash
npm install airtable
```

**Notion API**:
```bash
npm install @notionhq/client
```

### 進階功能

| 功能 | 建議方案 |
|------|---------|
| 報名系統 | Supabase + PostgreSQL |
| 收藏功能 | Zustand + localStorage |
| 搜尋 | Algolia / Flexsearch |
| 地圖 | Google Maps JS API |
| 圖片上傳 | Cloudinary / S3 |
| 付款 | 綠界 / Stripe |

## 🌐 部署到 Vercel

```bash
npm install -g vercel
vercel
```

或直接在 [vercel.com](https://vercel.com) 連接 GitHub repo 自動部署。

## 📄 資料結構

詳見 `src/data/mockData.ts` 中的 TypeScript 型別定義：
- `Market` — 市集資料
- `Vendor` — 攤商資料  
- `Category` — 分類
- `Region` — 地區
- `Article` — 文章

---

Made with ❤️ in Taiwan 🇹🇼
