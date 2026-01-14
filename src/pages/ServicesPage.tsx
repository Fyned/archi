import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ArrowRight, Check } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui'

const services = [
  {
    id: 'pergola',
    image: '/images/pergola/pergola-hero.jpg',
  },
  {
    id: 'veranda',
    image: '/images/veranda/veranda-hero.jpg',
  },
  {
    id: 'carport',
    image: '/images/carport/carport-hero.jpg',
  },
  {
    id: 'window',
    image: '/images/window/window-hero.jpg',
  },
  {
    id: 'shutter',
    image: '/images/shutter/shutter-hero.jpg',
  },
  {
    id: 'garage',
    image: '/images/garage/garage-hero.jpg',
  },
]


export default function ServicesPage() {
  const { t } = useTranslation(['common', 'services'])
  const { localizedPath } = useLocalizedPath()

  const processSteps = t('services:process.steps', { returnObjects: true }) as Array<{
    title: string
    description: string
  }>

  return (
    <>
      <Helmet>
        <title>{t('nav.services')} | Archi Construction & Veranda</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/general/hero-main.jpg)'
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('services:overview.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('services:overview.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={localizedPath(`/services/${service.id}`)}
                className="group"
              >
                <Card hover className="h-full">
                  <CardImage
                    src={service.image}
                    alt={t(`services:${service.id}.title`)}
                  />
                  <CardContent>
                    <h2 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                      {t(`services:${service.id}.title`)}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {t(`services:${service.id}.description`)}
                    </p>

                    {/* Features preview */}
                    <ul className="space-y-2 mb-6">
                      {(t(`services:${service.id}.features.items`, { returnObjects: true }) as string[])
                        .slice(0, 3)
                        .map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                    </ul>

                    <span className="inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                      {t('cta.learn_more')}
                      <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Design */}
      <section className="section bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {t('services:process.title')}
            </h2>
          </div>

          <div className="relative">
            {/* Background decorative line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 rounded-full" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    {/* Step number with gradient */}
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow connector for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="text-primary-400 w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-flow">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('cta.ready_title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.ready_description')}
          </p>
          <a
            href={localizedPath('/quote')}
            className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg shadow-lg"
          >
            {t('cta.request_quote')}
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}
