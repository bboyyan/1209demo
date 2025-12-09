# LUMIÈRE SPA 🌟

**Exclusive Care for Ladies** - 極致美胸療程與芳療體驗

一個使用 Astro + React + Framer Motion 建置的高效能 SPA 網站，專為提供優雅的美容服務體驗。

## ✨ 特色功能

- 🎨 **現代化設計**: Glassmorphism 效果與優雅的視覺設計
- ⚡ **高性能**: Astro Island Architecture 優化載入速度
- 🎭 **流暢動畫**: Framer Motion 提供豐富的交互动畫
- 📱 **響應式**: 完美適配桌面、平板與手機裝置
- 🐳 **Docker 支援**: 輕鬆部署到任何支援 Docker 的平台

## 🚀 快速開始

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

### Docker 部署

```bash
# 建置映像
docker build -t lumiere-spa .

# 運行容器
docker run -p 4321:4321 lumiere-spa
```

## 🏗️ 專案結構

```
/
├── public/                 # 靜態資源
├── src/
│   ├── components/         # React 元件
│   │   ├── home/          # 首頁區塊元件
│   │   ├── layout/        # 佈局元件
│   │   └── ui/            # UI 元件
│   ├── layouts/           # Astro 佈局
│   ├── pages/             # 頁面路由
│   └── styles/            # 全域樣式
├── Dockerfile            # Docker 配置
├── vercel.json           # Vercel 部署配置
├── netlify.toml          # Netlify 部署配置
└── package.json
```

## 🛠️ 技術棧

- **Framework**: [Astro](https://astro.build/)
- **UI Library**: [React](https://reactjs.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Docker / Vercel / Netlify / Zeabur

## 📦 指令說明

| 指令              | 說明                              |
| :---------------- | :-------------------------------- |
| `npm run dev`     | 啟動開發伺服器 (`localhost:4321`) |
| `npm run build`   | 建置生產版本到 `./dist/`         |
| `npm run preview` | 本地預覽生產版本                 |

## 🎨 設計特色

- **優雅色調**: 玫瑰金與中性色系的完美搭配
- **動態效果**: 滾動觸發動畫與微交互动畫
- **無障礙設計**: 符合現代網路無障礙標準
- **效能優化**: Island Architecture 確保最佳載入速度

## 📞 聯絡資訊

LUMIÈRE SPA - 專為亞洲女性打造的極致美容體驗

---

Built with ❤️ using Astro & React
