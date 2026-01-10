import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'

// Contact constants
const PHONE_CALL = '+32 487 72 06 29'
const PHONE_WHATSAPP = '+32 493 36 50 29'
const EMAIL = 'info@archiconstructionveranda.be'
const FACEBOOK_URL = 'https://www.facebook.com/share/17aoRK7UdL/'
const INSTAGRAM_URL = 'https://www.instagram.com/archiconstructionveranda'

export function Footer() {
  const { t } = useTranslation('common')
  const { localizedPath } = useLocalizedPath()

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'projects', href: '/projects' },
    { key: 'contact', href: '/contact' },
  ]

  const serviceLinks = [
    { key: 'pergola', href: '/services/pergola' },
    { key: 'veranda', href: '/services/veranda' },
    { key: 'carport', href: '/services/carport' },
    { key: 'window', href: '/services/window' },
    { key: 'shutter', href: '/services/shutter' },
    { key: 'garage', href: '/services/garage' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo-white.png"
                alt="Archi Construction & Véranda"
                className="h-28 w-auto"
                width={150}
                height={112}
                loading="lazy"
              />
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={localizedPath(link.href)}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={localizedPath(link.href)}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {t(`services_menu.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_CALL.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 hover:text-primary-400 transition-colors"
                >
                  <Phone size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{PHONE_CALL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{PHONE_WHATSAPP} (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} className="flex-shrink-0 mt-0.5" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>
                  {t('footer.location')}
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-400">
                {t('contact_info.hours_weekday')}<br />
                {t('contact_info.hours_weekend')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href={localizedPath('/privacy')}
                className="hover:text-primary-400 transition-colors"
              >
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
