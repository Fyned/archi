import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

export function Intro() {
  const { t } = useTranslation('home')
  const paragraphs = (t('intro.paragraphs', { returnObjects: true }) as string[]) || []

  return (
    <section className="section bg-white py-20">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            {t('intro.title')}
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            {Array.isArray(paragraphs) &&
              paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
