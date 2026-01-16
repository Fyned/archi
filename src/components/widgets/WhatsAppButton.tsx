import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import clsx from 'clsx'

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useTranslation('common')

  const phoneNumber = '+32 493 36 50 29'
  const defaultMessage = 'Hello! I would like more information about your services.'

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={clsx(
          'absolute bottom-full right-0 mb-3 bg-white rounded-lg shadow-lg p-3 min-w-[200px] transition-all duration-200',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        <p className="text-sm font-medium text-gray-900">Archi Construction</p>
        <p className="text-xs text-gray-500 mt-1">Typically replies within 1 hour</p>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={t('cta.whatsapp')}
      >
        <MessageCircle size={28} className="text-white" fill="white" />
      </a>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
    </div>
  )
}
