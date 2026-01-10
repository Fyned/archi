import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localizedText',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        {
          name: 'nl',
          title: 'Dutch',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'fr',
          title: 'French',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'en',
          title: 'English',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'tr',
          title: 'Turkish',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
        {
          name: 'de',
          title: 'German',
          type: 'array',
          of: [
            { type: 'block' },
            { type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pergola', value: 'pergola' },
          { title: 'Veranda', value: 'veranda' },
          { title: 'Carport', value: 'carport' },
          { title: 'Tips', value: 'tips' },
          { title: 'News', value: 'news' },
          { title: 'Trends', value: 'trends' },
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, media, date }) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'Draft',
        media,
      }
    },
  },
})
