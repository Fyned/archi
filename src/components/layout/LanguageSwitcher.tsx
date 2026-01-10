import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { supportedLanguages, languageNames, type SupportedLanguage } from '@/lib/i18n/config'
import { getLocalizedPath } from '@/lib/i18n/utils'
import clsx from 'clsx'

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { currentLocale } = useLocalizedPath()

  // Get current path without locale prefix for switching
  const getCurrentPathWithoutLocale = (): string => {
    const pathname = window.location.pathname
    for (const lang of supportedLanguages) {
      if (pathname.startsWith(`/${lang}/`)) {
        return pathname.slice(lang.length + 1)
      }
      if (pathname === `/${lang}`) {
        return '/'
      }
    }
    return pathname
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (locale: SupportedLanguage) => {
    setIsOpen(false)
    const cleanPath = getCurrentPathWithoutLocale()
    const newPath = getLocalizedPath(cleanPath, locale)
    // Full page navigation to ensure i18n reinitializes with correct language
    window.location.href = newPath
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
        aria-label="Select language"
      >
        <Globe size={16} />
        <span className="uppercase font-medium">{currentLocale}</span>
        <ChevronDown
          size={14}
          className={clsx('transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[160px] z-50">
          {supportedLanguages.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={clsx(
                'w-full px-4 py-2 text-left text-sm transition-colors',
                locale === currentLocale
                  ? 'bg-primary-50 text-primary-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {languageNames[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
