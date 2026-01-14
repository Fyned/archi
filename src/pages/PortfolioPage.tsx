import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent, Lightbox } from '@/components/ui'
import { Expand } from 'lucide-react'

// Portfolio projects data
const portfolioData = [
  {
    id: '1',
    titleKey: 'projects.veranda_glass_roof_led',
    category: 'veranda',
    image: '/images/portfolio/veranda-glass-roof-led.jpg',
  },
  {
    id: '2',
    titleKey: 'projects.veranda_rooftop_terrace',
    category: 'veranda',
    image: '/images/portfolio/veranda-rooftop-terrace.jpg',
  },
  {
    id: '3',
    titleKey: 'projects.veranda_newbuild',
    category: 'veranda',
    image: '/images/portfolio/veranda-newbuild-installation.jpg',
  },
  {
    id: '4',
    titleKey: 'projects.veranda_showroom',
    category: 'veranda',
    image: '/images/portfolio/veranda-showroom-display.jpg',
  },
  {
    id: '5',
    titleKey: 'projects.veranda_3d_design',
    category: 'veranda',
    image: '/images/portfolio/veranda-3d-design-render.jpg',
  },
  {
    id: '6',
    titleKey: 'projects.poolhouse_modern',
    category: 'poolhouse',
    image: '/images/portfolio/poolhouse-pool-cover.jpg',
  },
  {
    id: '7',
    titleKey: 'projects.veranda_villa_luxury',
    category: 'veranda',
    image: '/images/portfolio/veranda-villa-cream-roof.jpg',
  },
  {
    id: '8',
    titleKey: 'projects.poolhouse_urban',
    category: 'poolhouse',
    image: '/images/portfolio/poolhouse-urban-apartment.jpg',
  },
  {
    id: '9',
    titleKey: 'projects.pergola_veranda_combo',
    category: 'pergola',
    image: '/images/portfolio/pergola-veranda-lamella.jpg',
  },
  {
    id: '10',
    titleKey: 'projects.veranda_compact',
    category: 'veranda',
    image: '/images/portfolio/veranda-compact-townhouse.jpg',
  },
  {
    id: '11',
    titleKey: 'projects.pergola_poolside',
    category: 'pergola',
    image: '/images/portfolio/pergola-lounge-poolside.jpg',
  },
]

export default function PortfolioPage() {
  const { t } = useTranslation(['portfolio', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = portfolioData.map(p => p.image)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioData.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length)
  }

  const currentProject = portfolioData[currentImageIndex]

  return (
    <>
      <Helmet>
        <title>{t('meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={`${t('meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="https://archi.constructionveranda.com/images/portfolio/veranda-villa-cream-roof.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Projects Grid - 4 columns for symmetry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioData.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Card hover>
                  <div className="relative overflow-hidden">
                    <CardImage src={project.image} alt={t(project.titleKey)} />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm capitalize">
                        {t(`categories.${project.category}`)}
                      </span>
                    </div>
                    {/* Expand icon on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <Expand size={24} className="text-primary-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-heading font-semibold group-hover:text-primary-600 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <a
            href={localizedPath('/quote')}
            className="btn btn-primary text-lg"
          >
            {t('common:cta.request_quote')}
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {currentProject && (
        <Lightbox
          images={allImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
          title={t(currentProject.titleKey)}
          subtitle={t(`categories.${currentProject.category}`)}
        />
      )}
    </>
  )
}
