import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { getHreflangLinks } from '@/lib/i18n/utils'
import { supportedLanguages, type SupportedLanguage } from '@/lib/i18n/config'

const BASE_URL = 'https://archi.constructionveranda.com'

const OG_LOCALE_MAP: Record<SupportedLanguage, string> = {
  fr: 'fr_BE',
  nl: 'nl_BE',
  en: 'en_US',
  de: 'de_DE',
  tr: 'tr_TR',
}

export function HreflangTags() {
  const location = useLocation()
  const links = getHreflangLinks(location.pathname, BASE_URL)

  const pathParts = location.pathname.split('/').filter(Boolean)
  const firstPart = pathParts[0] as SupportedLanguage
  const isLangPrefixed = supportedLanguages.includes(firstPart)
  const currentLang: SupportedLanguage = isLangPrefixed ? firstPart : 'fr'
  const canonicalPath = isLangPrefixed
    ? location.pathname
    : `/fr${location.pathname === '/' ? '' : location.pathname}`
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  const ogLocale = OG_LOCALE_MAP[currentLang]
  const alternateLocales = supportedLanguages
    .filter((l) => l !== currentLang)
    .map((l) => OG_LOCALE_MAP[l])

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {links.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {/* Open Graph — canonical URL, locale, site_name */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Archi Construction & Veranda" />
      <meta property="og:locale" content={ogLocale} />
      {alternateLocales.map((loc) => (
        <meta key={loc} property="og:locale:alternate" content={loc} />
      ))}

      {/* Twitter Card — default for all pages (pages may override) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@archiveranda" />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  )
}
