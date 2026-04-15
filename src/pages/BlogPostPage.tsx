import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, ChevronRight } from 'lucide-react'

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
  serviceLink?: string
}> = {
  'pergola-bioclimatique-guide-complet': {
    slug: 'pergola-bioclimatique-guide-complet',
    image: '/images/pergola/pergola-hero.webp',
    heroImage: '/images/pergola/pergola-terrace-view.webp',
    category: 'pergola',
    date: '2026-04-06',
    readTime: 8,
    gallery: [
      '/images/pergola/pergola-louvers-open.webp',
      '/images/pergola/pergola-louvers-closed.webp',
      '/images/pergola/pergola-night-led.webp',
      '/images/pergola/pergola-pool-area.webp',
    ],
    relatedPosts: ['entretien-pergola-aluminium', 'tendances-outdoor-2026'],
    serviceLink: '/services/pergola',
  },
  'veranda-aluminium-vs-pvc': {
    slug: 'veranda-aluminium-vs-pvc',
    image: '/images/veranda/veranda-hero.webp',
    heroImage: '/images/veranda/veranda-exterior-modern.webp',
    category: 'veranda',
    date: '2026-04-06',
    readTime: 6,
    gallery: [
      '/images/veranda/veranda-interior-living.webp',
      '/images/veranda/veranda-glass-roof-detail.webp',
      '/images/veranda/veranda-sliding-doors.webp',
      '/images/veranda/veranda-winter-cozy.webp',
    ],
    relatedPosts: ['permis-urbanisme-belgique', 'tendances-outdoor-2026'],
    serviceLink: '/services/veranda',
  },
  'carport-solaire-belgique': {
    slug: 'carport-solaire-belgique',
    image: '/images/carport/carport-hero.webp',
    heroImage: '/images/carport/carport-solar-panels.webp',
    category: 'carport',
    date: '2026-04-06',
    readTime: 5,
    gallery: [
      '/images/carport/carport-double.webp',
      '/images/carport/carport-led-lighting.webp',
      '/images/carport/carport-cantilever.webp',
      '/images/carport/carport-integrated-storage.webp',
    ],
    relatedPosts: ['tendances-outdoor-2026', 'permis-urbanisme-belgique'],
    serviceLink: '/services/carport',
  },
  'entretien-pergola-aluminium': {
    slug: 'entretien-pergola-aluminium',
    image: '/images/pergola/pergola-night-led.webp',
    heroImage: '/images/pergola/pergola-attached-house.webp',
    category: 'pergola',
    date: '2026-04-06',
    readTime: 4,
    gallery: [
      '/images/pergola/pergola-detail-motor.webp',
      '/images/pergola/pergola-freestanding.webp',
      '/images/pergola/pergola-winter-rain.webp',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'tendances-outdoor-2026'],
    serviceLink: '/services/pergola',
  },
  'permis-urbanisme-belgique': {
    slug: 'permis-urbanisme-belgique',
    image: '/images/veranda/veranda-garden-view.webp',
    heroImage: '/images/veranda/veranda-exterior-classic.webp',
    category: 'general',
    date: '2026-04-06',
    readTime: 7,
    gallery: [
      '/images/veranda/veranda-pool-house.webp',
      '/images/carport/carport-single-modern.webp',
      '/images/pergola/pergola-pool-area.webp',
    ],
    relatedPosts: ['veranda-aluminium-vs-pvc', 'carport-solaire-belgique'],
  },
  'tendances-outdoor-2026': {
    slug: 'tendances-outdoor-2026',
    image: '/images/general/hero-main.webp',
    heroImage: '/images/pergola/pergola-terrace-view.webp',
    category: 'general',
    date: '2026-04-06',
    readTime: 6,
    gallery: [
      '/images/veranda/veranda-interior-dining.webp',
      '/images/pergola/pergola-night-led.webp',
      '/images/carport/carport-led-lighting.webp',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'veranda-aluminium-vs-pvc'],
  },
  'pergola-bioclimatique-charleroi': {
    slug: 'pergola-bioclimatique-charleroi',
    image: '/images/pergola/pergola-attached-house.webp',
    heroImage: '/images/pergola/pergola-louvers-open.webp',
    category: 'pergola',
    date: '2026-03-18',
    readTime: 7,
    gallery: [
      '/images/pergola/pergola-freestanding.webp',
      '/images/pergola/pergola-pool-area.webp',
      '/images/pergola/pergola-terrace-view.webp',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'pergola-prix-m2-belgique-2026'],
    serviceLink: '/services/pergola',
  },
  'veranda-aluminium-bruxelles': {
    slug: 'veranda-aluminium-bruxelles',
    image: '/images/veranda/veranda-exterior-modern.webp',
    heroImage: '/images/veranda/veranda-interior-living.webp',
    category: 'veranda',
    date: '2026-03-18',
    readTime: 6,
    gallery: [
      '/images/veranda/veranda-glass-roof-detail.webp',
      '/images/veranda/veranda-sliding-doors.webp',
      '/images/veranda/veranda-garden-view.webp',
    ],
    relatedPosts: ['veranda-aluminium-vs-pvc', 'permis-urbanisme-belgique'],
    serviceLink: '/services/veranda',
  },
  'carport-aluminium-namur': {
    slug: 'carport-aluminium-namur',
    image: '/images/carport/carport-single-modern.webp',
    heroImage: '/images/carport/carport-double.webp',
    category: 'carport',
    date: '2026-03-18',
    readTime: 5,
    gallery: [
      '/images/carport/carport-solar-panels.webp',
      '/images/carport/carport-led-lighting.webp',
      '/images/carport/carport-snow-protection.webp',
    ],
    relatedPosts: ['carport-solaire-belgique', 'permis-urbanisme-belgique'],
    serviceLink: '/services/carport',
  },
  'pergola-prix-m2-belgique-2026': {
    slug: 'pergola-prix-m2-belgique-2026',
    image: '/images/pergola/pergola-terrace-view.webp',
    heroImage: '/images/pergola/pergola-hero.webp',
    category: 'pergola',
    date: '2026-03-18',
    readTime: 8,
    gallery: [
      '/images/pergola/pergola-louvers-closed.webp',
      '/images/pergola/pergola-night-led.webp',
      '/images/pergola/pergola-winter-rain.webp',
    ],
    relatedPosts: ['pergola-bioclimatique-guide-complet', 'pergola-bioclimatique-charleroi'],
    serviceLink: '/services/pergola',
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
  const { t, locale } = useTranslation(['blog', 'common', 'services'])
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

  const shareUrl = `https://archi.constructionveranda.com/${locale}/blog/${slug}/`

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
        <meta property="article:section" content={post.category} />
        <meta name="twitter:title" content={t(`blog:posts.${slug}.title`)} />
        <meta name="twitter:description" content={t(`blog:posts.${slug}.excerpt`)} />
        <meta name="twitter:image" content={`https://archi.constructionveranda.com${post.heroImage}`} />
        <link rel="canonical" href={shareUrl} />

        {/* BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": shareUrl
            },
            "headline": t(`blog:posts.${slug}.title`),
            "description": t(`blog:posts.${slug}.excerpt`),
            "image": {
              "@type": "ImageObject",
              "url": `https://archi.constructionveranda.com${post.heroImage}`,
              "width": 1920,
              "height": 1080
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "articleSection": post.category,
            "author": { "@id": "https://archi.constructionveranda.com/#business" },
            "publisher": { "@id": "https://archi.constructionveranda.com/#business" },
            "inLanguage": locale
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": t('common:nav.home'), "item": `https://archi.constructionveranda.com/${locale}/` },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": `https://archi.constructionveranda.com/${locale}/blog/` },
              { "@type": "ListItem", "position": 3, "name": t(`blog:posts.${slug}.title`), "item": shareUrl }
            ]
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

            {/* Service Cross-Link */}
            {post.serviceLink && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t('blog:service_link_label', 'Découvrez notre service')}</p>
                  <p className="text-lg font-heading font-semibold text-gray-900">
                    {t(`services:${post.category}.title`)}
                  </p>
                </div>
                <Link
                  to={localizedPath(post.serviceLink)}
                  className="btn btn-primary text-sm px-6 py-2 flex items-center gap-2"
                >
                  {t('common:cta.learn_more', 'En savoir plus')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}

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
