import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui'

// Contact constants
const PHONE_CALL = '+32 487 72 06 29'
const PHONE_WHATSAPP = '+32 493 36 50 29'
const EMAIL = 'info@archiconstructionveranda.be'

export default function ContactPage() {
  const { t } = useTranslation(['contact', 'common'])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Send to Formspree (free tier)
    try {
      const response = await fetch('https://formspree.io/f/xpwzgkqr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      }
    } catch {
      // Fallback: open mailto
      const name = formData.get('name')
      const email = formData.get('email')
      const phone = formData.get('phone')
      const subject = formData.get('subject')
      const message = formData.get('message')

      const mailtoBody = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`
      window.open(`mailto:${EMAIL}?subject=Contact from Website&body=${mailtoBody}`)
      setIsSuccess(true)
    }

    setIsSubmitting(false)
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

                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {t('common:form.success')}
                    </h3>
                    <p className="text-gray-600">
                      {t('contact:form.success_message')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        <option value="pergola">{t('contact:form.subject_pergola')}</option>
                        <option value="veranda">{t('contact:form.subject_veranda')}</option>
                        <option value="carport">{t('contact:form.subject_carport')}</option>
                        <option value="window">{t('contact:form.subject_window')}</option>
                        <option value="shutter">{t('contact:form.subject_shutter')}</option>
                        <option value="garage">{t('contact:form.subject_garage')}</option>
                        <option value="other">{t('contact:form.subject_other')}</option>
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

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {t('common:form.submit')}
                    </Button>
                  </form>
                )}
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
