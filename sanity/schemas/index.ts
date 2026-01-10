import project from './project'
import service from './service'
import blogPost from './blogPost'
import testimonial from './testimonial'
import page from './page'
import settings from './settings'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import localizedSlug from './objects/localizedSlug'

export const schemaTypes = [
  // Documents
  project,
  service,
  blogPost,
  testimonial,
  page,
  settings,
  // Objects
  localizedString,
  localizedText,
  localizedSlug,
]
