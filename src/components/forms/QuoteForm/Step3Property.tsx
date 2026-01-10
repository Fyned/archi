import { ArrowLeft, ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import type { QuoteFormData } from './index'

interface Step3Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
  onBack: () => void
}

const ownerOptions = [
  { id: 'owner', label: 'Ja, ik ben eigenaar' },
  { id: 'renter', label: 'Nee, ik huur' },
  { id: 'buying', label: 'Ik ben aan het kopen' },
]

const designOptions = [
  { id: 'yes', label: 'Ja, ik heb al een ontwerp' },
  { id: 'no', label: 'Nee, ik heb hulp nodig' },
  { id: 'ideas', label: 'Ik heb ideeën maar geen plan' },
]

export default function Step3Property({ formData, updateFormData, onNext, onBack }: Step3Props) {
  const canContinue = formData.propertyOwner !== '' && formData.hasDesign !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          Over uw woning
        </h2>
        <p className="text-gray-600">
          Enkele vragen over uw situatie
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Property Owner */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Bent u eigenaar van de woning?
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {ownerOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ propertyOwner: option.id })}
                className={clsx(
                  'px-6 py-4 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.propertyOwner === option.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Has Design */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Heeft u al een ontwerp of plan?
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {designOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => updateFormData({ hasDesign: option.id })}
                className={clsx(
                  'px-6 py-4 rounded-lg border-2 text-sm font-medium transition-all',
                  formData.hasDesign === option.id
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-primary-300'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Aanvullende informatie (optioneel)
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
            rows={4}
            className="input resize-none"
            placeholder="Vertel ons meer over uw project, speciale wensen of vragen..."
          />
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
