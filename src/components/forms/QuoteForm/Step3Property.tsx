import { ArrowLeft, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { useTranslation } from '@/hooks/useTranslation'
import type { QuoteFormData } from './index'

interface Step3Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
  onBack: () => void
}

const ownerIds = ['yes', 'renter', 'buying'] as const
const designIds = ['yes', 'no', 'ideas'] as const

export default function Step3Property({ formData, updateFormData, onNext, onBack }: Step3Props) {
  const { t } = useTranslation('quote')
  const canContinue = formData.propertyOwner !== '' && formData.hasDesign !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          {t('step3.title')}
        </h2>
        <p className="text-gray-600">
          {t('step3.subtitle')}
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Property Owner */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step3.owner.label')}
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {ownerIds.map((id) => (
              <button
                key={id}
                onClick={() => updateFormData({ propertyOwner: id })}
                className={clsx(
                  'px-6 py-4 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.propertyOwner === id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {t(`step3.owner.${id}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Has Design */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step3.design.label')}
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {designIds.map((id) => (
              <button
                key={id}
                onClick={() => updateFormData({ hasDesign: id })}
                className={clsx(
                  'px-6 py-4 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.hasDesign === id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {t(`step3.design.${id}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('step3.additional.label')}
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
            rows={4}
            className="input resize-none"
            placeholder={t('step3.additional.placeholder')}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="btn btn-secondary"
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('step3.back')}
        </button>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={clsx(
            'btn btn-primary',
            !canContinue && 'opacity-50 cursor-not-allowed'
          )}
        >
          {t('step3.next')}
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
