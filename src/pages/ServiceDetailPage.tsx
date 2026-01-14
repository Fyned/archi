import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ArrowRight, Check, Expand } from 'lucide-react'
import { Lightbox } from '@/components/ui'

const serviceImages: Record<string, string[]> = {
  pergola: [
    '/images/pergola/pergola-hero.jpg',
    '/images/pergola/pergola-terrace-view.jpg',
    '/images/pergola/pergola-night-led.jpg',
    '/images/pergola/pergola-pool-area.jpg',
    '/images/pergola/pergola-louvers-open.jpg',
    '/images/pergola/pergola-attached-house.jpg',
  ],
  veranda: [
    '/images/veranda/veranda-hero.jpg',
    '/images/veranda/veranda-interior-living.jpg',
    '/images/veranda/veranda-exterior-modern.jpg',
    '/images/veranda/veranda-garden-view.jpg',
    '/images/veranda/veranda-sliding-doors.jpg',
    '/images/veranda/veranda-winter-cozy.jpg',
  ],
  carport: [
    '/images/carport/carport-hero.jpg',
    '/images/carport/carport-double.jpg',
    '/images/carport/carport-single-modern.jpg',
    '/images/carport/carport-led-lighting.jpg',
    '/images/carport/carport-solar-panels.jpg',
    '/images/carport/carport-entrance-gate.jpg',
  ],
  window: [
    '/images/window/window-hero.jpg',
    '/images/window/window-floor-ceiling.jpg',
    '/images/window/window-corner.jpg',
    '/images/window/window-bedroom.jpg',
    '/images/window/window-kitchen.jpg',
    '/images/window/window-sliding.jpg',
  ],
  shutter: [
    '/images/shutter/shutter-hero.jpg',
    '/images/shutter/shutter-exterior-closed.jpg',
    '/images/shutter/shutter-exterior-half.jpg',
    '/images/shutter/shutter-bedroom-interior.jpg',
    '/images/shutter/shutter-security.jpg',
    '/images/shutter/shutter-colors-variety.jpg',
  ],
  garage: [
    '/images/garage/garage-hero.jpg',
    '/images/garage/garage-sectional-wood.jpg',
    '/images/garage/garage-sectional-white.jpg',
    '/images/garage/garage-double-modern.jpg',
    '/images/garage/garage-open-interior.jpg',
    '/images/garage/garage-night-lights.jpg',
  ],
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const { t } = useTranslation(['services', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const service = serviceId || 'pergola'
  const images = serviceImages[service] || serviceImages.pergola

  const features = t(`services:${service}.features.items`, { returnObjects: true }) as string[]
  const benefits = t(`services:${service}.benefits.items`, { returnObjects: true }) as string[]
  const serviceTitle = t(`services:${service}.title`)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${serviceTitle} example ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Expand size={24} className="text-primary-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        title={`${serviceTitle} - ${t('common:service_detail.gallery')}`}
      />

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
