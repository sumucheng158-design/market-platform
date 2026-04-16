// src/data/mockData.ts

export type Category = {
  id: string;
  name: string;
  slug: string;
  iconPath: string; // SVG path data
  color: string;
  textColor: string;
};

export type Region = {
  id: string;
  name: string;
  slug: string;
  iconPath: string;
};

export type Vendor = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
  instagram?: string;
  contact?: string;
  website?: string;
  marketIds: string[];
  featured: boolean;
  tags: string[];
};

export type Market = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  coverImage: string;
  images: string[];
  date: string;
  endDate?: string;
  time: string;
  location: string;
  address: string;
  region: string;
  categories: string[];
  vendorIds: string[];
  tags: string[];
  featured: boolean;
  hot: boolean;
  capacity: number;
  registered: number;
  admissionFee: number;
  organizer: string;
  organizerContact: string;
  mapUrl: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
};

// SVG icon paths for categories (stroke-based, viewBox 0 0 24 24)
export const CATEGORY_ICONS: Record<string, string> = {
  art: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0',
  food: 'M18 8h1a4 4 0 0 1 0 8h-1 M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3',
  craft: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
  vintage: 'M3 7h18 M3 12h18 M3 17h18 M8 3v4 M16 3v4',
  plant: 'M12 22V12 M12 12C12 7 7 3 3 3c0 4 3 8 9 9 M12 12c0-5 5-9 9-9-1 4-4 8-9 9',
  music: 'M9 18V5l12-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0 M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
};

// SVG icon paths for regions
export const REGION_ICONS: Record<string, string> = {
  taipei: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  taichung: 'M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 7v3l2 2',
  tainan: 'M2 20h20 M4 20V8l8-6 8 6v12 M9 20v-8h6v8',
  kaohsiung: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  hsinchu: 'M12 2v4 M12 18v4 M4.93 4.93l2.83 2.83 M16.24 16.24l2.83 2.83 M2 12h4 M18 12h4 M4.93 19.07l2.83-2.83 M16.24 7.76l2.83-2.83',
  hualien: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z M9.5 9a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z',
};

// ─── Categories ────────────────────────────────────────────────
export const categories: Category[] = [
  { id: 'cat-1', name: '文創藝術', slug: 'art',     iconPath: CATEGORY_ICONS.art,     color: 'bg-rose-50',    textColor: 'text-rose-700' },
  { id: 'cat-2', name: '美食小吃', slug: 'food',    iconPath: CATEGORY_ICONS.food,    color: 'bg-amber-50',   textColor: 'text-amber-700' },
  { id: 'cat-3', name: '手作工藝', slug: 'craft',   iconPath: CATEGORY_ICONS.craft,   color: 'bg-emerald-50', textColor: 'text-emerald-700' },
  { id: 'cat-4', name: '二手古物', slug: 'vintage', iconPath: CATEGORY_ICONS.vintage, color: 'bg-purple-50',  textColor: 'text-purple-700' },
  { id: 'cat-5', name: '植物綠意', slug: 'plant',   iconPath: CATEGORY_ICONS.plant,   color: 'bg-green-50',   textColor: 'text-green-700' },
  { id: 'cat-6', name: '音樂表演', slug: 'music',   iconPath: CATEGORY_ICONS.music,   color: 'bg-blue-50',    textColor: 'text-blue-700' },
];

// ─── Regions ───────────────────────────────────────────────────
export const regions: Region[] = [
  { id: 'reg-1', name: '台北', slug: 'taipei',    iconPath: REGION_ICONS.taipei },
  { id: 'reg-2', name: '台中', slug: 'taichung',  iconPath: REGION_ICONS.taichung },
  { id: 'reg-3', name: '台南', slug: 'tainan',    iconPath: REGION_ICONS.tainan },
  { id: 'reg-4', name: '高雄', slug: 'kaohsiung', iconPath: REGION_ICONS.kaohsiung },
  { id: 'reg-5', name: '新竹', slug: 'hsinchu',   iconPath: REGION_ICONS.hsinchu },
  { id: 'reg-6', name: '花蓮', slug: 'hualien',   iconPath: REGION_ICONS.hualien },
];

// ─── Vendors ───────────────────────────────────────────────────
export const vendors: Vendor[] = [
  {
    id: 'v-1',
    name: '山丘陶作',
    slug: 'hill-pottery',
    category: 'craft',
    description: '來自宜蘭的陶藝工作室，每一件作品都融入山林間的靜謐。手拉坯的不完美，正是手作的溫度。',
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=800&q=80',
    ],
    instagram: '@hill.pottery',
    contact: 'hill.pottery@gmail.com',
    marketIds: ['m-1', 'm-3'],
    featured: true,
    tags: ['陶器', '手拉坯', '杯碗', '器皿'],
  },
  {
    id: 'v-2',
    name: '島嶼漬物',
    slug: 'island-pickles',
    category: 'food',
    description: '以台灣在地食材製作的職人發酵食品。每一罐都是時間與耐心的結晶。',
    coverImage: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80',
      'https://images.unsplash.com/photo-1559181567-c3190bea1e93?w=800&q=80',
    ],
    instagram: '@island.pickles',
    contact: 'island.pickles@gmail.com',
    marketIds: ['m-1', 'm-2'],
    featured: true,
    tags: ['發酵食品', '醬菜', '手工'],
  },
  {
    id: 'v-3',
    name: 'MORI 草木染',
    slug: 'mori-dyeing',
    category: 'craft',
    description: '以台灣野生植物進行天然草木染，每件布品的顏色都是大自然給予的禮物。',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1594040226829-7f251ab46d80?w=800&q=80',
    ],
    instagram: '@mori.dyeing',
    marketIds: ['m-2', 'm-4'],
    featured: false,
    tags: ['草木染', '布品', '天然染料', '手帕'],
  },
  {
    id: 'v-4',
    name: '舊時光古物店',
    slug: 'oldtime-vintage',
    category: 'vintage',
    description: '從日本、歐洲蒐羅的老件，每件都有自己的故事。販售家居老件、古著服飾。',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80',
    ],
    instagram: '@oldtime.vintage',
    marketIds: ['m-3', 'm-5'],
    featured: true,
    tags: ['古著', '老件', '日系', '歐洲古物'],
  },
  {
    id: 'v-5',
    name: '茶地咖啡',
    slug: 'chadi-coffee',
    category: 'food',
    description: '精品咖啡烘豆師，以台灣高山茶的精神對待每一支豆子。現場手沖，感受細膩風味。',
    coverImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
    ],
    instagram: '@chadi.coffee',
    contact: 'chadi.coffee@gmail.com',
    website: 'https://chadi.coffee',
    marketIds: ['m-1', 'm-2', 'm-4'],
    featured: true,
    tags: ['精品咖啡', '手沖', '烘豆', '台灣豆'],
  },
  {
    id: 'v-6',
    name: '紙間活版印刷',
    slug: 'letterpress-studio',
    category: 'art',
    description: '百年工藝活版印刷工作室，以鉛字與壓印的方式製作獨一無二的印刷品。',
    coverImage: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    ],
    instagram: '@letterpress.tw',
    marketIds: ['m-2', 'm-5'],
    featured: false,
    tags: ['活版印刷', '卡片', '海報', '文具'],
  },
];

// ─── Markets ───────────────────────────────────────────────────
export const markets: Market[] = [
  {
    id: 'm-1',
    name: '週末好市集 Vol.12',
    slug: 'weekend-market-vol12',
    tagline: '在城市裡找回慢活的溫度',
    description: '每個月最後一個週末，我們在台北大安森林公園旁集合。超過 50 個手作與美食攤位，還有現場音樂演出，帶你在繁忙都市中找回生活感。',
    coverImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1200&q=80',
    ],
    date: '2025-04-26',
    endDate: '2025-04-27',
    time: '10:00 – 18:00',
    location: '大安森林公園',
    address: '台北市大安區新生南路二段1號',
    region: 'taipei',
    categories: ['craft', 'food', 'art'],
    vendorIds: ['v-1', 'v-2', 'v-5'],
    tags: ['週末', '戶外', '音樂', '手作', '美食'],
    featured: true,
    hot: true,
    capacity: 2000,
    registered: 1456,
    admissionFee: 0,
    organizer: '好日子文化',
    organizerContact: 'hello@gooddays.tw',
    mapUrl: 'https://maps.google.com/?q=大安森林公園',
  },
  {
    id: 'm-2',
    name: '台中文青市集 — 春',
    slug: 'taichung-art-market-spring',
    tagline: '春日花開，與職人相遇',
    description: '台中最受歡迎的文創市集，落腳於審計新村旁。每季一次，邀請來自各地的職人帶來精心製作的作品，在春日氛圍中感受慢生活的魅力。',
    coverImage: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
      'https://images.unsplash.com/photo-1559181567-c3190bea1e93?w=1200&q=80',
    ],
    date: '2025-05-03',
    endDate: '2025-05-04',
    time: '11:00 – 19:00',
    location: '審計新村廣場',
    address: '台中市西區民生路368巷',
    region: 'taichung',
    categories: ['art', 'craft', 'food'],
    vendorIds: ['v-2', 'v-3', 'v-5', 'v-6'],
    tags: ['春季', '文創', '職人', '台中'],
    featured: true,
    hot: true,
    capacity: 1500,
    registered: 892,
    admissionFee: 0,
    organizer: '審計文創',
    organizerContact: 'market@shentai.tw',
    mapUrl: 'https://maps.google.com/?q=審計新村,台中',
  },
  {
    id: 'm-3',
    name: '古物交換派對',
    slug: 'vintage-swap-party',
    tagline: '你的舊物，是別人的寶藏',
    description: '以物易物的年代回來了。帶著你不再需要的老物件，找到真正珍惜它的新主人。古著、黑膠、老相機、古書，都在這裡流轉。',
    coverImage: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80',
    ],
    date: '2025-05-10',
    time: '13:00 – 20:00',
    location: '松山文創園區',
    address: '台北市信義區光復南路133號',
    region: 'taipei',
    categories: ['vintage', 'art'],
    vendorIds: ['v-1', 'v-4'],
    tags: ['古物', '二手', '古著', '黑膠'],
    featured: false,
    hot: true,
    capacity: 800,
    registered: 654,
    admissionFee: 100,
    organizer: 'Swap & Co.',
    organizerContact: 'swap@swapco.tw',
    mapUrl: 'https://maps.google.com/?q=松山文創園區',
  },
  {
    id: 'm-4',
    name: '南島植物市集',
    slug: 'island-plant-market',
    tagline: '讓綠意走進你的生活',
    description: '結合植物販售、苔球工作坊、植物染體驗的複合型市集。週末在台南樹蔭下，與喜歡植物的人們相遇。',
    coverImage: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    ],
    date: '2025-05-17',
    time: '09:00 – 16:00',
    location: '台南文化中心',
    address: '台南市東區中華東路三段332號',
    region: 'tainan',
    categories: ['plant', 'craft'],
    vendorIds: ['v-3', 'v-5'],
    tags: ['植物', '多肉', '苔球', '台南'],
    featured: true,
    hot: false,
    capacity: 600,
    registered: 234,
    admissionFee: 0,
    organizer: '南島植物社',
    organizerContact: 'plants@nandao.tw',
    mapUrl: 'https://maps.google.com/?q=台南文化中心',
  },
  {
    id: 'm-5',
    name: '紙張與文字的慶典',
    slug: 'paper-and-words-fest',
    tagline: '給愛書人的市集',
    description: '獨立書店、手作文具、zine 創作者的聚集地。在這裡你能找到獨立出版品、手工線裝書、以及各種讓你想提筆的文具。',
    coverImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=80',
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80',
    ],
    date: '2025-05-24',
    endDate: '2025-05-25',
    time: '10:00 – 18:00',
    location: '華山1914文化創意產業園區',
    address: '台北市中正區八德路一段1號',
    region: 'taipei',
    categories: ['art', 'craft'],
    vendorIds: ['v-4', 'v-6'],
    tags: ['獨立出版', 'zine', '文具', '書籍'],
    featured: false,
    hot: false,
    capacity: 1000,
    registered: 378,
    admissionFee: 0,
    organizer: '活字文化',
    organizerContact: 'type@huozi.tw',
    mapUrl: 'https://maps.google.com/?q=華山1914文化創意產業園區',
  },
];

// ─── Articles ──────────────────────────────────────────────────
export const articles: Article[] = [
  {
    id: 'a-1',
    title: '2025 台北市集攻略：五個你不能錯過的週末市集',
    slug: 'taipei-markets-guide-2025',
    excerpt: '台北的市集文化越來越精彩，從文創到美食、從古物到植物，每個週末都有新驚喜。本篇整理了 2025 年最值得期待的台北市集清單。',
    content: '完整文章內容...',
    coverImage: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
    author: '市集編輯部',
    publishedAt: '2025-04-10',
    tags: ['台北', '市集指南', '週末'],
    readTime: 5,
  },
  {
    id: 'a-2',
    title: '攤主專訪｜山丘陶作：在泥土裡找到安靜',
    slug: 'vendor-interview-hill-pottery',
    excerpt: '離開設計公司後，她在宜蘭山上蓋了一間小工作室，用雙手捏出生活的形狀。',
    content: '完整文章內容...',
    coverImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80',
    author: '李文青',
    publishedAt: '2025-04-05',
    tags: ['攤主專訪', '陶藝', '手作'],
    readTime: 8,
  },
  {
    id: 'a-3',
    title: '台中文創市集完全指南：在審計新村找到台灣職人',
    slug: 'taichung-art-market-guide',
    excerpt: '審計新村是台中文青的聚集地，每季的市集更是全台職人的大集合。帶你一次看懂台中文創市集的魅力。',
    content: '完整文章內容...',
    coverImage: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&q=80',
    author: '陳設計',
    publishedAt: '2025-03-28',
    tags: ['台中', '文創', '職人', '市集指南'],
    readTime: 6,
  },
];

// ─── Helper functions ──────────────────────────────────────────
export function getMarketById(id: string): Market | undefined {
  return markets.find((m) => m.id === id);
}
export function getMarketBySlug(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}
export function getVendorById(id: string): Vendor | undefined {
  return vendors.find((v) => v.id === id);
}
export function getVendorBySlug(slug: string): Vendor | undefined {
  return vendors.find((v) => v.slug === slug);
}
export function getVendorsByMarket(marketId: string): Vendor[] {
  const market = getMarketById(marketId);
  if (!market) return [];
  return market.vendorIds.map((id) => getVendorById(id)).filter(Boolean) as Vendor[];
}
export function getMarketsByVendor(vendorId: string): Market[] {
  const vendor = getVendorById(vendorId);
  if (!vendor) return [];
  return vendor.marketIds.map((id) => getMarketById(id)).filter(Boolean) as Market[];
}
export function getFeaturedMarkets(): Market[] {
  return markets.filter((m) => m.featured);
}
export function getHotMarkets(): Market[] {
  return markets.filter((m) => m.hot);
}
export function getMarketsByRegion(region: string): Market[] {
  return markets.filter((m) => m.region === region);
}
export function getMarketsByCategory(category: string): Market[] {
  return markets.filter((m) => m.categories.includes(category));
}
