# SEO Report — archi.constructionveranda.com
## Date: 2026-04-06
## Overall Score: 67/100 (+1 from 2026-04-04)
## Type: HAFTALIK + AYLIK KONTROL (Nisan 2026, 1. hafta)

---

### Executive Summary
- **2 iyileşme tespit edildi** bu hafta: `pvc-window-hero.png` (5.8 MB) silindi, 4 geo blog yazısı BlogPage.tsx'e eklendi
- **3 kritik sorun hala açık**: GSC doğrulanmamış, 11 sayfada canonical eksik, hero JPEG'ler hala dönüştürülmemiş
- **Sitemap boşlukları**: Türkçe sayfalar eksik (`/tr/about`, `/tr/contact`, `/tr/quote`, `/tr/blog`), projects hiç indexlenmiyor
- **Blog içeriği**: 6 eski yazı 87-108 gün, henüz 6 ay eşiğini aşmadı — yakından izle
- **Monthly audit tamamlandı**: Bundle boyutları sabit (dist: 19 Mart build), internal linking değişmedi

---

### ✅ Bu Hafta Düzeltilen (2026-04-04 → 2026-04-06)

| # | Sorun | Durum |
|---|-------|-------|
| 1 | `pvc-window-hero.png` 5.8 MB PNG silindi | ✅ Dosya yok — Images skoru iyileşti |
| 2 | 4 geo blog yazısı BlogPage.tsx'e eklendi | ✅ pergola-charleroi, veranda-bruxelles, carport-namur, prix-m2 artık erişilebilir |

---

### 🔴 Critical Issues (Hemen düzelt)

**1. Google Search Console hala doğrulanmamış (3 haftadır açık)**
- Dosya: `index.html` satır 30 — hala yorum satırı
- Etki: Crawl hataları, indeksleme durumu, manual actions görünmez
- Çözüm: GSC'den doğrulama kodu al → `<!-- <meta name="google-site-verification" ...` yorumunu kaldır
- Efor: 10 dakika

**2. Hero JPEG görselleri hala dönüştürülmemiş**
- 76 JPEG hala `public/images/` altında (500 KB+ olanlar dahil)
- `public/images/general/hero-main.jpg` — en kritik LCP görseli
- WebP'ler mevcut (79 dosya) ama eski JPEG'ler kaldırılmamış / hero-main.jpg WebP edilmemiş
- Çözüm: `cwebp -q 80 hero-main.jpg -o hero-main.webp` + `<picture>` tag ile serve et
- Efor: 1 saat

---

### 🟡 Warnings (Bu hafta düzelt)

**3. 11 sayfada canonical tag eksik**
- Canonical olan: ServiceDetailPage, BlogPage, BlogPostPage (3/15)
- Eksik: HomePage, AboutPage, ContactPage, QuotePage, ServicesPage, ProjectsPage, PortfolioPage, MarketplacePage, VideoGalleryPage, PrivacyPolicyPage, NotFoundPage (11/15)
- Etki: 5 dil versiyonu → duplicate content riski
- Efor: 1 saat

**4. Sitemap'te Türkçe sayfalar eksik**
- `/tr/about`, `/tr/contact`, `/tr/quote`, `/tr/blog` — App.tsx'te rotalar var ama sitemap'te yok
- `/de/portfolio`, `/tr/portfolio` — sadece fr, nl, en (3 dil) sitemap'te
- `/en/privacy`, `/de/privacy`, `/tr/privacy`, `/en/marketplace`, `/de/marketplace`, `/tr/marketplace`, `/en/videos`, `/de/videos`, `/tr/videos` — yalnızca fr+nl
- Etki: TR ve bazı DE sayfaları indexlenemez
- Efor: 30 dakika

**5. Projects sayfaları hiç indexlenmiyor**
- `/projects` ve `/projects/:projectId` rotaları sitemap'te 0 URL
- App.tsx'te ProjectsPage + ProjectDetailPage var
- Etki: Proje galerisi arama motorlarına görünmüyor
- Efor: 30 dakika (en azından `/fr/projects`, `/nl/projects`, `/en/projects` ekle)

**6. HSTS header hala eksik (3 haftadır açık)**
- Hostinger hPanel → `.htaccess` veya CDN config
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- Efor: 10 dakika

---

### 🔵 Medium Priority

**7. BreadcrumbList schema eksik**
- ServiceDetailPage ve BlogPostPage'de JSON-LD breadcrumb yok
- Etki: Google'da breadcrumb rich result fırsatı kaçırılıyor

**8. Blog → servis internal link eksik**
- Pergola rehberi `/blog/pergola-bioclimatique-guide-complet` → `/services/pergola` linki yok
- Tüm 10 blog yazısında ilgili servis sayfasına inline link eksik

**9. i18n lazy loading hala uygulanmamış**
- `i18n-BbvaRjDb.js`: 49 KB — tüm 5 dil × 12 namespace statik import
- Çözüm: `i18next-http-backend` ile runtime lazy loading

---

### 📊 PART 1 — Technical Checks

#### Sitemap Doğrulama
- **Toplam URL**: 75 (değişmedi)
- **Beklenen pages** (App.tsx'ten): Homepage, About, Services, ServiceDetail(×6), Projects, ProjectDetail, Contact, Quote, Privacy, Videos, Marketplace, Blog, BlogPost, Portfolio = 15 sayfa tipi
- **Sitemap'te olan tipler**: Homepage, Services, ServiceDetail(×6), About, Contact, Quote, Portfolio, Blog, BlogPost(×10), Privacy, Marketplace, Videos — Projects YOK
- **Eksik URL sayısı**: ~15 URL (TR sayfaları + projects + bazı DE/EN sayfa versiyonları)

#### Schema Doğrulama
- `application/ld+json` bulunan dosyalar:
  - `index.html`: 3 schema (HomeAndConstructionBusiness, WebSite, WebPage)
  - `src/pages/BlogPostPage.tsx`: BlogPosting schema (datePublished, mainEntityOfPage, publisher)
- `schema.org` referansı: Sadece BlogPostPage.tsx içinde dinamik
- **Eksik**: ServiceDetailPage, AboutPage, ProjectDetailPage'de dinamik JSON-LD yok

#### Meta Tag Doğrulama (react-helmet-async)
- Helmet kullanan sayfalar: **15/15** ✅
- Canonical tag olan sayfalar: **3/15** ⚠️

#### robots.txt
- Durum: ✅ Temiz
- Önemli sayfalar: Allow ✓
- AI crawlerlar (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot): Allow ✓
- CCBot (eğitim crawler): Disallow ✓
- Sitemap referansı: Mevcut ✓

#### Kırık Internal Link Kontrolü
- Sayfalar arası `to="/"` referansları: Dinamik `${lang}/path` pattern kullanılıyor
- Hardcoded link: Sadece `"/fr"` (dil seçici) — geçerli
- **Kırık link**: 0 ✅ (önceki raporla aynı, kod değişmedi)

---

### 📊 PART 2 — Content Checks

#### Blog Yazıları ve Tarihler

| Slug | Tarih | Yaş | Durum |
|------|-------|-----|-------|
| pergola-bioclimatique-guide-complet | 2026-01-10 | 86 gün | ⚠️ Güncelle (3 ay) |
| veranda-aluminium-vs-pvc | 2026-01-08 | 88 gün | ⚠️ Güncelle (3 ay) |
| carport-solaire-belgique | 2026-01-05 | 91 gün | ⚠️ Güncelle (3 ay) |
| entretien-pergola-aluminium | 2026-01-03 | 93 gün | ⚠️ Güncelle (3 ay) |
| permis-urbanisme-belgique | 2025-12-28 | 99 gün | ⚠️ Güncelle (3 ay) |
| tendances-outdoor-2026 | 2025-12-20 | 107 gün | ⚠️ Güncelle (3.5 ay) |
| pergola-bioclimatique-charleroi | 2026-03-18 | 19 gün | ✅ Taze |
| veranda-aluminium-bruxelles | 2026-03-18 | 19 gün | ✅ Taze |
| carport-aluminium-namur | 2026-03-18 | 19 gün | ✅ Taze |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 19 gün | ✅ Taze |

**Not**: 6 ay eşiğini (2025-10-06 öncesi) aşan yazı yok. Ancak 6 yazı 3+ ay geride, yakında content freshness sinyali düşer.

#### Duplicate / Thin Content

| Risk | Detay |
|------|-------|
| 3 geo blog yazısı benzer yapı | charleroi, bruxelles, namur formatı aynı — unique section ekle |
| marketplace ve videos | Thin content — 1 ekran içerik, düşük dwell time |
| Privacy sayfası | Düşük SEO değeri — normal |

#### Önerilen 3 Yeni İçerik Konusu (Keyword Gap)

1. **"Store banne motorisée Belgique: prix et installation 2026"** — Yatay güneşlik nişi kapsanmıyor; pergola kitlesinden farklı niyet
2. **"Isolation véranda aluminium: double vs triple vitrage — guide thermique"** — Teknik derinlik yazısı; enerji tasarrufu sorgulamaları yüksek
3. **"Terrasse couverte sans permis Belgique: que dit la loi en 2026?"** — Yüksek arama hacmi, mevcut permis yazısını tamamlar

#### Alt Tag Denetimi
- Src içinde `<img` tagları: **Tümünde alt attribute mevcut** ✅ (18/18 — önceki rapordan değişmedi)
- 158 fiziksel görsel dosyası var (76 JPG + 3 PNG + 79 WebP) — bunlar CSS background veya `<img>` ile kullanılıyor

---

### 📊 PART 3 — Monthly Audit (Nisan 1-7)

#### 10. Meta Description Duplicate Denetimi

| Sayfa | FR meta desc | Sorun |
|-------|-------------|-------|
| Home | "Spécialiste pergola à lames orientables et véranda sur mesure..." | ✅ Unique |
| About | "Découvrez l'histoire d'Archi Construction & Véranda..." | ✅ Unique |
| Blog index | "Découvrez nos articles et conseils sur les pergolas..." | ✅ Unique |
| Portfolio | "Découvrez nos réalisations de vérandas en aluminium..." | ✅ Unique |
| Marketplace | "Découvrez nos produits et offres spéciales sur Facebook Marketplace" | ⚠️ Thin |
- Farklı dil dosyaları (nl, en, de, tr) kontrol edilmeli — FR'daki birebir çeviri duplicate URL sorunu yaratmaz (hreflang sayesinde)
- **Kritik duplicate**: Tespit edilmedi

#### 11. Internal Link Yapısı — Orphan Sayfalar

```
Nav/Footer'dan erişilebilen sayfalar:
✅ Home → About, Services, Projects, Contact, Quote, Blog, Portfolio
✅ Footer → Privacy, Videos, Marketplace
⚠️ NotFoundPage → sadece 404 rotasından, normal
⚠️ ProjectDetailPage → ProjectsPage'den ulaşılıyor, ProjectsPage sitemap'te YOK

Orphan sayfa tespiti: 0 teknik orphan
İyileştirme gereken: Blog yazılarından servis sayfalarına cross-link YOK
```

#### 12. Bundle Boyutları (dist: 19 Mart 2026 build)

| Chunk | Boyut | Durum |
|-------|-------|-------|
| index-CUQEl1bX.js (main) | 286 KB | ⚠️ Yüksek (hedef <200 KB) |
| vendor-BXSiOK8Y.js | 180 KB | ⚠️ Yüksek |
| animations-SzbBmwP4.js | 119 KB | ⚠️ Framer Motion tam yüklü |
| i18n-BbvaRjDb.js | 49 KB | ⚠️ Lazy loading ile 0'a düşürülebilir |
| QuotePage-D55IZNGD.js | 21 KB | ✅ Normal |
| icons-CzIDHBSg.js | 14 KB | ✅ İyi |
| **Toplam JS** | **~690 KB uncompressed** | ⚠️ (Gzip ~200 KB) |

**Not**: Build Mart 19'dan — kod değişikliği yapılıp rebuild edilmedi. Gerçek production bundle aynı.

---

### 📈 Score Breakdown

| Kategori | Ağırlık | Hafta Önce | Bu Hafta | Delta |
|----------|---------|-----------|----------|-------|
| Technical SEO | 25% | 72 | 72 | 0 |
| Content Quality | 25% | 62 | 64 | +2 |
| On-Page SEO | 20% | 67 | 67 | 0 |
| Schema / Structured Data | 10% | 68 | 68 | 0 |
| Performance (CWV) | 10% | 58 | 58 | 0 |
| Images | 5% | 45 | 62 | +17 |
| AI Search Readiness | 5% | 78 | 78 | 0 |
| **TOPLAM** | **100%** | **66** | **67** | **+1** |

**Images artışı**: pvc-window-hero.png 5.8 MB silindi — büyük iyileşme. Hero JPEG'ler hala dönüştürülmemiş olduğundan 100 değil.

---

### 📊 Statistics

| Metrik | Değer | Trend |
|--------|-------|-------|
| Toplam sayfa dosyası | 15 (src/pages/) | — |
| Toplam sitemap URL | 75 | — |
| Canonical tag olan sayfalar | 3/15 | — (değişmedi) |
| Alt text olan görseller | 18/18 img tag | ✅ |
| Schema türleri | 4 (HomeAndConstructionBusiness, WebSite, WebPage, BlogPosting) | — |
| Blog yazıları | 10 (10 aktif, 0 ghost) | ↑ (4 ghost düzeltildi) |
| 6 aydan eski blog | 0/10 | ✅ |
| 3 aydan eski blog | 6/10 | ⚠️ |
| JS bundle toplam | ~690 KB | — |
| Görsel formatı (WebP) | 79/158 (%50) | ↑ |
| Kırık internal link | 0 | ✅ |
| Orphan sayfa | 0 | ✅ |
| Eksik sitemap URL (tahmini) | ~15 | ⚠️ |
| Eksik schema türleri | 4 (BreadcrumbList, Organization, Service, VideoObject) | — |

---

### 📅 Action Items (Öncelik Sırasıyla)

| # | Aksiyon | Öncelik | Efor | Deadline |
|---|--------|---------|------|----------|
| 1 | GSC doğrulama kodunu aktifleştir (index.html satır 30) | Critical | 10 dk | Bu gün |
| 2 | hero-main.jpg → WebP dönüştür + `<picture>` ile serve et | Critical | 30 dk | Bu hafta |
| 3 | Sitemap'e eksik TR sayfaları ekle (/tr/about, /tr/contact, /tr/quote, /tr/blog) | High | 20 dk | Bu hafta |
| 4 | Sitemap'e /projects ekle (fr, nl, en, de, tr) | High | 15 dk | Bu hafta |
| 5 | 11 sayfaya canonical tag ekle | High | 1 saat | Bu hafta |
| 6 | HSTS header ekle (Hostinger hPanel) | High | 10 dk | Bu hafta |
| 7 | Blog yazılarına servis sayfası cross-link ekle | Medium | 1 saat | Bu ay |
| 8 | BreadcrumbList schema ekle (ServiceDetail + BlogPost) | Medium | 1 saat | Bu ay |
| 9 | i18n lazy loading (i18next-http-backend) | Medium | 3 saat | Bu ay |
| 10 | "tendances-outdoor-2026" blog yazısını Nisan 2026 için güncelle | Medium | 1 saat | Bu ay |
| 11 | "Store banne motorisée" — yeni blog yazısı yaz | Low | 2 saat | Mayıs |
| 12 | Organization schema (AboutPage) ekle | Low | 30 dk | Bu ay |

---

### History (Rapor Karşılaştırma)

| Tarih | Skor | Notlar |
|-------|------|--------|
| 2026-03-18 | 58/100 | Baseline SEO audit |
| 2026-04-04 | 66/100 | +8 puan (11 düzeltme, 1 regresyon: pvc-window-hero.png) |
| **2026-04-06** | **67/100** | **+1 puan (pvc-window-hero.png silindi, 4 geo post eklendi)** |

**Sonraki rapor**: 2026-04-13 (Haftalık)
