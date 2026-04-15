import { supportedLanguages, type SupportedLanguage } from './config'

export function getLocaleFromUrl(url: string): SupportedLanguage {
  const pathParts = url.split('/').filter(Boolean)
  const firstPart = pathParts[0] as SupportedLanguage

  if (supportedLanguages.includes(firstPart)) {
    return firstPart
  }

  return 'fr'
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

  // Build the path with locale prefix
  let result: string
  if (cleanPath === '/') {
    result = `/${locale}`
  } else {
    result = `/${locale}${cleanPath}`
  }

  // Always end with trailing slash to match react-snap SSG folder structure
  // and Apache mod_dir behavior. Prevents canonical/Google mismatch.
  if (!result.endsWith('/')) {
    result += '/'
  }

  return result
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

  // Add x-default pointing to French (primary market — Wallonie/Belgium)
  links.push({
    hreflang: 'x-default',
    href: `${baseUrl}${paths.fr}`
  })

  return links
}
