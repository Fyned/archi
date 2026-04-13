# SEO Weekly Report — archi.constructionveranda.com
## Date: 2026-04-13
## Type: Haftalik Kontrol (Automated)
## Baseline: 61/100 (Tam audit 2026-04-10)

---

### Onceki Raporla Karsilastirma

| Tarih | Tur | Skor | Notlar |
|-------|-----|------|--------|
| 2026-03-18 | Tam Audit (Baseline) | 58/100 | Ilk audit — 32 sorun tespit |
| 2026-04-04 | Haftalik | 66/100 | +8 (prerendering, code splitting, WebP, hreflang) |
| 2026-04-06 | Haftalik + Aylik | 70/100 | +4 (JPEG silindi, geo bloglar eklendi) |
| 2026-04-10 | Tam 6-Ajan Audit | 61/100 | Derin analiz — icerik/E-E-A-T/hreflang sorunlari |
| **2026-04-13** | **Haftalik** | **~64/100** | **6 kritik fix uygulanmis; icerik/E-E-A-T acik** |

**Not:** +3 puan artis sadece teknik duzeltmelerden (hreflang, schema, hero). Icerik/E-E-A-T bosluklar kapaninca 75+ hedeflenebilir.

---

## PART 1 — TECHNICAL

### 1. Sitemap Kontrolu

**Toplam URL:** 95 ✅

| Sayfa Turu | Dil Sayisi | URL Sayisi |
|-----------|-----------|-----------|
| Homepage | 5 | 5 |
| Services | 5 | 5 |
| Service detail (6 tip) | 5 | 30 |
| About | 5 | 5 |
| Contact | 5 | 5 |
| Quote | 5 | 5 |
| Blog | 5 | 5 |
| Projects | 5 | 5 |
| Portfolio | 5 | 5 |
| Privacy | 5 | 5 |
| Videos | 5 | 5 |
| Marketplace | 5 | 5 |
| Blog posts (FR only) | 1 | 10 |
| **TOPLAM** | | **95** |

**Sonuc:** App.tsx'teki tum rotalar sitemap'te mevcut. Dinamik sayfalar (`/projects/:id`, `/blog/:slug` di sil diller) dogru sekilde exclüde edilmis. ✅

**Sitemap hreflang (April 10 fix sonrasi):** 8 sayfa grubundaki eksik reciprocal hreflang duzeltildi. Kontrol: `/fr/about`, `/tr/about`, `/en/about` vb. hepsi birbirine pointing. ✅

---

### 2. Schema Kontrolu

| Dosya | Schema Turu | Durum |
|-------|------------|-------|
| index.html | HomeAndConstructionBusiness (#id fix) | ✅ |
| index.html | WebSite (#id + publisher ref) | ✅ |
| index.html | SearchAction | ✅ Kaldirildi (April 10) |
| BlogPostPage.tsx | BlogPosting | ✅ |
| ServiceDetailPage.tsx | BreadcrumbList | ✅ |
| AboutPage.tsx | Organization (duplicate) | ✅ Kaldirildi (April 10) |

**Eksik (onceki audit'ten devam eden):**
- ❌ Service schema (ServicesPage / ServiceDetailPage)
- ❌ AggregateRating (testimonial yoksa eklenemez)
- ❌ VideoObject (VideoGalleryPage icin)

**Schema puani (tahmini):** 72/100 (+14 April 10 fix sonrasi, @id cross-ref + SearchAction kaldirildi)

---

### 3. Internal Link Kontrolu

Tum sayfalardaki `to=` ve `href=` degerleri incelendi:
- `localizedPath()` yardimcisi: Tum route referanslari bu fonksiyonu kullaniyor ✅
- Blog post `serviceLink` degerleri: `/services/pergola`, `/services/veranda`, `/services/carport` — App.tsx'te gecerli rotalar ✅
- Harici linkler: tel:, mailto:, WhatsApp, Facebook — tum kaynaklar sabit/gecerli ✅
- **Kirik internal link: 0** ✅

---

### 4. Meta Tag Kontrolu

| Sayfa | Helmet Kullanimi | Durum |
|-------|-----------------|-------|
| HomePage | ✅ | OK |
| AboutPage | ✅ | OK |
| ServicesPage | ✅ | OK |
| ServiceDetailPage | ✅ | OK |
| ProjectsPage | ✅ | OK |
| ProjectDetailPage | ✅ | OK |
| ContactPage | ✅ | OK |
| QuotePage | ✅ | OK |
| BlogPage | ✅ | OK |
| BlogPostPage | ✅ | OK |
| PortfolioPage | ✅ | OK |
| VideoGalleryPage | ✅ | OK |
| MarketplacePage | ✅ | OK |
| **PrivacyPolicyPage** | **❌ YOK** | **BUG — Yeni bulgu** |
| NotFoundPage | N/A | OK (404) |

**🔴 Yeni Bulgu:** `src/pages/PrivacyPolicyPage.tsx` — react-helmet-async kullanmiyor. Sayfa title, meta description, canonical tag eksik. Sitemap'te 5 dil × 1 URL = 5 URL var, hepsi meta tag'siz indeksleniyor.

---

### 5. robots.txt Kontrolu

```
User-agent: * → Allow: / ✅
Disallow: /api/, /node_modules/ ✅ (onemli sayfa bloke yok)
GPTBot → Allow ✅
ClaudeBot → Allow ✅
PerplexityBot → Allow ✅
CCBot → Disallow ✅ (egitim crawler engellendi)
Sitemap direktifi → ✅
```

**Sonuc:** robots.txt temiz, hicbir onemli sayfa bloke edilmemis. ✅

---

## PART 2 — CONTENT

### 6. Blog Yazi Tarihleri

| Slug | Tarih | Yas | Durum |
|------|-------|-----|-------|
| pergola-bioclimatique-guide-complet | 2026-04-06 | 7 gun | ✅ Taze |
| veranda-aluminium-vs-pvc | 2026-04-06 | 7 gun | ✅ Taze |
| carport-solaire-belgique | 2026-04-06 | 7 gun | ✅ Taze |
| entretien-pergola-aluminium | 2026-04-06 | 7 gun | ✅ Taze |
| permis-urbanisme-belgique | 2026-04-06 | 7 gun | ✅ Taze |
| tendances-outdoor-2026 | 2026-04-06 | 7 gun | ✅ Taze |
| pergola-bioclimatique-charleroi | 2026-03-18 | 26 gun | ✅ Taze |
| veranda-aluminium-bruxelles | 2026-03-18 | 26 gun | ✅ Taze |
| carport-aluminium-namur | 2026-03-18 | 26 gun | ✅ Taze |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 26 gun | ✅ Taze |

**Sonuc:** 6 aydan eski yazi yok. Tum yazilar Mart-Nisan 2026 tarihli. ✅

**Devam eden sorun:** Blog yazilari ortalama ~640 kelime (minimum 1500). Icerik derinligi sorunu devam ediyor (April 10 audit'ten beri acik).

---

### 7. Thin Content Durumu (April 10 Audit'ten Devam)

| Sayfa | Tahmini Kelime | Minimum | Acik |
|-------|---------------|---------|------|
| Homepage | ~310 | 500 | ❌ -190 kelime |
| About | ~180 | 500 | ❌ -320 kelime |
| Shutter servisi | ~200 | 800 | ❌ -600 kelime |
| Garage servisi | ~200 | 800 | ❌ -600 kelime |
| Blog yazilari (ort.) | ~640 | 1,500 | ❌ -860 kelime |

**Durum:** Degisiklik yok. Bu haftaki commit'ler icerik degisikligi icermedi.

---

### 8. Yeni Icerik Konu Onerileri (Keyword Gap)

Mevcut blog ve sayfa analizi sonrasi 3 eksik konu:

**1. "Volets roulants aluminium vs PVC Belgique — Guide 2026"**
- Neden: Shutter sayfasi thin content (200 kelime). FR audience icin karsilastirmali rehber.
- Hedef keyword: `volets roulants belgique prix`, `volet roulant aluminium`
- Sayfa: Yeni blog post + ShutterDetailPage icin FAQ bolumu

**2. "Porte de garage sectionnelle: prix et installation en Belgique"**
- Neden: Garage sayfasi thin content (200 kelime). Belcika'da garage door aramalari yuksek.
- Hedef keyword: `porte de garage belgique`, `porte sectionnelle prix`
- Sayfa: Yeni blog post + GarageDetailPage icin FAQ bolumu

**3. "Pergola bioclimatique Liège — Prix et devis gratuit"**
- Neden: Charleroi ve Bruxelles lokasyon blog yazilarinin devami. Liege buyuk sehir, hicbir icerik yok.
- Hedef keyword: `pergola bioclimatique liège`, `pergola liège prix`
- Sayfa: Yeni geo-targeted blog post (`/fr/blog/pergola-bioclimatique-liege`)

---

### 9. Gorsel Alt Tag Kontrolu

Tum `<img>` tag'leri incelendi (22 adet):

| Dosya | Alt Durumu |
|-------|-----------|
| Hero.tsx | ✅ Sabit alt text |
| Header.tsx, Footer.tsx | ✅ Logo alt |
| ServicesPage.tsx | ✅ i18n key ile |
| ServiceDetailPage.tsx | ✅ Dynamic + fallback |
| BlogPage.tsx | ✅ i18n key ile |
| BlogPostPage.tsx | ✅ i18n key ile (4 adet) |
| AboutPage.tsx | ✅ "Our team at work" |
| VideoGalleryPage.tsx | ✅ i18n key ile |
| ProjectDetailPage.tsx | ✅ Dynamic + index |
| Card.tsx | ✅ prop ile |
| Lightbox.tsx | ✅ title + fallback |
| Step1ProjectType.tsx | ✅ i18n key ile |

**Sonuc:** 22/22 gorsel alt text var. ✅

---

## IMPROVEMENTS SINCE APRIL 10

April 10 fix commit (aaee60f) ile cozulen sorunlar:

| # | Issue | Cozum | Durum |
|---|-------|-------|-------|
| 1 | Sitemap hreflang reciprocal (8 grup) | Sitemap yeniden uretildi | ✅ |
| 2 | Schema @id cakismasi | @id cross-ref eklendi | ✅ |
| 3 | Gecersiz SearchAction | Kaldirildi | ✅ |
| 4 | Organization duplicate | AboutPage'den kaldirildi | ✅ |
| 5 | Hero gorsel 502 KB | 283 KB (-44%) | ✅ |
| 6 | Privacy tarihi Ocak 2025 | Nisan 2026 guncellendi (5 dil) | ✅ |

---

## OPEN ISSUES (Acik Kalan)

### 🔴 Critical

| # | Issue | Efor | Kim | Acik Olan |
|---|-------|------|-----|----------|
| 1 | GSC dogrulama kodu | 10 dk | Musteri | 3. aydan beri |
| 2 | BCE/KBO sirket sicil numarasi | 15 dk | Musteri + Dev | Belcika yasal zorunlulugu |
| 3 | PrivacyPolicyPage meta tags eksik | 20 dk | Dev | **Yeni bulgu bu hafta** |

### 🟡 High Priority

| # | Issue | Efor | Kim |
|---|-------|------|-----|
| 4 | Homepage icerik genislet (+190 kelime) | 1 saat | Icerik |
| 5 | About sayfasi icerik genislet (+320 kelime) | 1 saat | Icerik |
| 6 | Shutter + Garage FAQ ekle | 1 saat | Icerik |
| 7 | Testimonials doldurmak | Musteri | Musteri |

### 🟢 Medium Priority

| # | Issue | Efor | Kim |
|---|-------|------|-----|
| 8 | HSTS header (Hostinger panel) | 10 dk | Musteri |
| 9 | Gmail → domain email | Musteri | Musteri |
| 10 | Hero gorsel hala 283 KB (hedef <200 KB) | 15 dk | Dev |
| 11 | Blog yazilari genislet (640 → 1200+ kelime) | 5 saat | Icerik |
| 12 | Service schema ekle (ServicesPage) | 30 dk | Dev |
| 13 | VideoObject schema (VideoGalleryPage) | 30 dk | Dev |

---

## Statistics

| Metrik | Deger | Onceki (04-10) | Degisim |
|--------|-------|----------------|---------|
| Toplam sayfa dosyasi | 15 | 15 | = |
| Toplam sitemap URL | 95 | 95 | = |
| Kirik hreflang reciprocal | 0 | 8 grup | ✅ -8 |
| Schema turu | 5 | 6 (duplicate vardı) | ✅ Duzeltildi |
| Internal kirik link | 0 | 0 | = |
| Blog yazisi | 10 | 10 | = |
| 6+ ay eski blog | 0 | 0 | = |
| Gorsel alt text | 22/22 | 18/18 | ✅ |
| Hero gorsel boyutu | 283 KB | 502 KB | ✅ -44% |
| Meta tag eksik sayfa | 1 (Privacy) | 0 | ❌ Yeni |

---

## Sonraki Adimlar

1. **Dev (bu hafta):** `PrivacyPolicyPage.tsx`'e Helmet + title/description/canonical ekle
2. **Musteri (devam eden):** GSC kodu, BCE numarasi, HSTS header
3. **Icerik (once):** Shutter ve Garage FAQ bolumu — thin content en acil
4. **Blog:** "Volet roulant" ve "Porte de garage" blog yazilari — shutter/garage thin content icin destek

**Sonraki tam audit:** 2026-07-10 (Q3)
**Sonraki haftalik:** 2026-04-20 (scheduled task otomatik)
