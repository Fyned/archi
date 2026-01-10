import { Helmet } from 'react-helmet-async'
import { useTranslation } from '@/hooks/useTranslation'
import { Award, Users, Target, Heart } from 'lucide-react'

const values = [
  { key: 'quality', icon: Award },
  { key: 'team', icon: Users },
  { key: 'mission', icon: Target },
  { key: 'passion', icon: Heart },
]

export default function AboutPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Helmet>
        <title>{t('nav.about')} | Archi Construction & Veranda</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-primary-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              {t('nav.about')}
            </h1>
            <p className="text-xl text-gray-300">
              Uw partner voor hoogwaardige buitenconstructies sinds 2009
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Ons Verhaal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Archi Construction & Veranda werd in 2009 opgericht met een duidelijke missie:
                  het leveren van hoogwaardige buitenconstructies die het leven van onze klanten
                  verrijken.
                </p>
                <p>
                  Wat begon als een klein familiebedrijf is uitgegroeid tot een gerenommeerde
                  specialist in bioklimatische pergola's, aluminium veranda's en carports.
                  Met meer dan 500 succesvolle projecten in België en omliggende landen,
                  hebben we een solide reputatie opgebouwd.
                </p>
                <p>
                  Onze kracht ligt in de combinatie van Belgisch vakmanschap, premium materialen
                  en persoonlijke service. Elk project wordt met dezelfde toewijding en aandacht
                  voor detail uitgevoerd, ongeacht de omvang.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Our team at work"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Jaar Ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Onze Waarden
            </h2>
            <p className="text-gray-600">
              De principes die ons werk elke dag sturen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.key} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {value.key === 'quality' && 'Kwaliteit'}
                    {value.key === 'team' && 'Teamwork'}
                    {value.key === 'mission' && 'Missie'}
                    {value.key === 'passion' && 'Passie'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.key === 'quality' && 'Alleen de beste materialen en vakmanschap'}
                    {value.key === 'team' && 'Ervaren professionals die samenwerken'}
                    {value.key === 'mission' && 'Uw droomproject realiseren'}
                    {value.key === 'passion' && 'Liefde voor wat we doen'}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">Projecten Voltooid</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">Jaar Ervaring</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-primary-100">Tevreden Klanten</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15</div>
              <div className="text-primary-100">Jaar Garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ons Team
            </h2>
            <p className="text-gray-600">
              Maak kennis met de mensen achter Archi Construction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jan Vermeer', role: 'Oprichter & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
              { name: 'Marie Dubois', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
              { name: 'Peter De Vries', role: 'Hoofd Installatie', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-heading font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Certificaten & Partners
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">ISO 9001</div>
            <div className="text-2xl font-bold text-gray-400">CE Certified</div>
            <div className="text-2xl font-bold text-gray-400">Belgian Quality</div>
            <div className="text-2xl font-bold text-gray-400">15 Year Warranty</div>
          </div>
        </div>
      </section>
    </>
  )
}
