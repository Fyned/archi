import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import type { QuoteFormData } from './index'

interface Step1Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onNext: () => void
}

const projectTypes = [
  {
    id: 'pergola',
    title: 'Bioklimatische Pergola',
    description: 'Verstelbare lamellen voor optimale bescherming',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'veranda',
    title: 'Aluminium Veranda',
    description: 'Verleng uw leefruimte met een elegante veranda',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'carport',
    title: 'Carport',
    description: 'Bescherm uw voertuigen met stijl',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'other',
    title: 'Anders',
    description: 'Ik heb een ander project in gedachten',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80'
  }
]

export default function Step1ProjectType({ formData, updateFormData, onNext }: Step1Props) {
  const handleSelect = (type: string) => {
    updateFormData({ projectType: type })
  }

  const canContinue = formData.projectType !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          Welk type project heeft u in gedachten?
        </h2>
        <p className="text-gray-600">
          Selecteer het type constructie dat u wenst
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleSelect(type.id)}
            className={clsx(
              'relative overflow-hidden rounded-xl border-2 transition-all text-left group',
              formData.projectType === type.id
                ? 'border-primary-600 ring-2 ring-primary-200'
                : 'border-gray-200 hover:border-primary-300'
            )}
          >
            <div className="aspect-video relative">
              <img
                src={type.image}
                alt={type.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-heading font-semibold text-lg">{type.title}</h3>
              <p className="text-sm text-white/80">{type.description}</p>
            </div>
            {formData.projectType === type.id && (
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
          Volgende
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
