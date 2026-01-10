import { defineType } from 'sanity'

export default defineType({
  name: 'localizedSlug',
  title: 'Localized Slug',
  type: 'object',
  fields: [
    {
      name: 'nl',
      title: 'Dutch',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title?.nl,
        maxLength: 96,
      },
    },
    {
      name: 'fr',
      title: 'French',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title?.fr,
        maxLength: 96,
      },
    },
    {
      name: 'en',
      title: 'English',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title?.en,
        maxLength: 96,
      },
    },
    {
      name: 'tr',
      title: 'Turkish',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title?.tr,
        maxLength: 96,
      },
    },
    {
      name: 'de',
      title: 'German',
      type: 'slug',
      options: {
        source: (doc: any) => doc.title?.de,
        maxLength: 96,
      },
    },
  ],
})
