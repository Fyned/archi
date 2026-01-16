import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { LanguageSwitcher } from './LanguageSwitcher'
import clsx from 'clsx'

// Contact constants
const PHONE_CALL = '+32 487 72 06 29'
const PHONE_WHATSAPP = '+32 493 36 50 29'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef<HTMLElement>(null)
  const { t } = useTranslation('common')
  const { localizedPath } = useLocalizedPath()

  // Calculate header height for mobile menu offset
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    {
      key: 'services',
      href: '/services',
      children: [
        { key: 'pergola', href: '/services/pergola' },
        { key: 'veranda', href: '/services/veranda' },
        { key: 'carport', href: '/services/carport' },
        { key: 'window', href: '/services/window' },
        { key: 'shutter', href: '/services/shutter' },
        { key: 'garage', href: '/services/garage' },
      ]
    },
    { key: 'projects', href: '/projects' },
    { key: 'portfolio', href: '/portfolio' },
    { key: 'videos', href: '/videos' },
    { key: 'blog', href: '/blog' },
    { key: 'marketplace', href: '/marketplace' },
    { key: 'contact', href: '/contact' },
  ]

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with flowing gradient */}
      <div className="gradient-flow text-white py-1.5 sm:py-2">
        <div className="container-custom flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={`tel:${PHONE_CALL.replace(/\s/g, '')}`} className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-100 transition-colors">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{PHONE_CALL}</span>
              <span className="xs:hidden">Bel ons</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-primary-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t('whatsapp.button_text')}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden md:inline">{t('contact_info.hours_weekday')}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href={localizedPath('/')} className="flex items-center flex-shrink-0">
            <img
              src="/logo-horizontal.png"
              alt="Archi Construction & Véranda"
              className="h-10 sm:h-12 lg:h-14 w-auto"
              width={200}
              height={56}
              loading="eager"
            />
          </a>

          {/* Desktop Navigation - xl breakpoint for more space */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm 2xl:text-base whitespace-nowrap"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                      <ChevronDown size={14} />
                    </button>
                    <div
                      className={clsx(
                        'absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200',
                      )}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                        <a
                          href={localizedPath(item.href)}
                          className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm"
                        >
                          {t('services_menu.all')}
                        </a>
                        {item.children.map((child) => (
                          <a
                            key={child.key}
                            href={localizedPath(child.href)}
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm"
                          >
                            {t(`services_menu.${child.key}`)}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={localizedPath(item.href)}
                    className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm 2xl:text-base whitespace-nowrap"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center flex-shrink-0 ml-4">
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary text-sm 2xl:text-base px-4 2xl:px-6 whitespace-nowrap"
            >
              {t('cta.get_quote')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 text-gray-600 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          'xl:hidden fixed inset-x-0 bottom-0 bg-white z-40 transition-transform duration-300 overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: headerHeight }}
      >
        <nav className="container-custom py-4 sm:py-6">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-base sm:text-lg font-medium text-gray-900"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {t(`nav.${item.key}`)}
                      <ChevronDown
                        size={20}
                        className={clsx('transition-transform', isServicesOpen && 'rotate-180')}
                      />
                    </button>
                    <div
                      className={clsx(
                        'pl-4 space-y-1 overflow-hidden transition-all duration-300',
                        isServicesOpen ? 'max-h-96 opacity-100 pb-2' : 'max-h-0 opacity-0'
                      )}
                    >
                      <a
                        href={localizedPath(item.href)}
                        className="block py-2 text-gray-600 text-sm sm:text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('services_menu.all')}
                      </a>
                      {item.children.map((child) => (
                        <a
                          key={child.key}
                          href={localizedPath(child.href)}
                          className="block py-2 text-gray-600 text-sm sm:text-base"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t(`services_menu.${child.key}`)}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={localizedPath(item.href)}
                    className="block py-3 text-base sm:text-lg font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary w-full justify-center text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('cta.get_quote')}
            </a>
          </div>

          {/* Contact info in mobile menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            <a
              href={`tel:${PHONE_CALL.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-gray-600 py-2"
            >
              <Phone size={18} className="text-primary-600" />
              <span>{PHONE_CALL}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
              className="flex items-center gap-3 text-gray-600 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} className="text-primary-600" />
              <span>WhatsApp: {PHONE_WHATSAPP}</span>
            </a>
          </div>

          {/* Language switcher in mobile menu */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3 text-center">{t('nav.language') || 'Language'}</p>
            <LanguageSwitcher variant="mobile" />
          </div>
        </nav>
      </div>
    </header>
  )
}
