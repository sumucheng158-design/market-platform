# 市集平台

台灣最大市集資訊平台——發現手作、美食、文創、古物市集，申請擺攤一站式搞定。

## 技術棧

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Noto Serif TC / Noto Sans TC (Google Fonts)
- **Icons**: Lucide React (SVG-based，無 emoji)
- **Images**: Unsplash CDN
- **Deployment**: GitHub Pages（Static Export）

## 本地開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 部署至 GitHub Pages

### 方式一：自動部署（推薦）

1. 將此專案 push 到 GitHub repository
2. 進入 **Settings → Pages**
3. Source 選擇 **GitHub Actions**
4. Push 到 `main` 分支後自動觸發部署

### 方式二：手動部署

```bash
npm run build
# 將 /out 資料夾內容上傳至 gh-pages 分支
```

## 專案結構

```
src/
├── app/
│   ├── page.tsx          # 首頁
│   ├── markets/          # 市集列表 & 詳情
│   ├── vendors/          # 攤商列表 & 詳情
│   ├── blog/             # 文章列表 & 詳情
│   └── apply/            # 申請擺攤
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── market/           # MarketCard
│   ├── vendor/           # VendorCard
│   └── ui/               # Icon 等共用元件
└── data/
    └── mockData.ts       # 市集、攤商、文章資料
```
