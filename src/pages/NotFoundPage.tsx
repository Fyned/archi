import { Link } from 'react-router-dom'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'

export default function NotFoundPage() {
  const { t } = useTranslation(['common'])
  const { localizedPath } = useLocalizedPath()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-8xl font-heading font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
          {t('common:not_found.title', 'Page Not Found')}
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {t('common:not_found.description', 'The page you are looking for does not exist or has been moved.')}
        </p>
        <Link
          to={localizedPath('/')}
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          {t('common:not_found.back_home', 'Back to Home')}
        </Link>
      </div>
    </div>
  )
}
