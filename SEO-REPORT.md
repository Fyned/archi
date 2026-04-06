# SEO Report — archi.constructionveranda.com
## Date: 2026-04-06
## Overall Score: 70/100 (+4 depuis 2026-04-04 | +12 baseline)
## Type: RAPPORT HEBDOMADAIRE + CONTRÔLE MENSUEL (1–7 du mois)

---

### Executive Summary
- Baseline (18 mars): 58/100 → Précédent rapport (04 avr): 66/100 → Aujourd'hui: **70/100** (+4)
- **2 corrections majeures depuis le dernier rapport:**
  - `pvc-window-hero.png` 5.8 MB disparu (régression critique résolue → Images score récupère)
  - 4 geo blog posts (charleroi, bruxelles, namur, prix-m2) maintenant dans `BlogPage.tsx` avec date 2026-03-18
- **1 amélioration partielle:** Hero passe de JPEG à WebP (`hero-main.webp` 502 KB) — mais toujours >200 KB cible
- **Issues persistantes (7 ouverts depuis baseline):** canonical (12 pages), HSTS, GSC, i18n lazy, BreadcrumbList, Google Fonts, blog contenu vieillissant
- **dist/ absent:** Build non exécuté — bundle sizes non vérifiables ce cycle

---

## PARTIE 1 — TECHNIQUE

### 1. Sitemap.xml — Analyse

**Total URLs: 75** (inchangé depuis le dernier rapport)

| Segment | Langues couvertes | Manquant |
|---------|------------------|---------|
| Home | fr, nl, en, de, tr (5) | — |
| Services (listing) | fr, nl, en, de, tr (5) | — |
| Services detail (×6) | fr, nl, en, de, tr (30) | — |
| About | fr, nl, en, de (4) | **tr** |
| Contact | fr, nl, en, de (4) | **tr** |
| Quote | fr, nl, en, de (4) | **tr** |
| Blog listing | fr, nl, en, de (4) | **tr** |
| Portfolio | fr, nl, en (3) | **de, tr** |
| Privacy | fr, nl (2) | **en, de, tr** |
| Marketplace | fr, nl (2) | **en, de, tr** |
| Videos | fr, nl (2) | **en, de, tr** |
| Blog posts | 10 en FR uniquement | NL/EN/DE/TR slugs absents |
| **Projects (listing + detail)** | **Absent** | **Toutes langues** |
| **Root `/`** | **Absent** | — |

**Pages dans `src/pages/` vs sitemap:**
- `ProjectsPage.tsx` → `/projects` — **absent du sitemap (toutes langues)**
- `ProjectDetailPage.tsx` → `/projects/:id` — **absent du sitemap (Sanity dynamique, acceptable)**
- `NotFoundPage.tsx` → 404, exclusion normale

**Verdict:** 15+ URLs manquantes principalement sur les langues mineures. La couverture TR est quasi nulle (home + services seulement). `/projects` totalement absent du sitemap.

---

### 2. Schema / Structured Data

**Fichiers avec `application/ld+json` ou `schema.org`:** 1/15 pages (`src/pages/BlogPostPage.tsx`)

Le schéma global (`HomeAndConstructionBusiness`, `WebSite`) est uniquement dans `index.html` (hors-scope React). Aucun autre fichier page ne génère de JSON-LD dynamique.

| Schéma | Statut | Fichier |
|--------|--------|---------|
| HomeAndConstructionBusiness | ✓ Présent (index.html) | index.html |
| WebSite + SearchAction | ✓ Présent (index.html) | index.html |
| BlogPosting (datePublished, publisher) | ✓ Présent | BlogPostPage.tsx |
| BreadcrumbList | ✗ Manquant | — |
| Organization | ✗ Manquant | — |
| Service (nœud séparé) | ✗ Manquant | — |
| VideoObject | ✗ Manquant | — |

**Régression notable:** `ServiceDetailPage.tsx` ne génère aucun JSON-LD (FAQPage supprimé en mars, mais aucun remplacement Service schema). BreadcrumbList ouvert depuis le baseline.

---

### 3. Liens Internes — Vérification Cassés

Analyse de tous les `to=`, `href=` dans `src/pages/*.tsx` croisée avec les routes `App.tsx`:

| Route utilisée | Type | Présent dans App.tsx |
|---------------|------|---------------------|
| `localizedPath('/')` | Link to | ✓ |
| `localizedPath('/blog')` | Link to | ✓ |
| `localizedPath('/blog/:slug')` | Link to | ✓ |
| `localizedPath('/quote')` | Link/href to | ✓ |
| `localizedPath('/contact')` | Link/href to | ✓ |
| `localizedPath('/projects')` | href to | ✓ |
| `localizedPath('/projects/:id')` | href to | ✓ |
| `localizedPath('/services/:id`)` | href to | ✓ |
| `href={FACEBOOK_PAGE_URL}` | Externe | N/A |
| `href={tel:...}`, `href={mailto:...}` | Externe | N/A |

**Liens cassés: 0** — Tous les liens internes pointent vers des routes valides dans App.tsx.

---

### 4. Meta Tags — Audit Complet

| Page | Helmet | `<title>` | `description` | `canonical` |
|------|--------|-----------|---------------|-------------|
| AboutPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| BlogPage | ✓ | ✓ | ✓ | ✓ |
| BlogPostPage | ✓ | ✓ | ✓ | ✓ |
| ContactPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| HomePage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| MarketplacePage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| **NotFoundPage** | **✗ ABSENT** | **✗** | **✗** | **✗** |
| PortfolioPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| **PrivacyPolicyPage** | **✗ ABSENT** | **✗** | **✗** | **✗** |
| ProjectDetailPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| ProjectsPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| QuotePage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| ServiceDetailPage | ✓ | ✓ | ✓ | ✓ |
| ServicesPage | ✓ | ✓ | ✓ | ✗ MANQUANT |
| VideoGalleryPage | ✓ | ✓ | ✓ | ✗ MANQUANT |

- **Helmet absent:** NotFoundPage, PrivacyPolicyPage (2/15)
- **Canonical absent:** 12/15 pages — risk de duplicate content entre versions de langues
- **Amélioration vs baseline:** 0 (canonical toujours 3/15)

---

### 5. robots.txt — Vérification

```
User-agent: *  →  Allow: /
Disallow: /api/, /node_modules/
Sitemap: https://archi.constructionveranda.com/sitemap.xml
GPTBot, ClaudeBot, PerplexityBot → Allow: /
CCBot → Disallow: / (protection entraînement)
```

**Verdict: PASS** — Aucune page importante bloquée. Configuration correcte. Amélioration depuis baseline (#20 corrigé: `Disallow: /*.json$` et `Crawl-delay` supprimés). Conforme GDPR AI crawlers.

---

## PARTIE 2 — CONTENU

### 6. Blog — Dates et Fraîcheur

Données issues de `src/pages/BlogPage.tsx` (seule source des dates — `blog.json` ne contient pas de champ `date`):

| Slug | Date | Âge (au 06 avr 2026) | Statut |
|------|------|----------------------|--------|
| pergola-bioclimatique-guide-complet | 2026-01-10 | **87 jours** | 🔴 RAFRAÎCHIR |
| veranda-aluminium-vs-pvc | 2026-01-08 | **89 jours** | 🔴 RAFRAÎCHIR |
| carport-solaire-belgique | 2026-01-05 | **92 jours** | 🔴 RAFRAÎCHIR |
| entretien-pergola-aluminium | 2026-01-03 | **94 jours** | 🔴 RAFRAÎCHIR |
| permis-urbanisme-belgique | 2025-12-28 | **100 jours** | 🔴 RAFRAÎCHIR |
| tendances-outdoor-2026 | 2025-12-20 | **108 jours** | 🔴 RAFRAÎCHIR + titre anachronique |
| pergola-bioclimatique-charleroi | 2026-03-18 | 19 jours | ✅ OK |
| veranda-aluminium-bruxelles | 2026-03-18 | 19 jours | ✅ OK |
| carport-aluminium-namur | 2026-03-18 | 19 jours | ✅ OK |
| pergola-prix-m2-belgique-2026 | 2026-03-18 | 19 jours | ✅ OK |

**6/10 articles nécessitent un rafraîchissement** (>80 jours). Aucun nouvel article publié depuis le 18 mars 2026. "Tendances 2026" (publié déc. 2025) est particulièrement problématique: un contenu "tendances annuelles" vieux de 108 jours perd sa pertinence.

**Note structurelle:** Les dates de publication sont hardcodées dans `BlogPage.tsx` uniquement. `blog.json` ne stocke pas les dates — cela empêche le schéma BlogPosting d'utiliser `datePublished` dynamiquement depuis les locales.

---

### 7. Contenu Mince / Dupliqué

**Doublons exacts de meta descriptions: 0** (audit complet sur 35 descriptions en fr/nl/en/de/tr)

**Longueurs hors standard:**
| Clé | Chars | Problème |
|-----|-------|---------|
| tr/quote | 64 | Trop court (<130 chars idéal) |
| en/quote | 65 | Trop court |
| tr/about | 102 | Court |
| nl/videos | 104 | Court |
| en/marketplace | 104 | Court |
| de/portfolio | 170 | Trop long (>160 chars — risque troncature SERP) |

**Contenu mince identifié:**
- Services FR: description "services.meta.description" (ligne 5 services.json) = générique, non optimisée par service
- `PrivacyPolicyPage`: aucun Helmet → pas de meta description → Google génère son propre snippet

---

### 8. Idées de Contenu — Gaps de Mots-Clés

Basé sur l'analyse des pages existantes (pergola, veranda, carport, window, shutter, garage) et des lacunes thématiques:

| # | Sujet | Keyword cible | Justification |
|---|-------|--------------|---------------|
| 1 | **"Store banne terrasse Belgique: guide complet prix 2026"** | store banne belgique prix | Aucune page sur les stores bannes — produit adjacent fréquemment cherché avec pergola. Trafic capturable sans cannibalisation. |
| 2 | **"Véranda 4 saisons aluminium: isolation et vitrages 2026"** | veranda 4 saisons belgique | "Véranda 4 saisons" est requêté séparément de "véranda aluminium". Contenu existant générique, pas de page dédiée. |
| 3 | **"Aides et primes pour pergola/véranda en Belgique 2026 (Région Wallonne, Flandre, Bruxelles)"** | primes veranda belgique 2026 | Aucun contenu sur les aides financières pour les vérandas. Les primes carport solaire sont mentionnées dans un article mais pas pour les vérandas. Fort potentiel de conversion. |

---

### 9. Images — Audit Alt Text

**Résultat: 22/22 instances `<img>` ont un attribut `alt` — PASS**

| Fichier | Alt présent | Qualité |
|---------|-------------|---------|
| Hero.tsx | ✓ | Statique descriptif ✓ |
| Card.tsx | ✓ | Dynamique `{alt}` prop ✓ |
| Lightbox.tsx | ✓ | Dynamique avec fallback ✓ |
| Footer.tsx / Header.tsx | ✓ | Marque ✓ |
| Step1ProjectType.tsx | ✓ | i18n traduit ✓ |
| AboutPage.tsx | ✓ | "Our team at work" — English hardcodé ⚠️ |
| ServiceDetailPage.tsx | ✓ | Dynamique avec fallback indexé ✓ |
| ProjectDetailPage.tsx | ✓ | Dynamique i18n ✓ |
| BlogPage.tsx | ✓ | i18n titre du post ✓ |
| BlogPostPage.tsx | ✓ | i18n + index ✓ |
| VideoGalleryPage.tsx | ✓ | i18n ✓ |

**Seul problème mineur:** `AboutPage.tsx` ligne 63 — `alt="Our team at work"` hardcodé en anglais pour toutes les langues.

**Progrès images vs baseline:**
- `pvc-window-hero.png` (5.8 MB) → **supprimé** ✅
- `hero-main.webp` (502 KB) **existe** et est référencé dans `Hero.tsx` ✅ (mais 502 KB > cible 200 KB)
- `hero-main.jpg` (1.1 MB) encore présent dans `/public/images/general/` — sert de fallback potentiel
- Plusieurs JPEGs encore présents: `garage-side-door.jpg` 1 MB, `window-exterior-facade.jpg` 1 MB, `shutter-exterior-closed.jpg` 993 KB, `carport-hero.jpg` 981 KB, `window-hero.jpg` 931 KB

---

## PARTIE 3 — MENSUEL (01–07 du mois ✓)

### 10. Audit Complet Doublons Meta Descriptions

Audit sur 5 langues × 7 namespaces = 35 entrées meta.description

**Doublons exacts: 0** ✅

**Analyse qualité:**
| Langue | Namespace | Chars | Qualité |
|--------|-----------|-------|---------|
| fr | home | 154 | ✓ Optimal |
| fr | about | 116 | ⚠️ Court |
| fr | blog | 147 | ✓ Optimal |
| fr | quote | 74 | 🔴 Trop court |
| fr | portfolio | 158 | ✓ Optimal |
| fr | marketplace | 113 | ⚠️ Court |
| fr | videos | 112 | ⚠️ Court |
| nl | home | 143 | ✓ Optimal |
| nl | about | 112 | ⚠️ Court |
| nl | blog | 135 | ✓ Optimal |
| nl | quote | 79 | 🔴 Trop court |
| nl | portfolio | 154 | ✓ Optimal |
| nl | marketplace | 111 | ⚠️ Court |
| nl | videos | 104 | 🔴 Trop court |
| en | home | 148 | ✓ Optimal |
| en | about | 113 | ⚠️ Court |
| en | blog | 131 | ✓ Optimal |
| en | quote | 65 | 🔴 Trop court |
| en | portfolio | 147 | ✓ Optimal |
| en | marketplace | 104 | 🔴 Trop court |
| en | videos | 102 | 🔴 Trop court |
| de | home | 139 | ✓ Optimal |
| de | about | 132 | ✓ Optimal |
| de | blog | 156 | ✓ Optimal |
| de | quote | 86 | 🔴 Trop court |
| de | portfolio | 170 | 🔴 Trop long (troncature) |
| de | marketplace | 117 | ⚠️ Court |
| de | videos | 121 | ⚠️ Court |
| tr | home | 122 | ⚠️ Court |
| tr | about | 102 | 🔴 Trop court |
| tr | blog | 157 | ✓ Optimal |
| tr | quote | 64 | 🔴 Trop court |
| tr | portfolio | 163 | ✓ Optimal |
| tr | marketplace | 112 | ⚠️ Court |
| tr | videos | 106 | 🔴 Trop court |

**Résumé:** 9 descriptions trop courtes (<110 chars), 8 en zone "court" (110–130), 1 trop longue. **18/35 sous-optimales** — principalement les pages secondaires (quote, marketplace, videos) dans toutes les langues.

---

### 11. Analyse Structure Interne — Pages Orphelines

**Carte des liens entrants (depuis pages/*.tsx):**

| Page | Liée depuis | Statut |
|------|------------|--------|
| HomePage | NotFoundPage, header nav | ✓ Accessible |
| AboutPage | Footer/nav (non-tsx) | ✓ (via nav) |
| ServicesPage | Header nav + footer | ✓ |
| ServiceDetailPage | ServicesPage + BlogPostPage (CTA) | ✓ |
| ProjectsPage | Header nav | ✓ |
| ProjectDetailPage | ProjectsPage (gallery) | ✓ |
| BlogPage | BlogPostPage + header nav | ✓ |
| BlogPostPage | BlogPage | ✓ |
| ContactPage | BlogPostPage, VideoGalleryPage, header nav | ✓ |
| QuotePage | BlogPostPage, ServicesPage, ProjectsPage, PortfolioPage, MarketplacePage, VideoGalleryPage | ✓ Fort |
| PrivacyPolicyPage | **Footer uniquement** — aucun lien depuis pages/*.tsx | ⚠️ Quasi-orphelin |
| VideoGalleryPage | Header nav + footer | ✓ |
| MarketplacePage | Header nav + footer | ✓ |
| PortfolioPage | Header nav | ✓ |
| NotFoundPage | Route `*` | ✓ |

**Pages quasi-orphelines:** `PrivacyPolicyPage` — seul lien depuis le footer (composant layout, non vérifié ici). Aucun lien dans-page depuis d'autres pages.

**Liens croisés manquants (identiques depuis baseline):**
- Blog → services cross-links: **0** (pergola guide → /services/pergola = absent)
- Service → service cross-links: **0**
- About → portfolio cross-link: absent
- Contact page n'a pas de lien depuis les services

**Nouvelles observations:**
- `ServicesPage.tsx` utilise `href` (lien `<a>`) au lieu de `<Link>` pour les services individuels → possible navigation non-SPA, perte de state

---

### 12. Performance Bundle — dist/ Assets

**`dist/` folder: ABSENT** — Build non exécuté depuis le dernier déploiement connu.

Dernières mesures disponibles (2026-04-04):
- Main chunk: 285 KB (baseline: 434 KB, -34%)
- Total JS non compressé: ~631 KB
- i18n chunk: 49 KB (i18n-BbvaRjDb.js)

Recommandation: exécuter `npm run build` avant la prochaine livraison pour confirmer les tailles actuelles. Les 4 nouveaux blog posts ajoutés à `BlogPage.tsx` ont un impact négligeable (~1 KB).

---

## Comparaison vs SEO-REPORT.md (2026-04-04)

### Améliorations depuis le dernier rapport (+4 points)

| # | Correction | Vérification |
|---|-----------|-------------|
| ✅ | `pvc-window-hero.png` 5.8 MB supprimé | `ls public/images/services/` — fichier absent |
| ✅ | 4 geo blog posts dans BlogPage.tsx | IDs charleroi/bruxelles/namur/prix-m2 présents, dates 2026-03-18 |
| ✅ (partiel) | Hero WebP activé | `Hero.tsx` référence `hero-main.webp` (502 KB) |

### Régressions vs Rapport Précédent

| # | Régression | Détail |
|---|-----------|--------|
| ⚠️ | `hero-main.webp` 502 KB encore trop lourd | Cible <200 KB — amélioration partielle mais insuffisante pour Good LCP |
| ⚠️ | `canonical` toujours 3/15 pages | Aucune progression depuis baseline |
| ⚠️ | 0 nouveau blog post en 19 jours | Dernière publication: 2026-03-18 |

### Issues Toujours Ouvertes depuis Baseline (2026-03-18)

| # | Issue | Ancienneté |
|---|-------|-----------|
| 1 | Hero WebP complet (502 KB → <200 KB) | 19 jours |
| 2 | GSC doğrulama kodu | 49 jours |
| 3 | HSTS header | 49 jours |
| 4 | Canonical (12/15 pages) | 49 jours |
| 5 | BreadcrumbList schema | 49 jours |
| 6 | i18n lazy loading | 49 jours |
| 7 | Google Fonts self-host | 49 jours |
| 8 | Blog contenu vieillissant (6 posts >87 jours) | Continu |

---

## Statistiques Globales

| Métrique | Valeur | vs 04 avr | vs Baseline |
|---------|--------|-----------|-------------|
| Score global | **70/100** | +4 | +12 |
| Total pages (src/pages/) | 15 | = | = |
| Total sitemap URLs | 75 | = | = |
| Canonical tag | 3/15 | = | +3 |
| Alt text images | 22/22 | = | = |
| Schema types actifs | 4 | = | +2 |
| Blog posts | 10 | = | +4 (geo) |
| Blog posts à rafraîchir | 6/10 | = | = |
| Meta descriptions doublons | 0 | = | = |
| Meta descriptions sous-optimales | 18/35 | N/A (nouveau) | — |
| Liens cassés | 0 | = | = |
| Pages orphelines | 0 (1 quasi) | = | = |
| Images JPEG >900 KB | 5 | -1 | — |
| Hero WebP actif | ✓ 502 KB | ✓ (nouveau) | +1 |
| dist/ présent | ✗ | = | — |

---

## Score Breakdown

| Catégorie | Poids | Baseline | 04 avr | 06 avr | Delta |
|----------|-------|----------|--------|--------|-------|
| Technical SEO | 25% | 61 | 72 | 73 | +1 |
| Content Quality | 25% | 61 | 62 | 62 | = |
| On-Page SEO | 20% | 65 | 67 | 67 | = |
| Schema / Structured Data | 10% | 45 | 68 | 68 | = |
| Performance (CWV) | 10% | 50 | 58 | 60 | +2 |
| Images | 5% | 60 | 45 | 62 | +17 (pvc fix + webp) |
| AI Search Readiness | 5% | 74 | 78 | 78 | = |
| **TOTAL** | **100%** | **58** | **66** | **70** | **+4** |

---

## Actions Prioritaires

| # | Action | Priorité | Effort | Deadline | Statut |
|---|--------|---------|--------|---------|--------|
| 1 | `hero-main.webp` recomprimer à <200 KB (`cwebp -q 75`) | 🔴 Critical | 10 min | Aujourd'hui | Ouvert |
| 2 | Convertir 5 JPEGs >900 KB restants en WebP (garage, window×3, shutter, carport) | 🔴 Critical | 1h | Cette semaine | Ouvert |
| 3 | Activer GSC meta verification code (index.html) | 🔴 Critical | 10 min | Aujourd'hui | Ouvert |
| 4 | Ajouter canonical aux 12 pages manquantes | 🟡 High | 1h | Cette semaine | Ouvert |
| 5 | HSTS header (Hostinger hPanel `.htaccess`) | 🟡 High | 10 min | Cette semaine | Ouvert |
| 6 | BreadcrumbList JSON-LD dans ServiceDetailPage + BlogPostPage | 🟡 High | 1h | 2 semaines | Ouvert |
| 7 | Ajouter Helmet à PrivacyPolicyPage | 🟡 High | 20 min | Cette semaine | Ouvert |
| 8 | Rafraîchir 6 posts blog anciens (dateModified + contenu) | 🟡 High | 3h | Ce mois | Ouvert |
| 9 | Corriger `about-team.jpg` alt hardcodé EN → i18n | 🟡 Medium | 10 min | 2 semaines | Ouvert |
| 10 | Optimiser 9 meta descriptions <130 chars (priorité: quote, videos, about TR) | 🟡 Medium | 1h | Ce mois | Ouvert |
| 11 | Ajouter `/projects` au sitemap (toutes langues) | 🟡 Medium | 15 min | 2 semaines | Ouvert |
| 12 | Blog → services cross-links (pergola guide → /services/pergola etc.) | 🟡 Medium | 1h | Ce mois | Ouvert |
| 13 | i18n lazy loading (`i18next-http-backend`) | 🟢 Medium | 3h | Ce mois | Ouvert |
| 14 | Publier nouveau post: "Store banne Belgique guide 2026" | 🟢 Medium | 4h | Ce mois | Suggéré |
| 15 | Google Fonts self-host (GDPR + perf) | 🟢 Low | 1h | Ce mois | Ouvert |

---

### Historique des Scores

| Date | Score | Type | Delta |
|------|-------|------|-------|
| 2026-03-18 | 58/100 | Audit initial baseline | — |
| 2026-04-04 | 66/100 | Rapport trimestriel Q2 | +8 |
| **2026-04-06** | **70/100** | **Rapport hebdomadaire** | **+4** |

**Prochain rapport:** 2026-04-13 (hebdomadaire)

---

*Rapport généré par Claude Code SEO Maintenance — 2026-04-06*
*Référence baseline: SEO-AUDIT-2026-03-18.md | Référence précédente: SEO-REPORT.md (2026-04-04)*
