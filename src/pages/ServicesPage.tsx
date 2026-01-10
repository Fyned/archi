import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ArrowRight, Check } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui'

const services = [
  {
    id: 'pergola',
    image: '/projects/project-pergola-1.jpg',
  },
  {
    id: 'veranda',
    image: '/projects/project-veranda-4.jpg',
  },
  {
    id: 'carport',
    image: '/services/carport-hero.jpg',
  },
  {
    id: 'window',
    image: '/services/window-hero.jpg',
  },
  {
    id: 'shutter',
    image: '/services/shutter-hero.jpg',
  },
  {
    id: 'garage',
    image: '/services/garage-door-hero.jpg',
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=80)'
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

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {t('services:process.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2" />
                )}

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('cta.ready_title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('cta.ready_description')}
          </p>
          <a
            href={localizedPath('/quote')}
            className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
          >
            {t('cta.request_quote')}
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </>
  )
}
