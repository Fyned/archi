import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Card, CardImage, CardContent } from '@/components/ui/Card'

const projects = [
  {
    id: '1',
    title: 'Modern Bioclimatic Pergola',
    location: 'Brussels, Belgium',
    category: 'pergola',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Elegant Glass Veranda',
    location: 'Antwerp, Belgium',
    category: 'veranda',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Luxury Double Carport',
    location: 'Ghent, Belgium',
    category: 'carport',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
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
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={localizedPath(`/projects/${project.id}`)}
              className="group"
            >
              <Card hover>
                <div className="relative overflow-hidden">
                  <CardImage src={project.image} alt={project.title} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {project.location}
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
