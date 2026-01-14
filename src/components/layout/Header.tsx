import { useState } from 'react'
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
  const { t } = useTranslation('common')
  const { localizedPath } = useLocalizedPath()

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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar with flowing gradient */}
      <div className="gradient-flow text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE_CALL.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-primary-100 transition-colors">
              <Phone size={16} />
              <span>{PHONE_CALL}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
              className="hidden sm:flex items-center gap-2 hover:text-primary-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} />
              <span>{t('whatsapp.button_text')}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{t('contact_info.hours_weekday')}</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={localizedPath('/')} className="flex items-center">
            <img
              src="/logo-horizontal.png"
              alt="Archi Construction & Véranda"
              className="h-12 md:h-14 w-auto"
              width={200}
              height={56}
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.key} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors font-medium"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                      <ChevronDown size={16} />
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
                          className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {t('services_menu.all')}
                        </a>
                        {item.children.map((child) => (
                          <a
                            key={child.key}
                            href={localizedPath(child.href)}
                            className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
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
                    className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary"
            >
              {t('cta.get_quote')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600"
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
          'lg:hidden fixed inset-0 top-[116px] bg-white z-40 transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container-custom py-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.key}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-900"
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
                        'pl-4 space-y-2 overflow-hidden transition-all duration-300',
                        isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <a
                        href={localizedPath(item.href)}
                        className="block py-2 text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('services_menu.all')}
                      </a>
                      {item.children.map((child) => (
                        <a
                          key={child.key}
                          href={localizedPath(child.href)}
                          className="block py-2 text-gray-600"
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
                    className="block py-3 text-lg font-medium text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('cta.get_quote')}
            </a>
          </div>

          <div className="mt-6 flex justify-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
