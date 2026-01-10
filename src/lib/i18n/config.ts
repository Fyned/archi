import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import nlCommon from '@/locales/nl/common.json'
import nlHome from '@/locales/nl/home.json'
import nlServices from '@/locales/nl/services.json'
import nlGallery from '@/locales/nl/gallery.json'

import frCommon from '@/locales/fr/common.json'
import frHome from '@/locales/fr/home.json'
import frServices from '@/locales/fr/services.json'
import frGallery from '@/locales/fr/gallery.json'

import enCommon from '@/locales/en/common.json'
import enHome from '@/locales/en/home.json'
import enServices from '@/locales/en/services.json'
import enGallery from '@/locales/en/gallery.json'

import trCommon from '@/locales/tr/common.json'
import trHome from '@/locales/tr/home.json'
import trServices from '@/locales/tr/services.json'
import trGallery from '@/locales/tr/gallery.json'

import deCommon from '@/locales/de/common.json'
import deHome from '@/locales/de/home.json'
import deServices from '@/locales/de/services.json'
import deGallery from '@/locales/de/gallery.json'

export const supportedLanguages = ['nl', 'fr', 'en', 'tr', 'de'] as const
export type SupportedLanguage = typeof supportedLanguages[number]

export const languageNames: Record<SupportedLanguage, string> = {
  nl: 'Nederlands',
  fr: 'Français',
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
    gallery: nlGallery
  },
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    gallery: frGallery
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    gallery: enGallery
  },
  tr: {
    common: trCommon,
    home: trHome,
    services: trServices,
    gallery: trGallery
  },
  de: {
    common: deCommon,
    home: deHome,
    services: deServices,
    gallery: deGallery
  }
}

// Only use LanguageDetector on client side
if (typeof window !== 'undefined') {
  i18n.use(LanguageDetector)
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl', // Default language
    fallbackLng: 'nl',
    defaultNS: 'common',
    ns: ['common', 'home', 'services', 'gallery'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'cookie', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['cookie']
    }
  })

export default i18n
