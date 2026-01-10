export type Language = 'nl' | 'fr' | 'en' | 'tr' | 'de'

export interface LocalizedString {
  nl: string
  fr: string
  en: string
  tr: string
  de: string
}

export interface NavigationItem {
  key: string
  href: string
  children?: NavigationItem[]
}

export interface Service {
  id: string
  slug: LocalizedString
  title: LocalizedString
  description: LocalizedString
  image: string
  features: LocalizedString[]
}

export interface Project {
  id: string
  slug: string
  title: LocalizedString
  description: LocalizedString
  location: string
  category: 'pergola' | 'veranda' | 'carport' | 'other'
  images: string[]
  beforeImage?: string
  afterImage?: string
  testimonial?: {
    text: LocalizedString
    author: string
  }
  completedAt: string
}

export interface Testimonial {
  id: string
  text: LocalizedString
  author: string
  location: string
  rating: number
  projectType: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  whatsapp: string
  socialMedia: {
    facebook?: string
    instagram?: string
    pinterest?: string
  }
}

export interface SEOMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}
