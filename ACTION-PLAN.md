# SEO Action Plan — archi.constructionveranda.com
## Updated: 2026-04-15

---

## ✅ Bu Session'da Kapandi (2026-04-15 Commit)

### Critical
- [x] Sitemap homepage x-default trailing slash bug (5 satir)
- [x] Root routes (/about, /services vs) duplicate content → /fr redirect
- [x] Schema @id entity graph tamamlandi
- [x] 57 WebP gorsel sikistirildi (23 MB → 9 MB)

### High
- [x] HomeAndConstructionBusiness logo ImageObject
- [x] WebPage @id + isPartOf + about cross-ref
- [x] BlogPosting author/publisher @id cross-ref
- [x] Service schema ServiceDetailPage (YENI)
- [x] Lame rotation 145° → 135° tutarsizlik fix
- [x] Nav aria-label (Header desktop + mobile)
- [x] Twitter Card + og:url/locale/site_name (global)
- [x] Page-level twitter:title/description/image
- [x] AboutPage + FeaturedProjects alt text lokalize
- [x] article:section BlogPosting meta

---

## 🔴 Critical — Musteriden Bilgi Gerekli (You Can't Fix Alone)

1. **GSC Verification Code**
   - Musteriden google-site-verification meta tag kodu al
   - `index.html` satir 30 acilacak
   - **Etki**: Index coverage, search performance, manual action alerts
   - **Efor**: 10 dk (kod alinmasindan sonra)

2. **BCE/KBO Sirket Sicil Numarasi**
   - Belcika'da ticari iletisimde ZORUNLU
   - Footer + privacy + schema + contact'a eklenecek
   - **Etki**: Trust +5, yasal uyumluluk
   - **Efor**: 15 dk (numara alininca)

3. **Gmail → Domain Email**
   - `archicv.info@gmail.com` → `info@archi.constructionveranda.com`
   - Schema, footer, contact sayfasi, privacy
   - **Etki**: Trust +3
   - **Efor**: Musteri email hesap acimi sonrasi 15 dk

4. **Fiziksel StreetAddress (Charleroi 6000)**
   - Tam sokak adresi gerekli — schema'da yok
   - **Etki**: Local SEO +3, Google Business Profile onayi
   - **Efor**: 5 dk (adres alininca)

---

## 🔴 Critical — Hostinger Panel (Musteri veya Claude Ile Birlikte)

5. **HSTS Header Aktivasyonu**
   - Hostinger hPanel → SSL Certificate → HSTS
   - Veya .htaccess: `Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"`
   - **Etki**: Security +3, SEO trust
   - **Efor**: 10 dk

6. **CSP Header**
   - .htaccess veya Hostinger panel
   - Baslangic: `Content-Security-Policy: default-src 'self'; img-src 'self' data: https:; ...`
   - **Etki**: Security +2
   - **Efor**: 30 dk

7. **X-Content-Type-Options, X-Frame-Options, Permissions-Policy**
   - .htaccess'e ekle
   - **Etki**: Security +2
   - **Efor**: 15 dk

---

## 🟡 High Priority — Kod Ici (Ayri Sprint)

8. **i18n Lazy Loading**
   - `src/lib/i18n/config.ts`: static imports → `i18next-http-backend`
   - Tum 60 JSON statik yuk (~50 KB) → sadece aktif dil
   - **Etki**: LCP -400ms, INP +5, bundle -40 KB
   - **Efor**: 3 saat

9. **Blog Yazilarini Genislet**
   - 10 blog x (~640 → ~1500 kelime) = ~8600 kelime yazim
   - Onerilen strateji: her post'ta 2 yeni section + "ornek musteri sorulari" bolumu + "ilgili urun/hizmet" capraz link
   - **Etki**: Content Quality +12, AI Search +5
   - **Efor**: 8 saat (veya content-research-writer skill kullan)

10. **Service Pages Genisletme**
    - 6 servis sayfasi x ~200 kelime daha
    - "Notre processus" + "Pourquoi nous choisir pour [service]" bolumleri
    - **Etki**: Content Quality +5
    - **Efor**: 3 saat

11. **Named Author Bylines**
    - `BlogPostPage.tsx` data'ya `author` field ekle (orn: "Yusuf Cetin, Chef de projet")
    - Schema'da `Person` type kullan (Organization yerine)
    - **Etki**: E-E-A-T +3, AI citation +2
    - **Efor**: 2 saat

---

## 🟢 Musteri Aksiyonlari — Backlink + Otorite (Uzun Vade)

12. **Google Business Profile** (20 dk)
    - business.google.com → Charleroi adres + 10 foto + acilis saatleri
    - **Etki**: Local SEO +10, Reviews gelir

13. **Trustpilot veya Houzz Profili** (1 saat)
    - Trustpilot.com/business veya Houzz.be profesyonel profil
    - **Etki**: Authoritativeness +8

14. **LinkedIn Company Page** (30 dk)
    - Schema'daki sameAs icin LinkedIn URL eklenir

15. **YouTube Channel** (30 dk)
    - VideoObject schema potansiyeli

16. **Testimonials Gercek Yorumlar**
    - 3 geçici testimonial var — musteriye gercek yorum topla
    - Trustpilot/Google reviews widget embed et
    - AggregateRating schema eklenir (5.0 star rating SERP'te gorunur)

---

## 🟢 Medium — Kod Ici (Backlog)

17. **ServiceDetailPage Gorsel Breadcrumb** (30 dk)
    - BlogPostPage'deki gibi visible nav ekle — schema zaten var

18. **Google Fonts Self-Host** (1 saat)
    - `public/fonts/` altina Inter + Poppins WOFF2
    - `@font-face` with `font-display: swap`
    - **Etki**: GDPR uyumlu, LCP +100ms

19. **Hero motion.div → CSS keyframes** (30 dk)
    - Framer Motion wrapper LCP gecikmesi
    - CSS `@keyframes` ile native transform
    - **Etki**: LCP +200ms

20. **Font preload** (10 dk)
    - `<link rel="preload" as="font" crossorigin>` ana font weight'leri icin

---

## 🔵 Low — Opsiyonel

21. **robots.txt temizlik** (5 dk) — redundant directive'ler
22. **changefreq/priority sitemap'ten kaldir** (10 dk) — Google yok sayiyor
23. **Hero img width/height** (5 dk) — CLS prevention
24. **Framer Motion tree-shake** — selective imports
25. **PulseGlow box-shadow → filter** — GPU composite

---

## Skor Projeksiyonu

| Milestone | Tahmini Skor | Kalan Is |
|-----------|--------------|----------|
| **Bugun (commit sonrasi)** | **~79/100** | Bu commit |
| Musteri data gelince (BCE, streetAddress, GSC, domain email) | ~85/100 | Hostinger panel + müşteri |
| Blog yazilari genisletilince | ~89/100 | 8 saat content iş |
| Google Business + Trustpilot | ~92/100 | Musteri + widget kurulum |
| i18n lazy + HSTS + CSP | ~94/100 | Ayri sprint |
| Backlink 30 referring domain | ~96/100 | 90 gun outreach |

**Hedef 90+** — ulasilabilir, icerik genislemesi ve Google Business aktivasyonu en kritik.

---

*Plan updated: 2026-04-15 — post full 6-agent audit*
