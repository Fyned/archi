import { useTranslation } from '@/hooks/useTranslation'

const stats = [
  { key: 'years', value: '15+' },
  { key: 'projects', value: '500+' },
  { key: 'warranty', value: '15' },
  { key: 'satisfaction', value: '98%' },
]

export function TrustBadges() {
  const { t } = useTranslation('common')

  return (
    <section className="py-12 bg-primary-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 font-medium">
                {t(`trust.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
