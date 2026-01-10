import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent, FadeInUp, StaggerContainer } from '@/components/ui'

const services = [
  {
    key: 'pergola',
    href: '/services/pergola',
    image: '/projects/project-pergola-showroom.jpg'
  },
  {
    key: 'veranda',
    href: '/services/veranda',
    image: '/projects/project-veranda-led.jpg'
  },
  {
    key: 'carport',
    href: '/services/carport',
    image: '/services/carport-hero.jpg'
  },
  {
    key: 'window',
    href: '/services/window',
    image: '/services/window-hero.jpg'
  },
  {
    key: 'shutter',
    href: '/services/shutter',
    image: '/services/shutter-hero.jpg'
  },
  {
    key: 'garage',
    href: '/services/garage',
    image: '/services/garage-door-hero.jpg'
  }
]

export function Services() {
  const { t } = useTranslation('home')
  const { localizedPath } = useLocalizedPath()

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <FadeInUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('services.subtitle')}
          </p>
        </FadeInUp>

        {/* Services grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.a
              key={service.key}
              href={localizedPath(service.href)}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card hover className="h-full">
                <CardImage
                  src={service.image}
                  alt={t(`services.${service.key}.title`)}
                />
                <CardContent>
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`services.${service.key}.description`)}
                  </p>
                  <span className="inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    {t('common:cta.learn_more', 'Learn more')}
                    <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
