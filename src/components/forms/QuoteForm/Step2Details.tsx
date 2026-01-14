import { ArrowLeft, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { useTranslation } from '@/hooks/useTranslation'
import type { QuoteFormData } from './index'

interface Step2Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
  onBack: () => void
}

const dimensionIds = ['small', 'medium', 'large', 'xlarge', 'unknown'] as const
const budgetIds = ['10k-20k', '20k-35k', '35k-50k', '50k+', 'unknown'] as const
const timelineIds = ['asap', '1-3months', '3-6months', '6months+', 'planning'] as const

export default function Step2Details({ formData, updateFormData, onNext, onBack }: Step2Props) {
  const { t } = useTranslation('quote')
  const canContinue = formData.dimensions !== '' && formData.budget !== '' && formData.timeline !== ''

  const getDimensionLabel = (id: string): string => {
    if (id === 'unknown') return t('step2.dimensions.unknown')
    return t(`step2.dimensions.${id}`)
  }

  const getBudgetLabel = (id: string): string => {
    if (id === 'unknown') return t('step2.budget.unknown')
    // Budget amounts stay the same across languages
    const amounts: Record<string, string> = {
      '10k-20k': '€10.000 - €20.000',
      '20k-35k': '€20.000 - €35.000',
      '35k-50k': '€35.000 - €50.000',
      '50k+': '€50.000+'
    }
    return amounts[id] || id
  }

  const getTimelineLabel = (id: string): string => {
    return t(`step2.timeline.${id}`)
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          {t('step2.title')}
        </h2>
        <p className="text-gray-600">
          {t('step2.subtitle')}
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Dimensions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step2.dimensions.label')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {dimensionIds.map((id) => (
              <button
                key={id}
                onClick={() => updateFormData({ dimensions: id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.dimensions === id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {getDimensionLabel(id)}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step2.budget.label')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {budgetIds.map((id) => (
              <button
                key={id}
                onClick={() => updateFormData({ budget: id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.budget === id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {getBudgetLabel(id)}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step2.timeline.label')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {timelineIds.map((id) => (
              <button
                key={id}
                onClick={() => updateFormData({ timeline: id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.timeline === id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {getTimelineLabel(id)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="btn btn-secondary"
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('step2.back')}
        </button>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={clsx(
            'btn btn-primary',
            !canContinue && 'opacity-50 cursor-not-allowed'
          )}
        >
          {t('step2.next')}
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
