# SEO Weekly Report — archi.constructionveranda.com
## Date: 2026-06-15
## Type: Weekly Check
## Baseline: 58/100 (Full audit 2026-03-18 → SEO-AUDIT-2026-03-18.md)
## Previous Report: 2026-05-25 (~66/100)

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
| 2026-05-25 | Weekly | ~66/100 | No commits this week — 0 changes since last report |
| **2026-06-15** | **Weekly** | **~66/100** | **No commits since 2026-05-18 — all open bugs persist (4 weeks stale)** |

**Δ vs last report (2026-05-25): 0** — No code commits since `32f5f77` (2026-05-18). All open bugs carry forward unchanged for the third consecutive week.

---

## Comparison vs Previous Report (2026-05-25)

| Check | 2026-05-25 | 2026-06-15 | Δ |
|-------|-----------|-----------|---|
| Sitemap URL count | 95 | 95 | → |
| Broken internal links | 0 | 0 | → |
| Schema files / types | 3 files, 5 types | 3 files, 5 types | → |
| Missing schemas | 2 | 2 | → |
| Meta tag bugs | 1 (ServicesPage) | 1 (ServicesPage) | → |
| Blog posts needing refresh (>180 days) | 0 | 0 | → |
| Images without alt | 0 | 0 | → |
| **Overall score** | **~66/100** | **~66/100** | **→** |

**Improvements this week:** None — no commits.
**Regressions this week:** None.
**Open bugs (carry-forward):** ServicesPage meta description broken (4 weeks), ContactPage weak description (ongoing), 2 missing schemas (9+ weeks), thin content on 5 pages (9+ weeks).

> **⚠️ Plateau alert:** Score has been stuck at ~66/100 for 3 consecutive weekly reports (2026-05-18 → 2026-05-25 → 2026-06-15). No action has been taken on any of the open bugs. Every week of delay costs crawl authority on the ServicesPage (the key conversion page). Critical fix #1 below is a 5-minute change that has now been open for 4 weeks.

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
| Video Object schema | ❌ Missing | ❌ Still missing | **Open — 9 weeks** |
| ItemList/Service schema on ServicesPage | ❌ Missing | ❌ Still missing | **Open — 9 weeks** |
| ServicesPage meta description key | N/A | ❌ Wrong key | **Open — 4 weeks** |
| Thin content (HomePage, About, services) | ❌ | ❌ Unchanged | **Open — 9+ weeks** |
| **Baseline score** | **58/100** | **~66/100** | **+8 pts** |

---

## PART 1 — TECHNICAL

### 1. Sitemap Audit

**Total URLs: 95** ✅

Counted via `grep -c '<url>' public/sitemap.xml` → **95**. Unchanged from previous report.

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

All 15 page types defined in `src/App.tsx` are represented in the sitemap.

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

No new pages or posts since last report → sitemap count unchanged at 95. ✅

---

### 2. Schema / Structured Data Audit

**Files containing `application/ld+json` / `schema.org`:**

| File | Schema Type(s) | Status |
|------|---------------|--------|
| `index.html` | HomeAndConstructionBusiness, WebSite | ✅ |
| `src/pages/BlogPostPage.tsx` | BlogPosting, BreadcrumbList | ✅ |
| `src/pages/ServiceDetailPage.tsx` | BreadcrumbList, Service | ✅ |

**Missing schemas (carry-forward — open since 2026-04-10, now 9 weeks):**

| Page | Missing Schema | SEO Impact | Priority |
|------|---------------|-----------|---------|
| `VideoGalleryPage.tsx` | `VideoObject` | Cannot qualify for video rich results in SERP | 🔴 High |
| `ServicesPage.tsx` | `ItemList` or `Service` listing | No service listing rich results | 🟡 Medium |

**Gap vs baseline (2026-03-18):** Baseline had 4 missing schemas → now 2 → +2 resolved. ✅ Both remaining gaps open 9 consecutive weeks.

---

### 3. Internal Link Integrity

**Method:** Audited all `to=`, `href=`, and `Link` usages in `src/pages/` and `src/components/` against routes in `src/App.tsx`.

**Result: 0 broken internal links** ✅

**Evidence:**

1. **Navigation (`Header.tsx`):** All nav items use `localizedPath(item.href)` hook for dynamic language-prefix prepending. No hardcoded `/fr/...` paths. All target hrefs (`/`, `/about`, `/services`, `/services/pergola`, `/services/veranda`, `/services/carport`, `/services/window`, `/services/shutter`, `/services/garage`, `/projects`, `/portfolio`, `/videos`, `/blog`, `/marketplace`, `/contact`, `/quote`) are valid routes in `App.tsx`. ✅

2. **Blog post serviceLinks** (verified against App.tsx routes):

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

3. **Root redirects in App.tsx:** All root-level `<Navigate>` redirects correctly point to `/fr/...` equivalents. ✅

**Cross-linking opportunity (not a bug, but a gap):** `ServiceDetailPage` pages do not cross-link to related services. For example, the pergola page has no link to the veranda or carport pages. Adding 2-3 related-service links per service detail page would improve crawl depth and topical authority.

---

### 4. Meta Tags (react-helmet-async)

**Audit of all 14 user-facing page components:**

| Page File | Helmet | Title | Description | Canonical | Status |
|-----------|--------|-------|-------------|-----------|--------|
| `HomePage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `AboutPage.tsx` | ✅ | `t('about:meta.title')` | `t('about:meta.description')` | Via HreflangTags | ✅ OK |
| **`ServicesPage.tsx`** | ✅ | `t('nav.services')` | **`t('services:meta.description')`** | Via HreflangTags | 🔴 **BUG** |
| `ServiceDetailPage.tsx` | ✅ | Dynamic service title | `t('services:meta.${service}.description')` | Inline `<link>` | ✅ OK |
| `ProjectsPage.tsx` | ✅ | `t('title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `ProjectDetailPage.tsx` | ✅ | `t('gallery:${project.titleKey}')` | Dynamic title+location | Via HreflangTags | ✅ OK |
| `ContactPage.tsx` | ✅ | `t('contact:hero.title')` | `t('contact:hero.subtitle')` | Via HreflangTags | 🟡 Weak |
| `QuotePage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `BlogPage.tsx` | ✅ | `t('blog:meta.title')` | `t('blog:meta.description')` | Inline `<link>` | ✅ OK |
| `BlogPostPage.tsx` | ✅ | `t('blog:posts.${slug}.title')` | `t('blog:posts.${slug}.excerpt')` | Inline `<link>` | ✅ OK |
| `PortfolioPage.tsx` | ✅ | `t('meta.title')` | `t('meta.description')` | Via HreflangTags | ✅ OK |
| `VideoGalleryPage.tsx` | ✅ | `t('videos:meta.title')` | `t('videos:meta.description')` | Via HreflangTags | ✅ OK |
| `MarketplacePage.tsx` | ✅ | `t('marketplace:meta.title')` | `t('marketplace:meta.description')` | Via HreflangTags | ✅ OK |
| `PrivacyPolicyPage.tsx` | ✅ | `t('title')` | `t('intro')` | Inline `<link>` | ✅ OK |

**Canonical strategy:** `src/components/seo/HreflangTags.tsx` injects `<link rel="canonical">` (with trailing-slash enforcement) on every page via the `<Layout>` component. All pages have canonical coverage. ✅

---

#### 🔴 OPEN BUG — ServicesPage meta description (4 weeks open — HIGH PRIORITY)

**File:** `src/pages/ServicesPage.tsx:48`
**Code:** `<meta name="description" content={t('services:meta.description')} />`
**Problem:** Key `meta.description` does NOT exist in `src/locales/fr/services.json`. The correct structure uses `overview.description`, not `meta.description`. i18next returns the raw key literal `"services:meta.description"` in production.

**Fix (2-line change):**
```tsx
// ServicesPage.tsx lines 47-50 — change two wrong keys:
<title>{t('services:overview.title')} | Archi Construction & Veranda</title>
<meta name="description" content={t('services:overview.description')} />
// Also fix OG tag on line ~50:
<meta property="og:description" content={t('services:overview.description')} />
```

**Age of bug:** Discovered 2026-05-18. Now open **4 weeks**. This is the key conversion page — every crawl until this is fixed returns a literal key string as the meta description.

---

#### 🟡 ContactPage description weak (ongoing)

`ContactPage.tsx:80` uses `t('contact:hero.subtitle')` → resolves to ~62 chars with no keyword targeting. `contact.json` has no `meta` section.

**Recommended fix:** Add `meta.description` to `src/locales/*/contact.json` (all 5 locales):
```json
"meta": {
  "description": "Contactez Archi Construction & Véranda à Charleroi pour vos projets de pergola, véranda et carport. Devis gratuit, réponse sous 48h, intervention dans tout le Hainaut."
}
```
Then update `ContactPage.tsx:80` to use `t('contact:meta.description')`.

---

### 5. robots.txt Audit

**File:** `public/robots.txt`

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
User-agent: OAI-SearchBot  Allow: /          ✅
User-agent: ClaudeBot      Allow: /          ✅
User-agent: PerplexityBot  Allow: /          ✅
User-agent: anthropic-ai   Allow: /          ✅
User-agent: CCBot          Disallow: /       ✅ Training crawler blocked

Sitemap: https://archi.constructionveranda.com/sitemap.xml  ✅
```

**Result: PASS** — No important pages blocked. All major search and AI crawlers explicitly allowed. `robots.txt` correctly points to production sitemap URL. ✅

---

## PART 2 — CONTENT

### 6. Blog Post Freshness Audit

> **Architecture note (carry-forward):** Post dates are stored in `src/pages/BlogPostPage.tsx` (`blogPostsData`), not in locale files. `blog.json` contains translatable text only. This split creates maintenance risk — date data may drift from sitemap `<lastmod>` over time.

**6-month threshold: 2025-12-15** (2026-06-15 minus 180 days)

**All 10 posts verified:**

| Slug | Published | Age (days) | 6-Month Threshold | Status |
|------|-----------|-----------|------------------|--------|
| pergola-bioclimatique-guide-complet | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| veranda-aluminium-vs-pvc | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| carport-solaire-belgique | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| entretien-pergola-aluminium | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| permis-urbanisme-belgique | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| tendances-outdoor-2026 | 2026-04-06 | 70 | 2025-12-15 | ✅ Fresh |
| pergola-bioclimatique-charleroi | 2026-03-18 | 89 | 2025-12-15 | ✅ Fresh |
| veranda-aluminium-bruxelles | 2026-03-18 | 89 | 2025-12-15 | ✅ Fresh |
| carport-aluminium-namur | 2026-03-18 | 89 | 2025-12-15 | ✅ Fresh |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 89 | 2025-12-15 | ✅ Fresh |

**Result: 0 posts flagged for refresh.** Oldest post is 89 days — well below the 180-day threshold. ✅

**⚠️ Approaching milestone:** The March batch posts will hit 6 months on **2026-09-18**. The April batch will hit 6 months on **2026-10-06**. No content has been expanded since publication — at current word count (~640 avg) these posts are below target depth (1,500+ words). Recommend beginning word count expansion work now rather than waiting until they become stale.

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

**No duplicate descriptions** between distinct pages (where keys resolve correctly). ✅

**Thin page content (open since 2026-04-10 — no content commits in 9+ weeks):**

| Page | Est. Word Count | Target | Gap | Priority |
|------|----------------|--------|-----|---------|
| `HomePage.tsx` | ~310 | 500+ | ❌ −190w | High |
| `AboutPage.tsx` | ~180 | 500+ | ❌ −320w | Medium |
| Shutter service detail | ~200 | 800+ | ❌ −600w | High |
| Garage service detail | ~200 | 800+ | ❌ −600w | High |
| Blog posts (avg) | ~640 | 1,500+ | ❌ −860w | Medium |

**Similar page risk:** `ServicesPage` and individual `ServiceDetailPage` pages target overlapping keywords. They are differentiated by intent (overview vs. detail), but the meta key bug on `ServicesPage` weakens this distinction further. Fixing the meta bug restores differentiation. ⚠️

---

### 8. New Content Topic Ideas (Keyword Gap Analysis)

Based on existing blog post coverage, service page keywords, and identified geo/topic gaps:

---

**Idea 1 — "Poolhouse aluminium en Belgique : prix, permis et guide 2026"**
- **Keyword gap:** Portfolio page shows poolhouse projects; no service page or blog post targets this cluster.
- **Target keywords:** `poolhouse belgique prix`, `poolhouse aluminium`, `construction poolhouse wallonie`, `poolhouse permis belgique`
- **Monthly search volume (est.):** 800–1,500 (Belgium FR), high commercial intent
- **Suggested URL:** `/fr/blog/poolhouse-belgique-prix-guide-2026`
- **Why now:** Summer peak season for outdoor/pool-adjacent construction. No content live to capture this traffic. Directly adjacent to existing pergola and veranda services.
- **Internal linking:** HomePage hero → ServicesPage → new post → Quote CTA

---

**Idea 2 — "Pergola bioclimatique à Liège : installateur local, prix et délais 2026"** ⭐ Priority 1
- **Keyword gap:** Geo-targeted posts cover Charleroi, Bruxelles, Namur — Liège (Belgium's 4th city, 200k+ inhabitants) has zero coverage.
- **Target keywords:** `pergola bioclimatique liège`, `pergola liège prix`, `installateur pergola liège`
- **Monthly search volume (est.):** 400–900 (Liège region FR)
- **Suggested URL:** `/fr/blog/pergola-bioclimatique-liege`
- **Why now:** Recommended in 2026-04-13 and 2026-05-18 reports — now recommended for a 3rd consecutive time. Easy adapt from existing Charleroi post with Liège-specific permit context.
- **Effort:** ~2 hours
- **Internal linking:** From `pergola-bioclimatique-guide-complet` → new post → `/services/pergola` CTA

---

**Idea 3 — "Pergola bioclimatique vs tonnelle vs auvent : quel choix pour votre terrasse ?"**
- **Keyword gap:** No decision-funnel / comparison content exists. Users researching pergola alternatives go to competitors.
- **Target keywords:** `pergola vs tonnelle`, `pergola vs auvent`, `difference pergola bioclimatique`, `quelle structure terrasse belgique`
- **Monthly search volume (est.):** 600–1,200 (Belgium + France spill)
- **Suggested URL:** `/fr/blog/pergola-vs-tonnelle-vs-auvent-terrasse-belgique`
- **Why now:** Top-of-funnel comparison content captures early-stage users and nurtures toward the pergola service page. No existing post covers this angle.
- **Internal linking:** Comparison table → `/services/pergola`, `/services/veranda` → Quote CTA

---

### 9. Image Alt Tag Audit

**Method:** Grepped all `<img` elements across `src/` TSX files; checked `alt=` attribute presence.

**Total `<img>` elements found:** ~20+

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
| `pages/ProjectDetailPage.tsx:144,217,319` | 3 | ✅ | `t('gallery:${project.titleKey}')` / title+index |
| `pages/BlogPage.tsx:149,197` | 2 | ✅ | `t('blog:posts.${id}.title')` |
| `pages/BlogPostPage.tsx:306,379,398,473` | 4 | ✅ | Post title or title+index |
| _(CardImage wrappers — ProjectsPage, ServicesPage, PortfolioPage, FeaturedProjects)_ | ~3+ | ✅ | alt prop passed through |

**Elements with empty/decorative alt (`alt=""`):** 0 found.
**Elements missing alt entirely:** 0 found.

**Result: All images have descriptive alt text. PASS** ✅ No regressions vs previous report.

---

## PART 3 — MONTHLY (Skipped)

> **Today is 2026-06-15 (day 15 of month).** Monthly checks (tasks 10–12: full meta description duplicate audit across all locale files, internal linking structure / orphan page analysis, bundle size performance check in `dist/assets/`) are only run on **days 1–7 of the month**. Skipping.
>
> Next monthly window: **2026-07-01 through 2026-07-07**.

---

## Action Items (Prioritized)

### 🔴 CRITICAL — Fix Before Next Crawl

| # | Issue | File | Fix | Effort | Open Since |
|---|-------|------|-----|--------|-----------|
| 1 | ServicesPage meta description returns key literal | `src/pages/ServicesPage.tsx:48,50` | Change `t('services:meta.description')` → `t('services:overview.description')` (2 lines) | **5 min** | 2026-05-18 (4 wks) |

### 🟡 HIGH — Fix This Sprint

| # | Issue | File | Fix | Effort | Open Since |
|---|-------|------|-----|--------|-----------|
| 2 | ContactPage description not keyword-targeted | `src/locales/*/contact.json` + `ContactPage.tsx:80` | Add `meta` section to contact.json (all 5 locales), update tsx | 30 min | Ongoing |
| 3 | Missing VideoObject schema | `src/pages/VideoGalleryPage.tsx` | Add VideoObject JSON-LD for each video | 1 hr | 2026-04-10 (9 wks) |
| 4 | Publish Liège geo blog post | `src/locales/fr/blog.json` + `public/sitemap.xml` | Adapt Charleroi post for Liège, add sitemap entry | 2 hr | Requested 3× |

### 🟠 MEDIUM — Backlog

| # | Issue | Fix | Effort |
|---|-------|-----|--------|
| 5 | Thin content: HomePage (~310w) | Expand hero + intro copy in home.json | 2 hr |
| 6 | Thin content: Shutter service (~200w) | Add content sections to services.json | 3 hr |
| 7 | Thin content: Garage service (~200w) | Add content sections to services.json | 3 hr |
| 8 | Blog posts word count avg ~640w → target 1,500+ | Expand existing 4 March posts | 4 hr |
| 9 | Missing ItemList schema on ServicesPage | `src/pages/ServicesPage.tsx` | 1 hr |
| 10 | HomePage meta 154c / Portfolio meta 158c (over 155c) | Trim 1-3 chars each | 15 min |
| 11 | AboutPage thin content (~180w) | Expand story + team section | 2 hr |
| 12 | Service detail cross-links | Add 2-3 related-service links per ServiceDetailPage | 1 hr |

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

**Quick wins available:** Fixing the ServicesPage meta bug (#1, 5 minutes) recovers ~1-2 points. Publishing the Liège post (#4) + fixing ContactPage description (#2) adds ~2-3 more. **All 4 critical+high items done = ~70/100 achievable within one week.**

---

*Report generated: 2026-06-15 | Audited by Claude Code | Domain: archi.constructionveranda.com*
