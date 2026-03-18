# Implementation Roadmap — Archi Construction & Veranda SEO
**Güncelleme:** 2026-03-18

---

## Faz 1 — Teknik Temel (Hafta 1-4) 🔴 KRİTİK

> Hedef: SEO 58 → 70 | GEO 55 → 62

### Hafta 1 — Acil Düzeltmeler
- [ ] **react-snap prerendering** — `npm install --save-dev react-snap` + `postbuild` script
  - Dosya: `package.json`, `vite.config.ts`, `src/App.tsx`
  - Test: curl -s ile her sayfanın statik HTML içerdiğini doğrula
- [ ] **React.lazy() code splitting** — 14 sayfa ayrı chunk
  - Dosya: `src/App.tsx`
  - Hedef: main bundle <150KB
- [ ] **i18next-http-backend lazy loading** — 5 dil başta yüklenmesin
  - Dosya: `src/lib/i18n/config.ts`
- [ ] **404 NotFoundPage** — `<Route path="*">` ekle ✅ (2026-03-18 tamamlandı)
- [ ] **Dil yönlendirme fix** — default `/fr`, browser detect düzelt
  - Dosya: `src/lib/i18n/config.ts`, `src/App.tsx`

### Hafta 2 — SEO Altyapı
- [ ] **Canonical + hreflang** — `react-helmet-async` ile her sayfaya route-specific
  - Tüm sayfa componentlerine `<Helmet>` ekle
  - FR → `x-default`, FR, NL, EN, DE, TR
- [ ] **Hero WebP** — hero-main.jpg (1MB) → hero-main.webp (~200KB)
  - `public/images/general/` klasöründe dönüştür
  - `<picture>` elementi ile AVIF + WebP + JPEG fallback
- [ ] **Google Search Console** doğrulama kodu aktifleştir
  - `index.html` satır 14-15 yorum satırlarını aktifleştir
- [ ] **HSTS header** — Hostinger hPanel → `.htaccess` veya CDN
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`

### Hafta 3 — Schema ve Yapı
- [ ] **LocalBusiness schema tam adres** — streetAddress, Charleroi 6000, Hainaut
- [ ] **FAQPage schema kaldır** ✅ (2026-03-18 tamamlandı)
- [ ] **BreadcrumbList schema** — ServiceDetailPage + BlogPostPage
- [ ] **Service schema** — her servis sayfasına (pergola, veranda, carport, shutter, garage, window)
- [ ] **BlogPosting schema** — Article'dan geçiş + `dateModified` ✅ (2026-03-18 tamamlandı)
- [ ] **sitemap.xml** — tüm hreflang reciprocal + eksik sayfalar ✅ (2026-03-18 tamamlandı)

### Hafta 4 — Performans
- [ ] **Meta Pixel** — `<head>`'den body sonuna veya `load` event ile taşı
- [ ] **robots.txt** — `Crawl-delay` ve `*.json$` kaldır, Disallow: /nul ✅ (kısmen tamamlandı)
- [ ] **Root `/`** → `/fr` 301 redirect (Hostinger config)
- [ ] **Build test** — Lighthouse 90+ hedef

---

## Faz 2 — İçerik ve Yerel SEO (Hafta 5-12) 🟡 YÜKSEK

> Hedef: SEO 70 → 78 | GEO 62 → 68

### Hafta 5-6 — Google My Business
- [ ] GMB profili oluştur ve doğrula (Charleroi/Hainaut)
- [ ] Tüm servisleri listele + fotoğraf ekle (min 10 proje görseli)
- [ ] İlk 5 müşteriden yorum isteği gönder
- [ ] GMB schema `sameAs` güncelle

### Hafta 7-8 — İçerik Genişletme (FR Öncelikli)
- [ ] **Anasayfa** — 400 → 700+ kelime (sosyal kanıt bölümü)
- [ ] **Pergola servis sayfası** — FAQ bölümü 8 soru (134+ kelime/cevap)
- [ ] **Véranda servis sayfası** — FAQ bölümü 6 soru
- [ ] **Hakkımızda** — 260 → 600+ kelime (ekip tanıtımı, BCE numarası, tarihçe)

### Hafta 9-10 — E-E-A-T Güçlendirme
- [ ] BCE/KBO şirket numarası → footer + schema + Hakkımızda sayfası
- [ ] Sertifika logolarına bağlantı ekle (tıklanabilir doğrulama)
- [ ] Fiziksel adres footer'da görünür yap (Charleroi, 6000 Hainaut)
- [ ] Google Reviews embed veya widget ekle
- [ ] Domain email al (info@constructionveranda.com veya info@archi.constructionveranda.com)
- [ ] TrustUp.be, Bobex.be, Houzz.be kayıtları

### Hafta 11-12 — Blog Lansmanı
- [ ] İlk 4 blog yazısı FR (1,500+ kelime, SEO odaklı — bkz. CONTENT-CALENDAR.md)
- [ ] Blog → Servis iç linkleme şeması kur
- [ ] Breadcrumb component tüm iç sayfalara ekle (görsel + schema)
- [ ] Internal link audit: hangi sayfalar dead-end?

---

## Faz 3 — Ölçekleme (Hafta 13-24) 🟢 ORTA

> Hedef: SEO 78 → 82 | GEO 68 → 72

### Ay 4-5 — GEO ve AI Görünürlük
- [ ] YouTube kanalı aç + ilk 4 proje videosu (FR altyazı)
- [ ] sameAs schema'ya LinkedIn + YouTube ekle
- [ ] Her servis sayfasına 134+ kelimelik alıntılanabilir paragraflar
- [ ] Reddit r/belgium, r/bruxelles — yardımcı yanıtlar (doğal mention)
- [ ] Houzz.be — proje portföyü profili

### Ay 5-6 — NL Dili Güçlendirme
- [ ] FR içeriklerin NL çevirileri (pergola + veranda + blog ilk 4 yazı)
- [ ] NL anahtar kelime araştırması: "bioclimatische pergola België", "aluminium veranda Gent"
- [ ] NL Google My Business description güncelle
- [ ] Flandre'a yönelik blog yazısı (NL): 2 adet

### Ay 6 — Teknik İyileştirme
- [ ] Google Fonts self-host → GDPR + performans
  - `public/fonts/` klasörü, `@font-face` CSS
- [ ] Hero animasyon CSS `@keyframes`'e (Framer Motion bundle azalt)
- [ ] Tüm 79 görseli WebP'ye dönüştür (batch convert)
- [ ] Video galerisi varsa VideoObject schema
- [ ] `Retry-After: 60` header kaldır (Hostinger CDN)

---

## Faz 4 — Otorite (Ay 7-12) 🔵 UZUN VADE

> Hedef: Domain Authority 15 → 30 | Organic Traffic 200 → 2,000+

### Ay 7-9 — Link Building
- [ ] Belçika inşaat ve mimarlık bloglarına konuk yazı
- [ ] Bölgesel gazeteler (DH.be, sudinfo.be) — basın bülteni veya proje haberi
- [ ] Architecte-Online.be, Construction.be dizin kaydı
- [ ] Lüksemburg dizinleri (Editus.lu, Luxweb.lu)
- [ ] Kuzey Fransa dizinleri (PagesJaunes.fr)

### Ay 10-12 — İçerik Otoritesi
- [ ] "Guide Ultime de la Pergola Bioclimatique en Belgique" — 3,000+ kelime pillar content
- [ ] "Comparatif: Pergola vs Véranda 2026" — karşılaştırma sayfası
- [ ] Yıllık proje istatistik infografik (paylaşılabilir)
- [ ] Podcast veya video röportaj — Belçika inşaat sektörü
- [ ] NL pillar content: "Complete Gids Bioklimatische Pergola België"

### Devam Eden Görevler (Her Ay)
- Blog: FR ayda 2, NL ayda 1 makale
- GMB: haftada 1 post (proje fotoğrafı + kısa açıklama)
- Yorum takibi: her tamamlanan projeye yorum isteği
- GSC izleme: haftalık crawl hataları, sıralama takibi
- Core Web Vitals: aylık Lighthouse kontrolü

---

## Hızlı Kazanımlar Checklist (Bu Hafta Yapılabilir)

```
[ ] react-snap kur ve test et → en büyük tek adım
[ ] GSC doğrulama aktifleştir (index.html satır 14-15)
[ ] HSTS header Hostinger'dan ekle
[ ] Hero JPG → WebP dönüştür (squoosh.app veya CLI)
[ ] GMB profil oluştur (ücretsiz, 1 saat)
[ ] TrustUp.be kaydı (ücretsiz, 15 dakika)
[ ] Facebook/Instagram → linktree yerine her sayfaya direkt link
```
