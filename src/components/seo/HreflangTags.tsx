import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { getHreflangLinks } from '@/lib/i18n/utils'
import { supportedLanguages, type SupportedLanguage } from '@/lib/i18n/config'

const BASE_URL = 'https://archi.constructionveranda.com'

export function HreflangTags() {
  const location = useLocation()
  const links = getHreflangLinks(location.pathname, BASE_URL)

  const pathParts = location.pathname.split('/').filter(Boolean)
  const firstPart = pathParts[0] as SupportedLanguage
  const isLangPrefixed = supportedLanguages.includes(firstPart)
  const canonicalPath = isLangPrefixed
    ? location.pathname
    : `/fr${location.pathname === '/' ? '' : location.pathname}`
  const canonicalUrl = `${BASE_URL}${canonicalPath}`

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {links.map(({ hreflang, href }) => (
        <link key={hreflang} rel="alternate" hreflang={hreflang} href={href} />
      ))}
    </Helmet>
  )
}
