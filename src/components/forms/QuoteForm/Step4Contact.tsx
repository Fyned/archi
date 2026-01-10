import { ArrowLeft, Upload, Loader2 } from 'lucide-react'
import { useState, useRef, type ChangeEvent } from 'react'
import clsx from 'clsx'
import type { QuoteFormData } from './index'

interface Step4Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function Step4Contact({ formData, updateFormData, onBack, onSubmit, isSubmitting }: Step4Props) {
  const [fileName, setFileName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      updateFormData({ file })
    }
  }

  const canSubmit = formData.name !== '' && formData.email !== '' && formData.phone !== ''

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          Uw contactgegevens
        </h2>
        <p className="text-gray-600">
          Bijna klaar! Vul uw gegevens in en we nemen contact met u op.
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-6 mb-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Naam *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="input"
            placeholder="Uw volledige naam"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mailadres *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="input"
            placeholder="uw@email.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefoonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="input"
            placeholder="+32 XXX XX XX XX"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Adres (optioneel)
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="input"
            placeholder="Straat, huisnummer, postcode, gemeente"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foto's of plannen uploaden (optioneel)
          </label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-400 transition-colors flex flex-col items-center gap-2"
          >
            <Upload size={24} className="text-gray-400" />
            <span className="text-sm text-gray-600">
              {fileName || 'Klik om bestanden te uploaden'}
            </span>
            <span className="text-xs text-gray-400">
              Ondersteunde formaten: JPG, PNG, PDF (max 10MB)
            </span>
          </button>
        </div>

        {/* Privacy */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            Door dit formulier te verzenden gaat u akkoord met onze{' '}
            <a href="/legal/privacy" className="text-primary-600 hover:underline">
              privacybeleid
            </a>
            . Wij gebruiken uw gegevens alleen om uw offerte aanvraag te verwerken.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="btn btn-secondary"
        >
          <ArrowLeft size={20} className="mr-2" />
          Terug
        </button>
        <button
          onClick={onSubmit}
          disabled={!canSubmit || isSubmitting}
          className={clsx(
            'btn btn-accent',
            (!canSubmit || isSubmitting) && 'opacity-50 cursor-not-allowed'
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="mr-2 animate-spin" />
              Verzenden...
            </>
          ) : (
            'Offerte aanvragen'
          )}
        </button>
      </div>
    </div>
  )
}
