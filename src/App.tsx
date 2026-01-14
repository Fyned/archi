import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
  HomePage,
  AboutPage,
  ContactPage,
  QuotePage,
  ServicesPage,
  ServiceDetailPage,
  ProjectsPage,
  ProjectDetailPage,
  PrivacyPolicyPage,
  VideoGalleryPage,
  MarketplacePage,
  BlogPage
} from '@/pages'

export default function App() {
  return (
    <Routes>
      {/* Root routes (Dutch as default) */}
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

      {/* Localized routes */}
      <Route path="/:lang" element={<Layout><HomePage /></Layout>} />
      <Route path="/:lang/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/:lang/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/:lang/services/:serviceId" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/:lang/projects" element={<Layout><ProjectsPage /></Layout>} />
      <Route path="/:lang/projects/:projectId" element={<Layout><ProjectDetailPage /></Layout>} />
      <Route path="/:lang/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/:lang/quote" element={<Layout><QuotePage /></Layout>} />
      <Route path="/:lang/privacy" element={<Layout><PrivacyPolicyPage /></Layout>} />
      <Route path="/:lang/videos" element={<Layout><VideoGalleryPage /></Layout>} />
      <Route path="/:lang/marketplace" element={<Layout><MarketplacePage /></Layout>} />
      <Route path="/:lang/blog" element={<Layout><BlogPage /></Layout>} />
    </Routes>
  )
}
