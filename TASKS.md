# Archi Construction Veranda — Yapılacaklar Listesi
**Son güncelleme:** 18 Mart 2026

---

## ✅ TAMAMLANDI (2026-03-18)

- [x] React.lazy() code splitting — 14 sayfa ayrı chunk
- [x] LangGuard — geçersiz dil kodlarını /fr'ye yönlendirir
- [x] 404 NotFoundPage — `<Route path="*">`
- [x] FAQPage schema kaldırıldı (ServiceDetailPage)
- [x] BlogPosting schema (Article → BlogPosting + dateModified)
- [x] FR blog.json aksanları düzeltildi (aménagement vb.)
- [x] robots.txt — GPTBot, ClaudeBot, PerplexityBot Allow; CCBot Disallow
- [x] sitemap.xml — 5 dil tam hreflang reciprocal
- [x] llms.txt — AI crawler rehberi oluşturuldu
- [x] HreflangTags component — her sayfada dinamik hreflang + canonical
- [x] x-default → FR (NL'den düzeltildi)
- [x] NL URL prefix fix — /nl/ prefix artık tutarlı
- [x] Default dil → FR
- [x] index.html — HomeAndConstructionBusiness schema, adres (Charleroi 6000)
- [x] Meta Pixel → body + window.load (render-blocking kaldırıldı)
- [x] vite.config.ts — manualChunks (icons ayrı chunk)

---

## 🔴 HAFTA 1 — 19–22 Mart 2026 (Teknik Temel)

### 19 Mart (Perşembe) — react-snap ~4 saat ✅
- [x] `npm install --save-dev react-snap`
- [x] `package.json` → `"postbuild": "react-snap"` + `reactSnap` konfigürasyonu
- [x] `src/main.tsx` → `hydrateRoot` + `createRoot` React 18 uyumu
- [x] `npm run build` → 153 sayfa pre-render edildi (5 dil × tüm sayfalar)
- [x] `dist/fr/services/pergola/index.html` → hreflang tag'leri statik HTML'de doğrulandı
- [ ] `curl -s https://archi.constructionveranda.com/fr/services/pergola | grep hreflang` → deploy sonrası doğrula
- [ ] Deploy et (Hostinger / GitHub Actions)

### 20 Mart (Cuma) — Hero WebP ~2 saat
- [ ] squoosh.app → `hero-main.jpg` (1 MB) → `hero-main.webp` (~200 KB)
- [ ] `public/images/general/` klasörüne kaydet
- [ ] `index.html` preload href → `.webp` güncelle
- [ ] Lightbox veya img kullanan yerlerde `.webp` kullan
- [ ] Build + deploy

### 21 Mart (Cumartesi) — GSC + HSTS ~1 saat
- [ ] [search.google.com/search-console](https://search.google.com/search-console) → Mülk Ekle → `archi.constructionveranda.com`
- [ ] Doğrulama kodunu kopyala
- [ ] `index.html` satır 30 → `<!-- <meta name="google-site-verification"...` yorumu kaldır, kodu yapıştır
- [ ] Build + deploy
- [ ] Hostinger hPanel → `.htaccess` veya CDN → HSTS ekle:
  ```
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```
- [ ] GSC'de "Doğrula" butonuna bas

---

## 🔴 HAFTA 2 — 23–28 Mart 2026 (Schema + i18n)

### 23 Mart (Pazartesi) — i18n lazy loading ~3 saat
- [ ] `npm install i18next-http-backend`
- [ ] `src/lib/i18n/config.ts` → tüm `import ... from '@/locales/...'` satırlarını kaldır
- [ ] i18next `backend` plugin ile lazy loading konfigürasyonu
- [ ] `public/locales/` klasörüne JSON dosyalarını taşı
- [ ] Build → i18n chunk 49 KB'den küçülmeli
- [ ] Deploy + test (dil değiştirme çalışıyor mu?)

### 24 Mart (Salı) — BreadcrumbList schema ~2 saat
- [ ] `src/pages/ServiceDetailPage.tsx` → Helmet içine BreadcrumbList JSON-LD ekle
  ```
  Anasayfa > Servisler > [Servis Adı]
  ```
- [ ] `src/pages/BlogPostPage.tsx` → BreadcrumbList JSON-LD ekle
  ```
  Anasayfa > Blog > [Yazı Başlığı]
  ```
- [ ] Build + deploy
- [ ] [schema.org/SchemaValidator](https://validator.schema.org) ile test et

### 25 Mart (Çarşamba) — Service schema ~3 saat
- [ ] `src/pages/ServiceDetailPage.tsx` → her servis için `@type: "Service"` JSON-LD
  - pergola, veranda, carport, shutter, garage, window, pvc-window
  - `name`, `description`, `provider`, `areaServed`, `offers` (priceRange)
- [ ] Build + deploy + schema validator test

### 27 Mart (Cuma) — Lighthouse + GSC ~1 saat
- [ ] Chrome DevTools → Lighthouse → Mobile
  - Hedef: Performance 75+, SEO 95+, LCP < 2.5s
- [ ] GSC → Sitemap → `https://archi.constructionveranda.com/sitemap.xml` gönder
- [ ] GSC → URL İnceleme → `/fr/services/pergola` → "Dizine Al İste"

---

## 🟡 HAFTA 3–4 — 30 Mart – 10 Nisan (Yerel SEO)

### 30 Mart (Pazartesi) — Google My Business ~2 saat
- [ ] [business.google.com](https://business.google.com) → Profil oluştur
  - Ad: `Archi Construction & Veranda`
  - Kategori: `Pergola supplier` + `Veranda builder`
  - Tel: `+32 487 72 06 29`
  - Adres: Charleroi, 6000 Hainaut, Belgique
  - Web: `https://archi.constructionveranda.com`
- [ ] Min 10 proje fotoğrafı yükle (yüksek kalite)
- [ ] Tüm servisleri listele
- [ ] Doğrulama başlat (mektup ~1-2 hafta)

### 1 Nisan (Çarşamba) — Dizin kayıtları ~1 saat
- [ ] [trustup.be](https://trustup.be) → kayıt ol (ücretsiz, 15 dak)
- [ ] [houzz.be](https://houzz.be) → profil + proje galerisi yükle
- [ ] [bobex.be](https://bobex.be) → kayıt ol
- [ ] Her yerde NAP tutarlı: aynı ad / adres / telefon

### 2 Nisan (Perşembe) — Root redirect ~30 dakika
- [ ] Hostinger hPanel → `.htaccess`:
  ```
  RewriteRule ^$ /fr [R=301,L]
  ```
  veya Hostinger CDN redirect kuralı: `/` → `/fr`

### 7 Nisan (Salı) — Footer + E-E-A-T ~2 saat
- [ ] `src/components/layout/Footer.tsx` → tam adres görünür yap:
  `Charleroi 6000, Hainaut, Belgique`
- [ ] BCE/KBO şirket numarasını footer'a ve `index.html` schema'ya ekle
- [ ] Sertifika logolarına tıklanabilir doğrulama linki ekle
- [ ] Domain email al → schema + footer'da `archicv.info@gmail.com` yerine

### 8 Nisan (Çarşamba) — Blog yazısı #1 FR ~4 saat
- [ ] Sanity CMS'e giriş
- [ ] Yeni blog yazısı oluştur:
  - Başlık: `Pergola Bioclimatique en Belgique: Guide Complet 2026`
  - URL: `/fr/blog/guide-pergola-bioclimatique-belgique`
  - Min 2.500 kelime
  - 8 adet FAQ sorusu (134+ kelime/cevap)
  - Servis sayfasına internal link ekle

---

## 🟡 HAFTA 5–8 — 13 Nisan – 8 Mayıs (İçerik)

### 13 Nisan (Pazartesi) — İçerik: Anasayfa ~2 saat
- [ ] `src/locales/fr/home.json` → hero description 400 → 700+ kelime
- [ ] Sosyal kanıt bölümü: "500+ projets réalisés" + bölge listesi
- [ ] Build + deploy

### 15 Nisan (Çarşamba) — GMB yorum kampanyası
- [ ] Son 5 müşteriye WhatsApp/email gönder:
  > *"Bonjour [Ad], merci pour votre confiance! Un avis Google nous aiderait: [GMB link]"*
- [ ] Hedef: 10 yorum bu ay

### 22 Nisan (Çarşamba) — Blog yazısı #2 FR
- [ ] `Véranda vs Pergola Bioclimatique: Que Choisir?`
- [ ] `/fr/blog/veranda-aluminium-vs-pergola-bioclimatique`
- [ ] Min 2.000 kelime + karşılaştırma tablosu

### 29 Nisan (Çarşamba) — Hakkımızda içerik ~2 saat
- [ ] `src/locales/fr/about.json` → 260 → 600+ kelime
- [ ] Ekip tanıtımı, şirket tarihi, değerler
- [ ] BCE numarası, kuruluş yılı

### 6 Mayıs (Çarşamba) — Blog yazısı #3 FR
- [ ] `Prix Véranda Aluminium en Belgique: Tout Ce Qu'il Faut Savoir`
- [ ] Min 1.800 kelime + fiyat aralıkları

---

## 🟢 AY 3 — Haziran 2026 (GEO + NL)

### Haziran başı
- [ ] YouTube kanalı aç: `Archi Construction & Veranda`
- [ ] İlk 2 proje videosu çek + yükle (FR altyazı)
- [ ] `index.html` schema `sameAs` → LinkedIn + YouTube URL ekle

### Haziran ortası
- [ ] Blog yazısı #4 NL: `Bioklimatische Pergola in België: Alles Wat U Moet Weten`
- [ ] Pergola servis sayfasına 134+ kelimelik alıntılanabilir paragraf ekle (AI snippet için)

### Haziran sonu
- [ ] Google Fonts self-host → `public/fonts/` + `@font-face` CSS
  - GDPR uyum + 200-300ms performans kazanımı

---

## 🔵 AY 4–6 — Temmuz–Eylül 2026 (Otorite)

- [ ] LinkedIn şirket sayfası oluştur
- [ ] Architecte-Online.be, Construction.be dizin kayıtları
- [ ] Lüksemburg dizinleri: Editus.lu, Luxweb.lu
- [ ] Kuzey Fransa: PagesJaunes.fr kayıt
- [ ] "Guide Ultime Pergola Bioclimatique Belgique" — 3.000+ kelime pillar content
- [ ] "Comparatif Pergola vs Véranda 2026" karşılaştırma sayfası
- [ ] NL pillar content: "Complete Gids Bioklimatische Pergola België"
- [ ] Tüm 79 görseli WebP'ye dönüştür (batch)

---

## 🔁 TEKRARLAYAN GÖREVLER

### Her Pazartesi (15 dakika)
- [ ] GSC → kapsam hataları kontrol
- [ ] GMB post yayınla (proje fotoğrafı + FR açıklama)
- [ ] Yeni 404 var mı?

### Her Ayın 1'i (1-2 saat)
- [ ] Keyword sıralama kontrol (GSC → Performans → Sorgular)
- [ ] Trafik ay/ay karşılaştır
- [ ] Yeni FR blog yazısı yayınla
- [ ] İçerik takviminden sıradaki konuyu planla

### Her Ayın 15'i
- [ ] O ay tamamlanan projelerin müşterilerine yorum isteği gönder
- [ ] GMB profil güncellemesi (yeni fotoğraf)

### 3 Ayda Bir (1 Temmuz / 1 Ekim / 1 Ocak)
- [ ] Tam SEO audit: `/seo-audit archi.constructionveranda.com`
- [ ] Rakip sıralama kontrolü
- [ ] KPI raporu: trafik, yorum sayısı, keyword sıralamaları
- [ ] Sonraki çeyrek planı güncelle

---

## 📊 Hedef Skorlar

| Metrik | Şu an | 3 Ay | 6 Ay | 12 Ay |
|--------|-------|------|------|-------|
| SEO Health | 58/100 | 72/100 | 78/100 | 82/100 |
| GEO Score | ~55/100 | 62/100 | 68/100 | 72/100 |
| LCP | ~3.5s | <2.5s | <2.2s | <2.0s |
| GMB yorumları | 0 | 20 | 40 | 70 |
| Organik trafik | ~200/ay | 500/ay | 1.000/ay | 2.000/ay |
