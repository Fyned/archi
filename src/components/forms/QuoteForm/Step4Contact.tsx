import { ArrowLeft, Upload, MessageCircle, Mail } from 'lucide-react'
import { useState, useRef, type ChangeEvent } from 'react'
import clsx from 'clsx'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import type { QuoteFormData } from './index'

// Contact constants
const PHONE_WHATSAPP = '+32 493 36 50 29'
const EMAIL = 'archicv.info@gmail.com'

interface Step4Props {
  formData: QuoteFormData
  updateFormData: (data: Partial<QuoteFormData>) => void
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

export default function Step4Contact({ formData, updateFormData, onBack }: Step4Props) {
  const { t } = useTranslation(['quote', 'contact'])
  const { localizedPath } = useLocalizedPath()
  const [fileName, setFileName] = useState<string>('')
  const [showSendOptions, setShowSendOptions] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      updateFormData({ file })
    }
  }

  const canSubmit = formData.name !== '' && formData.email !== '' && formData.phone !== ''

  const sendViaWhatsApp = () => {
    const message =
      `*${t('quote:hero.title')}*%0A%0A` +
      `*${t('quote:steps.project_type')}:* ${formData.projectType}%0A` +
      `*${t('quote:step2.dimensions.label')}:* ${formData.dimensions || '-'}%0A` +
      `*${t('quote:step2.budget.label')}:* ${formData.budget || '-'}%0A` +
      `*${t('quote:step2.timeline.label')}:* ${formData.timeline || '-'}%0A%0A` +
      `*${t('quote:step3.owner.label')}:* ${formData.propertyOwner || '-'}%0A` +
      `*${t('quote:step3.design.label')}:* ${formData.hasDesign || '-'}%0A` +
      `*${t('quote:step3.additional.label')}:* ${formData.additionalInfo || '-'}%0A%0A` +
      `*${t('quote:step4.name.label')}:* ${formData.name}%0A` +
      `*${t('quote:step4.email.label')}:* ${formData.email}%0A` +
      `*${t('quote:step4.phone.label')}:* ${formData.phone}%0A` +
      `*${t('quote:step4.address.label')}:* ${formData.address || '-'}`

    const whatsappNumber = PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const sendViaEmail = () => {
    const subject = encodeURIComponent(`${t('quote:hero.title')} - ${formData.projectType}`)
    const body = encodeURIComponent(
      `${t('quote:steps.project_type')}: ${formData.projectType}\n` +
      `${t('quote:step2.dimensions.label')}: ${formData.dimensions || '-'}\n` +
      `${t('quote:step2.budget.label')}: ${formData.budget || '-'}\n` +
      `${t('quote:step2.timeline.label')}: ${formData.timeline || '-'}\n\n` +
      `${t('quote:step3.owner.label')}: ${formData.propertyOwner || '-'}\n` +
      `${t('quote:step3.design.label')}: ${formData.hasDesign || '-'}\n` +
      `${t('quote:step3.additional.label')}: ${formData.additionalInfo || '-'}\n\n` +
      `${t('quote:step4.name.label')}: ${formData.name}\n` +
      `${t('quote:step4.email.label')}: ${formData.email}\n` +
      `${t('quote:step4.phone.label')}: ${formData.phone}\n` +
      `${t('quote:step4.address.label')}: ${formData.address || '-'}`
    )

    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold mb-2">
          {t('quote:step4.title')}
        </h2>
        <p className="text-gray-600">
          {t('quote:step4.subtitle')}
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-6 mb-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('quote:step4.name.label')} *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className="input"
            placeholder={t('quote:step4.name.placeholder')}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {t('quote:step4.email.label')} *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="input"
            placeholder={t('quote:step4.email.placeholder')}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t('quote:step4.phone.label')} *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="input"
            placeholder={t('quote:step4.phone.placeholder')}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            {t('quote:step4.address.label')}
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="input"
            placeholder={t('quote:step4.address.placeholder')}
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('quote:step4.upload.label')}
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
              {fileName || t('quote:step4.upload.button')}
            </span>
            <span className="text-xs text-gray-400">
              {t('quote:step4.upload.formats')}
            </span>
          </button>
        </div>

        {/* Privacy */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            {t('quote:step4.privacy')}{' '}
            <a href={localizedPath('/privacy')} className="text-primary-600 hover:underline">
              {t('quote:step4.privacy_link')}
            </a>
            {t('quote:step4.privacy_suffix')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Send Options */}
        {!showSendOptions ? (
          <div className="flex justify-between">
            <button
              onClick={onBack}
              className="btn btn-secondary"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t('quote:step4.back')}
            </button>
            <button
              onClick={() => setShowSendOptions(true)}
              disabled={!canSubmit}
              className={clsx(
                'btn btn-primary',
                !canSubmit && 'opacity-50 cursor-not-allowed'
              )}
            >
              {t('quote:step4.submit')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 font-medium text-center">
              {t('contact:form.send_via')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={sendViaWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={24} />
                WhatsApp
              </button>
              <button
                type="button"
                onClick={sendViaEmail}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                <Mail size={24} />
                E-mail
              </button>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={onBack}
                className="btn btn-secondary"
              >
                <ArrowLeft size={20} className="mr-2" />
                {t('quote:step4.back')}
              </button>
              <button
                type="button"
                onClick={() => setShowSendOptions(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {t('contact:form.cancel')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
