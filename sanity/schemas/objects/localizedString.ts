import { defineType } from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'nl',
      title: 'Dutch',
      type: 'string',
    },
    {
      name: 'fr',
      title: 'French',
      type: 'string',
    },
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'tr',
      title: 'Turkish',
      type: 'string',
    },
    {
      name: 'de',
      title: 'German',
      type: 'string',
    },
  ],
})
