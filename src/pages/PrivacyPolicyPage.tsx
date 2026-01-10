import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { fadeInUp, staggerContainer } from '@/components/ui'
import { Shield, Mail, Phone } from 'lucide-react'

const PHONE_CALL = '+32 487 72 06 29'
const EMAIL = 'info@archiconstructionveranda.be'

export default function PrivacyPolicyPage() {
  const { t } = useTranslation('privacy')

  const sections = [
    { key: 'collection', icon: '📋' },
    { key: 'use', icon: '⚙️' },
    { key: 'cookies', icon: '🍪' },
    { key: 'security', icon: '🔒' },
    { key: 'rights', icon: '⚖️' },
    { key: 'contact', icon: '📧' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 py-20">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-6"
              variants={fadeInUp}
            >
              <Shield className="w-8 h-8 text-primary-400" />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
              variants={fadeInUp}
            >
              {t('title')}
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg"
              variants={fadeInUp}
            >
              {t('last_updated')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Intro */}
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t('intro')}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">{section.icon}</span>
                    {t(`sections.${section.key}.title`)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`sections.${section.key}.content`)}
                  </p>

                  {/* Contact info for contact section */}
                  {section.key === 'contact' && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-xl">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <a
                          href={`mailto:${EMAIL}`}
                          className="flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          <span>{EMAIL}</span>
                        </a>
                        <a
                          href={`tel:${PHONE_CALL.replace(/\s/g, '')}`}
                          className="flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          <span>{PHONE_CALL}</span>
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
