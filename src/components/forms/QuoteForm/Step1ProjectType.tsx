import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { useTranslation } from '@/hooks/useTranslation'
import type { QuoteFormData } from './index'

interface Step1Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
}

const projectTypeIds = ['pergola', 'veranda', 'carport', 'other'] as const

const projectImages: Record<string, string> = {
  pergola: '/images/pergola/pergola-hero.jpg',
  veranda: '/images/veranda/veranda-hero.jpg',
  carport: '/images/carport/carport-hero.jpg',
  other: '/images/general/hero-main.jpg'
}

export default function Step1ProjectType({ formData, updateFormData, onNext }: Step1Props) {
  const { t } = useTranslation('quote')

  const handleSelect = (type: string) => {
    updateFormData({ projectType: type })
  }

  const canContinue = formData.projectType !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          {t('step1.title')}
        </h2>
        <p className="text-gray-600">
          {t('step1.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {projectTypeIds.map((typeId) => (
          <button
            key={typeId}
            onClick={() => handleSelect(typeId)}
            className={clsx(
              'relative overflow-hidden rounded-xl border-2 transition-all text-left group',
              formData.projectType === typeId
                ? 'border-primary-600 ring-2 ring-primary-200'
                : 'border-gray-200 hover:border-primary-300'
            )}
          >
            <div className="aspect-video relative">
              <img
                src={projectImages[typeId]}
                alt={t(`step1.types.${typeId}.title`)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                <h3 className="font-heading font-semibold text-lg text-white">{t(`step1.types.${typeId}.title`)}</h3>
                <p className="text-sm text-white/90">{t(`step1.types.${typeId}.description`)}</p>
              </div>
            </div>
            {formData.projectType === typeId && (
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={clsx(
            'btn btn-primary',
            !canContinue && 'opacity-50 cursor-not-allowed'
          )}
        >
          {t('step1.next')}
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
