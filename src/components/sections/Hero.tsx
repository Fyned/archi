import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { fadeInUp, fadeInLeft, staggerContainer, PulseGlow } from '@/components/ui'

export function Hero() {
  const { t } = useTranslation('home')
  const { localizedPath } = useLocalizedPath()

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 overflow-hidden">
      {/* Background video/image with parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/projects/project-veranda-led.jpg"
        >
          <source src="/projects/showcase-video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent" />
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
              <Play size={20} className="mr-2" />
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
              { value: '15+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '15', label: 'Year Warranty' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
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
                <div className="text-sm text-gray-400">{stat.label}</div>
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
