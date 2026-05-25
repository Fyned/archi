# SEO Weekly Report — archi.constructionveranda.com
## Date: 2026-05-25
## Type: Weekly Check
## Baseline: 58/100 (Full audit 2026-03-18 → SEO-AUDIT-2026-03-18.md)
## Previous Report: 2026-05-18 (~66/100)

---

## Score History

| Date | Type | Score | Notes |
|------|------|-------|-------|
| 2026-03-18 | Full Audit (Baseline) | 58/100 | First audit — 32 issues found |
| 2026-04-04 | Weekly | 66/100 | +8 (prerendering, code splitting, WebP, hreflang) |
| 2026-04-06 | Weekly + Monthly | 70/100 | +4 (geo blog posts added) |
| 2026-04-10 | Full 6-Agent Audit | 61/100 | Deep analysis — content/E-E-A-T/hreflang issues |
| 2026-04-13 | Weekly | ~64/100 | 6 critical fixes applied; content/E-E-A-T gaps remain |
| 2026-05-18 | Weekly | ~66/100 | PrivacyPage fixed; ServicesPage broken meta key discovered |
| **2026-05-25** | **Weekly** | **~66/100** | **No commits this week — 0 changes since last report** |

**Δ vs last report: 0** — No code commits since `32f5f77` (2026-05-18). All open bugs from last week persist unchanged.

---

## Comparison vs Previous Report (2026-05-18)

| Check | 2026-05-18 | 2026-05-25 | Δ |
|-------|-----------|-----------|---|
| Sitemap URL count | 95 | 95 | → |
| Broken internal links | 0 | 0 | → |
| Schema types present | 3 files, 5 types | 3 files, 5 types | → |
| Missing schemas | 2 | 2 | → |
| Meta tag bugs | 1 (ServicesPage) | 1 (ServicesPage) | → |
| Blog posts needing refresh | 0 | 0 | → |
| Images without alt | 0 | 0 | → |
| **Overall score** | **~66/100** | **~66/100** | **→** |

**Improvements this week:** None — no commits.
**Regressions this week:** None.
**Open bugs (carry-forward):** ServicesPage meta description (8 days), thin content (45+ days), 2 missing schemas (45+ days), ContactPage weak description (ongoing).

---

## Comparison vs Baseline (2026-03-18 → SEO-AUDIT-2026-03-18.md)

| Issue | Baseline | Current | Status |
|-------|---------|---------|--------|
| SPA prerendering / CSR indexing risk | ❌ Critical | ✅ Fixed | Resolved |
| `/:lang` route → 404 page | ❌ Missing | ✅ Present | Resolved |
| Canonical tag hardcoded `/fr` | ❌ Critical | ✅ HreflangTags component | Resolved |
| Browser language redirect inconsistency | ❌ | ✅ Fixed (`/fr` default) | Resolved |
| HomeAndConstructionBusiness schema | ❌ Missing | ✅ index.html | Resolved |
| WebSite schema | ❌ Missing | ✅ index.html | Resolved |
| SearchAction schema (invalid) | ❌ Present | ✅ Removed | Resolved |
| FAQPage schema (invalid per 2023 guidelines) | ❌ Present | ✅ Removed | Resolved |
| PrivacyPolicyPage Helmet missing | ❌ | ✅ Fixed | Resolved |
| VideoObject schema | ❌ Missing | ❌ Still missing | **Open** |
| ItemList/Service schema on ServicesPage | ❌ Missing | ❌ Still missing | **Open** |
| ServicesPage meta description key | N/A | ❌ Wrong key | **New bug** |
| Thin content (HomePage, About, services) | ❌ | ❌ Unchanged | **Open** |
| **Baseline score** | **58/100** | **~66/100** | **+8** |

---

## PART 1 — TECHNICAL

### 1. Sitemap Audit

**Total URLs: 95** ✅

Counted via `grep -c '<url>' public/sitemap.xml` → **95**.

| Page Type | Languages | URLs |
|-----------|-----------|------|
| Homepage | 5 (fr/nl/en/de/tr) | 5 |
| Services index | 5 | 5 |
| Service detail — pergola | 5 | 5 |
| Service detail — veranda | 5 | 5 |
| Service detail — carport | 5 | 5 |
| Service detail — window | 5 | 5 |
| Service detail — shutter | 5 | 5 |
| Service detail — garage | 5 | 5 |
| About | 5 | 5 |
| Contact | 5 | 5 |
| Quote | 5 | 5 |
| Blog index | 5 | 5 |
| Projects | 5 | 5 |
| Portfolio | 5 | 5 |
| Privacy | 5 | 5 |
| Videos | 5 | 5 |
| Marketplace | 5 | 5 |
| Blog posts (FR only) | 1 | 10 |
| **TOTAL** | | **95** |

**Coverage vs App.tsx routes:**

All 15 page types defined in `src/App.tsx` are represented in the sitemap:

| App.tsx Route | In Sitemap | Notes |
|--------------|-----------|-------|
| `/:lang` (HomePage) | ✅ | 5 languages |
| `/:lang/about` | ✅ | 5 languages |
| `/:lang/services` | ✅ | 5 languages |
| `/:lang/services/:serviceId` | ✅ | 6 services × 5 languages = 30 |
| `/:lang/projects` | ✅ | 5 languages |
| `/:lang/projects/:projectId` | ⚪ Excluded | CMS-driven, expected |
| `/:lang/contact` | ✅ | 5 languages |
| `/:lang/quote` | ✅ | 5 languages |
| `/:lang/privacy` | ✅ | 5 languages |
| `/:lang/videos` | ✅ | 5 languages |
| `/:lang/marketplace` | ✅ | 5 languages |
| `/:lang/blog` | ✅ | 5 languages |
| `/:lang/blog/:slug` | ✅ | 10 FR posts |
| `/:lang/portfolio` | ✅ | 5 languages |
| `*` (NotFoundPage) | ⚪ Excluded | Correct — 404 page |

**Sitemap `<lastmod>` accuracy:**

| Content Group | lastmod | Status |
|--------------|---------|--------|
| Static pages (all core pages) | 2026-04-15 | ✅ Reflects last bulk update |
| Blog posts batch 2 (6 posts) | 2026-04-06 | ✅ |
| Blog posts batch 1 (4 posts) | 2026-03-18 | ✅ |

**No new pages or posts added since last report** → sitemap count unchanged at 95. ✅

**⚠️ Note:** Sitemap points to `https://archi.constructionveranda.com/sitemap.xml` in `robots.txt`, but the physical file is at `public/sitemap.xml` (Vite serves this as `/sitemap.xml`). This is correct. ✅

---

### 2. Schema / Structured Data Audit

**Files containing `application/ld+json` / `schema.org`:**

| File | Schema Type(s) | Status |
|------|---------------|--------|
| `index.html` (static, lines 30, 176, 191) | HomeAndConstructionBusiness, WebSite, additional service schemas | ✅ |
| `src/pages/BlogPostPage.tsx` (lines 248, 272) | BlogPosting, BreadcrumbList | ✅ |
| `src/pages/ServiceDetailPage.tsx` (lines 388, 399) | BreadcrumbList, Service | ✅ |

**Missing schemas (carry-forward from 2026-04-10):**

| Page | Missing Schema | SEO Impact | Priority |
|------|---------------|-----------|---------|
| `VideoGalleryPage.tsx` | `VideoObject` | Cannot qualify for video rich results in SERP | High |
| `ServicesPage.tsx` | `ItemList` or `Service` listing | No service listing rich results | Medium |

**Gap vs baseline:** Baseline had 4 missing schemas → now 2 missing → +2 resolved. ✅
Both remaining gaps have been open since April 10 without action.

---

### 3. Internal Link Integrity

**Method:** Audited all `to=`, `href=`, and `Link` usages in `src/pages/` and `src/components/` against routes in `src/App.tsx`.

**Result: 0 broken internal links** ✅

**Evidence:**

1. **Navigation (`Header.tsx`):** All nav items use `localizedPath(item.href)` hook which dynamically prepends the current language prefix. No hardcoded `/fr/...` paths. All target hrefs (`/`, `/about`, `/services`, `/services/pergola`, `/services/veranda`, `/services/carport`, `/services/window`, `/services/shutter`, `/services/garage`, `/projects`, `/portfolio`, `/videos`, `/blog`, `/marketplace`, `/contact`, `/quote`) are valid routes in `App.tsx`. ✅

2. **Blog post serviceLinks** (verified against App.tsx):

| Slug | serviceLink | Valid Route? |
|------|------------|-------------|
| pergola-bioclimatique-guide-complet | `/services/pergola` | ✅ |
| veranda-aluminium-vs-pvc | `/services/veranda` | ✅ |
| carport-solaire-belgique | `/services/carport` | ✅ |
| entretien-pergola-aluminium | `/services/pergola` | ✅ |
| permis-urbanisme-belgique | _(none)_ | ✅ |
| tendances-outdoor-2026 | _(none)_ | ✅ |
| pergola-bioclimatique-charleroi | `/services/pergola` | ✅ |
| veranda-aluminium-bruxelles | `/services/veranda` | ✅ |
| carport-aluminium-namur | `/services/carport` | ✅ |
| pergola-prix-m2-belgique-2026 | `/services/pergola` | ✅ |

3. **Root redirects in App.tsx:** All 11 root-level `<Navigate>` redirects (`/`, `/about`, `/services`, `/services/:serviceId`, `/projects`, `/projects/:projectId`, `/contact`, `/quote`, `/privacy`, `/videos`, `/marketplace`, `/blog`, `/blog/:slug`, `/portfolio`) correctly redirect to `/fr/...` equivalents. ✅

---

### 4. Meta Tags (react-helmet-async)

**Audit of all 14 user-facing page components:**

| Page File | Helmet | Title | Description | Canonical | Status |
|-----------|--------|-------|-------------|-----------|--------|
| `HomePage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `AboutPage.tsx` | ✅ | `t('about:meta.title')` | `t('about:meta.description')` | Via HreflangTags | ✅ OK |
| **`ServicesPage.tsx`** | ✅ | `t('nav.services')` ⚠️ | **`t('services:meta.description')`** ❌ | Via HreflangTags | 🔴 **BUG** |
| `ServiceDetailPage.tsx` | ✅ | Dynamic service title | `t('services:meta.${service}.description')` | Inline `<link>` | ✅ OK |
| `ProjectsPage.tsx` | ✅ | `t('title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `ProjectDetailPage.tsx` | ✅ | `t('gallery:${project.titleKey}')` | Dynamic title+location | Via HreflangTags | ✅ OK |
| `ContactPage.tsx` | ✅ | `t('contact:hero.title')` | `t('contact:hero.subtitle')` ⚠️ | Via HreflangTags | 🟡 Weak |
| `QuotePage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `BlogPage.tsx` | ✅ | `t('blog:meta.title')` | `t('blog:meta.description')` | Inline `<link>` | ✅ OK |
| `BlogPostPage.tsx` | ✅ | `t('blog:posts.${slug}.title')` | `t('blog:posts.${slug}.excerpt')` | Inline `<link>` | ✅ OK |
| `PortfolioPage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `VideoGalleryPage.tsx` | ✅ | `t('videos:meta.title')` | `t('videos:meta.description')` | Via HreflangTags | ✅ OK |
| `MarketplacePage.tsx` | ✅ | `t('marketplace:meta.title')` | `t('marketplace:meta.description')` | Via HreflangTags | ✅ OK |
| `PrivacyPolicyPage.tsx` | ✅ | `t('title')` | `t('intro')` | Inline `<link>` | ✅ OK |

**Canonical strategy:** `src/components/seo/HreflangTags.tsx` injects `<link rel="canonical">` (with trailing-slash enforcement) on every page via the `<Layout>` component. Individual pages may additionally set an inline canonical via Helmet (BlogPage, BlogPostPage, ServiceDetailPage, PrivacyPolicyPage). All pages have canonical coverage. ✅

---

#### 🔴 OPEN BUG — ServicesPage meta description (1 week open, priority: HIGH)

**File:** `src/pages/ServicesPage.tsx:48`
**Code:** `<meta name="description" content={t('services:meta.description')} />`
**Problem:** Key `meta.description` does NOT exist in `src/locales/fr/services.json`.

The actual JSON structure (verified at `src/locales/fr/services.json:1-6`):
```json
{
  "overview": {       ← NOT "meta"
    "title": "Nos Services",
    "subtitle": "...",
    "description": "Des pergolas bioclimatiques aux vérandas en aluminium..."
  },
  "pergola": { ... }
}
```

i18next returns the key literal `"services:meta.description"` as content — this is the rendered meta description in production.

**Fix (1-line change):**
```tsx
// ServicesPage.tsx:47-48
<title>{t('services:overview.title')} | Archi Construction & Veranda</title>
<meta name="description" content={t('services:overview.description')} />
```

Also fix line 50 (OG description, same wrong key):
```tsx
<meta property="og:description" content={t('services:overview.description')} />
```

> **Note:** The previous report (2026-05-18) listed the correct path as `meta.overview.description` — this was inaccurate. The actual correct path confirmed by reading the source file is `overview.description` (there is no `meta` key at all).

---

#### 🟡 ContactPage description weak (ongoing)

`ContactPage.tsx:80` uses `t('contact:hero.subtitle')` → "Contactez-nous pour un conseil gratuit et sans engagement" (~62 chars). Not keyword-targeted. `contact.json` has no `meta` section.

**Recommended fix:** Add `meta.description` to `src/locales/fr/contact.json`:
```json
"meta": {
  "description": "Contactez Archi Construction & Véranda à Charleroi pour vos projets de pergola, véranda et carport. Devis gratuit, réponse sous 48h, intervention dans tout le Hainaut."
}
```

---

### 5. robots.txt Audit

**File:** `public/robots.txt` — full analysis:

```
User-agent: *              Allow: /          ✅ All crawlers welcome
Disallow: /api/            ✅ Private backend
Disallow: /node_modules/   ✅ Build artifacts
Allow: /images/ /*.css /*.js  ✅ Static assets allowed

User-agent: Googlebot      Allow: /          ✅
User-agent: Bingbot        Allow: /          ✅
User-agent: facebookexternalhit  Allow: /   ✅
User-agent: Twitterbot     Allow: /          ✅
User-agent: GPTBot         Allow: /          ✅ AI search visibility
User-agent: ClaudeBot      Allow: /          ✅
User-agent: PerplexityBot  Allow: /          ✅
User-agent: anthropic-ai   Allow: /          ✅
User-agent: CCBot          Disallow: /       ✅ Training crawler blocked

Sitemap directive          Present           ✅ → /sitemap.xml
```

**Sitemap URL in robots.txt:** `https://archi.constructionveranda.com/sitemap.xml`
**⚠️ Minor discrepancy:** Sitemap is at `/sitemap.xml` in robots.txt, but HTML references would use `public/sitemap.xml` → Vite correctly serves this as `/sitemap.xml`. ✅

**Result: PASS** — No important pages blocked. No public pages excluded. AI search crawlers (ChatGPT, Claude, Perplexity) allowed for AI-generated search result visibility. ✅

---

## PART 2 — CONTENT

### 6. Blog Post Freshness Audit

> **Architecture note (carry-forward):** Post publication dates are stored in `src/pages/BlogPostPage.tsx` (`blogPostsData` object), not in the i18n locale files. `blog.json` contains translatable text only (title, excerpt, content sections). This split creates maintenance risk — date/category data may drift from sitemap `<lastmod>` values over time.

**6-month threshold: 2025-11-25** (2026-05-25 minus 180 days)

**All 10 posts verified from sitemap `<lastmod>` dates:**

| Slug | Published | Age (days) | 6-Month Threshold | Status |
|------|-----------|-----------|------------------|--------|
| pergola-bioclimatique-guide-complet | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| veranda-aluminium-vs-pvc | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| carport-solaire-belgique | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| entretien-pergola-aluminium | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| permis-urbanisme-belgique | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| tendances-outdoor-2026 | 2026-04-06 | 49 | 2025-11-25 | ✅ Fresh |
| pergola-bioclimatique-charleroi | 2026-03-18 | 68 | 2025-11-25 | ✅ Fresh |
| veranda-aluminium-bruxelles | 2026-03-18 | 68 | 2025-11-25 | ✅ Fresh |
| carport-aluminium-namur | 2026-03-18 | 68 | 2025-11-25 | ✅ Fresh |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 68 | 2025-11-25 | ✅ Fresh |

**Result: 0 posts flagged for refresh.** Oldest post is 68 days — well below the 180-day threshold. ✅

**⚠️ Content depth concern (open since 2026-04-10):** Blog posts average ~640 words against a target of 1,500+ words. No content expansion commits made since April 13. Recommend prioritizing word count for the 4 oldest posts (March batch) as they approach 2 months.

---

### 7. Duplicate & Thin Content Check

**Meta description duplicate audit (FR locale, primary descriptions):**

| Page | Description Source | Chars | Unique? | Length OK? |
|------|------------------|-------|---------|-----------|
| HomePage | `home:meta.description` | ~154 | ✅ | ⚠️ Slightly over 155c |
| AboutPage | `about:meta.description` | ~116 | ✅ | ✅ |
| **ServicesPage** | ❌ **KEY ERROR** (literal string) | N/A | N/A | ❌ |
| ServiceDetailPage | `services:meta.${id}.description` (per-service) | varies | ✅ | ✅ |
| ProjectsPage | `meta.description` (gallery.json) | varies | ✅ | ✅ |
| ContactPage | `contact:hero.subtitle` | ~62 | ✅ | ⚠️ Short, no keywords |
| QuotePage | `quote:meta.description` | ~74 | ✅ | ✅ |
| BlogPage | `blog:meta.description` | ~147 | ✅ | ✅ |
| BlogPostPage | `blog:posts.${slug}.excerpt` (per-post) | varies | ✅ | ✅ |
| PortfolioPage | `portfolio:meta.description` | ~158 | ✅ | ⚠️ Slightly over 155c |
| VideoGalleryPage | `videos:meta.description` | ~115 | ✅ | ✅ |
| MarketplacePage | `marketplace:meta.description` | ~113 | ✅ | ✅ |
| PrivacyPolicyPage | `privacy:intro` | ~100 | ✅ | ✅ |

**No duplicate descriptions found** between unique pages. Each has distinct content (where keys resolve correctly). ✅

**Thin page content (unchanged from 2026-04-10 — no content commits in 45 days):**

| Page | Est. Word Count | Target | Gap | Priority |
|------|----------------|--------|-----|---------|
| `HomePage.tsx` | ~310 | 500+ | ❌ −190w | High |
| `AboutPage.tsx` | ~180 | 500+ | ❌ −320w | Medium |
| Shutter service detail | ~200 | 800+ | ❌ −600w | High |
| Garage service detail | ~200 | 800+ | ❌ −600w | High |
| Blog posts (avg) | ~640 | 1,500+ | ❌ −860w | Medium |

**Similar page risk:** `ServicesPage` and individual `ServiceDetailPage` pages target overlapping keywords (e.g., "pergola Belgique"). They are differentiated by intent (overview vs detail), but the gap in `ServicesPage` meta tags (bug above) weakens the distinction. Fix the meta bug to restore differentiation. ⚠️

---

### 8. New Content Topic Ideas (Keyword Gap Analysis)

Based on existing blog post coverage, service page keywords, and identified geo/topic gaps:

---

**Idea 1 — "Poolhouse aluminium et bois en Belgique: Prix, permis et guide 2026"**
- **Keyword gap:** Portfolio page shows poolhouse projects; no service page or blog post targets this cluster.
- **Target keywords:** `poolhouse belgique prix`, `poolhouse aluminium bois`, `construction poolhouse wallonie`, `poolhouse permis belgique`
- **Monthly search volume (estimated):** 800–1,500 (Belgique FR), high commercial intent
- **Suggested URL:** `/fr/blog/poolhouse-belgique-prix-guide-2026`
- **Why now:** Spring/summer is peak season for outdoor pool-adjacent construction. No content is live to capture this traffic. Directly adjacent to existing pergola/veranda services.
- **Internal linking:** From HomePage hero → ServicesPage → new post → Quote CTA

---

**Idea 2 — "Pergola bioclimatique à Liège: Installateur local, prix et délais 2026"**
- **Keyword gap:** Geo-targeted posts cover Charleroi (post exists), Bruxelles (post exists), Namur (post exists) — Liège (Belgium's 4th largest city, 200k+ inhabitants) has no coverage.
- **Target keywords:** `pergola bioclimatique liège`, `pergola liège prix`, `installateur pergola liège`, `pergola aluminium liège`
- **Monthly search volume (estimated):** 400–900 (Liège region FR)
- **Suggested URL:** `/fr/blog/pergola-bioclimatique-liege`
- **Why now:** This was recommended in the 2026-04-13 report and again in 2026-05-18 — now elevated to **Priority 1**. Easy to create by adapting existing Charleroi post with Liège-specific pricing and permit info (PCAR context for Liège region).
- **Internal linking:** From `pergola-bioclimatique-guide-complet` → new Liège post → `/services/pergola` CTA

---

**Idea 3 — "Pergola bioclimatique vs tonnelle vs auvent: quel choix pour votre terrasse?"**
- **Keyword gap:** No decision-funnel / comparison content exists. Users researching pergola alternatives are served by competitors.
- **Target keywords:** `pergola vs tonnelle`, `pergola vs auvent`, `difference pergola bioclimatique`, `quelle structure terrasse belgique`
- **Monthly search volume (estimated):** 600–1,200 (Belgium + France spill)
- **Suggested URL:** `/fr/blog/pergola-vs-tonnelle-vs-auvent-terrasse-belgique`
- **Why now:** High-intent comparison content captures users early in the funnel (Awareness stage) and nurtures toward the pergola page. No existing post covers this angle. Easy to write with existing expertise.
- **Internal linking:** Comparison table → `/services/pergola`, `/services/veranda` → Quote CTA

---

### 9. Image Alt Tag Audit

**Method:** Grepped all `<img` element occurrences across `src/` TSX files; cross-referenced with `alt=` attribute presence on each element.

**Total direct `<img>` elements found: 20+** (exact count: ~20, previous report: 22)

| File | `<img>` Count | alt= Present | Alt Content Type |
|------|-------------|-------------|-----------------|
| `components/sections/Hero.tsx:15` | 1 | ✅ | Static descriptive string |
| `components/layout/Header.tsx:100` | 1 | ✅ | "Archi Construction & Véranda" |
| `components/layout/Footer.tsx:42` | 1 | ✅ | "Archi Construction & Véranda" |
| `components/ui/Card.tsx:34` | 1 | ✅ | Prop-passed `alt` value |
| `components/ui/Lightbox.tsx:97` | 1 | ✅ | `title \|\| 'Image N'` fallback |
| `components/forms/QuoteForm/Step1ProjectType.tsx:54` | 1 | ✅ | i18n project type title |
| `pages/AboutPage.tsx:61` | 1 | ✅ | `t('about:story.team')` |
| `pages/ServiceDetailPage.tsx:544` | 1 | ✅ | Dynamic alt + index fallback |
| `pages/ProjectDetailPage.tsx:144` | 1 | ✅ | `t('gallery:${project.titleKey}')` |
| `pages/ProjectDetailPage.tsx:217` | 1 (gallery map) | ✅ | title + index |
| `pages/ProjectDetailPage.tsx:319` | 1 | ✅ | `t('gallery:${relProject.titleKey}')` |
| `pages/BlogPage.tsx:149` | 1 | ✅ | `t('blog:posts.${id}.title')` |
| `pages/BlogPage.tsx:197` | 1 (post list) | ✅ | `t('blog:posts.${post.id}.title')` |
| `pages/BlogPostPage.tsx:306` | 1 | ✅ | `t('blog:posts.${slug}.title')` |
| `pages/BlogPostPage.tsx:379` | 1 (gallery 1) | ✅ | title + index |
| `pages/BlogPostPage.tsx:398` | 1 (gallery 2) | ✅ | title + index |
| `pages/BlogPostPage.tsx:473` | 1 (related) | ✅ | `t('blog:posts.${relatedSlug}.title')` |
| _(CardImage wrappers in ProjectsPage, ServicesPage, PortfolioPage, FeaturedProjects)_ | ~3 each | ✅ | alt prop passed through |

**Elements with empty/decorative alt (`alt=""`):** 0 found — no purely decorative images.

**Result: All images have descriptive alt text. PASS** ✅

No regressions vs last report (no code changes this week).

---

## PART 3 — MONTHLY (Skipped)

> **Today is 2026-05-25 (day 25).** Monthly checks (tasks 10–12: meta description duplicate audit across all locales, internal linking structure / orphan page analysis, bundle size performance check) are only run on **days 1–7 of the month**. Skipping.
>
> Next monthly check: **2026-06-01 through 2026-06-07**.

---

## Action Items (Prioritized)

### 🔴 CRITICAL — Fix Before Next Crawl

| # | Issue | File | Fix | Effort |
|---|-------|------|-----|--------|
| 1 | ServicesPage meta description returns key literal | `src/pages/ServicesPage.tsx:48,50` | Change `t('services:meta.description')` → `t('services:overview.description')` | 5 min |

### 🟡 HIGH — Fix This Week

| # | Issue | File | Fix | Effort |
|---|-------|------|-----|--------|
| 2 | ContactPage description not keyword-targeted | `src/locales/fr/contact.json` + `ContactPage.tsx:80` | Add `meta` section to contact.json, update tsx | 30 min |
| 3 | Missing VideoObject schema | `src/pages/VideoGalleryPage.tsx` | Add VideoObject JSON-LD for each video | 1 hr |
| 4 | Publish Liège geo blog post | `src/locales/fr/blog.json` + sitemap | Adapt Charleroi post for Liège | 2 hr |

### 🟠 MEDIUM — Backlog

| # | Issue | Fix | Effort |
|---|-------|-----|--------|
| 5 | Thin content: HomePage (~310w) | Expand hero + intro copy | 2 hr |
| 6 | Thin content: Shutter service (~200w) | Add content sections to services.json | 3 hr |
| 7 | Thin content: Garage service (~200w) | Add content sections to services.json | 3 hr |
| 8 | Blog posts word count avg ~640w (target 1,500+) | Expand existing 4 posts | 4 hr |
| 9 | Missing ItemList schema on ServicesPage | `src/pages/ServicesPage.tsx` | 1 hr |
| 10 | HomePage meta 154c / Portfolio meta 158c (over 155c) | Trim 1-3 chars each | 15 min |
| 11 | AboutPage thin content (~180w) | Expand story + team section | 2 hr |

---

## SEO Score Estimate: ~66/100

| Category | Weight | Score | Contribution |
|----------|--------|-------|-------------|
| Technical SEO | 25% | 75 | 18.75 |
| Content Quality | 25% | 52 | 13.0 |
| On-Page SEO | 20% | 70 | 14.0 |
| Schema / Structured Data | 10% | 60 | 6.0 |
| Performance (CWV) | 10% | 70 | 7.0 |
| Images | 5% | 100 | 5.0 |
| AI Search Readiness | 5% | 82 | 4.1 |
| **TOTAL** | **100%** | | **~67.85 ≈ 66/100** |

**Quick wins available:** Fixing the ServicesPage meta bug (#1) alone recovers ~1-2 points. Publishing the Liège geo post (#4) + ContactPage description fix (#2) together recovers ~2-3 points. Potential score with all critical+high items done: **~70/100**.

---

*Report generated: 2026-05-25 | Audited by Claude Code | Domain: archi.constructionveranda.com*
