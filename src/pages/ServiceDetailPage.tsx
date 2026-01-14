import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { useLocalizedPath } from '@/hooks/useLocalizedPath'
import { ArrowRight, Check, Expand, ChevronDown, ChevronUp } from 'lucide-react'
import { Lightbox } from '@/components/ui'

// SEO-optimized image alt texts for each service
const serviceImageAlts: Record<string, Record<string, string[]>> = {
  pergola: {
    fr: [
      'Pergola bioclimatique aluminium avec lames orientables - Belgique',
      'Pergola terrasse avec vue panoramique - Installation professionnelle',
      'Pergola avec éclairage LED intégré de nuit',
      'Pergola bioclimatique zone piscine - Design moderne',
      'Pergola lames ouvertes laissant passer la lumière',
      'Pergola adossée maison - Intégration parfaite',
    ],
    nl: [
      'Bioklimatische aluminium pergola met verstelbare lamellen - België',
      'Terras pergola met panoramisch uitzicht - Professionele installatie',
      'Pergola met geïntegreerde LED-verlichting bij nacht',
      'Bioklimatische pergola zwembadzone - Modern design',
      'Pergola met open lamellen voor lichtdoorval',
      'Aan huis bevestigde pergola - Perfecte integratie',
    ],
    en: [
      'Bioclimatic aluminum pergola with adjustable louvers - Belgium',
      'Terrace pergola with panoramic view - Professional installation',
      'Pergola with integrated LED lighting at night',
      'Bioclimatic pergola pool area - Modern design',
      'Pergola with open louvers letting light through',
      'House-attached pergola - Perfect integration',
    ],
    de: [
      'Bioklimatische Aluminium-Pergola mit verstellbaren Lamellen - Belgien',
      'Terrassen-Pergola mit Panoramablick - Professionelle Installation',
      'Pergola mit integrierter LED-Beleuchtung bei Nacht',
      'Bioklimatische Pergola Poolbereich - Modernes Design',
      'Pergola mit offenen Lamellen für Lichteinfall',
      'An Haus angebaute Pergola - Perfekte Integration',
    ],
    tr: [
      'Ayarlanabilir lamelli biyoklimatik alüminyum pergola - Belçika',
      'Panoramik manzaralı teras pergolası - Profesyonel kurulum',
      'Gece entegre LED aydınlatmalı pergola',
      'Havuz alanı biyoklimatik pergola - Modern tasarım',
      'Işık geçiren açık lamelli pergola',
      'Eve bitişik pergola - Mükemmel entegrasyon',
    ],
  },
  veranda: {
    fr: [
      'Véranda aluminium moderne avec double vitrage - Belgique',
      'Intérieur véranda salon lumineux et confortable',
      'Véranda extérieur design contemporain',
      'Véranda avec vue sur jardin - Extension maison',
      'Véranda baies vitrées coulissantes aluminium',
      'Véranda cosy en hiver - Isolation thermique',
    ],
    nl: [
      'Moderne aluminium veranda met dubbel glas - België',
      'Lichte en comfortabele veranda woonkamer interieur',
      'Hedendaags design veranda buitenaanzicht',
      'Veranda met tuinzicht - Woninguitbreiding',
      'Veranda aluminium schuifpuien',
      'Gezellige veranda in de winter - Thermische isolatie',
    ],
    en: [
      'Modern aluminum veranda with double glazing - Belgium',
      'Bright and comfortable veranda living room interior',
      'Contemporary design veranda exterior view',
      'Veranda with garden view - Home extension',
      'Veranda aluminum sliding doors',
      'Cozy veranda in winter - Thermal insulation',
    ],
    de: [
      'Moderne Aluminium-Veranda mit Doppelverglasung - Belgien',
      'Helles und gemütliches Veranda-Wohnzimmer-Interieur',
      'Zeitgenössisches Design Veranda Außenansicht',
      'Veranda mit Gartenblick - Hauserweiterung',
      'Veranda Aluminium-Schiebetüren',
      'Gemütliche Veranda im Winter - Wärmedämmung',
    ],
    tr: [
      'Çift camlı modern alüminyum veranda - Belçika',
      'Aydınlık ve konforlu veranda oturma odası iç mekan',
      'Çağdaş tasarım veranda dış görünüm',
      'Bahçe manzaralı veranda - Ev uzantısı',
      'Veranda alüminyum sürgülü kapılar',
      'Kışın sıcak veranda - Termal yalıtım',
    ],
  },
  carport: {
    fr: [
      'Carport aluminium moderne design minimaliste - Belgique',
      'Carport double voitures aluminium robuste',
      'Carport simple moderne avec toit plat',
      'Carport avec éclairage LED intégré',
      'Carport avec panneaux solaires - Écologique',
      'Carport avec portail entrée assorti',
    ],
    nl: [
      'Moderne aluminium carport minimalistisch design - België',
      'Robuuste dubbele aluminium carport',
      'Moderne enkele carport met plat dak',
      'Carport met geïntegreerde LED-verlichting',
      'Carport met zonnepanelen - Ecologisch',
      'Carport met bijpassende toegangspoort',
    ],
    en: [
      'Modern aluminum carport minimalist design - Belgium',
      'Robust double aluminum carport',
      'Modern single carport with flat roof',
      'Carport with integrated LED lighting',
      'Carport with solar panels - Ecological',
      'Carport with matching entrance gate',
    ],
    de: [
      'Moderner Aluminium-Carport minimalistisches Design - Belgien',
      'Robuster Doppel-Aluminium-Carport',
      'Moderner Einzel-Carport mit Flachdach',
      'Carport mit integrierter LED-Beleuchtung',
      'Carport mit Solarpanelen - Ökologisch',
      'Carport mit passendem Eingangstor',
    ],
    tr: [
      'Minimalist tasarım modern alüminyum carport - Belçika',
      'Sağlam çift araç alüminyum carport',
      'Düz çatılı modern tek carport',
      'Entegre LED aydınlatmalı carport',
      'Güneş panelli carport - Ekolojik',
      'Uyumlu giriş kapılı carport',
    ],
  },
  window: {
    fr: [
      'Fenêtres aluminium thermique haute performance - Belgique',
      'Fenêtres sol-plafond aluminium grande luminosité',
      'Fenêtres angle aluminium design moderne',
      'Fenêtres chambre isolation phonique',
      'Fenêtres cuisine aluminium facile entretien',
      'Fenêtres coulissantes aluminium gain espace',
    ],
    nl: [
      'Hoogwaardige thermische aluminium ramen - België',
      'Vloer-tot-plafond aluminium ramen veel licht',
      'Hoek aluminium ramen modern design',
      'Slaapkamer ramen geluidsisolatie',
      'Keuken aluminium ramen makkelijk onderhoud',
      'Schuiframen aluminium ruimtebesparend',
    ],
    en: [
      'High-performance thermal aluminum windows - Belgium',
      'Floor-to-ceiling aluminum windows high brightness',
      'Corner aluminum windows modern design',
      'Bedroom windows sound insulation',
      'Kitchen aluminum windows easy maintenance',
      'Sliding aluminum windows space saving',
    ],
    de: [
      'Hochleistungs-Thermik-Aluminiumfenster - Belgien',
      'Bodentiefe Aluminiumfenster hohe Helligkeit',
      'Eck-Aluminiumfenster modernes Design',
      'Schlafzimmerfenster Schalldämmung',
      'Küchen-Aluminiumfenster pflegeleicht',
      'Schiebe-Aluminiumfenster platzsparend',
    ],
    tr: [
      'Yüksek performanslı termal alüminyum pencereler - Belçika',
      'Yerden tavana alüminyum pencereler yüksek parlaklık',
      'Köşe alüminyum pencereler modern tasarım',
      'Yatak odası pencereleri ses yalıtımı',
      'Mutfak alüminyum pencereler kolay bakım',
      'Sürgülü alüminyum pencereler yer tasarrufu',
    ],
  },
  shutter: {
    fr: [
      'Volets roulants aluminium motorisés - Belgique',
      'Volets roulants extérieur fermés sécurité',
      'Volets roulants position mi-hauteur',
      'Volets roulants chambre obscurité totale',
      'Volets roulants haute sécurité anti-effraction',
      'Volets roulants variété couleurs RAL',
    ],
    nl: [
      'Gemotoriseerde aluminium rolluiken - België',
      'Gesloten buitenrolluiken veiligheid',
      'Rolluiken halfhoog positie',
      'Slaapkamer rolluiken totale verduistering',
      'Inbraakwerende veiligheidsrolluiken',
      'Rolluiken RAL kleurenvariatie',
    ],
    en: [
      'Motorized aluminum roller shutters - Belgium',
      'Closed exterior shutters security',
      'Shutters half-height position',
      'Bedroom shutters total blackout',
      'High security anti-burglary shutters',
      'Shutters RAL color variety',
    ],
    de: [
      'Motorisierte Aluminium-Rollläden - Belgien',
      'Geschlossene Außenrollläden Sicherheit',
      'Rollläden halbhohe Position',
      'Schlafzimmer-Rollläden totale Verdunkelung',
      'Einbruchsichere Hochsicherheits-Rollläden',
      'Rollläden RAL-Farbvielfalt',
    ],
    tr: [
      'Motorlu alüminyum panjurlar - Belçika',
      'Kapalı dış panjurlar güvenlik',
      'Yarı yükseklik konumunda panjurlar',
      'Yatak odası panjurları tam karartma',
      'Hırsızlık önleyici yüksek güvenlikli panjurlar',
      'RAL renk çeşitliliği panjurlar',
    ],
  },
  garage: {
    fr: [
      'Porte garage sectionnelle motorisée - Belgique',
      'Porte garage sectionnelle finition bois',
      'Porte garage sectionnelle blanche moderne',
      'Porte garage double contemporaine',
      'Porte garage ouverte vue intérieur',
      'Porte garage éclairage nuit LED',
    ],
    nl: [
      'Gemotoriseerde sectionele garagepoort - België',
      'Sectionele garagepoort houtafwerking',
      'Moderne witte sectionele garagepoort',
      'Hedendaagse dubbele garagepoort',
      'Open garagepoort binnenaanzicht',
      'Garagepoort nachtverlichting LED',
    ],
    en: [
      'Motorized sectional garage door - Belgium',
      'Sectional garage door wood finish',
      'Modern white sectional garage door',
      'Contemporary double garage door',
      'Open garage door interior view',
      'Garage door night LED lighting',
    ],
    de: [
      'Motorisiertes Sektional-Garagentor - Belgien',
      'Sektional-Garagentor Holzoptik',
      'Modernes weißes Sektional-Garagentor',
      'Zeitgenössisches Doppel-Garagentor',
      'Offenes Garagentor Innenansicht',
      'Garagentor Nacht-LED-Beleuchtung',
    ],
    tr: [
      'Motorlu seksiyonel garaj kapısı - Belçika',
      'Ahşap görünümlü seksiyonel garaj kapısı',
      'Modern beyaz seksiyonel garaj kapısı',
      'Çağdaş çift garaj kapısı',
      'Açık garaj kapısı iç görünüm',
      'Garaj kapısı gece LED aydınlatma',
    ],
  },
}

const serviceImages: Record<string, string[]> = {
  pergola: [
    '/images/pergola/pergola-hero.jpg',
    '/images/pergola/pergola-terrace-view.jpg',
    '/images/pergola/pergola-night-led.jpg',
    '/images/pergola/pergola-pool-area.jpg',
    '/images/pergola/pergola-louvers-open.jpg',
    '/images/pergola/pergola-attached-house.jpg',
  ],
  veranda: [
    '/images/veranda/veranda-hero.jpg',
    '/images/veranda/veranda-interior-living.jpg',
    '/images/veranda/veranda-exterior-modern.jpg',
    '/images/veranda/veranda-garden-view.jpg',
    '/images/veranda/veranda-sliding-doors.jpg',
    '/images/veranda/veranda-winter-cozy.jpg',
  ],
  carport: [
    '/images/carport/carport-hero.jpg',
    '/images/carport/carport-double.jpg',
    '/images/carport/carport-single-modern.jpg',
    '/images/carport/carport-led-lighting.jpg',
    '/images/carport/carport-solar-panels.jpg',
    '/images/carport/carport-entrance-gate.jpg',
  ],
  window: [
    '/images/window/window-hero.jpg',
    '/images/window/window-floor-ceiling.jpg',
    '/images/window/window-corner.jpg',
    '/images/window/window-bedroom.jpg',
    '/images/window/window-kitchen.jpg',
    '/images/window/window-sliding.jpg',
  ],
  shutter: [
    '/images/shutter/shutter-hero.jpg',
    '/images/shutter/shutter-exterior-closed.jpg',
    '/images/shutter/shutter-exterior-half.jpg',
    '/images/shutter/shutter-bedroom-interior.jpg',
    '/images/shutter/shutter-security.jpg',
    '/images/shutter/shutter-colors-variety.jpg',
  ],
  garage: [
    '/images/garage/garage-hero.jpg',
    '/images/garage/garage-sectional-wood.jpg',
    '/images/garage/garage-sectional-white.jpg',
    '/images/garage/garage-double-modern.jpg',
    '/images/garage/garage-open-interior.jpg',
    '/images/garage/garage-night-lights.jpg',
  ],
}

// FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-primary-600 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const { t, locale } = useTranslation(['services', 'common'])
  const { localizedPath } = useLocalizedPath()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const service = serviceId || 'pergola'
  const images = serviceImages[service] || serviceImages.pergola
  const currentLang = locale as 'fr' | 'nl' | 'en' | 'de' | 'tr'
  const imageAlts = serviceImageAlts[service]?.[currentLang] || serviceImageAlts[service]?.['en'] || []

  const features = t(`services:${service}.features.items`, { returnObjects: true }) as string[]
  const benefits = t(`services:${service}.benefits.items`, { returnObjects: true }) as string[]
  const serviceTitle = t(`services:${service}.title`)

  // Get FAQ items if they exist
  const faqItems = t(`services:${service}.faq.items`, { returnObjects: true, defaultValue: [] }) as { question: string; answer: string }[]
  const hasFaq = Array.isArray(faqItems) && faqItems.length > 0

  // Generate FAQ Schema for SEO
  const faqSchema = hasFaq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Helmet>
        <title>{serviceTitle} | Archi Construction & Veranda</title>
        <meta name="description" content={t(`services:meta.${service}.description`)} />
        <meta property="og:title" content={`${serviceTitle} | Archi Construction & Veranda`} />
        <meta property="og:description" content={t(`services:meta.${service}.description`)} />
        <meta property="og:image" content={`https://archi.constructionveranda.com${images[0]}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://archi.constructionveranda.com/${currentLang}/services/${service}`} />
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary-400 font-medium mb-4">
              {t(`services:${service}.subtitle`)}
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {serviceTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t(`services:${service}.description`)}
            </p>
            <a
              href={localizedPath('/quote')}
              className="btn btn-primary text-lg"
            >
              {t('common:cta.request_quote')}
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">
                {t(`services:${service}.features.title`)}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-8">
                {t(`services:${service}.benefits.title`)}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">
            {t('common:service_detail.gallery')}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={imageAlts[index] || `${serviceTitle} - ${t('common:service_detail.gallery')} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Expand size={24} className="text-primary-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        title={`${serviceTitle} - ${t('common:service_detail.gallery')}`}
      />

      {/* FAQ Section */}
      {hasFaq && (
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-8 text-center">
                {t(`services:${service}.faq.title`)}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8">
                {faqItems.map((item, index) => (
                  <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            {t('common:service_detail.interested', { service: serviceTitle.toLowerCase() })}
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            {t('common:service_detail.interested_description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={localizedPath('/quote')}
              className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg"
            >
              {t('common:cta.request_quote')}
            </a>
            <a
              href={localizedPath('/contact')}
              className="btn bg-transparent text-white border-2 border-white hover:bg-white/10 text-lg"
            >
              {t('common:service_detail.contact')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
