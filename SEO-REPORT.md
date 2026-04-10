# SEO Report — archi.constructionveranda.com
## Date: 2026-04-10
## Overall Score: 73/100
## Type: HAFTALIK KONTROL

---

### Executive Summary
- Baseline (18 Mart): 58/100 → Onceki (6 Nisan): 70/100 → **Bugun: 73/100** (+15 baseline'dan)
- Bu hafta eklenen: BreadcrumbList schema (2 sayfa), Organization schema (AboutPage), blog cross-link (10 post), sitemap 75→95 URL, 79 eski JPEG/PNG silindi
- **0 yeni regresyon** bu hafta
- **Acik sorunlar (4):** GSC dogrulanmamis, HSTS eksik, i18n lazy loading, Google Fonts self-host

---

### Score Breakdown

| Kategori | Agirlik | 6 Nisan | 10 Nisan | Delta |
|----------|---------|---------|----------|-------|
| Technical SEO | 25% | 72 | 74 | +2 |
| Content Quality | 25% | 64 | 68 | +4 |
| On-Page SEO | 20% | 67 | 72 | +5 |
| Schema / Structured Data | 10% | 68 | 78 | +10 |
| Performance (CWV) | 10% | 58 | 60 | +2 |
| Images | 5% | 62 | 88 | +26 |
| AI Search Readiness | 5% | 78 | 80 | +2 |
| **TOPLAM** | **100%** | **70** | **73** | **+3** |

---

### Bu Hafta Duzeltilen (6 Nisan → 10 Nisan)

| # | Duzeltme | Etki |
|---|---------|------|
| 1 | 79 eski JPEG/PNG silindi (sadece WebP kaldi) | Images 62→88, repo -62 MB |
| 2 | Sitemap 75→95 URL (TR, DE, EN eksik sayfalar + /projects) | On-Page +5 |
| 3 | BreadcrumbList schema — ServiceDetailPage + BlogPostPage | Schema +10 |
| 4 | Organization schema — AboutPage | Schema +10 |
| 5 | Blog→servis cross-link CTA (10 post, serviceLink) | Content +4 |
| 6 | 6 eski blog tarihi guncellendi (2026-04-06) | Content freshness |

---

### Gecmis (Skor Trendi)

| Tarih | Skor | Notlar |
|-------|------|--------|
| 2026-03-18 | 58/100 | Baseline SEO audit |
| 2026-04-04 | 66/100 | +8 (prerendering, code splitting, WebP, hreflang, schema) |
| 2026-04-06 | 70/100 | +4 (eski JPEG'ler silindi, geo blog'lar eklendi) |
| **2026-04-10** | **73/100** | **+3 (BreadcrumbList, Organization, sitemap, cross-link)** |

---

### Kalan Acik Sorunlar

| # | Sorun | Oncelik | Nerede cozulur |
|---|-------|---------|---------------|
| 1 | GSC dogrulanmamis | Critical | Musteriden kod → index.html |
| 2 | HSTS header eksik | High | Hostinger hPanel |
| 3 | i18n lazy loading (49 KB gereksiz yuklenme) | Medium | i18next-http-backend |
| 4 | Google Fonts self-host (GDPR + perf) | Low | public/fonts/ |

### Sonraki Rapor
- 2026-04-14 (Haftalik) veya scheduled task otomatik (Pazartesi 10:00)

---

*Bu rapor Claude Code SEO Maintenance ile olusturulmustur.*
*Baseline: SEO-AUDIT-2026-03-18.md*
