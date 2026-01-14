import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import QuoteForm from '@/components/forms/QuoteForm'
import { Shield, Clock, Award } from 'lucide-react'

export default function QuotePage() {
  const { t } = useTranslation('quote')

  return (
    <>
      <Helmet>
        <title>{t('meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={`${t('meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://archi.constructionveranda.com/images/general/cta-background.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span className="text-sm">{t('hero.badge_free')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="text-sm">{t('hero.badge_fast')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span className="text-sm">{t('hero.badge_warranty')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-12">
              {t('why_us.title')}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">{t('why_us.advice.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('why_us.advice.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">{t('why_us.price.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('why_us.price.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">{t('why_us.fast.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('why_us.fast.description')}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">{t('why_us.quality.title')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('why_us.quality.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
