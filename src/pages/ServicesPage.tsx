import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Home,
  Building2,
  Key,
  TrendingUp,
  Shield,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Clock,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const services = [
  {
    icon: Home,
    title: 'Property Buying',
    description:
      'Expert guidance through every step of your home buying journey. From initial search to closing, we ensure a seamless experience.',
    features: ['Personalized search', 'Market analysis', 'Negotiation support', 'Closing assistance'],
  },
  {
    icon: Building2,
    title: 'Property Selling',
    description:
      'Maximize your property value with our premium marketing strategies, professional staging, and global exposure.',
    features: ['Professional photography', 'Virtual staging', 'Global marketing', 'Price optimization'],
  },
  {
    icon: Key,
    title: 'Luxury Rentals',
    description:
      'Access exclusive rental properties in prime locations with flexible terms and premium amenities.',
    features: ['Short & long term', 'Furnished options', 'Premium locations', 'Concierge service'],
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    description:
      'Strategic insights for premium real estate investments. We help you build wealth through property.',
    features: ['Portfolio analysis', 'Market forecasting', 'Risk assessment', 'ROI optimization'],
  },
  {
    icon: Shield,
    title: 'Legal Support',
    description:
      'Comprehensive legal assistance for all property transactions. Protect your interests at every stage.',
    features: ['Contract review', 'Title verification', 'Compliance check', 'Dispute resolution'],
  },
  {
    icon: HeartHandshake,
    title: 'Concierge Service',
    description:
      'Personalized service tailored to your unique requirements. Your wish is our command.',
    features: ['24/7 availability', 'Relocation help', 'Interior design', 'Property management'],
  },
]

const process = [
  { step: '01', title: 'Consultation', description: 'Share your vision and requirements with our expert team.' },
  { step: '02', title: 'Search & Match', description: 'We curate properties that perfectly match your criteria.' },
  { step: '03', title: 'Tour & Experience', description: 'Visit shortlisted properties with our guided tours.' },
  { step: '04', title: 'Close & Move In', description: 'We handle all paperwork and ensure a smooth closing.' },
]

const stats = [
  { icon: Users, value: '1,200+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Industry Awards' },
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Home, value: '500+', label: 'Properties Sold' },
]

export default function ServicesPage() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'
    }`}>
      {/* Hero */}
      <div className={`relative py-24 overflow-hidden ${
        theme === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-navy-600 to-navy-700'
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gold-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 glass rounded-full text-gold-500 text-sm font-medium mb-6"
          >
            What We Do Best
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Comprehensive real estate solutions designed for discerning clients who demand nothing but the best.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className={`relative -mt-12 z-10 max-w-5xl mx-auto px-6`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl ${
            theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'
          }`}
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center p-4">
                <Icon size={28} className="text-gold-500 mx-auto mb-2" />
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
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
                whileHover={{ y: -10 }}
                className={`group rounded-2xl p-8 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'glass hover:border-gold-500/30'
                    : 'bg-white shadow-lg hover:shadow-xl border border-surface-200 hover:border-gold-300'
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-navy-700" />
                </motion.div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                }`}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold-500 flex-shrink-0" />
                      <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-surface-600'}`}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Process */}
      <div className={`py-24 ${theme === 'dark' ? 'bg-navy-700' : 'bg-surface-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              How It Works
            </span>
            <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-gold-500/20 font-heading mb-4">
                  {step.step}
                </div>
                <h3 className={`font-heading text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                  {step.description}
                </p>
                {i < process.length - 1 && (
                  <ArrowRight
                    size={24}
                    className="absolute top-10 -right-4 text-gold-500/30 hidden md:block"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
            theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'
          }`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className={`section-heading text-3xl md:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Ready to Get Started?
            </h2>
            <p className={`max-w-xl mx-auto mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
              Let our experts help you find the perfect property. Schedule a free consultation today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-shadow"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
              <Link to="/properties">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`btn px-8 py-4 font-semibold rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'glass text-white hover:bg-white/10'
                      : 'border border-navy-200 text-navy-700 hover:bg-navy-50'
                  }`}
                >
                  Browse Properties
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
