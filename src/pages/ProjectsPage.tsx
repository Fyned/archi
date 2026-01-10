import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent } from '@/components/ui'
import clsx from 'clsx'

// Real customer projects
const projectsData = [
  {
    id: '1',
    titleKey: 'projects.veranda_led',
    category: 'veranda',
    locationKey: 'projects.location_brussels',
    image: '/projects/project-veranda-1.jpg',
  },
  {
    id: '2',
    titleKey: 'projects.veranda_rooftop',
    category: 'veranda',
    locationKey: 'projects.location_antwerp',
    image: '/projects/project-veranda-2.jpg',
  },
  {
    id: '3',
    titleKey: 'projects.veranda_garden',
    category: 'veranda',
    locationKey: 'projects.location_ghent',
    image: '/projects/project-veranda-3.jpg',
  },
  {
    id: '4',
    titleKey: 'projects.pergola_showroom',
    category: 'pergola',
    locationKey: 'projects.location_bruges',
    image: '/projects/project-pergola-1.jpg',
  },
  {
    id: '5',
    titleKey: 'projects.pergola_deck',
    category: 'pergola',
    locationKey: 'projects.location_leuven',
    image: '/projects/project-pergola-2.jpg',
  },
  {
    id: '6',
    titleKey: 'projects.pergola_modern',
    category: 'pergola',
    locationKey: 'projects.location_liege',
    image: '/projects/project-pergola-3.jpg',
  },
  {
    id: '7',
    titleKey: 'projects.veranda_glass',
    category: 'veranda',
    locationKey: 'projects.location_mechelen',
    image: '/projects/project-veranda-4.jpg',
  },
  {
    id: '8',
    titleKey: 'projects.veranda_showroom',
    category: 'veranda',
    locationKey: 'projects.location_hasselt',
    image: '/projects/project-veranda-5.jpg',
  },
  {
    id: '9',
    titleKey: 'projects.window_system',
    category: 'window',
    locationKey: 'projects.location_kortrijk',
    image: '/projects/project-window-1.jpg',
  },
]

const filters = ['all', 'pergola', 'veranda', 'carport', 'window', 'shutter', 'garage']

export default function ProjectsPage() {
  const { t } = useTranslation(['gallery', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter)

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
              {filteredProjects.map((project) => (
                <a
                  key={project.id}
                  href={localizedPath(`/projects/${project.id}`)}
                  className="group"
                >
                  <Card hover>
                    <div className="relative overflow-hidden">
                      <CardImage src={project.image} alt={t(`gallery:${project.titleKey}`)} />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                          {t(`common:services_menu.${project.category}`)}
                        </span>
                      </div>
                    </div>
                    <CardContent>
                      <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {t(`gallery:${project.titleKey}`)}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {t(`gallery:${project.locationKey}`)}
                      </p>
                    </CardContent>
                  </Card>
                </a>
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
    </>
  )
}
