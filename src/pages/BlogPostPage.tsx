import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Calendar, Clock, ArrowLeft, Share2, ChevronRight } from 'lucide-react'

// Blog post data with images
const blogPostsData: Record<string, {
  slug: string
  image: string
  heroImage: string
  category: string
  date: string
  readTime: number
  gallery: string[]
  relatedPosts: string[]
}> = {
  'pergola-bioclimatique-guide-complet': {
    slug: 'pergola-bioclimatique-guide-complet',
    image: '/images/pergola/pergola-hero.jpg',
    heroImage: '/images/pergola/pergola-terrace-view.jpg',
    category: 'pergola',
    date: '2026-01-10',
    readTime: 8,
    gallery: [
      '/images/pergola/pergola-louvers-open.jpg',
      '/images/pergola/pergola-louvers-closed.jpg',
      '/images/pergola/pergola-night-led.jpg',
      '/images/pergola/pergola-pool-area.jpg',
    ],
    relatedPosts: ['entretien-pergola-aluminium', 'tendances-outdoor-2026'],
  },
  'veranda-aluminium-vs-pvc': {
    slug: 'veranda-aluminium-vs-pvc',
    image: '/images/veranda/veranda-hero.jpg',
    heroImage: '/images/veranda/veranda-exterior-modern.jpg',
    category: 'veranda',
    date: '2026-01-08',
    readTime: 6,
    gallery: [
      '/images/veranda/veranda-interior-living.jpg',
      '/images/veranda/veranda-glass-roof-detail.jpg',
      '/images/veranda/veranda-sliding-doors.jpg',
      '/images/veranda/veranda-winter-cozy.jpg',
    ],
    relatedPosts: ['permis-urbanisme-belgique', 'tendances-outdoor-2026'],
  },
  'carport-solaire-belgique': {
    slug: 'carport-solaire-belgique',
    image: '/images/carport/carport-hero.jpg',
    heroImage: '/images/carport/carport-solar-panels.jpg',
    category: 'carport',
    date: '2026-01-05',
    readTime: 5,
    gallery: [
      '/images/carport/carport-double.jpg',
      '/images/carport/carport-led-lighting.jpg',
      '/images/carport/carport-cantilever.jpg',
      '/images/carport/carport-integrated-storage.jpg',
    ],
    relatedPosts: ['tendances-outdoor-2026', 'permis-urbanisme-belgique'],
  },
  'entretien-pergola-aluminium': {
    slug: 'entretien-pergola-aluminium',
    image: '/images/pergola/pergola-night-led.jpg',
    heroImage: '/images/pergola/pergola-attached-house.jpg',
    category: 'pergola',
    date: '2026-01-03',
    readTime: 4,
    gallery: [
      '/images/pergola/pergola-detail-motor.jpg',
      '/images/pergola/pergola-freestanding.jpg',
      '/images/pergola/pergola-winter-rain.jpg',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'tendances-outdoor-2026'],
  },
  'permis-urbanisme-belgique': {
    slug: 'permis-urbanisme-belgique',
    image: '/images/veranda/veranda-garden-view.jpg',
    heroImage: '/images/veranda/veranda-exterior-classic.jpg',
    category: 'general',
    date: '2025-12-28',
    readTime: 7,
    gallery: [
      '/images/veranda/veranda-pool-house.jpg',
      '/images/carport/carport-single-modern.jpg',
      '/images/pergola/pergola-pool-area.jpg',
    ],
    relatedPosts: ['veranda-aluminium-vs-pvc', 'carport-solaire-belgique'],
  },
  'tendances-outdoor-2026': {
    slug: 'tendances-outdoor-2026',
    image: '/images/general/hero-main.jpg',
    heroImage: '/images/pergola/pergola-terrace-view.jpg',
    category: 'general',
    date: '2025-12-20',
    readTime: 6,
    gallery: [
      '/images/veranda/veranda-interior-dining.jpg',
      '/images/pergola/pergola-night-led.jpg',
      '/images/carport/carport-led-lighting.jpg',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'veranda-aluminium-vs-pvc'],
  },
}

const categoryColors: Record<string, string> = {
  pergola: 'bg-green-100 text-green-800',
  veranda: 'bg-blue-100 text-blue-800',
  carport: 'bg-orange-100 text-orange-800',
  general: 'bg-gray-100 text-gray-800',
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, locale } = useTranslation(['blog', 'common'])
  const { localizedPath } = useLocalizedPath()

  // Check if post exists
  const post = slug ? blogPostsData[slug] : null

  if (!post) {
    return <Navigate to={localizedPath('/blog')} replace />
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(
      locale === 'nl' ? 'nl-BE' : locale === 'fr' ? 'fr-BE' : locale === 'de' ? 'de-DE' : locale === 'tr' ? 'tr-TR' : 'en-GB',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    )
  }

  const shareUrl = `https://archi.constructionveranda.com/${locale}/blog/${slug}`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t(`blog:posts.${slug}.title`),
          url: shareUrl,
        })
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(shareUrl)
    }
  }

  // Get content sections
  const contentSections = t(`blog:posts.${slug}.content`, { returnObjects: true }) as {
    intro: string
    sections: Array<{
      title: string
      content: string
      list?: string[]
    }>
    conclusion: string
  }

  return (
    <>
      <Helmet>
        <title>{t(`blog:posts.${slug}.title`)} | Archi Construction & Veranda</title>
        <meta name="description" content={t(`blog:posts.${slug}.excerpt`)} />
        <meta property="og:title" content={t(`blog:posts.${slug}.title`)} />
        <meta property="og:description" content={t(`blog:posts.${slug}.excerpt`)} />
        <meta property="og:image" content={`https://archi.constructionveranda.com${post.heroImage}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <link rel="canonical" href={shareUrl} />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t(`blog:posts.${slug}.title`),
            "description": t(`blog:posts.${slug}.excerpt`),
            "image": `https://archi.constructionveranda.com${post.heroImage}`,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "Archi Construction & Veranda"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Archi Construction & Veranda",
              "logo": {
                "@type": "ImageObject",
                "url": "https://archi.constructionveranda.com/logo-horizontal.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to={localizedPath('/')} className="hover:text-primary-600">
              {t('common:nav.home')}
            </Link>
            <ChevronRight size={14} />
            <Link to={localizedPath('/blog')} className="hover:text-primary-600">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 truncate max-w-[200px]">
              {t(`blog:posts.${slug}.title`)}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={post.heroImage}
          alt={t(`blog:posts.${slug}.title`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container-custom">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${categoryColors[post.category]}`}>
              {t(`blog:categories.${post.category}`)}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white max-w-4xl">
              {t(`blog:posts.${slug}.title`)}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={18} />
                <span>{post.readTime} {t('blog:read_time')}</span>
              </div>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
              >
                <Share2 size={18} />
                <span>{t('blog:share')}</span>
              </button>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                {contentSections?.intro || t(`blog:posts.${slug}.excerpt`)}
              </p>
            </div>

            {/* Content Sections */}
            {contentSections?.sections?.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-2 mt-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Insert gallery image after every 2 sections */}
                {index % 2 === 1 && post.gallery[Math.floor(index / 2)] && (
                  <div className="mt-8 rounded-xl overflow-hidden">
                    <img
                      src={post.gallery[Math.floor(index / 2)]}
                      alt={`${t(`blog:posts.${slug}.title`)} - ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Gallery Section */}
            <div className="my-12">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">
                {t('blog:gallery_title')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {post.gallery.map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`${t(`blog:posts.${slug}.title`)} - ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            {contentSections?.conclusion && (
              <div className="bg-primary-50 rounded-2xl p-8 mb-12">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  {t('blog:conclusion_title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {contentSections.conclusion}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white mb-12">
              <h3 className="text-2xl font-heading font-bold mb-4">
                {t('blog:cta.title')}
              </h3>
              <p className="text-primary-100 mb-6">
                {t('blog:cta.description')}
              </p>
              <Link
                to={localizedPath('/quote')}
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                {t('common:cta.get_quote')}
              </Link>
            </div>

            {/* Related Posts */}
            {post.relatedPosts.length > 0 && (
              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                  {t('blog:related_posts')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedSlug) => {
                    const relatedPost = blogPostsData[relatedSlug]
                    if (!relatedPost) return null
                    return (
                      <Link
                        key={relatedSlug}
                        to={localizedPath(`/blog/${relatedSlug}`)}
                        className="group flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.image}
                            alt={t(`blog:posts.${relatedSlug}.title`)}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className={`inline-block w-fit px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${categoryColors[relatedPost.category]}`}>
                            {t(`blog:categories.${relatedPost.category}`)}
                          </span>
                          <h4 className="font-heading font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {t(`blog:posts.${relatedSlug}.title`)}
                          </h4>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to={localizedPath('/blog')}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <ArrowLeft size={18} />
                {t('blog:back_to_blog')}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
