import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface Testimonial {
  name: string
  location: string
  project: string
  text: string
}

export function Testimonials() {
  const { t } = useTranslation('home')
  const items = (t('testimonials.items', { returnObjects: true }) as Testimonial[]) || []

  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-heading font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-xs text-primary-600 mt-1">{item.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
