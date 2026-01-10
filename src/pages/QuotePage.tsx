import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import QuoteForm from '@/components/forms/QuoteForm'
import { Shield, Clock, Award } from 'lucide-react'

export default function QuotePage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Helmet>
        <title>{t('nav.quote')} | Archi Construction & Veranda</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Vraag een gratis offerte aan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte op maat
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span className="text-sm">100% Vrijblijvend</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span className="text-sm">Reactie binnen 24 uur</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} />
                <span className="text-sm">15 jaar garantie</span>
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
              Waarom kiezen voor Archi Construction?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">Gratis Advies</h3>
                <p className="text-gray-600 text-sm">
                  Wij komen vrijblijvend bij u langs om uw project te bespreken
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">Beste Prijs-Kwaliteit</h3>
                <p className="text-gray-600 text-sm">
                  Eerlijke prijzen voor premium kwaliteit constructies
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold mb-2">Snelle Uitvoering</h3>
                <p className="text-gray-600 text-sm">
                  Van offerte tot installatie binnen enkele weken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
