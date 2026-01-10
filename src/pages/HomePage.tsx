import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Hero, Services, WhyUs, TrustBadges, FeaturedProjects, CTASection } from '@/components/sections'

export default function HomePage() {
  const { t } = useTranslation('home')

  return (
    <>
      <Helmet>
        <title>{t('meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <Hero />
      <TrustBadges />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <CTASection />
    </>
  )
}
