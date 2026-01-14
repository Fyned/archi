import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { fadeInUp, fadeInLeft, staggerContainer, PulseGlow } from '@/components/ui'

export function Hero() {
  const { t } = useTranslation(['home', 'common'])
  const { localizedPath } = useLocalizedPath()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
      {/* Background image with subtle zoom animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      >
        <img
          src="/images/general/hero-main.jpg"
          alt="Archi Construction Veranda - Premium outdoor living spaces"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      </motion.div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <motion.div
          className="max-w-3xl"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Subtitle */}
          <motion.p
            className="text-primary-400 font-medium mb-4 text-lg"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('hero.title')}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <PulseGlow className="inline-block rounded-lg">
              <a
                href={localizedPath('/quote')}
                className="btn btn-primary text-lg group"
              >
                {t('hero.cta_primary')}
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </PulseGlow>
            <motion.a
              href={localizedPath('/projects')}
              className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.cta_secondary')}
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap gap-8"
            variants={fadeInLeft}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {[
              { value: '500+', labelKey: 'trust.projects' },
              { value: '98%', labelKey: 'trust.satisfaction' },
              { value: '5', labelKey: 'trust.countries' },
              { value: '✓', labelKey: 'trust.team' }
            ].map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: 'spring' as const, stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-400">{t(`common:${stat.labelKey}`)}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
