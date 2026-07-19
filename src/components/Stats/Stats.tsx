import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import FloatingElements from '../3D/FloatingElements'

const stats = [
  { icon: TrendingUp, value: '$2B+', label: 'Properties Sold' },
  { icon: Users, value: '1,200+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Globe, value: '25+', label: 'Countries' },
]

export default function Stats() {
  const { theme } = useTheme()

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-700' : 'bg-surface-100'
    }`}>
      <FloatingElements />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className={`mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-white/60' : 'text-surface-600'
            }`}>
              With over 15 years of experience in luxury real estate,
              we've built a reputation for excellence, integrity, and
              unparalleled service. Our deep market knowledge and
              global network ensure we find the perfect property for
              every client.
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                'Personalized Service',
                'Market Expertise',
                'Global Network',
                'Premium Properties',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`rounded-2xl p-6 text-center transition-all ${
                    theme === 'dark'
                      ? 'glass hover:border-gold-500/30'
                      : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
