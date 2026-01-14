import { useState } from 'react'
import { Check } from 'lucide-react'
import clsx from 'clsx'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import Step1ProjectType from './Step1ProjectType'
import Step2Details from './Step2Details'
import Step3Property from './Step3Property'
import Step4Contact from './Step4Contact'

export interface QuoteFormData {
  // Step 1
  projectType: string
  // Step 2
  dimensions: string
  budget: string
  timeline: string
  // Step 3
  propertyOwner: string
  hasDesign: string
  additionalInfo: string
  // Step 4
  name: string
  email: string
  phone: string
  address: string
  file?: File
}

const initialFormData: QuoteFormData = {
  projectType: '',
  dimensions: '',
  budget: '',
  timeline: '',
  propertyOwner: '',
  hasDesign: '',
  additionalInfo: '',
  name: '',
  email: '',
  phone: '',
  address: '',
}

export default function QuoteForm() {
  const { t } = useTranslation('quote')
  const { localizedPath } = useLocalizedPath()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const steps = [
    { id: 1, name: t('steps.project_type') },
    { id: 2, name: t('steps.details') },
    { id: 3, name: t('steps.property') },
    { id: 4, name: t('steps.contact') },
  ]

  const updateFormData = (data: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-heading font-bold mb-4">
          {t('success.title')}
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          {t('success.message')}
        </p>
        <a
          href={localizedPath('/')}
          className="btn btn-primary"
        >
          {t('success.button')}
        </a>
      </div>
    )
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all',
                    currentStep > step.id
                      ? 'bg-primary-600 text-white'
                      : currentStep === step.id
                        ? 'bg-primary-600 text-white ring-4 ring-primary-200'
                        : 'bg-gray-200 text-gray-500'
                  )}
                >
                  {currentStep > step.id ? (
                    <Check size={20} />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={clsx(
                    'mt-2 text-sm hidden sm:block',
                    currentStep >= step.id ? 'text-primary-600 font-medium' : 'text-gray-500'
                  )}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    'w-full h-1 mx-2 sm:mx-4 transition-colors',
                    currentStep > step.id ? 'bg-primary-600' : 'bg-gray-200'
                  )}
                  style={{ minWidth: '40px', maxWidth: '120px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Steps */}
      <div className="min-h-[400px]">
        {currentStep === 1 && (
          <Step1ProjectType
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        )}
        {currentStep === 2 && (
          <Step2Details
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <Step3Property
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && (
          <Step4Contact
            formData={formData}
            updateFormData={updateFormData}
            onBack={prevStep}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  )
}
