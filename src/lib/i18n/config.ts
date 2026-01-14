import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import nlCommon from '@/locales/nl/common.json'
import nlHome from '@/locales/nl/home.json'
import nlServices from '@/locales/nl/services.json'
import nlGallery from '@/locales/nl/gallery.json'
import nlPrivacy from '@/locales/nl/privacy.json'
import nlContact from '@/locales/nl/contact.json'
import nlQuote from '@/locales/nl/quote.json'
import nlVideos from '@/locales/nl/videos.json'
import nlAbout from '@/locales/nl/about.json'
import nlMarketplace from '@/locales/nl/marketplace.json'
import nlBlog from '@/locales/nl/blog.json'

import frCommon from '@/locales/fr/common.json'
import frHome from '@/locales/fr/home.json'
import frServices from '@/locales/fr/services.json'
import frGallery from '@/locales/fr/gallery.json'
import frPrivacy from '@/locales/fr/privacy.json'
import frContact from '@/locales/fr/contact.json'
import frQuote from '@/locales/fr/quote.json'
import frVideos from '@/locales/fr/videos.json'
import frAbout from '@/locales/fr/about.json'
import frMarketplace from '@/locales/fr/marketplace.json'
import frBlog from '@/locales/fr/blog.json'

import enCommon from '@/locales/en/common.json'
import enHome from '@/locales/en/home.json'
import enServices from '@/locales/en/services.json'
import enGallery from '@/locales/en/gallery.json'
import enPrivacy from '@/locales/en/privacy.json'
import enContact from '@/locales/en/contact.json'
import enQuote from '@/locales/en/quote.json'
import enVideos from '@/locales/en/videos.json'
import enAbout from '@/locales/en/about.json'
import enMarketplace from '@/locales/en/marketplace.json'
import enBlog from '@/locales/en/blog.json'

import trCommon from '@/locales/tr/common.json'
import trHome from '@/locales/tr/home.json'
import trServices from '@/locales/tr/services.json'
import trGallery from '@/locales/tr/gallery.json'
import trPrivacy from '@/locales/tr/privacy.json'
import trContact from '@/locales/tr/contact.json'
import trQuote from '@/locales/tr/quote.json'
import trVideos from '@/locales/tr/videos.json'
import trAbout from '@/locales/tr/about.json'
import trMarketplace from '@/locales/tr/marketplace.json'
import trBlog from '@/locales/tr/blog.json'

import deCommon from '@/locales/de/common.json'
import deHome from '@/locales/de/home.json'
import deServices from '@/locales/de/services.json'
import deGallery from '@/locales/de/gallery.json'
import dePrivacy from '@/locales/de/privacy.json'
import deContact from '@/locales/de/contact.json'
import deQuote from '@/locales/de/quote.json'
import deVideos from '@/locales/de/videos.json'
import deAbout from '@/locales/de/about.json'
import deMarketplace from '@/locales/de/marketplace.json'
import deBlog from '@/locales/de/blog.json'

// French first (default), then others
export const supportedLanguages = ['fr', 'nl', 'en', 'tr', 'de'] as const
export type SupportedLanguage = typeof supportedLanguages[number]

export const languageNames: Record<SupportedLanguage, string> = {
  fr: 'Français',
  nl: 'Nederlands',
  en: 'English',
  tr: 'Türkçe',
  de: 'Deutsch'
}

export const languageFlags: Record<SupportedLanguage, string> = {
  nl: '🇳🇱',
  fr: '🇫🇷',
  en: '🇬🇧',
  tr: '🇹🇷',
  de: '🇩🇪'
}

const resources = {
  nl: {
    common: nlCommon,
    home: nlHome,
    services: nlServices,
    gallery: nlGallery,
    privacy: nlPrivacy,
    contact: nlContact,
    quote: nlQuote,
    videos: nlVideos,
    about: nlAbout,
    marketplace: nlMarketplace,
    blog: nlBlog
  },
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    gallery: frGallery,
    privacy: frPrivacy,
    contact: frContact,
    quote: frQuote,
    videos: frVideos,
    about: frAbout,
    marketplace: frMarketplace,
    blog: frBlog
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    gallery: enGallery,
    privacy: enPrivacy,
    contact: enContact,
    quote: enQuote,
    videos: enVideos,
    about: enAbout,
    marketplace: enMarketplace,
    blog: enBlog
  },
  tr: {
    common: trCommon,
    home: trHome,
    services: trServices,
    gallery: trGallery,
    privacy: trPrivacy,
    contact: trContact,
    quote: trQuote,
    videos: trVideos,
    about: trAbout,
    marketplace: trMarketplace,
    blog: trBlog
  },
  de: {
    common: deCommon,
    home: deHome,
    services: deServices,
    gallery: deGallery,
    privacy: dePrivacy,
    contact: deContact,
    quote: deQuote,
    videos: deVideos,
    about: deAbout,
    marketplace: deMarketplace,
    blog: deBlog
  }
}

// Detect browser/system language
function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return 'fr'

  // Get browser languages (array of preferred languages)
  const browserLangs = navigator.languages || [navigator.language]

  for (const lang of browserLangs) {
    // Get the first two characters (e.g., 'fr-FR' -> 'fr', 'nl-BE' -> 'nl')
    const shortLang = lang.slice(0, 2).toLowerCase() as SupportedLanguage
    if (supportedLanguages.includes(shortLang)) {
      return shortLang
    }
  }

  // Default to French if no supported language detected
  return 'fr'
}

// Get language from URL path, or detect from browser
function getLanguageFromPath(): SupportedLanguage {
  if (typeof window === 'undefined') return 'fr'

  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const firstPart = pathParts[0] as SupportedLanguage

  // If URL has a valid language prefix, use it
  if (supportedLanguages.includes(firstPart)) {
    return firstPart
  }

  // If on root path without language, detect browser language and redirect
  if (window.location.pathname === '/' || window.location.pathname === '') {
    const detectedLang = detectBrowserLanguage()
    // Redirect to detected language (will happen once on first visit)
    window.location.replace(`/${detectedLang}/`)
    return detectedLang
  }

  // Default to French
  return 'fr'
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getLanguageFromPath(), // Detect from URL
    fallbackLng: 'fr',
    defaultNS: 'common',
    ns: ['common', 'home', 'services', 'gallery', 'privacy', 'contact', 'quote', 'videos', 'about', 'marketplace', 'blog'],
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
