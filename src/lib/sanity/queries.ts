export const projectsQuery = `*[_type == "project"] | order(completedAt desc) {
  _id,
  title,
  slug,
  description,
  category,
  location,
  "mainImage": mainImage.asset->url,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  "gallery": gallery[].asset->url,
  testimonial,
  specifications,
  completedAt,
  featured
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(completedAt desc)[0...3] {
  _id,
  title,
  slug,
  category,
  location,
  "mainImage": mainImage.asset->url
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  category,
  location,
  "mainImage": mainImage.asset->url,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  "gallery": gallery[].asset->url,
  testimonial,
  specifications,
  completedAt
}`

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  title,
  slug,
  subtitle,
  description,
  "mainImage": mainImage.asset->url,
  features,
  benefits
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  subtitle,
  description,
  "mainImage": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  features,
  benefits
}`

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "mainImage": mainImage.asset->url,
  categories,
  publishedAt,
  author
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  "mainImage": mainImage.asset->url,
  body,
  categories,
  publishedAt,
  author
}`

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  text,
  author,
  location,
  rating,
  projectType,
  "image": image.asset->url,
  featured
}`

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...6] {
  _id,
  text,
  author,
  location,
  rating,
  projectType,
  "image": image.asset->url
}`

export const settingsQuery = `*[_type == "settings"][0] {
  siteName,
  "logo": logo.asset->url,
  contact,
  socialMedia,
  businessHours,
  trustBadges
}`

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  seoTitle,
  seoDescription,
  body
}`
