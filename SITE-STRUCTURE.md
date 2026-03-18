# Site Structure — Archi Construction & Veranda
**Güncelleme:** 2026-03-18

---

## URL Mimarisi

### Mevcut Yapı
```
/ → /fr (redirect)
/:lang/                    → Anasayfa
/:lang/services            → Servisler listesi
/:lang/services/:service   → Servis detayı
/:lang/blog                → Blog listesi
/:lang/blog/:slug          → Blog yazısı
/:lang/about               → Hakkımızda
/:lang/projects            → Projeler
/:lang/projects/:id        → Proje detayı
/:lang/contact             → İletişim
/:lang/quote               → Teklif
/:lang/portfolio           → Portföy
/:lang/privacy             → Gizlilik
```

### Önerilen Genişletme (Faz 3-4)
```
/:lang/regions/:city       → Yerel SEO sayfaları
/:lang/comparatifs         → Karşılaştırma sayfaları
/:lang/guides              → Uzun biçim rehberler (pillar pages)
```

---

## Hreflang Matrisi

### Dil Kodları
| Dil | hreflang | x-default |
|-----|----------|-----------|
| Fransızca (Belçika) | `fr-BE` | ✅ Evet |
| Flemenkçe (Belçika) | `nl-BE` | |
| İngilizce (genel) | `en` | |
| Almanca (genel) | `de` | |
| Türkçe (genel) | `tr` | |

### Her Sayfada Olması Gereken Hreflang Seti
```html
<link rel="alternate" hreflang="x-default" href="https://archi.constructionveranda.com/fr/" />
<link rel="alternate" hreflang="fr-BE" href="https://archi.constructionveranda.com/fr/" />
<link rel="alternate" hreflang="nl-BE" href="https://archi.constructionveranda.com/nl/" />
<link rel="alternate" hreflang="en" href="https://archi.constructionveranda.com/en/" />
<link rel="alternate" hreflang="de" href="https://archi.constructionveranda.com/de/" />
<link rel="alternate" hreflang="tr" href="https://archi.constructionveranda.com/tr/" />
```

### Servis Sayfaları için Örnek
```html
<!-- /fr/services/pergola -->
<link rel="alternate" hreflang="x-default" href="https://archi.constructionveranda.com/fr/services/pergola" />
<link rel="alternate" hreflang="fr-BE" href="https://archi.constructionveranda.com/fr/services/pergola" />
<link rel="alternate" hreflang="nl-BE" href="https://archi.constructionveranda.com/nl/services/pergola" />
<link rel="alternate" hreflang="en" href="https://archi.constructionveranda.com/en/services/pergola" />
<link rel="alternate" hreflang="de" href="https://archi.constructionveranda.com/de/services/pergola" />
<link rel="alternate" hreflang="tr" href="https://archi.constructionveranda.com/tr/services/pergola" />
```

---

## Canonical Kuralları

| URL | Canonical |
|-----|-----------|
| `/` | `https://archi.constructionveranda.com/fr/` |
| `/fr/` | `https://archi.constructionveranda.com/fr/` |
| `/nl/` | `https://archi.constructionveranda.com/nl/` |
| `/fr/services/pergola` | `https://archi.constructionveranda.com/fr/services/pergola` |
| `/nl/services/pergola` | `https://archi.constructionveranda.com/nl/services/pergola` |

**Kural:** Her sayfanın canonical'ı kendisi. FR ve NL versiyonları birbirinin duplicate'i değil, ayrı canonical'a sahip farklı içerikler.

---

## Sitemap Yapısı

### Öncelik (priority) Ataması
```xml
<!-- Anasayfalar -->
<priority>1.0</priority>  → /fr/, /nl/

<!-- Servis sayfaları (para kazandıran) -->
<priority>0.9</priority>  → /*/services/pergola, /*/services/veranda, ...

<!-- Blog yazıları -->
<priority>0.7</priority>  → /*/blog/*

<!-- Proje/portföy -->
<priority>0.6</priority>  → /*/projects/*, /*/portfolio

<!-- Bilgilendirme -->
<priority>0.5</priority>  → /*/about, /*/contact

<!-- Yardımcı -->
<priority>0.3</priority>  → /*/privacy, /*/quote
```

### Changefreq Ataması
```xml
<changefreq>weekly</changefreq>   → Anasayfa, Blog listesi
<changefreq>monthly</changefreq>  → Servis sayfaları, Hakkımızda
<changefreq>yearly</changefreq>   → Gizlilik, statik sayfalar
```

---

## İç Linkleme Şeması

### Hub-Spoke Modeli
```
Anasayfa (Hub)
├── Tüm servislere link
├── Son 3 blog yazısına link
└── Portföyden 6 proje thumbnail

Servis Sayfaları (Hub)
├── İlgili blog yazılarına (3-5 link)
├── Diğer servislere (cross-sell)
├── Portföy/proje örneklerine
└── İletişim / Teklif CTA

Blog Yazıları (Spoke)
├── İlgili servis sayfasına (mutlaka)
├── İlgili diğer blog yazısına (2-3)
└── Portföy sayfasına

Portföy/Projeler (Spoke)
└── İlgili servis sayfasına link
```

### Dead-end Sayfalar (Düzeltilecek)
- `/*/about` → İletişim + Teklif linki ekle
- `/*/quote` → Teşekkür sonrası portföye yönlendir
- `/*/projects/:id` → İlgili servise + diğer projelere link

---

## Schema Haritası

| Sayfa Tipi | Schema Türleri |
|-----------|----------------|
| Anasayfa | `WebSite`, `HomeAndConstructionBusiness`, `LocalBusiness` |
| Servis sayfaları | `Service`, `BreadcrumbList` |
| Blog yazısı | `BlogPosting`, `BreadcrumbList`, `Person/Organization` author |
| Hakkımızda | `Organization`, `Person` (ekip üyeleri) |
| İletişim | `ContactPage`, `LocalBusiness` (adres) |
| Portföy | `ImageGallery`, `ItemList` |
| Proje detayı | `CreativeWork`, `BreadcrumbList` |

---

## Robots.txt Durumu

```
User-agent: *
Allow: /

# Disallow
Disallow: /admin
Disallow: /studio  (Sanity CMS)
Disallow: /*.json$ (i18n files — kaldırılacak, sorunlu)

# AI Search Crawlers ✅ (2026-03-18 güncellendi)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Disallow: /

Sitemap: https://archi.constructionveranda.com/sitemap.xml
```

---

## Servis Slug Haritası

| Servis | FR Slug | NL Slug | Schema Türü |
|--------|---------|---------|-------------|
| Pergola bioclimatique | `pergola` | `pergola` | Service |
| Véranda aluminium | `veranda` | `veranda` | Service |
| Carport | `carport` | `carport` | Service |
| Volet roulant | `shutter` | `shutter` | Service |
| Porte de garage | `garage` | `garage` | Service |
| Fenêtre aluminium | `window` | `window` | Service |
| PVC Window | `pvc-window` | `pvc-window` | Service |
