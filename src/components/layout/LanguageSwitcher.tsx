import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { supportedLanguages, languageNames, type SupportedLanguage } from '@/lib/i18n/config'
import clsx from 'clsx'

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { localizedPath, currentLocale } = useLocalizedPath()

  // Get current path without locale prefix
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = async (locale: SupportedLanguage) => {
    // First change the i18n language
    const { default: i18n } = await import('@/lib/i18n/config')
    await i18n.changeLanguage(locale)

    // Then navigate to the new localized path
    const newPath = localizedPath(currentPath, locale)
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
