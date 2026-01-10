import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
  HomePage,
  AboutPage,
  ContactPage,
  QuotePage,
  ServicesPage,
  ServiceDetailPage,
  ProjectsPage
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
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/quote" element={<Layout><QuotePage /></Layout>} />

      {/* Localized routes */}
      <Route path="/:lang" element={<Layout><HomePage /></Layout>} />
      <Route path="/:lang/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/:lang/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/:lang/services/:serviceId" element={<Layout><ServiceDetailPage /></Layout>} />
      <Route path="/:lang/projects" element={<Layout><ProjectsPage /></Layout>} />
      <Route path="/:lang/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/:lang/quote" element={<Layout><QuotePage /></Layout>} />
    </Routes>
  )
}
