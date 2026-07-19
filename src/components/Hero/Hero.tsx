import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Bed, Bath } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-surface-50 via-surface-100 to-gold-50'
      }`}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className={`absolute inset-0 opacity-[0.03] ${
          theme === 'dark' ? 'opacity-[0.05]' : 'opacity-[0.03]'
        }`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,168,83,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-2 rounded-full text-gold-500 text-sm font-medium mb-6 ${
                theme === 'dark' ? 'glass' : 'bg-gold-50 border border-gold-200'
              }`}
            >
              Premium Real Estate Collection
            </motion.span>

            <h1
              className={`font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-navy-700'
              }`}
            >
              Find Your
              <span className="block text-gradient">Dream Home</span>
            </h1>

            <p
              className={`text-lg mb-8 max-w-lg leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-surface-600'
              }`}
            >
              Discover exceptional properties in the most coveted locations.
              Our curated collection features luxury homes, penthouses, and
              exclusive estates.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#properties"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-shadow"
              >
                Explore Properties
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn px-8 py-4 font-semibold rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'glass text-white hover:bg-white/10'
                    : 'border border-navy-200 text-navy-700 hover:bg-navy-50'
                }`}
              >
                Virtual Tour
              </motion.button>
            </div>

            <div className="flex gap-8">
              {[
                { number: '500+', label: 'Properties' },
                { number: '98%', label: 'Satisfaction' },
                { number: '15+', label: 'Years Experience' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                  <div
                    className={`text-sm ${
                      theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                    }`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div
              className={`rounded-2xl p-6 relative ${
                theme === 'dark'
                  ? 'glass'
                  : 'bg-white shadow-xl border border-surface-200'
              }`}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/25">
                <span className="text-navy-700 font-bold text-sm">NEW</span>
              </div>
              <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Modern Penthouse Suite
              </h3>
              <div
                className={`flex items-center gap-4 text-sm mb-4 ${
                  theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                }`}
              >
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> Beverly Hills
                </span>
                <span className="flex items-center gap-1">
                  <Bed size={14} /> 4 Beds
                </span>
                <span className="flex items-center gap-1">
                  <Bath size={14} /> 3 Baths
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gradient">$4,500,000</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-gold-500 transition-colors ${
                    theme === 'dark'
                      ? 'glass hover:bg-white/10'
                      : 'border border-gold-200 hover:bg-gold-50'
                  }`}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#properties"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`flex flex-col items-center transition-colors ${
            theme === 'dark'
              ? 'text-white/60 hover:text-gold-500'
              : 'text-surface-400 hover:text-gold-600'
          }`}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
