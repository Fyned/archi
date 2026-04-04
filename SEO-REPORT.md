# SEO Report — archi.constructionveranda.com
## Date: 2026-04-04
## Overall Score: 66/100 (+8 baseline'dan)
## Type: 3 AYLIK KONTROL (Q2 2026)

---

### Executive Summary
- Baseline (18 Mart): 58/100 → Bugün: **66/100** (+8 puan iyileşme)
- **11 baseline sorun düzeltildi:** react-snap prerendering, code splitting, FAQPage kaldırıldı, hreflang reciprocal tamamlandı, Meta Pixel async yapıldı, 404 sayfası eklendi, robots.txt temizlendi, schema genişletildi
- **1 yeni kritik regresyon:** `pvc-window-hero.png` 5.8 MB PNG eklendi — LCP'yi yıkıyor
- **7 baseline sorun hala açık:** hero WebP yok, HSTS yok, GSC doğrulanmamış, i18n lazy loading yok, 11 sayfada canonical eksik, BreadcrumbList yok, Google Fonts self-host değil
- Blog içeriği eskiyor: 6 yazının tamamı 84-105 gün yaşında, "2026 trendleri" yazısı Aralık 2025 tarihli

---

### 🔴 Critical Issues (Hemen düzelt)

**1. `pvc-window-hero.png` — 5.8 MB PNG (YENİ REGRESYON)**
- Dosya: `public/images/services/pvc-window-hero.png`
- Etki: Window/shutter servis sayfasında LCP 8-10 saniye olabilir
- Çözüm: WebP'ye dönüştür, hedef <300 KB
- Efor: 15 dakika

**2. Hero görseli hala 1 MB JPEG (BASELINE #7)**
- Dosya: `public/images/general/hero-main.jpg` (1,065,951 bytes)
- Diğer hero görselleri: 7 dosya, toplam ~6.6 MB JPEG
- Çözüm: Tümünü WebP'ye dönüştür (`cwebp -q 80`)
- Efor: 1 saat

**3. Google Search Console hala doğrulanmamış (BASELINE #9)**
- Dosya: `index.html` satır 29-32 (placeholder yorum)
- Etki: Crawl hataları, indeksleme durumu, manual actions görünmüyor
- Çözüm: GSC'den doğrulama kodu al, meta tag'i aktifleştir
- Efor: 10 dakika

---

### 🟡 Warnings (Bu hafta düzelt)

**4. 11 sayfada canonical tag eksik**
- Mevcut: ServiceDetailPage, BlogPage, BlogPostPage (3/15)
- Eksik: HomePage, AboutPage, ContactPage, QuotePage, ServicesPage, ProjectsPage, PortfolioPage, MarketplacePage, VideoGalleryPage, PrivacyPolicyPage, NotFoundPage
- Etki: Dil versiyonları arasında duplicate content riski
- Efor: 1 saat

**5. 4 geo blog yazısı sitemap'te ama sayfada yok**
- `pergola-bioclimatique-charleroi`, `veranda-aluminium-bruxelles`, `carport-aluminium-namur`, `pergola-prix-m2-belgique-2026`
- Sitemap'te URL var → BlogPage.tsx'te `blogPosts` dizisinde yok → kullanıcı 404/redirect görüyor
- react-snap `include` listesinde de yok → prerender edilmemiş
- Çözüm: BlogPage.tsx'e ekle + react-snap include listesine ekle
- Efor: 30 dakika

**6. HSTS header hala eksik (BASELINE #8)**
- Hostinger hPanel'den `.htaccess` veya CDN config ile ekle
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- Efor: 10 dakika

**7. i18n tüm diller hala statik import (BASELINE #6)**
- Dosya: `src/lib/i18n/config.ts` — 60 static import (5 dil × 12 namespace)
- `i18n-BbvaRjDb.js` chunk: 49 KB
- Çözüm: `i18next-http-backend` ile lazy loading
- Efor: 2-3 saat

**8. BreadcrumbList schema hala eksik (BASELINE #18)**
- Hiçbir iç sayfada breadcrumb yok (görsel veya schema)
- Çözüm: ServiceDetailPage + BlogPostPage'e BreadcrumbList JSON-LD ekle
- Efor: 1 saat

**9. Blog içeriği eskiyor**
- En yeni yazı: 84 gün önce (2026-01-10)
- "Tendances 2026" yazısı 105 gün yaşında (2025-12-20)
- Son 3 ayda 0 yeni yayınlanmış blog yazısı
- Öneri: Ayda en az 2 yazı, mevcut yazıları güncelle

---

### ✅ Passed Checks (Baseline'dan düzeltilen)

| # | Düzeltilen Sorun | Doğrulama |
|---|-----------------|-----------|
| 1 | react-snap prerendering | 45 rota prerender ediliyor, `dist/` doğrulandı |
| 2 | React.lazy() code splitting | 15 sayfa lazy, 285 KB ana chunk (434→285) |
| 3 | FAQPage schema kaldırıldı | ServiceDetailPage'de FAQPage yok |
| 4 | Hreflang reciprocal tamamlandı | 75 URL'nin tamamında 5 dil + x-default |
| 5 | Meta Pixel async yapıldı | `window.addEventListener('load')` ile body'de |
| 6 | 404 sayfası eklendi | NotFoundPage.tsx + `<Route path="*">` |
| 7 | robots.txt temizlendi | `*.json$` ve `Crawl-delay` kaldırıldı |
| 8 | LocalBusiness adresi eklendi | Charleroi, 6000, Hainaut, BE |
| 9 | WebSite schema eklendi | SearchAction ile birlikte |
| 10 | HomeAndConstructionBusiness @type | LocalBusiness'tan upgrade |
| 11 | Canonical index.html'den kaldırıldı | Hardcoded `/fr` canonical silindi |
| 12 | Kırık internal link yok | 92 link instance, 14 rota — tamamı geçerli |
| 13 | Tüm img'lerde alt text | 18/18 img tag'inde alt attribute var |
| 14 | AI crawler erişimi | GPTBot, ClaudeBot, PerplexityBot — Allow |
| 15 | Blog → BlogPosting schema | datePublished, mainEntityOfPage, publisher mevcut |

---

### 📊 Statistics

| Metrik | Değer |
|--------|-------|
| Toplam sayfa dosyası | 15 (src/pages/) |
| Toplam sitemap URL | 75 |
| Canonical tag olan sayfalar | 3/15 |
| Alt text olan görseller | 18/18 |
| Schema türleri | 4 (HomeAndConstructionBusiness, WebSite, WebPage, BlogPosting) |
| Blog yazıları | 10 (6 aktif, 4 sitemap-only) |
| Blog yazıları güncelleme gereken | 6/6 (tümü >80 gün) |
| Prerender edilen rota | 45 |
| JS bundle (ana chunk) | 285 KB (baseline: 434 KB, -34%) |
| Toplam JS yükü | ~631 KB uncompressed |
| En büyük görsel | pvc-window-hero.png — 5.8 MB (YENİ) |
| Hero görsel boyutu | 1.02 MB (değişmedi) |
| Internal linking skoru | 7/10 |
| Eksik schema türleri | 4 (BreadcrumbList, Organization, Service, VideoObject) |

---

### 📈 Score Breakdown

| Kategori | Ağırlık | Baseline | Şimdi | Delta |
|----------|---------|----------|-------|-------|
| Technical SEO | 25% | 61 | 72 | +11 |
| Content Quality | 25% | 61 | 62 | +1 |
| On-Page SEO | 20% | 65 | 67 | +2 |
| Schema / Structured Data | 10% | 45 | 68 | +23 |
| Performance (CWV) | 10% | 50 | 58 | +8 |
| Images | 5% | 60 | 45 | -15 |
| AI Search Readiness | 5% | 74 | 78 | +4 |
| **TOPLAM** | **100%** | **58** | **66** | **+8** |

---

### 📝 Content Recommendations (Q2 2026)

| # | Konu | Hedef Keyword | Öncelik |
|---|------|--------------|---------|
| 1 | "Pergola bioclimatique prix Belgique 2026" — mevcut yazıyı güncelle + fiyat tablosu ekle | pergola bioclimatique prix m2 belgique | Yüksek |
| 2 | "Store banne vs pergola: quel choix pour votre terrasse?" — yeni karşılaştırma yazısı | store banne ou pergola | Yüksek |
| 3 | "Isolation véranda: guide complet double/triple vitrage" — teknik derinlik yazısı | isolation veranda aluminium | Orta |
| 4 | "Carport solaire photovoltaïque Belgique: rentabilité 2026" — güncelle mevcut yazıyı | carport solaire belgique prix | Orta |
| 5 | "Aménagement terrasse Belgique: 10 idées tendance été 2026" — mevsimsel içerik | amenagement terrasse belgique | Orta |

---

### 🔗 Link Health

| Metrik | Değer |
|--------|-------|
| Toplam internal link | 92 instance / 22 dosya |
| Unique rota kullanımı | 14 |
| Kırık link | 0 |
| Orphan sayfa | 0 (tüm sayfalar footer/nav'dan erişilebilir) |
| Blog → servis cross-link | YOK (baseline #14 hala açık) |
| Servis → servis cross-link | YOK |

**Öneri:** Blog yazılarına ilgili servis sayfalarına inline link ekle (pergola rehberi → /services/pergola). Servis sayfalarına "İlgili Hizmetler" bölümü ekle.

---

### 📅 Action Items (Öncelikli)

| # | Aksiyon | Öncelik | Efor | Deadline |
|---|--------|---------|------|----------|
| 1 | `pvc-window-hero.png` WebP'ye dönüştür (5.8 MB → <300 KB) | Critical | 15 dk | Bugün |
| 2 | Tüm hero JPEG'leri WebP'ye dönüştür (8 dosya, ~8 MB toplam) | Critical | 1 saat | Bu hafta |
| 3 | GSC doğrulama kodunu aktifleştir | Critical | 10 dk | Bugün |
| 4 | 11 sayfaya canonical tag ekle | High | 1 saat | Bu hafta |
| 5 | 4 geo blog yazısını BlogPage.tsx'e + react-snap include'a ekle | High | 30 dk | Bu hafta |
| 6 | HSTS header ekle (Hostinger hPanel) | High | 10 dk | Bu hafta |
| 7 | BreadcrumbList schema ekle (ServiceDetail + BlogPost) | Medium | 1 saat | 2 hafta |
| 8 | i18n lazy loading (i18next-http-backend) | Medium | 3 saat | 2 hafta |
| 9 | Blog yazılarını güncelle (tarih + içerik) | Medium | 3 saat | Bu ay |
| 10 | Blog → servis internal link ekle | Medium | 1 saat | Bu ay |
| 11 | Google Fonts self-host (GDPR + performans) | Low | 1 saat | Bu ay |
| 12 | Organization schema ekle (AboutPage) | Low | 30 dk | Bu ay |

---

### History (Baseline Karşılaştırma)

**Baseline:** SEO-AUDIT-2026-03-18.md (Score: 58/100)
**Bu rapor:** 2026-04-04 (Score: 66/100)

| Değişim | Detay |
|---------|-------|
| **+11 düzeltildi** | Prerendering, code splitting, FAQPage, hreflang, Meta Pixel, 404, robots.txt, address, WebSite schema, canonical kaldırıldı, HomeAndConstructionBusiness |
| **-1 regresyon** | pvc-window-hero.png 5.8 MB eklendi (Images skoru 60→45) |
| **7 açık kaldı** | Hero WebP, HSTS, GSC, i18n lazy, canonical sayfalar, BreadcrumbList, Google Fonts |
| **4 yeni sorun** | 4 ghost blog post, 4 prerender eksik, streetAddress hala yok, blog içerik eskiyor |

**Sonraki rapor:** 2026-04-11 (Haftalık) veya 2026-07-03 (Çeyreklik Q3)

---

*Bu rapor Claude Code SEO Maintenance aracı ile oluşturulmuştur.*
*Baseline: SEO-AUDIT-2026-03-18.md | Quarterly Q2 2026*
