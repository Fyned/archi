import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'

export function CTASection() {
  const { t } = useTranslation('home')
  const { localizedPath } = useLocalizedPath()

  return (
    <section className="section bg-primary-600">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            {t('cta_section.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-10">
            {t('cta_section.description')}
          </p>
          <a
            href={localizedPath('/quote')}
            className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg group"
          >
            {t('cta_section.button')}
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
