import { ArrowLeft, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import type { QuoteFormData } from './index'

interface Step2Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
  onBack: () => void
}

const dimensionOptions = [
  { id: 'small', label: 'Klein (< 15m²)' },
  { id: 'medium', label: 'Gemiddeld (15-30m²)' },
  { id: 'large', label: 'Groot (30-50m²)' },
  { id: 'xlarge', label: 'Zeer groot (> 50m²)' },
  { id: 'unknown', label: 'Weet ik nog niet' },
]

const budgetOptions = [
  { id: '10k-20k', label: '€10.000 - €20.000' },
  { id: '20k-35k', label: '€20.000 - €35.000' },
  { id: '35k-50k', label: '€35.000 - €50.000' },
  { id: '50k+', label: '€50.000+' },
  { id: 'unknown', label: 'Weet ik nog niet' },
]

const timelineOptions = [
  { id: 'asap', label: 'Zo snel mogelijk' },
  { id: '1-3months', label: 'Binnen 1-3 maanden' },
  { id: '3-6months', label: 'Binnen 3-6 maanden' },
  { id: '6months+', label: 'Later dit jaar' },
  { id: 'planning', label: 'Ik ben nog aan het plannen' },
]

export default function Step2Details({ formData, updateFormData, onNext, onBack }: Step2Props) {
  const canContinue = formData.dimensions !== '' && formData.budget !== '' && formData.timeline !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          Vertel ons meer over uw project
        </h2>
        <p className="text-gray-600">
          Deze informatie helpt ons een nauwkeurige offerte op te stellen
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Dimensions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Geschatte afmetingen
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {dimensionOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ dimensions: option.id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.dimensions === option.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Geschat budget
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {budgetOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ budget: option.id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.budget === option.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Wanneer wilt u starten?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {timelineOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ timeline: option.id })}
                className={clsx(
                  'px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.timeline === option.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {option.label}
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
          Terug
        </button>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className={clsx(
            'btn btn-primary',
            !canContinue && 'opacity-50 cursor-not-allowed'
          )}
        >
          Volgende
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
