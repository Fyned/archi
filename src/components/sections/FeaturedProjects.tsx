import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent } from '@/components/ui/Card'

const projects = [
  {
    id: '1',
    titleKey: 'projects.featured.pergola_brussels.title',
    locationKey: 'projects.featured.pergola_brussels.location',
    category: 'pergola',
    image: '/images/pergola/pergola-terrace-view.webp'
  },
  {
    id: '2',
    titleKey: 'projects.featured.veranda_antwerp.title',
    locationKey: 'projects.featured.veranda_antwerp.location',
    category: 'veranda',
    image: '/images/veranda/veranda-exterior-modern.webp'
  },
  {
    id: '3',
    titleKey: 'projects.featured.carport_ghent.title',
    locationKey: 'projects.featured.carport_ghent.location',
    category: 'carport',
    image: '/images/carport/carport-double.webp'
  },
  {
    id: '4',
    titleKey: 'projects.featured.garage_leuven.title',
    locationKey: 'projects.featured.garage_leuven.location',
    category: 'garage',
    image: '/images/garage/garage-double-modern.webp'
  }
]

export function FeaturedProjects() {
  const { t } = useTranslation('home')
  const { localizedPath } = useLocalizedPath()

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('projects.subtitle')}
            </p>
          </div>
          <a
            href={localizedPath('/projects')}
            className="inline-flex items-center text-primary-600 font-medium hover:gap-2 transition-all"
          >
            {t('projects.view_all')}
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={localizedPath(`/projects/${project.id}`)}
              className="group"
            >
              <Card hover>
                <div className="relative overflow-hidden">
                  <CardImage src={project.image} alt={t(project.titleKey)} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {t(project.locationKey)}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
