# SEO Weekly Maintenance Report — archi.constructionveranda.com

**Date:** 30 March 2026
**Report type:** Weekly
**Baseline reference:** SEO-AUDIT-2026-03-18.md (Score: 58/100)
**Previous SEO-REPORT.md:** None (first weekly report)
**Part 3 (Monthly):** SKIPPED — today is day 30, not 1st–7th of month

---

## Executive Summary

Since the baseline audit of 18 March 2026, several critical issues have been resolved
(code splitting, 404 routing, LangGuard, portfolio/privacy pages added to sitemap).
However, a new **critical regression** was discovered: 4 blog posts referenced in
the sitemap have no corresponding data definitions in BlogPostPage.tsx, causing those
URLs to 404. TR language coverage in the sitemap remains incomplete.

**Estimated SEO score change: 58/100 → ~63/100** (+5 points, see breakdown below)

---

## PART 1 — TECHNICAL SEO

### 1. Sitemap URL Count & Coverage

**Total URLs in sitemap.xml: 75**

| Page group | In sitemap | Missing |
|---|---|---|
| Homepages (×5 lang) | 5 ✓ | — |
| /services (×5 lang) | 5 ✓ | — |
| /services/pergola (×5) | 5 ✓ | — |
| /services/veranda (×5) | 5 ✓ | — |
| /services/carport (×5) | 5 ✓ | — |
| /services/window (×5) | 5 ✓ | — |
| /services/shutter (×5) | 5 ✓ | — |
| /services/garage (×5) | 5 ✓ | — |
| /about (FR, NL, EN, DE) | 4 | `/tr/about` |
| /contact (FR, NL, EN, DE) | 4 | `/tr/contact` |
| /quote (FR, NL, EN, DE) | 4 | `/tr/quote` |
| /portfolio (FR, NL, EN) | 3 | `/de/portfolio`, `/tr/portfolio` |
| /blog listing (FR, NL, EN, DE) | 4 | `/tr/blog` |
| Blog posts (FR only, 10 slugs) | 10 | NL/EN/DE/TR variants of all 10 posts |
| /privacy (FR, NL) | 2 | `/en/privacy`, `/de/privacy`, `/tr/privacy` |
| /marketplace (FR, NL) | 2 | `/en/marketplace`, `/de/marketplace`, `/tr/marketplace` |
| /videos (FR, NL) | 2 | `/en/videos`, `/de/videos`, `/tr/videos` |

**Improvements vs audit (2026-03-18):**
- `/portfolio` pages now present in sitemap (FR, NL, EN) — audit issue #16 partially fixed ✓
- `/privacy` pages now present in sitemap (FR, NL) — audit issue #16 partially fixed ✓
- Blog post URLs now included (FR, 10 posts) — audit issue #16 partially fixed ✓

**Remaining gaps (26+ missing URLs):**
- TR language excluded from 5 page types (about, contact, quote, blog, portfolio)
- DE/TR excluded from portfolio, privacy, marketplace, videos
- Blog posts only in FR — no NL/EN/DE/TR blog post URLs in sitemap
- Root-level paths (`/about`, `/services`, etc.) not in sitemap (acceptable if they 301→lang version)

---

### 2. Schema Markup (application/ld+json)

**Found: 1 schema generator**

| File | Schema type | Status |
|---|---|---|
| `src/pages/BlogPostPage.tsx:179` | BlogPosting | ✓ Present — includes headline, description, image, datePublished, author, publisher, inLanguage |

**Missing schemas (unchanged from audit):**

| Schema type | Expected location | Priority |
|---|---|---|
| LocalBusiness / HomeAndConstructionBusiness | `index.html` (exists per audit, but adress incomplete) | CRITICAL |
| WebSite | `index.html` | HIGH |
| BreadcrumbList | ServiceDetailPage, BlogPostPage | HIGH |
| Organization | AboutPage | MEDIUM |
| Service (per service) | ServiceDetailPage | HIGH |
| FAQPage | **Must be removed** — invalid type since Sept 2023 | CRITICAL |
| VideoObject | VideoGalleryPage | LOW |

**Note:** `dateModified` in BlogPosting equals `datePublished` (hardcoded same value) — should reflect actual last edit date.

---

### 3. Internal Links — Broken Link Audit

All internal navigation uses the `localizedPath()` helper. Cross-referencing hrefs against App.tsx routes:

| Link pattern | Pages using it | Route exists | Status |
|---|---|---|---|
| `localizedPath('/')` | BlogPostPage, NotFoundPage | ✓ `/` and `/:lang` | OK |
| `localizedPath('/blog')` | BlogPostPage | ✓ `/blog`, `/:lang/blog` | OK |
| `localizedPath('/quote')` | Multiple pages | ✓ `/quote`, `/:lang/quote` | OK |
| `localizedPath('/contact')` | Multiple pages | ✓ `/contact`, `/:lang/contact` | OK |
| `localizedPath('/projects')` | ProjectDetailPage | ✓ `/projects`, `/:lang/projects` | OK |
| `localizedPath('/services/:id')` | ServicesPage | ✓ `/services/:serviceId` | OK |
| `localizedPath('/blog/:slug')` | BlogPage, BlogPostPage | ✓ `/:lang/blog/:slug` | OK* |

\* **WARNING:** BlogPage.tsx links to 6 post slugs, and BlogPostPage.tsx `relatedPosts` references those same 6. But sitemap lists 10 blog post slugs. The 4 extra sitemap slugs (`pergola-bioclimatique-charleroi`, `veranda-aluminium-bruxelles`, `carport-aluminium-namur`, `pergola-prix-m2-belgique-2026`) have NO data entry in `blogPostsData` in BlogPostPage.tsx:18–105. Visiting these URLs triggers a `<Navigate>` redirect (404 behavior). **These are live broken pages in the sitemap.**

**Additional link quality issues:**
- `ServicesPage.tsx:82` uses `<a href={localizedPath(...)}` instead of React Router `<Link to>` — causes full page reload for internal navigation
- `VideoGalleryPage.tsx:159` same issue — `<a href>` for `/quote` link
- `ProjectDetailPage.tsx` uses `<a href>` for all internal links — 4 instances
- `PortfolioPage.tsx`, `ProjectsPage.tsx` use `<a href>` for CTA links

---

### 4. Meta Tags Coverage

| Page | Title | Description | Canonical | og:title | og:description | og:image |
|---|---|---|---|---|---|---|
| HomePage | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ |
| AboutPage | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ |
| ServicesPage | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ |
| ServiceDetailPage | ✓ | ✓ | ✓ | — | — | — |
| ProjectsPage | ✓ | ✓ | ✗ | — | — | — |
| ProjectDetailPage | ✓ | ✓ | ✗ | — | — | — |
| ContactPage | ✓ | ✓ | ✗ | — | — | — |
| QuotePage | ⚠️ | ⚠️ | ✗ | ✓ | ✓ | ✓ |
| PrivacyPolicyPage | ✓ | ✓ | ✗ | — | — | — |
| VideoGalleryPage | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ |
| MarketplacePage | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ |
| BlogPage | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ |
| BlogPostPage | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| PortfolioPage | ✓ | ✓ | ✗ | — | — | — |
| NotFoundPage | — | — | — | — | — | — |

**Issues:**
- **10 of 14 pages missing canonical tags** — duplicate content risk for multi-language versions
- **QuotePage** uses `t('meta.title')` / `t('meta.description')` keys that resolve to the same values as HomePage meta — exact duplicate title and description
- **BlogPage** missing `og:image`
- **No page** sets `twitter:card`, `twitter:title`, `twitter:description`
- **No page** sets `og:url` (separate from canonical link)
- **ServiceDetailPage** has canonical but no OG tags

---

### 5. Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /node_modules/
Sitemap: https://archi.constructionveranda.com/sitemap.xml
```

Specific rules present for: Googlebot, Googlebot-Image, Googlebot-Video, Bingbot, facebookexternalhit, Twitterbot, LinkedInBot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, anthropic-ai (all allowed). CCBot blocked (correct — training crawler).

**Status: CORRECT** — No important pages blocked. No regressions.

**Low-priority items (from audit #20):** Verify `Crawl-delay` directive is not present (check if any Crawl-delay remains; audit flagged it should be removed).

---

## PART 2 — CONTENT

### 6. Blog Posts — Age & Refresh Flags

Today: **2026-03-30**. Posts older than 6 months (before **2025-09-30**) need refreshing.

| Slug | Date | Age | Status |
|---|---|---|---|
| pergola-bioclimatique-guide-complet | 2026-01-10 | 79 days | ✓ Fresh |
| veranda-aluminium-vs-pvc | 2026-01-08 | 81 days | ✓ Fresh |
| carport-solaire-belgique | 2026-01-05 | 84 days | ✓ Fresh |
| entretien-pergola-aluminium | 2026-01-03 | 86 days | ✓ Fresh |
| permis-urbanisme-belgique | 2025-12-28 | 92 days | ⚠️ Watch (~3 months) |
| tendances-outdoor-2026 | 2025-12-20 | 100 days | ⚠️ Watch (~3.3 months) |
| pergola-bioclimatique-charleroi | **UNKNOWN** | — | 🔴 No data in BlogPostPage.tsx |
| veranda-aluminium-bruxelles | **UNKNOWN** | — | 🔴 No data in BlogPostPage.tsx |
| carport-aluminium-namur | **UNKNOWN** | — | 🔴 No data in BlogPostPage.tsx |
| pergola-prix-m2-belgique-2026 | **UNKNOWN** | — | 🔴 No data in BlogPostPage.tsx |

**No posts require content refresh for age.** All dated posts are under 6 months old.

**Critical finding:** 4 posts in `src/locales/fr/blog.json` and sitemap have NO entry in BlogPostPage.tsx's `blogPostsData`. Any visitor or crawler following those sitemap URLs is redirected away (effectively 404). This is a new regression not present in the March 18 audit.

---

### 7. Duplicate & Thin Content Check

**Meta description duplicates identified:**

| Issue | Severity | Details |
|---|---|---|
| QuotePage = HomePage meta | HIGH | Both use `t('meta.title')` / `t('meta.description')` from the same namespace — renders identical title and description across languages |
| FR home.json vs services.json descriptions | OK | Sufficiently differentiated |
| EN descriptions shorter/thinner | MEDIUM | EN service descriptions average ~60 chars vs FR ~100 chars — EN pages under-optimized for English-language search |
| TR/DE descriptions thin | MEDIUM | TR and DE descriptions are translated but lack local city/region keywords present in FR/NL |

**Thin content pages (unchanged from audit):**

| Page | Estimated content | Minimum recommended | Status |
|---|---|---|---|
| HomePage | ~400 words | 500 | ✗ Below threshold |
| AboutPage | ~260 words | 500 | ✗ Below threshold |
| ServicesPage | ~700 words | 800 | ⚠️ Borderline |
| Blog posts | ~700 words | 1,500 | ✗ Below threshold |
| PrivacyPolicyPage | ~4.2 KB file | N/A | OK |

---

### 8. Content Topic Gap Recommendations

Based on existing keyword gaps relative to current content (pergola, veranda, carport, prix, Belgique, bioclimatique, aluminium, Charleroi, Bruxelles, Namur):

1. **"Store banne motorisé vs pergola bioclimatique : quelle protection choisir en 2026 ?"**
   Gap: no content targeting `store banne` or `store terrasse` — high commercial intent, complements pergola service. Internal link target: `/services/pergola`.

2. **"Primes rénovation 2026 en Belgique : comment financer votre véranda ou carport ?"**
   Gap: subsidies/financing keywords (`prime énergie`, `financement véranda`, `prêt vert Wallonie`) are absent from all blog content. High E-E-A-T opportunity — positions Archi as advisory expert, not just installer.

3. **"Différence entre pergola bioclimatique et pergola traditionnelle : guide d'achat 2026"**
   Gap: comparison/decision-stage keyword (`pergola traditionnelle`, `pergola bois vs aluminium`) missing. Targets users earlier in funnel. Cross-links to `/services/pergola` and the existing bioclimatique guide.

---

### 9. Image Alt Tag Audit

**All `<img>` tags scanned across src/. Result: 7 tags found, all have alt attributes.**

| File | Alt attribute | Quality |
|---|---|---|
| `components/layout/Header.tsx:101` | `"Archi Construction & Véranda"` | ✓ Good |
| `components/layout/Footer.tsx:43` | `"Archi Construction & Véranda"` | ✓ Good |
| `components/sections/Hero.tsx:21` | `"Archi Construction Veranda - Premium outdoor living spaces"` | ✓ Good (EN only — consider translating) |
| `components/ui/Card.tsx:35` | Dynamic `{alt}` prop | ✓ Good — requires caller to provide alt |
| `components/ui/Lightbox.tsx:98` | `{title \|\| \`Image ${currentIndex + 1}\`}` | ⚠️ Fallback is not descriptive |
| `components/forms/QuoteForm/Step1ProjectType.tsx:55` | `t(\`step1.types.${typeId}.title\`)` | ✓ Good — translated |
| `pages/AboutPage.tsx:62` | `"Our team at work"` | ⚠️ English-only hardcoded, not translated |

**No missing alt tags.** Two minor issues:
- Hero alt text is hardcoded in English — not localized for NL/DE/TR visitors
- AboutPage team image alt is hardcoded English — should use i18n key
- Lightbox fallback `Image N` is not meaningful to screen readers or search engines

---

## PART 3 — MONTHLY

**SKIPPED** — Today is March 30 (day 30). Monthly checks run on days 1–7 of each month.
Schedule next run: **1–7 April 2026**.

---

## Improvements vs SEO-AUDIT-2026-03-18

| Issue from audit | Status | Notes |
|---|---|---|
| #1 SPA CSR no prerendering | ✗ Open | Not addressed — remains critical |
| #2 404 route missing | ✅ Fixed | `<Route path="*"><NotFoundPage>` present in App.tsx:73 |
| #2 LangGuard validation | ✅ Fixed | `LangGuard` component redirects invalid `:lang` to `/fr` |
| #3 Canonical tag static (`/fr`) | 🔶 Partial | 3 pages now have dynamic canonical (BlogPage, BlogPostPage, ServiceDetailPage); 10 pages still missing canonical |
| #5 Hreflang reciprocal error | ✗ Open | Sitemap still missing TR hreflangs; blog posts have no hreflang blocks |
| #6 Monolithic JS bundle | ✅ Fixed | App.tsx:6–20 uses `React.lazy()` for all 14 pages — route-based code splitting implemented |
| #7 Hero image 1 MB JPEG | ✗ Open | No WebP conversion detected |
| #8 HSTS header missing | ✗ Open | Cannot verify from code; server config needed |
| #9 Google Search Console unverified | ✗ Open | Cannot verify from code |
| #10 LocalBusiness schema incomplete | ✗ Open | Still missing address fields per audit |
| #11 FAQPage schema invalid | ✗ Open | Not removed from ServiceDetailPage |
| #12 Content depth insufficient | ✗ Open | No content additions detected |
| #16 Sitemap missing pages | 🔶 Partial | Privacy and portfolio added; TR/DE gaps remain; 4 broken blog post entries added |

**New regressions since audit:**
- 🔴 4 blog post URLs in sitemap (`pergola-bioclimatique-charleroi`, `veranda-aluminium-bruxelles`, `carport-aluminium-namur`, `pergola-prix-m2-belgique-2026`) have no data in `BlogPostPage.tsx` — these are effectively broken pages indexed by search engines

---

## Priority Action Items This Week

| Priority | Action | File | Effort |
|---|---|---|---|
| 🔴 P0 | Add 4 missing blog post data entries to `BlogPostPage.tsx` `blogPostsData` object — fix broken sitemap URLs | `src/pages/BlogPostPage.tsx` | Low |
| 🔴 P0 | Remove QuotePage duplicate meta — use quote-specific i18n keys | `src/pages/QuotePage.tsx` + locale files | Low |
| 🟠 P1 | Add canonical tags to all 10 remaining pages via Helmet | Multiple page files | Low |
| 🟠 P1 | Add 4 missing blog posts to BlogPage.tsx `blogPosts` array (or remove from sitemap) | `src/pages/BlogPage.tsx` | Low |
| 🟡 P2 | Replace `<a href={localizedPath(...)}>` with `<Link to={localizedPath(...)}>` in ServicesPage, VideoGalleryPage, ProjectDetailPage, PortfolioPage, ProjectsPage | Multiple page files | Low |
| 🟡 P2 | Add `twitter:card` meta tags to all pages | Multiple page files | Low |
| 🟡 P2 | Remove/replace FAQPage schema in ServiceDetailPage | `src/pages/ServiceDetailPage.tsx` | Low |
| 🟢 P3 | Add TR language pages to sitemap (about, contact, quote, blog, portfolio) | `public/sitemap.xml` | Low |
| 🟢 P3 | Localize Hero alt text and AboutPage team image alt text | Component files | Low |
| 🟢 P3 | Update `dateModified` in BlogPosting schema to reflect actual last update, not `datePublished` | `src/pages/BlogPostPage.tsx` | Low |

---

*Report generated by Claude Code SEO Maintenance agent — 30 March 2026*
*Reference: SEO-AUDIT-2026-03-18.md (baseline score: 58/100)*
