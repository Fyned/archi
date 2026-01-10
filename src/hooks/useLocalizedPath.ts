import { getLocalizedPath } from '@/lib/i18n/utils'
import { supportedLanguages, type SupportedLanguage } from '@/lib/i18n/config'
import { useParams, useLocation } from 'react-router-dom'

export function useLocalizedPath() {
  const params = useParams<{ lang?: string }>()
  const location = useLocation()

  // Get current locale from URL (reactive)
  const getCurrentLocale = (): SupportedLanguage => {
    // First check route params
    if (params.lang && supportedLanguages.includes(params.lang as SupportedLanguage)) {
      return params.lang as SupportedLanguage
    }
    // Then check pathname
    const pathParts = location.pathname.split('/').filter(Boolean)
    const firstPart = pathParts[0] as SupportedLanguage
    if (supportedLanguages.includes(firstPart)) {
      return firstPart
    }
    return 'nl' // Default language
  }

  const currentLocale = getCurrentLocale()

  const localizedPath = (path: string, locale?: SupportedLanguage) => {
    return getLocalizedPath(path, locale || currentLocale)
  }

  return { localizedPath, currentLocale }
}
