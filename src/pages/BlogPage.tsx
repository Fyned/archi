import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

// Blog post data - SEO optimized content
const blogPosts = [
  {
    id: 'pergola-bioclimatique-guide-complet',
    slug: 'pergola-bioclimatique-guide-complet',
    image: '/images/pergola/pergola-hero.jpg',
    category: 'pergola',
    date: '2026-01-10',
    readTime: 8,
  },
  {
    id: 'veranda-aluminium-vs-pvc',
    slug: 'veranda-aluminium-vs-pvc',
    image: '/images/veranda/veranda-hero.jpg',
    category: 'veranda',
    date: '2026-01-08',
    readTime: 6,
  },
  {
    id: 'carport-solaire-belgique',
    slug: 'carport-solaire-belgique',
    image: '/images/carport/carport-hero.jpg',
    category: 'carport',
    date: '2026-01-05',
    readTime: 5,
  },
  {
    id: 'entretien-pergola-aluminium',
    slug: 'entretien-pergola-aluminium',
    image: '/images/pergola/pergola-night-led.jpg',
    category: 'pergola',
    date: '2026-01-03',
    readTime: 4,
  },
  {
    id: 'permis-urbanisme-belgique',
    slug: 'permis-urbanisme-belgique',
    image: '/images/veranda/veranda-garden-view.jpg',
    category: 'general',
    date: '2025-12-28',
    readTime: 7,
  },
  {
    id: 'tendances-outdoor-2026',
    slug: 'tendances-outdoor-2026',
    image: '/images/general/hero-main.jpg',
    category: 'general',
    date: '2025-12-20',
    readTime: 6,
  },
]

const categoryColors: Record<string, string> = {
  pergola: 'bg-green-100 text-green-800',
  veranda: 'bg-blue-100 text-blue-800',
  carport: 'bg-orange-100 text-orange-800',
  general: 'bg-gray-100 text-gray-800',
}

export default function BlogPage() {
  const { t, locale } = useTranslation(['blog', 'common'])
  const { localizedPath } = useLocalizedPath()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'nl' ? 'nl-BE' : locale === 'fr' ? 'fr-BE' : locale === 'de' ? 'de-DE' : locale === 'tr' ? 'tr-TR' : 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <>
      <Helmet>
        <title>{t('blog:meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('blog:meta.description')} />
        <meta property="og:title" content={`${t('blog:meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('blog:meta.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://archi.constructionveranda.com/${locale}/blog`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('blog:hero.title')}
            </h1>
            <p className="text-xl text-gray-200">
              {t('blog:hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Featured Post */}
          <div className="mb-12">
            <Link
              to={localizedPath(`/blog/${blogPosts[0].slug}`)}
              className="block group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={t(`blog:posts.${blogPosts[0].id}.title`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[blogPosts[0].category]}`}>
                        {t(`blog:categories.${blogPosts[0].category}`)}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(blogPosts[0].date)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-primary-600 transition-colors">
                      {t(`blog:posts.${blogPosts[0].id}.title`)}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {t(`blog:posts.${blogPosts[0].id}.excerpt`)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {blogPosts[0].readTime} {t('blog:read_time')}
                      </span>
                      <span className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        {t('blog:read_more')}
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={localizedPath(`/blog/${post.slug}`)}
                className="block group"
              >
                <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={t(`blog:posts.${post.id}.title`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                        {t(`blog:categories.${post.category}`)}
                      </span>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {t(`blog:posts.${post.id}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {t(`blog:posts.${post.id}.excerpt`)}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-gray-400 text-xs">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t('blog:read_more')}
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            {t('blog:newsletter.title')}
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('blog:newsletter.description')}
          </p>
          <Link
            to={localizedPath('/contact')}
            className="btn bg-white text-primary-600 hover:bg-primary-50"
          >
            {t('blog:newsletter.cta')}
          </Link>
        </div>
      </section>
    </>
  )
}
