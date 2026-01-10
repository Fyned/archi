import { supportedLanguages, type SupportedLanguage } from './config'

export function getLocaleFromUrl(url: string): SupportedLanguage {
  const pathParts = url.split('/').filter(Boolean)
  const firstPart = pathParts[0] as SupportedLanguage

  if (supportedLanguages.includes(firstPart)) {
    return firstPart
  }

  return 'nl' // Default language
}

export function getLocalizedPath(path: string, locale: SupportedLanguage): string {
  // Remove any existing locale prefix
  let cleanPath = path
  for (const lang of supportedLanguages) {
    if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
      cleanPath = path.slice(lang.length + 1) || '/'
      break
    }
  }

  // For default language (nl), we can use root or /nl/
  if (locale === 'nl') {
    return cleanPath
  }

  // For other languages, add the locale prefix
  if (cleanPath === '/') {
    return `/${locale}`
  }

  return `/${locale}${cleanPath}`
}

export function getAllLocalizedPaths(path: string): Record<SupportedLanguage, string> {
  return supportedLanguages.reduce((acc, locale) => {
    acc[locale] = getLocalizedPath(path, locale)
    return acc
  }, {} as Record<SupportedLanguage, string>)
}

export function getHreflangLinks(currentPath: string, baseUrl: string): Array<{ hreflang: string; href: string }> {
  const paths = getAllLocalizedPaths(currentPath)

  const links: Array<{ hreflang: string; href: string }> = supportedLanguages.map(locale => ({
    hreflang: locale,
    href: `${baseUrl}${paths[locale]}`
  }))

  // Add x-default pointing to Dutch (primary market)
  links.push({
    hreflang: 'x-default',
    href: `${baseUrl}${paths.nl}`
  })

  return links
}
