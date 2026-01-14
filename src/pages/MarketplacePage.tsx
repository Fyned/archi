import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ExternalLink, ShoppingBag, ArrowRight, Facebook } from 'lucide-react'

// Facebook Page URL
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=61585420874238'

export default function MarketplacePage() {
  const { t } = useTranslation(['marketplace', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [sdkLoaded, setSdkLoaded] = useState(false)

  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== 'undefined' && !window.FB) {
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0'
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      script.onload = () => {
        setSdkLoaded(true)
        if (window.FB) {
          window.FB.XFBML.parse()
        }
      }
      document.body.appendChild(script)
    } else if (window.FB) {
      setSdkLoaded(true)
      window.FB.XFBML.parse()
    }
  }, [])

  // Re-parse when SDK loads
  useEffect(() => {
    if (sdkLoaded && window.FB) {
      window.FB.XFBML.parse()
    }
  }, [sdkLoaded])

  return (
    <>
      <Helmet>
        <title>{t('marketplace:meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('marketplace:meta.description')} />
        <meta property="og:title" content={`${t('marketplace:meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('marketplace:meta.description')} />
        <meta property="og:image" content="https://archi.constructionveranda.com/images/general/hero-main.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <ShoppingBag size={20} className="text-primary-300" />
              <span className="text-primary-200 font-medium">{t('marketplace:badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('marketplace:title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t('marketplace:subtitle')}
            </p>
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn bg-[#1877F2] text-white hover:bg-[#166fe5] text-lg"
            >
              <Facebook size={24} />
              {t('marketplace:view_on_facebook')}
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Facebook Page Feed Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {t('marketplace:feed.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('marketplace:feed.description')}
            </p>
          </div>

          {/* Facebook Page Plugin */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div
                className="fb-page"
                data-href={FACEBOOK_PAGE_URL}
                data-tabs="timeline"
                data-width="500"
                data-height="800"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite={FACEBOOK_PAGE_URL} className="fb-xfbml-parse-ignore">
                  <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                    Archi Construction & Veranda
                  </a>
                </blockquote>
              </div>

              {/* Fallback if SDK doesn't load */}
              {!sdkLoaded && (
                <div className="bg-gray-100 rounded-xl p-8 text-center">
                  <Facebook size={48} className="text-[#1877F2] mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">{t('marketplace:loading')}</p>
                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline inline-flex items-center gap-2"
                  >
                    {t('marketplace:view_directly')}
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('marketplace:features.products.title')}
              </h3>
              <p className="text-gray-600">
                {t('marketplace:features.products.description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('marketplace:features.quality.title')}
              </h3>
              <p className="text-gray-600">
                {t('marketplace:features.quality.description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('marketplace:features.contact.title')}
              </h3>
              <p className="text-gray-600">
                {t('marketplace:features.contact.description')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {t('marketplace:features.delivery.title')}
              </h3>
              <p className="text-gray-600">
                {t('marketplace:features.delivery.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('marketplace:cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('marketplace:cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#1877F2] text-white hover:bg-[#166fe5] text-lg"
            >
              <Facebook size={20} className="mr-2" />
              Facebook Marketplace
              <ExternalLink size={18} className="ml-2" />
            </a>
            <a
              href={localizedPath('/quote')}
              className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
            >
              {t('common:cta.request_quote')}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// Extend Window interface for Facebook SDK
declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void
      }
    }
  }
}
