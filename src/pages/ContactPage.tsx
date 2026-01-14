import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { useState, useRef } from 'react'

// Contact constants
const PHONE_CALL = '+32 487 72 06 29'
const PHONE_WHATSAPP = '+32 493 36 50 29'
const EMAIL = 'archicv.info@gmail.com'

export default function ContactPage() {
  const { t } = useTranslation(['contact', 'common'])
  const [showSendOptions, setShowSendOptions] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const getFormData = () => {
    if (!formRef.current) return null
    const formData = new FormData(formRef.current)
    return {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      subject: formData.get('subject') as string || '',
      message: formData.get('message') as string || ''
    }
  }

  const validateForm = () => {
    const data = getFormData()
    if (!data) return false
    return data.name.trim() !== '' && data.email.trim() !== '' && data.message.trim() !== ''
  }

  const handleShowOptions = () => {
    if (validateForm()) {
      setShowSendOptions(true)
    } else {
      // Trigger HTML5 validation
      formRef.current?.reportValidity()
    }
  }

  const sendViaWhatsApp = () => {
    const data = getFormData()
    if (!data) return

    const message = `*${t('contact:form.title')}*%0A%0A` +
      `*${t('common:form.name')}:* ${data.name}%0A` +
      `*${t('common:form.email')}:* ${data.email}%0A` +
      `*${t('common:form.phone')}:* ${data.phone || '-'}%0A` +
      `*${t('contact:form.subject_label')}:* ${data.subject || '-'}%0A%0A` +
      `*${t('common:form.message')}:*%0A${data.message}`

    const whatsappNumber = PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
    setShowSendOptions(false)
  }

  const sendViaEmail = () => {
    const data = getFormData()
    if (!data) return

    const subject = encodeURIComponent(`Contact: ${data.subject || 'Website Inquiry'}`)
    const body = encodeURIComponent(
      `${t('common:form.name')}: ${data.name}\n` +
      `${t('common:form.email')}: ${data.email}\n` +
      `${t('common:form.phone')}: ${data.phone || '-'}\n` +
      `${t('contact:form.subject_label')}: ${data.subject || '-'}\n\n` +
      `${t('common:form.message')}:\n${data.message}`
    )

    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank')
    setShowSendOptions(false)
  }

  return (
    <>
      <Helmet>
        <title>{t('contact:hero.title')} | Archi Construction & Veranda</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('contact:hero.title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('contact:hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-heading font-bold mb-8">
                {t('contact:info.title')}
              </h2>

              <div className="space-y-6">
                <a
                  href={`tel:${PHONE_CALL.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('common:contact_info.phone')}</div>
                    <div className="text-gray-600">{PHONE_CALL}</div>
                    <div className="text-sm text-gray-500">{t('contact:info.contact_person')}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('common:contact_info.email')}</div>
                    <div className="text-gray-600">{EMAIL}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('common:contact_info.address')}</div>
                    <div className="text-gray-600">
                      {t('common:footer.location')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{t('common:contact_info.hours')}</div>
                    <div className="text-gray-600">
                      {t('common:contact_info.hours_weekday')}<br />
                      {t('common:contact_info.hours_weekend')}
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${PHONE_WHATSAPP.replace(/\s/g, '').replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={24} />
                  <div>
                    <div className="font-medium">{t('common:whatsapp.button_text')}</div>
                    <div className="text-sm opacity-90">{PHONE_WHATSAPP}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  {t('contact:form.title')}
                </h2>

                <form ref={formRef} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('common:form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="input"
                        placeholder={t('contact:form.name_placeholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('common:form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input"
                        placeholder={t('contact:form.email_placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('common:form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      placeholder={t('contact:form.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact:form.subject_label')}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="input"
                    >
                      <option value="">{t('contact:form.subject_placeholder')}</option>
                      <option value="Pergola">Pergola</option>
                      <option value="Veranda">Veranda</option>
                      <option value="Carport">Carport</option>
                      <option value="Pencere/Window">{t('common:services_menu.window')}</option>
                      <option value="Panjur/Shutter">{t('common:services_menu.shutter')}</option>
                      <option value="Garaj/Garage">{t('common:services_menu.garage')}</option>
                      <option value="Diğer/Other">{t('contact:form.subject_other')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('common:form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="input resize-none"
                      placeholder={t('contact:form.message_placeholder')}
                    />
                  </div>

                  {/* Send Options */}
                  {!showSendOptions ? (
                    <button
                      type="button"
                      onClick={handleShowOptions}
                      className="btn btn-primary w-full md:w-auto"
                    >
                      <Send size={20} className="mr-2" />
                      {t('common:form.submit')}
                    </button>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 font-medium">
                        {t('contact:form.send_via')}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={sendViaWhatsApp}
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
                        >
                          <MessageCircle size={20} />
                          WhatsApp
                        </button>
                        <button
                          type="button"
                          onClick={sendViaEmail}
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
                        >
                          <Mail size={20} />
                          E-mail
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowSendOptions(false)}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        {t('contact:form.cancel')}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161469.93025681867!2d4.2288888!3d50.8465573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c5c9d8b8d%3A0x3017d20e1f3e4e0!2sBrussels%2C%20Belgium!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our location"
        />
      </section>
    </>
  )
}
