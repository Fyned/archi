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

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Root routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/services/:serviceId" element={<Layout><ServiceDetailPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/projects/:projectId" element={<Layout><ProjectDetailPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/quote" element={<Layout><QuotePage /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
        <Route path="/videos" element={<Layout><VideoGalleryPage /></Layout>} />
        <Route path="/marketplace" element={<Layout><MarketplacePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPostPage /></Layout>} />
        <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />

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
