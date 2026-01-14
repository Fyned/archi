import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Award, Users, Target, Heart } from 'lucide-react'

const values = [
  { key: 'quality', icon: Award },
  { key: 'team', icon: Users },
  { key: 'mission', icon: Target },
  { key: 'passion', icon: Heart },
]

export default function AboutPage() {
  const { t } = useTranslation(['about', 'common'])

  return (
    <>
      <Helmet>
        <title>{t('about:meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('about:meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/general/hero-main.jpg)'
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('about:hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('about:hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                {t('about:story.title')}
              </h2>
              <div className="space-y-4 text-gray-600">
                {(t('about:story.paragraphs', { returnObjects: true }) as string[]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/general/about-team.jpg"
                alt="Our team at work"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">{t('about:story.experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {t('about:values.title')}
            </h2>
            <p className="text-gray-600">
              {t('about:values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.key} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {t(`about:values.${value.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(`about:values.${value.key}.description`)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">{t('about:stats.projects')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">{t('about:stats.experience')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-100">{t('about:stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              {t('about:certifications.title')}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ISO 9001</div>
            <div className="text-2xl font-bold text-gray-400">CE Certified</div>
            <div className="text-2xl font-bold text-gray-400">Belgian Quality</div>
          </div>
        </div>
      </section>
    </>
  )
}
