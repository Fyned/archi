import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Archi Construction & Veranda',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'whatsapp', type: 'string', title: 'WhatsApp Number' },
        {
          name: 'address',
          type: 'object',
          title: 'Address',
          fields: [
            { name: 'street', type: 'string', title: 'Street' },
            { name: 'city', type: 'string', title: 'City' },
            { name: 'postalCode', type: 'string', title: 'Postal Code' },
            { name: 'country', type: 'string', title: 'Country' },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url', title: 'Facebook URL' },
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'pinterest', type: 'url', title: 'Pinterest URL' },
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
      ],
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'weekday', type: 'string', title: 'Weekday Hours' },
        { name: 'saturday', type: 'string', title: 'Saturday Hours' },
        { name: 'sunday', type: 'string', title: 'Sunday Hours' },
      ],
    }),
    defineField({
      name: 'trustBadges',
      title: 'Trust Badges',
      type: 'object',
      fields: [
        { name: 'yearsExperience', type: 'number', title: 'Years of Experience' },
        { name: 'projectsCompleted', type: 'number', title: 'Projects Completed' },
        { name: 'warrantyYears', type: 'number', title: 'Warranty Years' },
        { name: 'satisfactionRate', type: 'number', title: 'Satisfaction Rate (%)' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
