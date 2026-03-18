# CLAUDE.md — Archi Construction Veranda

## Proje
- **Tip:** website
- **Musteri:** Archi Construction Veranda (Belcika insaat firmasi)
- **Domain:** archi.constructionveranda.com
- **Durum:** production

## Teknoloji
- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3
- Sanity CMS (icerik yonetimi)
- i18next (coklu dil destegi)
- Framer Motion (animasyonlar)
- React Router DOM, Lucide React, React Helmet Async

## Yapi
```
src/
  components/        # UI bilesenleri
  pages/             # Sayfa bilesenleri
  locales/           # Ceviri dosyalari (i18n)
  hooks/             # Ozel React hook'lari
  lib/               # Yardimci fonksiyonlar
  styles/            # Stil dosyalari
sanity/
  schemas/           # Sanity CMS semalari
  sanity.config.ts   # Sanity yapilandirmasi
public/              # Statik dosyalar
dist/                # Build ciktisi
```

## Kurallar
- Icerik Sanity CMS uzerinden yonetilir, hardcode edilmez
- Tum metinler `locales/` altindaki ceviri dosyalarindan cekilir
- Yeni sayfa eklenirken React Router ve i18n destegi eklenmeli
- Build: `npm run build` (tsc + vite build)
- SEO icin `react-helmet-async` kullanilir
