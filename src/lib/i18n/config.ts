import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import nlCommon from '@/locales/nl/common.json'
import nlHome from '@/locales/nl/home.json'
import nlServices from '@/locales/nl/services.json'
import nlGallery from '@/locales/nl/gallery.json'
import nlPrivacy from '@/locales/nl/privacy.json'
import nlContact from '@/locales/nl/contact.json'

import frCommon from '@/locales/fr/common.json'
import frHome from '@/locales/fr/home.json'
import frServices from '@/locales/fr/services.json'
import frGallery from '@/locales/fr/gallery.json'
import frPrivacy from '@/locales/fr/privacy.json'
import frContact from '@/locales/fr/contact.json'

import enCommon from '@/locales/en/common.json'
import enHome from '@/locales/en/home.json'
import enServices from '@/locales/en/services.json'
import enGallery from '@/locales/en/gallery.json'
import enPrivacy from '@/locales/en/privacy.json'
import enContact from '@/locales/en/contact.json'

import trCommon from '@/locales/tr/common.json'
import trHome from '@/locales/tr/home.json'
import trServices from '@/locales/tr/services.json'
import trGallery from '@/locales/tr/gallery.json'
import trPrivacy from '@/locales/tr/privacy.json'
import trContact from '@/locales/tr/contact.json'

import deCommon from '@/locales/de/common.json'
import deHome from '@/locales/de/home.json'
import deServices from '@/locales/de/services.json'
import deGallery from '@/locales/de/gallery.json'
import dePrivacy from '@/locales/de/privacy.json'
import deContact from '@/locales/de/contact.json'

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
    gallery: nlGallery,
    privacy: nlPrivacy,
    contact: nlContact
  },
  fr: {
    common: frCommon,
    home: frHome,
    services: frServices,
    gallery: frGallery,
    privacy: frPrivacy,
    contact: frContact
  },
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    gallery: enGallery,
    privacy: enPrivacy,
    contact: enContact
  },
  tr: {
    common: trCommon,
    home: trHome,
    services: trServices,
    gallery: trGallery,
    privacy: trPrivacy,
    contact: trContact
  },
  de: {
    common: deCommon,
    home: deHome,
    services: deServices,
    gallery: deGallery,
    privacy: dePrivacy,
    contact: deContact
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
    ns: ['common', 'home', 'services', 'gallery', 'privacy', 'contact'],
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
