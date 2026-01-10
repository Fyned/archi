import { defineType } from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    {
      name: 'nl',
      title: 'Dutch',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fr',
      title: 'French',
      type: 'text',
      rows: 4,
    },
    {
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 4,
    },
    {
      name: 'tr',
      title: 'Turkish',
      type: 'text',
      rows: 4,
    },
    {
      name: 'de',
      title: 'German',
      type: 'text',
      rows: 4,
    },
  ],
})
