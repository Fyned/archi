import { Award, Shield, Palette, HeartHandshake } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const features = [
  { key: 'quality', icon: Award },
  { key: 'warranty', icon: Shield },
  { key: 'custom', icon: Palette },
  { key: 'service', icon: HeartHandshake },
]

export function WhyUs() {
  const { t } = useTranslation('home')

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('why_us.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('why_us.subtitle')}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.key}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                  <Icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {t(`why_us.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`why_us.${feature.key}.description`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
