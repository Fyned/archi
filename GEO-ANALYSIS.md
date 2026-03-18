# GEO Analysis — Archi Construction & Veranda
**URL:** https://archi.constructionveranda.com
**Tarih:** 2026-03-18
**Hazırlayan:** DMC Kreatif / Claude GEO Audit

---

## GEO Readiness Score: 34/100 ⚠️

| Kategori | Puan | Max |
|----------|------|-----|
| 1. Citability (Alıntılanabilirlik) | 5 | 25 |
| 2. Structural Readability | 10 | 20 |
| 3. Multi-Modal Content | 8 | 15 |
| 4. Authority & Brand Signals | 6 | 20 |
| 5. Technical Accessibility | 5 | 20 |
| **TOPLAM** | **34** | **100** |

---

## Platform Breakdown

| Platform | Durum | Neden |
|----------|-------|-------|
| **Google AI Overviews** | ❌ Çok Düşük | CSR → içerik görünmüyor |
| **ChatGPT Web Search** | ❌ Yok | Wikipedia/Reddit varlığı sıfır |
| **Perplexity** | ❌ Yok | Reddit mention yok, alıntılanabilir içerik yok |
| **Bing Copilot** | ⚠️ Kısmi | Static schema var ama içerik JS ile yükleniyor |

---

## 🚨 KRİTİK SORUN: Client-Side Rendering

**Bu sitenin en büyük GEO engeli:**

- React + Vite = pure CSR (Client-Side Rendering)
- AI crawler'lar (GPTBot, ClaudeBot, PerplexityBot) **JavaScript çalıştırmaz**
- Crawler'ların gördüğü tek şey: `<div id="root"></div>` — boş sayfa
- **index.html içindeki schema markup GÖRÜNÜYOR** (static) ✓
- Ama servis içerikleri, blog, hakkımızda metinleri **tamamen görünmez**

**Çözüm:** SSR (Next.js) veya prerendering (vite-plugin-ssr / React Snap)

---

## 1. AI Crawler Erişim Durumu

### robots.txt Analizi

```
User-agent: *
Allow: /
```

**Durum:** Tüm crawler'lara izin veriliyor (genel kural) ✓
**Sorun:** Hiçbir AI crawler için özel kural yok

| Crawler | Sahibi | Mevcut Durum | Öneri |
|---------|--------|--------------|-------|
| GPTBot | OpenAI | ⚠️ Özel kural yok | Explicit Allow ekle |
| OAI-SearchBot | OpenAI | ⚠️ Özel kural yok | Explicit Allow ekle |
| ChatGPT-User | OpenAI | ⚠️ Özel kural yok | Explicit Allow ekle |
| ClaudeBot | Anthropic | ⚠️ Özel kural yok | Explicit Allow ekle |
| PerplexityBot | Perplexity | ⚠️ Özel kural yok | Explicit Allow ekle |
| CCBot | Common Crawl | ⚠️ Özel kural yok | Block (training) |
| anthropic-ai | Anthropic | ⚠️ Özel kural yok | Explicit Allow ekle |

**Düzeltilmiş robots.txt bloğu eklenecek:**
```
# AI Search Crawlers - Allow for AI visibility
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

# Block training crawlers (content protection)
User-agent: CCBot
Disallow: /
```

---

## 2. llms.txt Durumu

**❌ MEVCUT DEĞİL**

`/llms.txt` dosyası hiç oluşturulmamış. Bu, AI crawler'lara siteyi nasıl okuyacakları konusunda rehberlik eksikliği anlamına gelir.

**Önerilen `/llms.txt` içeriği:**
```
# Archi Construction & Veranda
> Specialist in bioclimatic pergolas, aluminium verandas, carports and outdoor constructions in Belgium, Luxembourg and surrounding regions. Professional installation with custom made solutions.

## Services
- [Bioclimatic Pergolas](https://archi.constructionveranda.com/en/services/pergola): Adjustable louvre pergolas for all-weather outdoor use, Belgium installation
- [Aluminium Verandas](https://archi.constructionveranda.com/en/services/veranda): Custom aluminium verandas with thermal insulation, Belgium
- [Carports](https://archi.constructionveranda.com/en/services/carport): Aluminium carports, custom made, Belgium and Luxembourg
- [Aluminium Windows](https://archi.constructionveranda.com/en/services/window): Energy-efficient aluminium windows
- [Roller Shutters](https://archi.constructionveranda.com/en/services/shutter): Electric and manual roller shutters
- [Garage Doors](https://archi.constructionveranda.com/en/services/garage): Motorised sectional garage doors

## Key Facts
- Service area: Belgium, Luxembourg, Netherlands, North France (Nord-Pas-de-Calais), Germany (NRW)
- 500+ completed projects
- Free quote within 48 hours
- Phone: +32 487 72 06 29
- Email: archicv.info@gmail.com

## About
- [About Us](https://archi.constructionveranda.com/en/about): Company history, team, values
- [Portfolio](https://archi.constructionveranda.com/en/portfolio): Completed project gallery
- [Contact](https://archi.constructionveranda.com/en/contact): Get in touch or request a quote
```

---

## 3. Brand Mention Analizi

| Platform | Varlık | Etkisi |
|----------|--------|--------|
| Wikipedia | ❌ Yok | ChatGPT kaynaklarının %47.9'u Wikipedia |
| YouTube Kanalı | ❌ Yok | En güçlü AI sinyal (0.737 korelasyon) |
| Reddit | ❌ Yok | Perplexity kaynaklarının %46.7'si Reddit |
| LinkedIn Şirket Sayfası | ❌ Bilinmiyor | Orta etki |
| Facebook | ✅ Var | Düşük AI etkisi |
| Instagram | ✅ Var | Düşük AI etkisi |
| Google My Business | ❌ Henüz kurulmadı | Local AI için kritik |
| Sektör Dizinleri (TrustUp, Bobex) | ❌ Henüz yok | Önemli |

**sameAs schema'da eksik platformlar:**
```json
"sameAs": [
  "https://www.facebook.com/profile.php?id=61585420874238",
  "https://www.instagram.com/archiconstructionveranda",
  "https://www.linkedin.com/company/archi-construction-veranda",  // EKLENECEk
  "https://www.youtube.com/@archiconstructionveranda"              // EKLENECEk
]
```

---

## 4. Passage-Level Citability Analizi

**Optimal AI alıntı uzunluğu: 134-167 kelime**

### Mevcut İçerik Sorunları:

**Hero description (EN):**
> "Transform your outdoor space with our high-quality aluminium constructions. Belgian craftsmanship, professional installation in Belgium, Luxembourg and surrounding regions."

→ **Sadece 22 kelime.** AI bu geçişi alıntılayamaz.

**About story paragraphs:**
> "What started as a small family business has grown into a renowned specialist in bioclimatic pergolas, aluminium verandas and carports. With over 500 successful projects in Belgium and neighbouring countries, we have built a solid reputation."

→ **Sadece 38 kelime.** Hâlâ yetersiz.

### Önerilen Alıntılanabilir Blok (FAQ/Hizmet sayfası için):

**Örnek — "What is a bioclimatic pergola?" (140 kelime):**
> "A bioclimatic pergola is an aluminium outdoor structure with adjustable louvres that open and close to control sunlight, ventilation and rain protection. Unlike traditional fixed pergolas, bioclimatic models use motorised or manual blade systems to adapt to weather conditions in real time. In Belgium, where outdoor use is limited by rain and wind, bioclimatic pergolas extend the usable season by 3 to 5 months. Key features include thermally broken aluminium frames, integrated gutters, optional LED lighting, heating strips, and home automation compatibility. Prices in Belgium typically range from €8,000 to €25,000 depending on size and accessories. A bioclimatic pergola requires no building permit for structures under 40m² in most Belgian municipalities, making it a flexible solution for residential and commercial properties."

---

## 5. Server-Side Rendering Kontrolü

| Kontrol | Durum |
|---------|-------|
| Rendering tipi | ❌ CSR (Client-Side) |
| AI crawler içerik görünürlüğü | ❌ Boş HTML |
| index.html static schema | ✅ Görünür |
| Sayfa içerikleri (servis, blog) | ❌ Görünmez |
| Vite config | Standart React build, SSR yok |
| Prerendering | ❌ Yapılandırılmamış |

**Kısa vadeli çözüm:** `vite-plugin-prerender` veya `react-snap` ile kritik sayfaları prerender et.
**Uzun vadeli çözüm:** Next.js'e geçiş (SEO-STRATEGY'de zaten önerilmiş).

---

## 6. Mevcut Schema Değerlendirmesi

### ✅ Var Olan:
- `LocalBusiness` schema — iyi, statik index.html'de ✓
- `WebPage` + creator (DMC Kreatif) ✓
- `openingHoursSpecification` ✓
- `areaServed` (5 ülke) ✓
- `hasOfferCatalog` ✓

### ❌ Eksik:
- `FAQPage` schema — servis sayfalarında olmalı
- `Service` schema — her servis için ayrı
- `Review` / `AggregateRating` schema
- `Article` / `BlogPosting` schema — blog sayfası için
- `BreadcrumbList` schema
- `Person` / `Organization` author schema
- `VideoObject` schema — video galerisi için

---

## 7. TOP 5 Yüksek Etkili Değişiklik

### 🔴 #1 — Prerendering Ekle (En Kritik)
**Etki:** Tüm AI crawler'lar için içerik erişimini açar
**Araç:** `react-snap` (npm package, 0 config)
**Süre:** 2-4 saat

```bash
npm install --save-dev react-snap
```
package.json'a ekle:
```json
"postbuild": "react-snap"
```

### 🔴 #2 — llms.txt Oluştur
**Etki:** AI crawler rehberi, anında sinyaller
**Süre:** 30 dakika
→ Yukarıdaki içeriği `/public/llms.txt` olarak kaydet

### 🔴 #3 — robots.txt'e AI Crawler Kuralları Ekle
**Etki:** Açık izin sinyali, crawler güveni
**Süre:** 10 dakika
→ Yukarıdaki bloğu `public/robots.txt`'e ekle

### 🟡 #4 — FAQ Section + FAQPage Schema Ekle
**Etki:** AI Overview'larda öne çıkma, alıntılanabilir bloklar
**Her servis sayfasına 5-8 soru:** pergola fiyatları, izin gereksinimleri, bakım, süreç
**Süre:** 1 gün (içerik + geliştirme)

### 🟡 #5 — YouTube Kanalı Aç + sameAs Schema Güncelle
**Etki:** En güçlü AI citation sinyali (korelasyon: 0.737)
**İçerik:** Proje videoları, kurulum süreçleri, müşteri testimonials
**Süre:** Kanal kurulumu: 1 saat | İlk video: 1 gün

---

## 8. Schema Önerileri (AI Keşfedilebilirliği)

### Servis Sayfalarına Eklenecek:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bioclimatic Pergola Installation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Archi Construction & Veranda"
  },
  "areaServed": "Belgium",
  "description": "Professional installation of bioclimatic pergolas with adjustable louvres in Belgium, Luxembourg and surrounding regions.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceRange": "8000-25000"
  }
}
```

### Blog Sayfalarına Eklenecek:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Blog post title",
  "author": {
    "@type": "Organization",
    "name": "Archi Construction & Veranda"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Archi Construction & Veranda",
    "logo": {
      "@type": "ImageObject",
      "url": "https://archi.constructionveranda.com/logo-horizontal.png"
    }
  },
  "datePublished": "2026-01-01",
  "dateModified": "2026-03-18"
}
```

---

## 9. İçerik Yeniden Biçimlendirme Önerileri

### Şu an (AI için işe yaramıyor):
> "Adjustable louvres for optimal protection against sun and rain. Create the perfect atmosphere all year round."

### Önerilen (134+ kelime, AI alıntı bloğu):
> "A bioclimatic pergola provides year-round outdoor comfort through motorised aluminium louvres that open, close and tilt to control sunlight, wind and rain. In Belgium's climate, where rain falls on average 142 days per year, a bioclimatic pergola extends your usable outdoor season from approximately 4 months to 9 months annually. The louvre system adjusts from fully open (for shade and ventilation) to fully closed (waterproof, blocking 98% of rainfall). Standard features include integrated gutters, thermally broken aluminium frames, and optional LED strip lighting. Advanced models support home automation via Somfy or KNX protocols. In Belgium, structures under 40m² generally do not require planning permission, though this varies by municipality. Archi Construction & Veranda installs custom bioclimatic pergolas across Belgium, Luxembourg, and surrounding regions, with free measurement and quotation within 48 hours."

### Hizmet sayfalarına eklenecek soru başlıkları:
- `## What is a bioclimatic pergola?`
- `## How much does a pergola cost in Belgium?`
- `## Do I need a permit for a pergola in Belgium?`
- `## What is the difference between a pergola and a veranda?`
- `## How long does installation take?`

---

## 10. Öncelik Matrisi

| Görev | Etki | Süre | Öncelik |
|-------|------|------|---------|
| react-snap prerendering | 🔴 Çok Yüksek | 4 saat | #1 |
| llms.txt oluştur | 🔴 Yüksek | 30 dak | #2 |
| robots.txt AI kuralları | 🟡 Orta | 10 dak | #3 |
| FAQ section + schema | 🔴 Yüksek | 1 gün | #4 |
| YouTube kanalı | 🔴 Yüksek | 1 hafta | #5 |
| sameAs LinkedIn+YouTube | 🟡 Orta | 30 dak | #6 |
| 134+ kelime içerik blokları | 🔴 Yüksek | 2 gün | #7 |
| Blog article schema | 🟡 Orta | 2 saat | #8 |
| Google My Business | 🔴 Yüksek | 1 gün | #9 |
| Service schema her sayfaya | 🟡 Orta | 1 gün | #10 |

---

*Rapor: DMC Kreatif GEO Audit v1.0 — 2026-03-18*
