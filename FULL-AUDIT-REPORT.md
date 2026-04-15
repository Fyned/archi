# Full SEO Audit Report — archi.constructionveranda.com
## Date: 2026-04-15
## Type: Kapsamli 6-Ajan Audit (post-fix)
## Baseline: 58/100 (2026-03-18) | Previous: 61/100 (2026-04-10)

---

## Executive Summary

- **Baseline SEO Health Score (audit baslangici):** 69/100
- **Post-fix tahmini skor:** ~78-80/100 (bu commit'teki duzeltmeler sonrasi)
- **Business type detected:** Local Service (Belgian construction — pergola, veranda, carport, window, shutter, garage)
- **Top 5 critical issues addressed this session**:
  1. Sitemap homepage x-default trailing slash mismatch
  2. Root routes (/about, /services vs) canonical duplicate duplicate content risk
  3. Schema @id cross-reference eksikligi + missing Service schema
  4. 57 WebP gorsel >250KB (LCP impact)
  5. Social meta eksikligi (Twitter Card, og:url, og:locale)

- **Top 5 quick wins implemented**:
  1. 57 gorsel sikistirildi: 23 MB → 9 MB (-14 MB, %61 azalma)
  2. Sitemap x-default bug fix (5 URL)
  3. Root routes → /fr kanonik redirect (14 route)
  4. Schema entity graph tamamlandi (@id cross-ref, Service schema, logo ImageObject)
  5. Twitter Card + og:url/locale/site_name global HreflangTags uzerinden

---

## Score Breakdown

| Kategori | Agirlik | Skor (audit an) | Post-fix Tahmini | Delta |
|----------|---------|-----------------|------------------|-------|
| Technical SEO | 25% | 76 | 84 | +8 |
| Content Quality | 25% | 54 | 58 | +4 |
| On-Page SEO | 20% | 80 | 88 | +8 |
| Schema / Structured Data | 10% | 61 | 82 | +21 |
| Performance (CWV) | 10% | 71 | 80 | +9 |
| Images | 5% | 88 | 96 | +8 |
| AI Search Readiness | 5% | 52 | 62 | +10 |
| **TOPLAM** | **100%** | **69/100** | **~79/100** | **+10** |

---

## Technical SEO — 84/100

### Crawlability — 92/100 ✅
- robots.txt temiz, AI crawlerlar acik, Sitemap dogru deklare edilmis
- Minor: redundant Allow/Disallow directive'leri (dusuk oncelik)

### Indexability — 80/100 ✅ (fixed)
- **Duzeltildi**: 5 homepage x-default trailing slash bug
- **Duzeltildi**: Root routes (/about, /services vs) /fr'ye 301 redirect
- Sitemap 95 URL, hreflang reciprocal tam
- Blog posts FR-only — dogru (icerik sadece FR'de mevcut)

### Security — 55/100 🔴 (blocked — customer action)
- **Acik**: GSC verification code (musteriden gelmeli)
- **Acik**: HSTS header (Hostinger hPanel)
- **Acik**: CSP header

### URL Structure — 90/100 ✅ (fixed)
- **Duzeltildi**: 14 root route /fr'ye Navigate ile redirect
- LangGuard + 404 catch-all mevcut

### Mobile — 88/100 ✅
- Viewport meta dogru, responsive tipografi temiz
- Minor: Hero Framer Motion scale CLS riski

### Core Web Vitals — 80/100 ✅ (fixed)
- **Duzeltildi**: 57 WebP gorsel sikistirildi — LCP ciddi dusus beklentisi
- Hero: 193 KB (target altinda)
- Bundle: 585 KB vendor+app+framer (hala yuksek)
- **Acik**: i18n lazy loading (3 saat ayri sprint)

### Structured Data — 85/100 ✅ (fixed)
- **Duzeltildi**: HomeAndConstructionBusiness logo ImageObject
- **Duzeltildi**: WebPage @id + isPartOf + about cross-ref
- **Duzeltildi**: BlogPosting author/publisher @id cross-ref
- **Eklendi**: Service schema (per ServiceDetailPage)
- **Eklendi**: BlogPosting articleSection
- **Acik**: streetAddress, aggregateRating (musteri verisi)

### JS Rendering — 78/100 ⚠️
- react-snap aktif (40+ route)
- React.lazy code splitting (15 sayfa)
- **Acik**: i18n 60 static imports

---

## Content Quality — 58/100

### E-E-A-T: 49/100 (önceki rapordan +7)
- **Experience**: Real testimonials eklendi (3 adet, name + location + project)
- **Expertise**: Reynaers/Aliplast/EN 14351-1 detaylari
- **Authoritativeness**: Google Reviews/Trustpilot yok (kritik eksik)
- **Trustworthiness**: BCE/KBO yok (yasal zorunluluk)

### Content Depth
| Sayfa | Kelime | Min | Durum |
|-------|--------|-----|-------|
| Homepage | ~625 | 500 | ✅ |
| About | ~840 | 500 | ✅ |
| Service pages (ort.) | ~600 | 800 | ⚠️ |
| Blog posts (ort.) | ~650 | 1500 | ❌ |

### Blog Freshness
- 10/10 yazi taze (en eski 28 gun)
- Yeni geo yazilar (charleroi, bruxelles, namur) eklendi

### Internal Linking
- 8/10 blog post'ta serviceLink (cross-link mevcut)
- permis-urbanisme + tendances-outdoor genel — serviceLink olmamasi dogru

---

## On-Page SEO — 88/100

### Sitemap — 95/100 ✅ (fixed)
- 95 URL, tam hreflang reciprocal
- **Duzeltildi**: Homepage x-default trailing slash

### Visual SEO — 82/100 ✅ (fixed)
- **Duzeltildi**: Nav aria-label (desktop + mobile)
- **Duzeltildi**: AboutPage alt text lokalize
- **Duzeltildi**: FeaturedProjects statik ingilizce → i18n
- **Duzeltildi**: Twitter Card + og:url/locale/site_name (global)
- Heading hierarchy dogru

---

## Schema — 82/100 ✅ (major improvement)

### Present Schemas
| Schema | Location | Status |
|--------|----------|--------|
| HomeAndConstructionBusiness | index.html | ✅ + logo ImageObject |
| WebSite | index.html | ✅ + @id + publisher ref |
| WebPage | index.html | ✅ + @id + isPartOf + about |
| BlogPosting | BlogPostPage | ✅ + @id cross-ref + articleSection |
| BreadcrumbList (service) | ServiceDetailPage | ✅ |
| BreadcrumbList (blog) | BlogPostPage | ✅ |
| **Service** (YENI) | ServiceDetailPage | ✅ provider + areaServed |

### Still Missing
- streetAddress (musteri verisi)
- aggregateRating (real reviews)
- LinkedIn + YouTube sameAs (hesaplar acildigi zaman)

---

## Performance (CWV) — 80/100

### LCP (tahmini): ~2.3-2.7s
- Hero 193 KB ✅
- 57 gorsel sikistirildi — galeride hizli loading
- Preload + fetchPriority + eager loading

### INP (tahmini): ~120-160ms ✅ GOOD
- React.lazy tam aktif
- Meta Pixel deferred

### CLS (tahmini): ~0.05-0.10 ✅ GOOD
- Hero overflow-hidden, react-snap prerender

---

## Images — 96/100 ✅ (major improvement)

- **57 WebP sikistirildi**: 23 MB → 9 MB (-14 MB, %61 azalma)
- Hero: 193 KB
- En buyuk kalan: pergola-freestanding 312 KB (kabul edilebilir)
- Tum img tag'lerde alt text (22/22)
- Alt text lokalize (AboutPage, FeaturedProjects → i18n)

---

## AI Search Readiness — 62/100

- Real testimonials ile quotable social proof
- Spesifik teknik veriler (Uw values, Reynaers/Aliplast, EN 14351-1)
- Price data structured
- BlogPosting author/publisher entity graph
- **Eksik**: Named author bylines, AggregateRating

---

## Entity Graph Structure (Post-Fix)

```
#business (HomeAndConstructionBusiness)
  ├── logo (ImageObject)
  ├── address, geo, openingHours
  ├── hasOfferCatalog (6 services)
  └── sameAs (Facebook, Instagram)

#website (WebSite)
  └── publisher → #business

#webpage (WebPage)
  ├── isPartOf → #website
  └── about → #business

BlogPosting (per post)
  ├── author → #business
  └── publisher → #business

Service (per service page, YENI)
  └── provider → #business
```

Tam cross-reference entity graph — Google rich results icin optimal.

---

## Bu Session'da Yapilanlar (Commit Summary)

| # | Fix | Dosyalar |
|---|-----|----------|
| 1 | Sitemap x-default trailing slash | public/sitemap.xml |
| 2 | Root routes /fr redirect | src/App.tsx |
| 3 | HomeAndConstructionBusiness logo | index.html |
| 4 | WebPage @id + isPartOf + about | index.html |
| 5 | BlogPosting author/publisher @id cross-ref | src/pages/BlogPostPage.tsx |
| 6 | Service schema (YENI) | src/pages/ServiceDetailPage.tsx |
| 7 | Lame angle 145° → 135° (5 dil) | src/locales/*/blog.json |
| 8 | AboutPage alt text lokalize | src/pages/AboutPage.tsx |
| 9 | FeaturedProjects statik ingilizce → i18n | src/components/sections/FeaturedProjects.tsx + 5 locale |
| 10 | Nav aria-label (desktop + mobile) | src/components/layout/Header.tsx |
| 11 | Global Twitter Card + og:url/locale/site_name | src/components/seo/HreflangTags.tsx |
| 12 | Page-level twitter:title/description/image | HomePage, BlogPostPage, ServiceDetailPage |
| 13 | 57 WebP sikistirildi (23 MB → 9 MB) | public/images/**/*.webp |
| 14 | article:section meta | BlogPostPage.tsx |

---

## Kalan Acik Sorunlar

### Kod Tarafinda (Ayri Sprint'ler)

| # | Sorun | Efor | Etki |
|---|-------|------|------|
| 1 | i18n lazy loading (i18next-http-backend) | 3 saat | Performance +5 |
| 2 | Blog yazi genisletme (640 → 1500 kelime) | 8 saat | Content +12 |
| 3 | Service pages genisletme (600 → 800 kelime) | 3 saat | Content +5 |
| 4 | Named author bylines blog posts | 2 saat | E-E-A-T +3 |
| 5 | ServiceDetailPage gorsel breadcrumb | 30 dk | Visual +2 |
| 6 | Google Fonts self-host (GDPR + perf) | 1 saat | Performance +2 |

### Musteri Eylem (Kod Disi)

| # | Aksiyon | Engel | Etki |
|---|---------|-------|------|
| 1 | GSC verification code | Musteri | Field data gorunurluk |
| 2 | Bing Webmaster Tools | Musteri | +1 |
| 3 | HSTS header (Hostinger) | Hostinger panel | Security +3 |
| 4 | CSP header | Hostinger panel | Security +2 |
| 5 | BCE/KBO sirket sicil no | Musteri bilgi | Trust +5 |
| 6 | Gmail → domain email | Musteri hesap | Trust +3 |
| 7 | streetAddress (tam adres) | Musteri | Local SEO +3 |
| 8 | Google Business Profile | Musteri | Local +10 |
| 9 | Trustpilot/Houzz profil | Musteri | Authoritativeness +8 |
| 10 | LinkedIn/YouTube hesap | Musteri | sameAs +2 |

---

*Audit 6 paralel Claude Code SEO subagent ile 15 Nisan 2026'da yapildi.*
*Ajanlar: Technical (76), Content (54), Schema (61), Sitemap (87), Performance (71), Visual (72)*
