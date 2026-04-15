import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { supportedLanguages } from '@/lib/i18n/config'

const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const QuotePage = lazy(() => import('@/pages/QuotePage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'))
const VideoGalleryPage = lazy(() => import('@/pages/VideoGalleryPage'))
const MarketplacePage = lazy(() => import('@/pages/MarketplacePage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function LangGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>()
  if (lang && !supportedLanguages.includes(lang as typeof supportedLanguages[number])) {
    return <Navigate to="/fr" replace />
  }
  return <>{children}</>
}

function RootToFrRedirect({ path, paramKey = 'serviceId' }: { path: string; paramKey?: string }) {
  const params = useParams<Record<string, string>>()
  const value = params[paramKey]
  return <Navigate to={`/fr/${path}/${value ?? ''}`} replace />
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Root routes — redirect to /fr for canonical consistency */}
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/about" element={<Navigate to="/fr/about" replace />} />
        <Route path="/services" element={<Navigate to="/fr/services" replace />} />
        <Route path="/services/:serviceId" element={<RootToFrRedirect path="services" paramKey="serviceId" />} />
        <Route path="/projects" element={<Navigate to="/fr/projects" replace />} />
        <Route path="/projects/:projectId" element={<RootToFrRedirect path="projects" paramKey="projectId" />} />
        <Route path="/contact" element={<Navigate to="/fr/contact" replace />} />
        <Route path="/quote" element={<Navigate to="/fr/quote" replace />} />
        <Route path="/privacy" element={<Navigate to="/fr/privacy" replace />} />
        <Route path="/videos" element={<Navigate to="/fr/videos" replace />} />
        <Route path="/marketplace" element={<Navigate to="/fr/marketplace" replace />} />
        <Route path="/blog" element={<Navigate to="/fr/blog" replace />} />
        <Route path="/blog/:slug" element={<RootToFrRedirect path="blog" paramKey="slug" />} />
        <Route path="/portfolio" element={<Navigate to="/fr/portfolio" replace />} />

        {/* Localized routes */}
        <Route path="/:lang" element={<LangGuard><Layout><HomePage /></Layout></LangGuard>} />
        <Route path="/:lang/about" element={<LangGuard><Layout><AboutPage /></Layout></LangGuard>} />
        <Route path="/:lang/services" element={<LangGuard><Layout><ServicesPage /></Layout></LangGuard>} />
        <Route path="/:lang/services/:serviceId" element={<LangGuard><Layout><ServiceDetailPage /></Layout></LangGuard>} />
        <Route path="/:lang/projects" element={<LangGuard><Layout><ProjectsPage /></Layout></LangGuard>} />
        <Route path="/:lang/projects/:projectId" element={<LangGuard><Layout><ProjectDetailPage /></Layout></LangGuard>} />
        <Route path="/:lang/contact" element={<LangGuard><Layout><ContactPage /></Layout></LangGuard>} />
        <Route path="/:lang/quote" element={<LangGuard><Layout><QuotePage /></Layout></LangGuard>} />
        <Route path="/:lang/privacy" element={<LangGuard><Layout><PrivacyPolicyPage /></Layout></LangGuard>} />
        <Route path="/:lang/videos" element={<LangGuard><Layout><VideoGalleryPage /></Layout></LangGuard>} />
        <Route path="/:lang/marketplace" element={<LangGuard><Layout><MarketplacePage /></Layout></LangGuard>} />
        <Route path="/:lang/blog" element={<LangGuard><Layout><BlogPage /></Layout></LangGuard>} />
        <Route path="/:lang/blog/:slug" element={<LangGuard><Layout><BlogPostPage /></Layout></LangGuard>} />
        <Route path="/:lang/portfolio" element={<LangGuard><Layout><PortfolioPage /></Layout></LangGuard>} />

        {/* 404 */}
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Suspense>
  )
}
