import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ArrowRight, Check } from 'lucide-react'

const serviceImages: Record<string, string[]> = {
  pergola: [
    '/services/pergola/pergola-1.jpg',
    '/services/pergola/pergola-2.jpg',
    '/services/pergola/pergola-3.jpg',
    '/services/pergola/pergola-4.jpg',
    '/services/pergola/pergola-5.jpg',
    '/services/pergola/pergola-6.jpg',
  ],
  veranda: [
    '/services/veranda/veranda-1.jpg',
    '/services/veranda/veranda-2.jpg',
    '/services/veranda/veranda-3.jpg',
    '/services/veranda/veranda-4.jpg',
    '/services/veranda/veranda-5.jpg',
    '/services/veranda/veranda-6.jpg',
  ],
  carport: [
    '/services/carport/carport-1.jpg',
    '/services/carport/carport-2.jpg',
    '/services/carport/carport-3.jpg',
    '/services/carport/carport-4.jpg',
    '/services/carport/carport-5.jpg',
    '/services/carport/carport-6.jpg',
  ],
  window: [
    '/services/window/window-1.jpg',
    '/services/window/window-2.jpg',
    '/services/window/window-3.jpg',
    '/services/window/window-4.jpg',
    '/services/window/window-5.jpg',
    '/services/window/window-6.jpg',
  ],
  shutter: [
    '/services/shutter/shutter-1.jpg',
    '/services/shutter/shutter-2.jpg',
    '/services/shutter/shutter-3.jpg',
    '/services/shutter/shutter-4.jpg',
    '/services/shutter/shutter-5.jpg',
    '/services/shutter/shutter-6.jpg',
  ],
  garage: [
    '/services/garage/garage-1.jpg',
    '/services/garage/garage-2.jpg',
    '/services/garage/garage-3.jpg',
    '/services/garage/garage-4.jpg',
    '/services/garage/garage-5.jpg',
    '/services/garage/garage-6.jpg',
  ],
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const { t } = useTranslation(['services', 'common'])
  const { localizedPath } = useLocalizedPath()

  const service = serviceId || 'pergola'
  const images = serviceImages[service] || serviceImages.pergola

  const features = t(`services:${service}.features.items`, { returnObjects: true }) as string[]
  const benefits = t(`services:${service}.benefits.items`, { returnObjects: true }) as string[]
  const serviceTitle = t(`services:${service}.title`)

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Archi Construction & Veranda</title>
        <meta name="description" content={t(`services:meta.${service}.description`)} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium mb-4">
              {t(`services:${service}.subtitle`)}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t(`services:${service}.description`)}
            </p>
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary text-lg"
            >
              {t('common:cta.request_quote')}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">
                {t(`services:${service}.features.title`)}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">
                {t(`services:${service}.benefits.title`)}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">
            {t('common:service_detail.gallery')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${serviceTitle} example ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('common:service_detail.interested', { service: serviceTitle.toLowerCase() })}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('common:service_detail.interested_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={localizedPath('/quote')}
              className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
            >
              {t('common:cta.request_quote')}
            </a>
            <a
              href={localizedPath('/contact')}
              className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg"
            >
              {t('common:service_detail.contact')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
