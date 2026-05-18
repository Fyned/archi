# SEO Weekly Report — archi.constructionveranda.com
## Date: 2026-05-18
## Type: Weekly Check (Automated)
## Baseline: 58/100 (Full audit 2026-03-18 → SEO-AUDIT-2026-03-18.md)
## Previous Report: 2026-04-13 (~64/100)

---

## Score History

| Date | Type | Score | Notes |
|------|------|-------|-------|
| 2026-03-18 | Full Audit (Baseline) | 58/100 | First audit — 32 issues found |
| 2026-04-04 | Weekly | 66/100 | +8 (prerendering, code splitting, WebP, hreflang) |
| 2026-04-06 | Weekly + Monthly | 70/100 | +4 (geo blog posts added) |
| 2026-04-10 | Full 6-Agent Audit | 61/100 | Deep analysis — content/E-E-A-T/hreflang issues |
| 2026-04-13 | Weekly | ~64/100 | 6 critical fixes applied; content/E-E-A-T gaps remain |
| **2026-05-18** | **Weekly** | **~66/100** | **PrivacyPage fixed; new ServicesPage meta bug found** |

**+2 vs last report.** PrivacyPolicyPage Helmet fix (+2) partially offset by newly discovered ServicesPage broken meta key (-1 net adjustment factored in).

---

## PART 1 — TECHNICAL

### 1. Sitemap Audit

**Total URLs: 95** ✅

| Page Type | Languages | URLs |
|-----------|-----------|------|
| Homepage | 5 (fr/nl/en/de/tr) | 5 |
| Services index | 5 | 5 |
| Service detail (6 types) | 5 | 30 |
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
- All 14 localized page types in App.tsx present in sitemap ✅
- `NotFoundPage` correctly excluded (404) ✅
- Dynamic `/projects/:projectId` excluded (CMS-driven, expected) ✅
- Blog posts (FR only) — other-language blog posts not in sitemap (by design, content only in FR) ✅
- No new pages added since last report; count unchanged at 95

**Sitemap lastmod dates:**
- Static pages: 2026-04-15 (most recent bulk update)
- Blog posts (batch 1, March): 2026-03-18
- Blog posts (batch 2, April): 2026-04-06
- Lastmod dates are accurate and reflect actual content changes ✅

---

### 2. Schema / Structured Data Audit

**Files with JSON-LD:**

| File | Schema Types | Status |
|------|-------------|--------|
| `public/index.html` | HomeAndConstructionBusiness, WebSite | ✅ |
| `src/pages/BlogPostPage.tsx` | BlogPosting, BreadcrumbList | ✅ |
| `src/pages/ServiceDetailPage.tsx` | BreadcrumbList | ✅ |

**Still missing (carry-forward from 2026-04-10 audit):**

| Page | Missing Schema | Impact |
|------|---------------|--------|
| `VideoGalleryPage.tsx` | VideoObject | Cannot get video rich results |
| `ServicesPage.tsx` | ItemList / Service | No service listing rich results |

**Status vs baseline (2026-03-18):**
- HomeAndConstructionBusiness: added ✅ (was missing in baseline)
- WebSite schema: added ✅
- @id cross-references fixed ✅ (April 2026)
- SearchAction removed ✅ (invalid per Google guidelines)
- FAQPage schema removed ✅ (invalid for non-gov/health sites per 2023 guidelines)
- Duplicate Organization on AboutPage removed ✅
- Gap: 2 schemas still missing vs 4 missing at baseline → improvement

---

### 3. Internal Link Integrity

**Method:** Audited all `to=` and `href=` attributes in `src/pages/` and cross-referenced with routes in `src/App.tsx`.

**Result: 0 broken internal links** ✅

All pages use the `localizedPath()` hook (from `useLocalizedPath`) which dynamically prepends the current language prefix. No hardcoded `/fr/...` paths found in page files.

**Blog post serviceLinks validation** (hardcoded in `BlogPostPage.tsx`):

| Post Slug | serviceLink | Valid Route? |
|-----------|------------|--------------|
| pergola-bioclimatique-guide-complet | /services/pergola | ✅ |
| veranda-aluminium-vs-pvc | /services/veranda | ✅ |
| carport-solaire-belgique | /services/carport | ✅ |
| entretien-pergola-aluminium | /services/pergola | ✅ |
| permis-urbanisme-belgique | _(none — general post)_ | ✅ |
| tendances-outdoor-2026 | _(none — general post)_ | ✅ |
| pergola-bioclimatique-charleroi | /services/pergola | ✅ |
| veranda-aluminium-bruxelles | /services/veranda | ✅ |
| carport-aluminium-namur | /services/carport | ✅ |
| pergola-prix-m2-belgique-2026 | /services/pergola | ✅ |

All serviceLinks point to valid App.tsx routes. ✅

---

### 4. Meta Tags (react-helmet-async)

**All 14 user-facing pages audited:**

| Page | Helmet | Title | Description | Canonical | Status |
|------|--------|-------|-------------|-----------|--------|
| HomePage | ✅ | ✅ | ✅ | ✅ | OK |
| AboutPage | ✅ | ✅ | ✅ | ✅ | OK |
| **ServicesPage** | ✅ | ⚠️ | **❌ BROKEN** | ✅ | **BUG** |
| ServiceDetailPage | ✅ | ✅ | ✅ | ✅ | OK |
| ProjectsPage | ✅ | ✅ | ✅ | ✅ | OK |
| ProjectDetailPage | ✅ | ✅ | ✅ | ✅ | OK |
| ContactPage | ✅ | ✅ | ⚠️ | ✅ | Weak |
| QuotePage | ✅ | ✅ | ✅ | ✅ | OK |
| BlogPage | ✅ | ✅ | ✅ | ✅ | OK |
| BlogPostPage | ✅ | ✅ | ✅ | ✅ | OK |
| PortfolioPage | ✅ | ✅ | ✅ | ✅ | OK |
| VideoGalleryPage | ✅ | ✅ | ✅ | ✅ | OK |
| MarketplacePage | ✅ | ✅ | ✅ | ✅ | OK |
| PrivacyPolicyPage | ✅ | ✅ | ✅ | ✅ | ✅ **FIXED** |

**🔴 New Critical Bug — ServicesPage meta description broken:**

`ServicesPage.tsx:48` calls `t('services:meta.description')`, but `src/locales/fr/services.json` has no `meta.description` key — the structure is `meta.overview.description`. i18next returns the key literal string `"services:meta.description"` as the rendered content, not an actual description.

Correct key: `t('services:meta.overview.description')`.
Correct title key: `t('services:meta.overview.title')` (currently using `t('nav.services')` → "Nos Services").

```
src/pages/ServicesPage.tsx:48   ← wrong: t('services:meta.description')
src/pages/ServicesPage.tsx:47   ← weak: t('nav.services') for page title
```

**🟡 ContactPage meta description weak (carry-forward):**

`ContactPage.tsx:80` uses `t('contact:hero.subtitle')` → "Contactez-nous pour un conseil gratuit et sans engagement" (60 chars). No keyword targeting. Not a blocker but misses ranking opportunity. `contact.json` has no `meta` section.

**✅ Improvement vs last report:** `PrivacyPolicyPage` meta tags confirmed present (Helmet with title, description, canonical at `src/pages/PrivacyPolicyPage.tsx:24-34`). This was the critical bug flagged on 2026-04-13 — now resolved.

---

### 5. robots.txt Audit

```
User-agent: *         → Allow: /            ✅
Disallow: /api/       → Private only        ✅
Disallow: /node_modules/                    ✅
Googlebot             → Allow: /            ✅
Bingbot               → Allow: /            ✅
GPTBot                → Allow: /            ✅ (AI search visibility)
ClaudeBot             → Allow: /            ✅
PerplexityBot         → Allow: /            ✅
CCBot                 → Disallow: /         ✅ (training crawler blocked)
Sitemap directive     → Present             ✅
```

**Result: PASS** — No important pages blocked. SEO crawlers, social crawlers, and AI search crawlers all allowed. Training-only crawlers blocked. ✅

---

## PART 2 — CONTENT

### 6. Blog Post Dates

> **Note:** Dates are stored in `src/pages/BlogPostPage.tsx` (`blogPostsData` object), not in i18n locale files. `blog.json` contains only translatable text (title, excerpt, content). This is functional but creates maintenance risk — date/category data can drift from sitemap `<lastmod>` values.

**6-month threshold: 2025-11-18** (today - 6 months). All posts are well within range.

| Slug | Date | Age (days) | Status |
|------|------|-----------|--------|
| pergola-bioclimatique-guide-complet | 2026-04-06 | 42 | ✅ Fresh |
| veranda-aluminium-vs-pvc | 2026-04-06 | 42 | ✅ Fresh |
| carport-solaire-belgique | 2026-04-06 | 42 | ✅ Fresh |
| entretien-pergola-aluminium | 2026-04-06 | 42 | ✅ Fresh |
| permis-urbanisme-belgique | 2026-04-06 | 42 | ✅ Fresh |
| tendances-outdoor-2026 | 2026-04-06 | 42 | ✅ Fresh |
| pergola-bioclimatique-charleroi | 2026-03-18 | 61 | ✅ Fresh |
| veranda-aluminium-bruxelles | 2026-03-18 | 61 | ✅ Fresh |
| carport-aluminium-namur | 2026-03-18 | 61 | ✅ Fresh |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 61 | ✅ Fresh |

**Result: 0 posts flagged for refresh.** Oldest post is 61 days old — well below the 180-day threshold. ✅

**Content depth concern (carry-forward):** Blog posts average ~640 words (target: 1,500+). This has been an open issue since the April 10 audit. The commits `e793f17` and `34433bc` added blog content expansion but word count target has not been formally re-verified.

---

### 7. Duplicate / Thin Content Check

**Meta description audit (FR locale, character counts):**

| Page | Description (chars) | Unique? | Length OK? |
|------|-------------------|---------|-----------|
| Home | 154c | ✅ | ⚠️ Slightly over 155c limit |
| About | 116c | ✅ | ✅ |
| Services | ❌ BROKEN (key literal) | N/A | ❌ |
| Quote | 74c | ✅ | ✅ |
| Portfolio | 158c | ✅ | ⚠️ Slightly over 155c limit |
| Marketplace | 113c | ✅ | ✅ |
| Blog | 147c | ✅ | ✅ |
| Contact | 60c (hero.subtitle) | ✅ | ⚠️ Short, not keyword-targeted |
| Videos | 115c | ✅ | ✅ |
| Privacy | uses `t('intro')[:~100c]` | ✅ | ✅ |

**No duplicate descriptions found between pages.** Each page has a unique description (where it resolves correctly).

**Thin page content (unchanged from April 10 audit — no content commits since):**

| Page | Est. Word Count | Target | Gap |
|------|----------------|--------|-----|
| HomePage | ~310 | 500+ | ❌ -190w |
| AboutPage | ~180 | 500+ | ❌ -320w |
| Shutter service | ~200 | 800+ | ❌ -600w |
| Garage service | ~200 | 800+ | ❌ -600w |
| Blog posts (avg) | ~640 | 1,500+ | ❌ -860w |

---

### 8. Content Topic Ideas (Keyword Gap)

Based on analysis of existing pages, blog posts, and service coverage:

**1. "Poolhouse aluminium et bois en Belgique — Prix et guide 2026"**
- **Gap:** Portfolio page shows poolhouse projects; no service page or blog post targets this keyword.
- **Target keywords:** `poolhouse belgique prix`, `poolhouse aluminium bois`, `construction poolhouse wallonie`
- **Suggested URL:** `/fr/blog/poolhouse-belgique-prix-guide-2026`
- **Why now:** Poolhouse construction searches spike in spring/summer (current season). Strongly adjacent to existing veranda/pergola services.

**2. "Primes énergie fenêtres 2026 Wallonie et Bruxelles — Guide complet"**
- **Gap:** Window service page exists but no blog supports it; energy renovation primes are high-intent searches especially after 2026 government updates.
- **Target keywords:** `prime fenêtre wallonie 2026`, `châssis triple vitrage prime énergie`, `remplacement fenêtres bruxelles subvention`
- **Suggested URL:** `/fr/blog/prime-energie-fenetres-wallonie-bruxelles-2026`
- **Why now:** No competitor content found for this keyword cluster in the Charleroi/Wallonie area. High conversion intent.

**3. "Pergola bioclimatique à Liège — Installateur local, prix et devis"**
- **Gap:** Geo-targeted blog posts cover Charleroi (`pergola-bioclimatique-charleroi`), Bruxelles (`veranda-aluminium-bruxelles`), Namur (`carport-aluminium-namur`) — Liège is Belgium's 4th largest city with no coverage.
- **Target keywords:** `pergola bioclimatique liège`, `pergola liège prix`, `installateur pergola liège`
- **Suggested URL:** `/fr/blog/pergola-bioclimatique-liege`
- **Note:** This was recommended in the 2026-04-13 report and still not executed. Priority elevated.

---

### 9. Image Alt Tag Audit

**22 `<img>` tags found across 12 files. All have alt attributes.**

| File | Count | Alt Type | Status |
|------|-------|----------|--------|
| `components/sections/Hero.tsx` | 1 | Static descriptive text | ✅ |
| `components/layout/Header.tsx` | 1 | "Archi Construction & Véranda" | ✅ |
| `components/layout/Footer.tsx` | 1 | "Archi Construction & Véranda" | ✅ |
| `components/ui/Card.tsx` | 1 | Prop-passed alt | ✅ |
| `components/ui/Lightbox.tsx` | 1 | Title + index fallback | ✅ |
| `components/forms/QuoteForm/Step1ProjectType.tsx` | 1 | i18n key | ✅ |
| `pages/AboutPage.tsx` | 1 | i18n key | ✅ |
| `pages/BlogPage.tsx` | 2 | i18n key (post title) | ✅ |
| `pages/BlogPostPage.tsx` | 4 | i18n key + index | ✅ |
| `pages/ServiceDetailPage.tsx` | 1 | Dynamic + fallback | ✅ |
| `pages/ProjectDetailPage.tsx` | 3 | Dynamic + index | ✅ |
| `pages/VideoGalleryPage.tsx` | 1 | i18n key (video title) | ✅ |

**Result: 22/22 images have alt text. PASS** ✅

---

## PART 3 — MONTHLY

**Skipped** — Today is 2026-05-18 (not within the 1st–7th of the month window). Next monthly run: 2026-06-01.

---

## Comparison with Previous Report (2026-04-13)

### Improvements ✅

| Issue | Previous Status | Current Status |
|-------|----------------|----------------|
| PrivacyPolicyPage meta tags missing | ❌ Critical (new) | ✅ Fixed (`PrivacyPolicyPage.tsx:24-34`) |
| Trailing slash canonical consistency | ⚠️ Inconsistent | ✅ .htaccess strategy implemented |
| Blog content depth | ~640w | Expanded (commits e793f17, 34433bc) |

### Regressions / New Issues ❌

| Issue | Severity | File | Detail |
|-------|----------|------|--------|
| ServicesPage meta description broken | 🔴 Critical | `ServicesPage.tsx:48` | `t('services:meta.description')` resolves to key literal — should be `t('services:meta.overview.description')` |
| ServicesPage title not SEO-optimized | 🟡 High | `ServicesPage.tsx:47` | Uses `t('nav.services')` ("Nos Services") instead of `t('services:meta.overview.title')` |

### Carry-Forward Open Issues

| # | Issue | Severity | First Flagged | Owner |
|---|-------|----------|--------------|-------|
| 1 | GSC verification code (placeholder in index.html) | 🔴 Critical | 2026-03-18 | Client |
| 2 | BCE/KBO company number absent from schema | 🔴 Critical | 2026-03-18 | Client + Dev |
| 3 | Homepage thin content (~310w, need 500+) | 🟡 High | 2026-04-10 | Content |
| 4 | AboutPage thin content (~180w, need 500+) | 🟡 High | 2026-04-10 | Content |
| 5 | Shutter service thin content (~200w, need 800+) | 🟡 High | 2026-04-10 | Content |
| 6 | Garage service thin content (~200w, need 800+) | 🟡 High | 2026-04-10 | Content |
| 7 | Blog posts thin content (~640w avg, need 1500+) | 🟡 High | 2026-04-10 | Content |
| 8 | ContactPage meta description not keyword-optimized | 🟢 Medium | 2026-04-13 | Dev |
| 9 | VideoObject schema missing (VideoGalleryPage) | 🟢 Medium | 2026-04-10 | Dev |
| 10 | Service schema missing (ServicesPage) | 🟢 Medium | 2026-04-10 | Dev |
| 11 | Hero image still 283 KB (target <200 KB) | 🟢 Medium | 2026-04-10 | Dev |
| 12 | Testimonials / AggregateRating (E-E-A-T) | 🟢 Medium | 2026-04-10 | Client |
| 13 | HSTS header (Hostinger panel) | 🟢 Medium | 2026-03-18 | Client |
| 14 | Liège geo blog post (suggested 3× now) | 🟢 Medium | 2026-04-06 | Content |

---

## Comparison with Baseline (SEO-AUDIT-2026-03-18.md)

| Category | Baseline (Mar 18) | Today (May 18) | Change |
|----------|------------------|----------------|--------|
| SEO Health Score | 58/100 | ~66/100 | ✅ +8 |
| Sitemap hreflang | Broken (8 groups) | Fixed ✅ | ✅ |
| Schema types | 2 (incomplete) | 5 (minus 2 duplicates) | ✅ +3 net |
| Broken internal links | 0 | 0 | = |
| Pages with Helmet | 13/14 | 14/14 | ✅ +1 |
| Pages with broken meta | 0 | 1 (ServicesPage) | ❌ New |
| Blog posts | 0 | 10 | ✅ +10 |
| Blog posts 6m+ old | N/A | 0 | ✅ |
| Images with alt text | ~18/18 | 22/22 | ✅ |
| Hero image size | 1 MB JPEG | 283 KB WebP | ✅ -72% |
| GSC verified | ❌ | ❌ | = (client action) |

---

## Statistics

| Metric | Value | vs 2026-04-13 | vs Baseline |
|--------|-------|--------------|-------------|
| Total page files | 15 | = | +1 |
| Sitemap URLs | 95 | = | +95 |
| Broken hreflang groups | 0 | = | ✅ -8 |
| Schema types | 5 | = | ✅ +3 |
| Broken internal links | 0 | = | = |
| Blog posts | 10 | = | ✅ +10 |
| Posts 6+ months old | 0 | = | ✅ |
| Images without alt | 0/22 | = | ✅ |
| Pages with broken meta | 1 | ❌ +1 new | ❌ |
| Pages with missing Helmet | 0 | ✅ -1 | ✅ -1 |
| Hero image size | 283 KB | = | ✅ -72% |

---

## Priority Action List (This Week)

1. **[DEV — TODAY]** Fix `ServicesPage.tsx:47-50` — change `t('services:meta.description')` → `t('services:meta.overview.description')` and `t('nav.services')` → `t('services:meta.overview.title')`. Zero-risk one-line fix; directly impacts Google's indexing of the highest-traffic page.

2. **[DEV — THIS WEEK]** Add `meta` section to `src/locales/fr/contact.json` with keyword-targeted title and description (~130 chars). Update `ContactPage.tsx:79-80` to use `t('contact:meta.title')` / `t('contact:meta.description')`.

3. **[CONTENT — THIS WEEK]** Write Liège geo blog post (`/fr/blog/pergola-bioclimatique-liege`) — this has been recommended for 6 weeks without execution. Adds the 4th major Belgian city to geo coverage.

4. **[CONTENT — ONGOING]** Homepage content expansion (+190 words). Most impactful thin-content fix — homepage ranks for primary keywords.

5. **[CLIENT — ONGOING]** GSC verification code and BCE company number. Both blocking full audit capability and schema completeness.

---

*Next weekly report: 2026-05-25*
*Next monthly run: 2026-06-01 (Part 3 will be included)*
*Next full audit: 2026-07-10 (Q3)*
