import { useTranslation } from '@/hooks/useTranslation'
import { CheckCircle } from 'lucide-react'

const stats = [
  { key: 'years', value: '15+', isIcon: false },
  { key: 'projects', value: '500+', isIcon: false },
  { key: 'satisfaction', value: '98%', isIcon: false },
  { key: 'countries', value: '5', isIcon: false },
]

export function TrustBadges() {
  const { t } = useTranslation('common')

  return (
    <section className="py-12 gradient-flow">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 md:mb-2 flex justify-center">
                {stat.isIcon ? (
                  <CheckCircle size={48} strokeWidth={2.5} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-primary-100 font-medium">
                {t(`trust.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
