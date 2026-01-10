import { useTranslation as useI18nTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import i18n from '@/lib/i18n/config'
import { supportedLanguages, type SupportedLanguage } from '@/lib/i18n/config'

export function useTranslation(namespace?: string | string[]) {
  const params = useParams<{ lang?: string }>()
  const location = useLocation()

  // Detect locale from URL params or path
  const getLocaleFromPath = (): SupportedLanguage => {
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

  const [locale, setLocale] = useState<SupportedLanguage>(getLocaleFromPath)

  useEffect(() => {
    const detectedLocale = getLocaleFromPath()
    if (detectedLocale !== i18n.language) {
      i18n.changeLanguage(detectedLocale)
      setLocale(detectedLocale)
    }
  }, [params.lang, location.pathname])

  const { t, ready } = useI18nTranslation(namespace)

  return { t, ready, locale }
}
