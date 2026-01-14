import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { fadeInUp, staggerContainer } from '@/components/ui'
import { ArrowLeft, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react'

// Project data with new image structure
const projectsData = [
  {
    id: '1',
    titleKey: 'projects.veranda_led',
    category: 'veranda',
    locationKey: 'projects.location_brussels',
    image: '/images/veranda/veranda-interior-living.jpg',
    gallery: ['/images/veranda/veranda-interior-living.jpg', '/images/veranda/veranda-interior-dining.jpg', '/images/veranda/veranda-sliding-doors.jpg'],
    year: '2024',
    features: ['LED integrated lighting', 'Motorized louvers', 'Glass sliding panels', 'Remote control system']
  },
  {
    id: '2',
    titleKey: 'projects.veranda_rooftop',
    category: 'veranda',
    locationKey: 'projects.location_antwerp',
    image: '/images/veranda/veranda-pool-house.jpg',
    gallery: ['/images/veranda/veranda-pool-house.jpg', '/images/veranda/veranda-exterior-modern.jpg', '/images/veranda/veranda-garden-view.jpg'],
    year: '2024',
    features: ['Rooftop installation', 'Wind-resistant design', 'Rain sensors', 'Integrated gutters']
  },
  {
    id: '3',
    titleKey: 'projects.veranda_garden',
    category: 'veranda',
    locationKey: 'projects.location_ghent',
    image: '/images/veranda/veranda-garden-view.jpg',
    gallery: ['/images/veranda/veranda-garden-view.jpg', '/images/veranda/veranda-exterior-classic.jpg', '/images/veranda/veranda-winter-cozy.jpg'],
    year: '2024',
    features: ['Garden integration', 'Natural ventilation', 'Thermal break profiles', 'Double glazing']
  },
  {
    id: '4',
    titleKey: 'projects.pergola_showroom',
    category: 'pergola',
    locationKey: 'projects.location_bruges',
    image: '/images/pergola/pergola-terrace-view.jpg',
    gallery: ['/images/pergola/pergola-terrace-view.jpg', '/images/pergola/pergola-louvers-open.jpg', '/images/pergola/pergola-pool-area.jpg'],
    year: '2024',
    features: ['Showroom display', 'Bioclimatic system', 'LED lighting', 'Weather sensors']
  },
  {
    id: '5',
    titleKey: 'projects.pergola_deck',
    category: 'pergola',
    locationKey: 'projects.location_leuven',
    image: '/images/pergola/pergola-freestanding.jpg',
    gallery: ['/images/pergola/pergola-freestanding.jpg', '/images/pergola/pergola-attached-house.jpg', '/images/pergola/pergola-winter-rain.jpg'],
    year: '2023',
    features: ['Deck mounted', 'Retractable louvers', 'Integrated heating', 'Side screens']
  },
  {
    id: '6',
    titleKey: 'projects.pergola_modern',
    category: 'pergola',
    locationKey: 'projects.location_liege',
    image: '/images/pergola/pergola-attached-house.jpg',
    gallery: ['/images/pergola/pergola-attached-house.jpg', '/images/pergola/pergola-night-led.jpg', '/images/pergola/pergola-louvers-closed.jpg'],
    year: '2023',
    features: ['Modern design', 'Minimalist frame', 'Silent motors', 'App control']
  },
  {
    id: '7',
    titleKey: 'projects.veranda_glass',
    category: 'veranda',
    locationKey: 'projects.location_mechelen',
    image: '/images/veranda/veranda-glass-roof-detail.jpg',
    gallery: ['/images/veranda/veranda-glass-roof-detail.jpg', '/images/veranda/veranda-sliding-doors.jpg', '/images/veranda/veranda-interior-living.jpg'],
    year: '2023',
    features: ['Full glass walls', 'Frameless design', 'Underfloor heating', 'Solar control glass']
  },
  {
    id: '8',
    titleKey: 'projects.veranda_showroom',
    category: 'veranda',
    locationKey: 'projects.location_hasselt',
    image: '/images/veranda/veranda-exterior-classic.jpg',
    gallery: ['/images/veranda/veranda-exterior-classic.jpg', '/images/veranda/veranda-exterior-modern.jpg', '/images/veranda/veranda-hero.jpg'],
    year: '2023',
    features: ['Commercial showroom', 'Extra wide span', 'Acoustic insulation', 'Fire-rated glass']
  },
  {
    id: '9',
    titleKey: 'projects.window_system',
    category: 'window',
    locationKey: 'projects.location_kortrijk',
    image: '/images/window/window-exterior-facade.jpg',
    gallery: ['/images/window/window-exterior-facade.jpg', '/images/window/window-floor-ceiling.jpg', '/images/window/window-corner.jpg'],
    year: '2024',
    features: ['Triple glazing', 'Tilt and turn', 'Security locks', 'Noise reduction']
  },
]

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { t } = useTranslation(['gallery', 'common'])
  const { localizedPath, currentLocale } = useLocalizedPath()

  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Project not found
          </h1>
          <a
            href={localizedPath('/projects')}
            className="btn btn-primary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </a>
        </div>
      </div>
    )
  }

  // Get related projects (same category, different id)
  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{t(`gallery:${project.titleKey}`)} | Archi Construction & Veranda</title>
        <meta name="description" content={`${t(`gallery:${project.titleKey}`)} - ${t(`gallery:${project.locationKey}`)}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={t(`gallery:${project.titleKey}`)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        <div className="container-custom relative z-10 pb-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.a
              href={localizedPath('/projects')}
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              variants={fadeInUp}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {t('common:nav.projects')}
            </motion.a>
            <motion.span
              className="inline-block px-4 py-1 bg-primary-500 text-white rounded-full text-sm font-medium mb-4"
              variants={fadeInUp}
            >
              {t(`common:services_menu.${project.category}`)}
            </motion.span>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
              variants={fadeInUp}
            >
              {t(`gallery:${project.titleKey}`)}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-6 text-white/80"
              variants={fadeInUp}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {t(`gallery:${project.locationKey}`)}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {project.year}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                {currentLocale === 'nl' ? 'Projectdetails' :
                 currentLocale === 'fr' ? 'Details du projet' :
                 currentLocale === 'de' ? 'Projektdetails' :
                 currentLocale === 'tr' ? 'Proje Detayları' : 'Project Details'}
              </h2>

              {/* Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <img
                      src={img}
                      alt={`${t(`gallery:${project.titleKey}`)} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                {currentLocale === 'nl' ? 'Kenmerken' :
                 currentLocale === 'fr' ? 'Caractéristiques' :
                 currentLocale === 'de' ? 'Merkmale' :
                 currentLocale === 'tr' ? 'Özellikler' : 'Features'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">
                    {currentLocale === 'nl' ? 'Interesse in dit project?' :
                     currentLocale === 'fr' ? 'Intéressé par ce projet?' :
                     currentLocale === 'de' ? 'Interesse an diesem Projekt?' :
                     currentLocale === 'tr' ? 'Bu projeyle ilgileniyor musunuz?' : 'Interested in this project?'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {currentLocale === 'nl' ? 'Vraag een gratis offerte aan en wij komen vrijblijvend langs.' :
                     currentLocale === 'fr' ? 'Demandez un devis gratuit et nous passerons sans engagement.' :
                     currentLocale === 'de' ? 'Fordern Sie ein kostenloses Angebot an und wir besuchen Sie unverbindlich.' :
                     currentLocale === 'tr' ? 'Ücretsiz teklif isteyin, size bağlayıcı olmadan gelelim.' : 'Request a free quote and we will visit you without obligation.'}
                  </p>
                  <a
                    href={localizedPath('/quote')}
                    className="btn btn-primary w-full justify-center"
                  >
                    {t('common:cta.request_quote')}
                  </a>
                </div>

                <div className="bg-primary-50 rounded-2xl p-6">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                    {currentLocale === 'nl' ? 'Vragen?' :
                     currentLocale === 'fr' ? 'Questions?' :
                     currentLocale === 'de' ? 'Fragen?' :
                     currentLocale === 'tr' ? 'Sorularınız mı var?' : 'Questions?'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLocale === 'nl' ? 'Neem contact met ons op' :
                     currentLocale === 'fr' ? 'Contactez-nous' :
                     currentLocale === 'de' ? 'Kontaktieren Sie uns' :
                     currentLocale === 'tr' ? 'Bize ulaşın' : 'Contact us'}
                  </p>
                  <a
                    href={localizedPath('/contact')}
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center gap-2"
                  >
                    {t('common:nav.contact')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
              {currentLocale === 'nl' ? 'Vergelijkbare projecten' :
               currentLocale === 'fr' ? 'Projets similaires' :
               currentLocale === 'de' ? 'Ähnliche Projekte' :
               currentLocale === 'tr' ? 'Benzer Projeler' : 'Similar Projects'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <a
                  key={relProject.id}
                  href={localizedPath(`/projects/${relProject.id}`)}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relProject.image}
                        alt={t(`gallery:${relProject.titleKey}`)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {t(`gallery:${relProject.titleKey}`)}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {t(`gallery:${relProject.locationKey}`)}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
