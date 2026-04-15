import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Hero, Intro, Services, WhyUs, TrustBadges, FeaturedProjects, Testimonials, CTASection } from '@/components/sections'

export default function HomePage() {
  const { t } = useTranslation('home')

  return (
    <>
      <Helmet>
        <title>{t('meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={`${t('meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://archi.constructionveranda.com/images/general/hero-main.webp" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero />
      <TrustBadges />
      <Intro />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}
