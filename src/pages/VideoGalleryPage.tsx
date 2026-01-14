import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { Play, X, ArrowRight } from 'lucide-react'

interface Video {
  id: string
  titleKey: string
  thumbnail: string
  src: string
  category: 'showroom' | 'project'
}

const videos: Video[] = [
  {
    id: '1',
    titleKey: 'videos.showroom_tour',
    thumbnail: '/images/veranda/veranda-hero.jpg',
    src: '/videos/showroom-tour.mp4',
    category: 'showroom',
  },
  {
    id: '2',
    titleKey: 'videos.product_showcase',
    thumbnail: '/images/pergola/pergola-hero.jpg',
    src: '/videos/product-showcase.mp4',
    category: 'showroom',
  },
  {
    id: '3',
    titleKey: 'videos.construction_demo',
    thumbnail: '/images/pergola/pergola-louvers-open.jpg',
    src: '/videos/construction-demo.mp4',
    category: 'showroom',
  },
  {
    id: '4',
    titleKey: 'videos.project_video',
    thumbnail: '/images/veranda/veranda-exterior-modern.jpg',
    src: '/videos/project-video.mp4',
    category: 'project',
  },
]

export default function VideoGalleryPage() {
  const { t } = useTranslation(['videos', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)
  const [filter, setFilter] = useState<'all' | 'showroom' | 'project'>('all')

  const filteredVideos = filter === 'all'
    ? videos
    : videos.filter(v => v.category === filter)

  return (
    <>
      <Helmet>
        <title>{t('videos:meta.title')} | Archi Construction & Veranda</title>
        <meta name="description" content={t('videos:meta.description')} />
        <meta property="og:title" content={`${t('videos:meta.title')} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t('videos:meta.description')} />
        <meta property="og:image" content="https://archi.constructionveranda.com/images/veranda/veranda-hero.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('videos:title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('videos:subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('videos:filters.all')}
            </button>
            <button
              onClick={() => setFilter('showroom')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'showroom'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('videos:filters.showroom')}
            </button>
            <button
              onClick={() => setFilter('project')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'project'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {t('videos:filters.projects')}
            </button>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={t(video.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={28} className="text-primary-600 ml-1" fill="currentColor" />
                  </div>
                  <h3 className="mt-4 text-xl font-heading font-bold text-white text-center px-4">
                    {t(video.titleKey)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('videos:cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('videos:cta.description')}
          </p>
          <a
            href={localizedPath('/quote')}
            className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
          >
            {t('common:cta.request_quote')}
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setActiveVideo(null)}
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.src}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
