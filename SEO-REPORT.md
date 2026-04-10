# SEO Full Audit Report — archi.constructionveranda.com
## Date: 2026-04-10
## Overall Score: 61/100
## Type: TAM 6-AJAN AUDIT (Quarterly Q2 2026 — Yeni Baseline)

---

### Executive Summary
- Onceki haftalik rapor (10 Nisan): 73/100 — **tam audit ile gercek skor: 61/100**
- Haftalik raporlar yuzeysel kontrol yapar. 6-ajan audit derin katmanlari ortaya cikardi:
  - **Icerik derinligi ciddi yetersiz:** Homepage 310 kelime (min 500), blog yazilari ort. 640 kelime (min 1500), About 180 kelime (min 500)
  - **Sitemap hreflang reciprocal KIRIK:** 8 sayfa grubunda eski girislere TR/DE/EN hreflang eklenmemis
  - **E-E-A-T zayif:** Gercek musteri yorumu yok, BCE/KBO numarasi yok, sertifika kaniti yok
  - **Schema cross-reference tutarsiz:** Organization ve HomeAndConstructionBusiness cakisiyor
- **Guclu yanlar:** robots.txt temiz, prerendering aktif, code splitting uygulanmis, tum gorseller WebP, blog cross-link mevcut

---

### Score Breakdown (6-Ajan Detayli Analiz)

| Kategori | Agirlik | Skor | Katki | Ajan |
|----------|---------|------|-------|------|
| Technical SEO | 25% | 71 | 17.8 | Technical |
| Content Quality | 25% | 47 | 11.8 | Content |
| On-Page SEO | 20% | 63 | 12.6 | Sitemap + Visual |
| Schema / Structured Data | 10% | 58 | 5.8 | Schema |
| Performance (CWV) | 10% | 62 | 6.2 | Performance |
| Images | 5% | 88 | 4.4 | Performance |
| AI Search Readiness | 5% | 50 | 2.5 | Content |
| **TOPLAM** | **100%** | | **61/100** | |

### Neden 73 Degil 61?
Haftalik raporlar kod degisikliklerini sayar (WebP eklendi → Images +26). Tam audit **icerigi olcer**: kac kelime, gercek E-E-A-T sinyali, hreflang tutarliligi, schema validasyonu. Derin analiz, onceki raporlarin kaciramadigi sorunlari ortaya cikartti.

---

### Technical SEO Detay: 71/100

| Alt Kategori | Skor |
|-------------|------|
| Crawlability | 88 |
| Indexability | 65 |
| Security | 52 |
| URL Structure | 80 |
| Mobile | 85 |
| CWV | 60 |
| Structured Data | 78 |
| JS Rendering | 72 |

---

### 🔴 Critical Issues (Hemen Duzelt)

**1. GSC dogrulama hala yorum satirinda (3. aydan beri acik)**
- `index.html:30` — placeholder comment
- Etki: Crawl hatalari, index durumu, CWV field data GORUNMUYOR
- Cozum: Musteriden dogrulama kodu al

**2. Sitemap hreflang reciprocal KIRIK — 8 sayfa grubu**
- Eski girisler (about, contact, quote, blog, portfolio, privacy, videos, marketplace) yeni eklenen TR/DE/EN varyantlarina hreflang eklenmemis
- Ornek: `/fr/about` → TR hreflang yok, ama `/tr/about` → FR hreflang var
- Google reciprocal olmayan hreflang'i TAMAMEN yok sayar
- Cozum: Sitemap'teki tum eski girisleri 5 dil hreflang ile guncelle

**3. Icerik ciddi sekilde yetersiz (thin content)**
| Sayfa | Mevcut | Minimum | Fark |
|-------|--------|---------|------|
| Homepage | ~310 kelime | 500 | -190 |
| About | ~180 kelime | 500 | -320 |
| Shutter servisi | ~200 kelime | 800 | -600 |
| Garage servisi | ~200 kelime | 800 | -600 |
| Blog yazilari (ort.) | ~640 kelime | 1,500 | -860 |

**4. BCE/KBO sirket sicil numarasi HICBIR YERDE YOK**
- Belcika yasalari ticari iletisimde BCE numarasi gosterilmesini zorunlu kilar
- Footer, contact, privacy, schema — hicbirinde yok
- Hem yasal hem E-E-A-T sorunu

---

### 🟡 Warnings (Bu Hafta Duzelt)

**5. Organization + HomeAndConstructionBusiness schema cakismasi**
- `AboutPage.tsx` → Organization, `index.html` → HomeAndConstructionBusiness
- Ayni entity iki farkli @type ile — Google karisir
- Cozum: Birini kaldir veya @id ile cross-reference

**6. WebSite SearchAction gecersiz**
- `urlTemplate: /fr/services/{search_term_string}` — gercek site search degil
- Google bu action'i reddeder
- Cozum: SearchAction blogunu kaldir

**7. Hero gorseli 502 KB (hedef <200 KB)**
- `hero-main.webp` LCP elemaninin LCP etkisi yuksek
- Cozum: `sharp` ile quality 75, hedef 150 KB

**8. HSTS header eksik (baseline'dan beri acik)**
- Hostinger hPanel → SSL → HSTS aktiflestir

**9. Privacy policy tarihi "Janvier 2025" — 15 ay eski**
- GDPR uyumluluk sinyali icin guncellenmeli

**10. E-E-A-T bosluklar**
- Testimonials bolumu BOS (home.json'da sadece baslik var, icerik yok)
- Sertifikalar bolumu BOS (about.json'da sadece baslik)
- Gmail adresi kullaniliyor (domain email degil)
- Iletisim kisisi "Yusuf Cetin" hicbir public sayfada gorunmuyor

---

### ✅ Passed Checks

| # | Gecen Kontrol |
|---|-------------|
| 1 | robots.txt temiz — AI crawlerlar Allow, CCBot Disallow |
| 2 | react-snap prerendering aktif (45+ rota) |
| 3 | React.lazy() code splitting (15 sayfa) |
| 4 | Tum gorseller WebP — 0 JPEG/PNG |
| 5 | 404 sayfasi + catch-all route mevcut |
| 6 | HreflangTags global canonical injection (Layout uzerinden) |
| 7 | BreadcrumbList schema — ServiceDetail + BlogPost |
| 8 | Organization schema — AboutPage |
| 9 | Blog → servis cross-link (8/10 post) |
| 10 | Meta Pixel async (load event ile) |
| 11 | Hero preload + fetchPriority="high" |
| 12 | Kirik internal link: 0 |
| 13 | Tum img tag'lerinde alt text (18/18) |

---

### 📊 Statistics

| Metrik | Deger |
|--------|-------|
| Toplam sayfa dosyasi | 15 |
| Toplam sitemap URL | 95 |
| Kirik hreflang reciprocal | 8 sayfa grubu |
| Schema turleri | 6 (HomeAndConstructionBusiness, WebSite, WebPage, BlogPosting, BreadcrumbList, Organization) |
| Eksik schema | 3 (Service, AggregateRating, VideoObject) |
| Blog yazilari | 10 |
| Blog ort. kelime | ~640 (min 1500) |
| Homepage kelime | ~310 (min 500) |
| JS bundle toplam | ~643 KB (uncompressed) |
| Hero gorsel | 502 KB WebP |
| Gorsel format | 100% WebP |
| Internal link | 0 kirik |
| Alt text kapsami | 18/18 |

---

### E-E-A-T Detay Skorlari

| Faktor | Skor | Agirlik | Katkisi |
|--------|------|---------|---------|
| Experience | 28/100 | 20% | 5.6 |
| Expertise | 58/100 | 25% | 14.5 |
| Authoritativeness | 22/100 | 25% | 5.5 |
| Trustworthiness | 62/100 | 30% | 18.6 |
| **E-E-A-T Toplam** | | | **44/100** |

---

### 📅 Action Items (Oncelikli)

| # | Aksiyon | Oncelik | Efor | Kim |
|---|--------|---------|------|-----|
| 1 | GSC dogrulama kodu aktiflestir | Critical | 10 dk | Musteri |
| 2 | Sitemap hreflang reciprocal duzelt (eski girisler) | Critical | 1 saat | Dev |
| 3 | BCE/KBO numarasi ekle (footer + schema + privacy) | Critical | 15 dk | Musteri bilgi + Dev |
| 4 | Homepage icerigi genislet (+190 kelime) | High | 1 saat | Icerik |
| 5 | About sayfasi genislet (+320 kelime, sertifika, ekip) | High | 1 saat | Icerik |
| 6 | Shutter + Garage FAQ ekle (her biri 4-5 soru) | High | 1 saat | Icerik |
| 7 | Testimonials bolumunu doldur (min 3 gercek yorum) | High | Musteri | Musteri |
| 8 | Organization/HomeAndConstructionBusiness cakismasini coz | High | 30 dk | Dev |
| 9 | SearchAction kaldir (gercek arama yok) | Medium | 10 dk | Dev |
| 10 | hero-main.webp sikistir (502 KB → <200 KB) | Medium | 15 dk | Dev |
| 11 | HSTS header ekle | Medium | 10 dk | Hostinger |
| 12 | Privacy policy tarihini guncelle | Medium | 5 dk | Dev |
| 13 | Gmail → domain email degistir | Medium | Musteri | Musteri |
| 14 | Blog yazilarini genislet (ort. 640 → 1200+ kelime) | Low | 5 saat | Icerik |
| 15 | i18n lazy loading | Low | 3 saat | Dev |

---

### History (Rapor Karsilastirma)

| Tarih | Tur | Skor | Notlar |
|-------|-----|------|--------|
| 2026-03-18 | Tam Audit (Baseline) | 58/100 | Ilk audit — 32 sorun tespit |
| 2026-04-04 | Haftalik | 66/100 | +8 (prerendering, code splitting, WebP, hreflang) |
| 2026-04-06 | Haftalik + Aylik | 70/100 | +4 (JPEG silindi, geo bloglar eklendi) |
| **2026-04-10** | **Tam 6-Ajan Audit** | **61/100** | **Derin analiz — icerik/E-E-A-T/hreflang sorunlari ortaya cikti** |

**Aciklama:** Haftalik raporlar teknik degisiklikleri olcer (dosya eklendi/silindi). Tam audit icerik kalitesi, kelime sayisi, E-E-A-T sinyalleri ve schema validasyonu yapar. Gercek skor 61 — icerik ve otorite bosluklar kapatilinca 75+'a cikilabilir.

**Sonraki tam audit:** 2026-07-10 (Q3)
**Sonraki haftalik:** 2026-04-14 (scheduled task otomatik)

---

*Bu rapor 6 paralel Claude Code SEO ajan ile olusturulmustur.*
*Ajanlar: Technical SEO (71), Content Quality (47), Schema (58), Sitemap (52), Performance (62), Visual (74)*
