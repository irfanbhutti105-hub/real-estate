import { motion } from 'framer-motion'
import { Home, Building2, Key, TrendingUp, Shield, HeartHandshake } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const services = [
  {
    icon: Home,
    title: 'Property Buying',
    description: 'Expert guidance through every step of your home buying journey.',
  },
  {
    icon: Building2,
    title: 'Property Selling',
    description: 'Maximize your property value with our premium marketing strategies.',
  },
  {
    icon: Key,
    title: 'Luxury Rentals',
    description: 'Access exclusive rental properties in prime locations.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description: 'Strategic insights for premium real estate investments.',
  },
  {
    icon: Shield,
    title: 'Legal Support',
    description: 'Comprehensive legal assistance for all property transactions.',
  },
  {
    icon: HeartHandshake,
    title: 'Concierge Service',
    description: 'Personalized service tailored to your unique requirements.',
  },
]

export default function Services() {
  const { theme } = useTheme()

  return (
    <section id="services" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            Premium <span className="text-gradient">Services</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-surface-500'
          }`}>
            Comprehensive real estate solutions designed for discerning clients
            who demand nothing but the best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group rounded-2xl p-8 text-center transition-all duration-300 ${
                  theme === 'dark'
                    ? 'glass hover:border-gold-500/30'
                    : 'bg-surface-50 hover:bg-surface-100 border border-surface-200 hover:border-gold-300 shadow-sm hover:shadow-lg'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="w-8 h-8 text-navy-700" />
                </motion.div>
                <h3 className={`font-heading text-xl font-semibold mb-3 transition-colors ${
                  theme === 'dark'
                    ? 'text-white group-hover:text-gold-500'
                    : 'text-navy-700 group-hover:text-gold-600'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
