import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent, Lightbox } from '@/components/ui'
import { Expand, MapPin } from 'lucide-react'
import clsx from 'clsx'

// Projects data with new image structure
const projectsData = [
  {
    id: '1',
    titleKey: 'projects.veranda_led',
    category: 'veranda',
    locationKey: 'projects.location_brussels',
    image: '/images/veranda/veranda-interior-living.jpg',
  },
  {
    id: '2',
    titleKey: 'projects.veranda_rooftop',
    category: 'veranda',
    locationKey: 'projects.location_antwerp',
    image: '/images/veranda/veranda-pool-house.jpg',
  },
  {
    id: '3',
    titleKey: 'projects.veranda_garden',
    category: 'veranda',
    locationKey: 'projects.location_ghent',
    image: '/images/veranda/veranda-garden-view.jpg',
  },
  {
    id: '4',
    titleKey: 'projects.pergola_showroom',
    category: 'pergola',
    locationKey: 'projects.location_bruges',
    image: '/images/pergola/pergola-terrace-view.jpg',
  },
  {
    id: '5',
    titleKey: 'projects.pergola_deck',
    category: 'pergola',
    locationKey: 'projects.location_leuven',
    image: '/images/pergola/pergola-freestanding.jpg',
  },
  {
    id: '6',
    titleKey: 'projects.pergola_modern',
    category: 'pergola',
    locationKey: 'projects.location_liege',
    image: '/images/pergola/pergola-attached-house.jpg',
  },
  {
    id: '7',
    titleKey: 'projects.veranda_glass',
    category: 'veranda',
    locationKey: 'projects.location_mechelen',
    image: '/images/veranda/veranda-glass-roof-detail.jpg',
  },
  {
    id: '8',
    titleKey: 'projects.veranda_showroom',
    category: 'veranda',
    locationKey: 'projects.location_hasselt',
    image: '/images/veranda/veranda-exterior-classic.jpg',
  },
  {
    id: '9',
    titleKey: 'projects.pergola_led',
    category: 'pergola',
    locationKey: 'projects.location_kortrijk',
    image: '/images/pergola/pergola-night-led.jpg',
  },
  {
    id: '10',
    titleKey: 'projects.veranda_interior',
    category: 'veranda',
    locationKey: 'projects.location_brussels',
    image: '/images/veranda/veranda-interior-dining.jpg',
  },
  {
    id: '11',
    titleKey: 'projects.garage_modern',
    category: 'garage',
    locationKey: 'projects.location_antwerp',
    image: '/images/garage/garage-double-modern.jpg',
  },
  {
    id: '12',
    titleKey: 'projects.garage_classic',
    category: 'garage',
    locationKey: 'projects.location_ghent',
    image: '/images/garage/garage-sectional-white.jpg',
  },
]

const filters = ['all', 'pergola', 'veranda', 'carport', 'window', 'shutter', 'garage']

export default function ProjectsPage() {
  const { t } = useTranslation(['gallery', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter)

  const allImages = filteredProjects.map(p => p.image)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const currentProject = filteredProjects[currentImageIndex]

  return (
    <>
      <Helmet>
        <title>{t('title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  'px-6 py-2 rounded-full font-medium transition-all',
                  activeFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {t(`filters.${filter}`)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Card hover>
                    <div className="relative overflow-hidden">
                      <CardImage src={project.image} alt={t(`gallery:${project.titleKey}`)} />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-sm">
                          {t(`common:services_menu.${project.category}`)}
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
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {t(`gallery:${project.titleKey}`)}
                      </h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <MapPin size={14} />
                        {t(`gallery:${project.locationKey}`)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-heading font-semibold mb-2">
                {t('empty.title')}
              </h3>
              <p className="text-gray-600">
                {t('empty.description')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {t('gallery:cta.title')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('gallery:cta.description')}
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
          title={t(`gallery:${currentProject.titleKey}`)}
          subtitle={`${t(`common:services_menu.${currentProject.category}`)} - ${t(`gallery:${currentProject.locationKey}`)}`}
        />
      )}
    </>
  )
}
