import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Star,
  MapPin,
  Bed,
  Bath,
  Square,
  Quote,
  ChevronDown,
  TrendingUp,
  Users,
  Award,
  Globe,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { properties } from '../data/properties'

const featured = properties.slice(0, 3)

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rating: 5,
    text: 'LuxuryRealty made our dream home a reality. Their attention to detail and personalized service exceeded all expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rating: 5,
    text: 'The investment advisory team helped me build an impressive portfolio. Their market insights are unparalleled.',
  },
  {
    name: 'Emily Davis',
    role: 'Property Seller',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rating: 5,
    text: 'Sold our property above asking price within two weeks. Their marketing strategy is truly exceptional.',
  },
]

const stats = [
  { icon: TrendingUp, value: '$2B+', label: 'Properties Sold' },
  { icon: Users, value: '1,200+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Globe, value: '25+', label: 'Countries' },
]

export default function Home() {
  const { theme } = useTheme()

  return (
    <main>
      {/* ─── Hero ─── */}
      <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${
        theme === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-surface-50 via-surface-100 to-gold-50'
      }`}>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
        <div
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,168,83,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-gold-500 text-sm font-medium mb-6 ${
                  theme === 'dark' ? 'glass' : 'bg-gold-50 border border-gold-200'
                }`}
              >
                <Star size={14} className="fill-gold-500" /> Premium Real Estate Collection
              </motion.span>

              <h1 className={`font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-navy-700'
              }`}>
                Find Your<br /><span className="text-gradient">Dream Home</span>
              </h1>

              <p className={`text-lg mb-8 max-w-lg leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-surface-600'
              }`}>
                Discover exceptional properties in the most coveted locations. Our curated collection features luxury homes, penthouses, and exclusive estates.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/properties">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="btn px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-shadow flex items-center gap-2"
                  >
                    Explore Properties <ArrowRight size={18} />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className={`btn px-8 py-4 font-semibold rounded-lg transition-colors ${
                      theme === 'dark' ? 'glass text-white hover:bg-white/10' : 'border border-navy-200 text-navy-700 hover:bg-navy-50'
                    }`}
                  >
                    Our Story
                  </motion.button>
                </Link>
              </div>

              <div className="flex gap-8">
                {[
                  { number: '500+', label: 'Properties' },
                  { number: '98%', label: 'Satisfaction' },
                  { number: '15+', label: 'Years' },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
              <div className={`rounded-2xl p-6 relative ${theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'}`}>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg shadow-gold-500/25">
                  <span className="text-navy-700 font-bold text-sm">NEW</span>
                </div>
                <div className="aspect-video rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800" alt="Luxury Property" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Modern Penthouse Suite</h3>
                <div className={`flex items-center gap-4 text-sm mb-4 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                  <span className="flex items-center gap-1"><MapPin size={14} /> Beverly Hills</span>
                  <span className="flex items-center gap-1"><Bed size={14} /> 4 Beds</span>
                  <span className="flex items-center gap-1"><Bath size={14} /> 3 Baths</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gradient">$4,500,000</span>
                  <Link to="/property/1">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                      className={`btn px-4 py-2 rounded-lg text-gold-500 transition-colors ${theme === 'dark' ? 'glass hover:bg-white/10' : 'border border-gold-200 hover:bg-gold-50'}`}
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.a href="#featured" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className={`flex flex-col items-center transition-colors ${theme === 'dark' ? 'text-white/60 hover:text-gold-500' : 'text-surface-400 hover:text-gold-600'}`}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </section>

      {/* ─── Featured Properties ─── */}
      <section id="featured" className={`py-24 ${theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">Our Portfolio</span>
              <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
              Featured <span className="text-gradient">Properties</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }}>
                <Link to={`/property/${p.id}`}>
                  <div className={`group rounded-2xl overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'glass hover:border-gold-500/30' : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-gold-500 text-navy-700 text-xs font-semibold rounded-full">{p.tag}</span></div>
                    </div>
                    <div className="p-6">
                      <div className={`flex items-center gap-2 text-sm mb-2 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                        <MapPin size={14} className="text-gold-500" /> {p.location}
                      </div>
                      <h3 className={`font-heading text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white group-hover:text-gold-500' : 'text-navy-700 group-hover:text-gold-600'}`}>
                        {p.title}
                      </h3>
                      <div className={`flex items-center gap-4 text-sm mb-4 pb-4 border-b ${theme === 'dark' ? 'text-white/60 border-white/10' : 'text-surface-500 border-surface-200'}`}>
                        <span className="flex items-center gap-1"><Bed size={14} /> {p.beds}</span>
                        <span className="flex items-center gap-1"><Bath size={14} /> {p.baths}</span>
                        <span className="flex items-center gap-1"><Square size={14} /> {p.sqft}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gradient">{p.price}</span>
                        <span className={`px-4 py-2 rounded-lg text-gold-500 text-sm ${theme === 'dark' ? 'glass' : 'border border-gold-200'}`}>View</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <Link to="/properties">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className={`btn px-8 py-4 rounded-lg text-gold-500 font-semibold transition-colors ${theme === 'dark' ? 'glass hover:bg-gold-500/10' : 'border border-gold-200 hover:bg-gold-50'}`}
              >
                View All Properties
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className={`py-24 ${theme === 'dark' ? 'bg-navy-700' : 'bg-surface-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
                Trusted by <span className="text-gradient">Thousands</span>
              </h2>
              <p className={`mb-8 leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-surface-600'}`}>
                With over 15 years of experience in luxury real estate, we've built a reputation for excellence, integrity, and unparalleled service.
              </p>
              <div className="flex flex-wrap gap-6">
                {['Personalized Service', 'Market Expertise', 'Global Network', 'Premium Properties'].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className={`text-sm ${theme === 'dark' ? 'text-white/80' : 'text-surface-700'}`}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div key={s.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5, scale: 1.05 }}
                    className={`rounded-2xl p-6 text-center ${theme === 'dark' ? 'glass hover:border-gold-500/30' : 'bg-white shadow-lg border border-surface-200'}`}
                  >
                    <Icon size={28} className="text-gold-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gradient mb-1">{s.value}</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>{s.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'}`}>
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl ${theme === 'dark' ? 'bg-gold-500/10' : 'bg-gold-200/30'}`} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">Testimonials</span>
            <h2 className={`section-heading text-4xl font-bold mt-4 ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 relative ${theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'}`}
              >
                <Quote className={`absolute top-6 right-6 w-10 h-10 ${theme === 'dark' ? 'text-gold-500/20' : 'text-gold-300/50'}`} />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} className="fill-gold-500 text-gold-500" />)}
                </div>
                <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-surface-600'}`}>"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className={`w-12 h-12 rounded-full object-cover ${theme === 'dark' ? 'border-2 border-gold-500/30' : 'border-2 border-gold-200'}`} />
                  <div>
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>{t.name}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'}`}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className={`section-heading text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
              Ready to Find Your Dream Home?
            </h2>
            <p className={`max-w-xl mx-auto mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
              Let our experts guide you to the perfect property. Your dream home awaits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="btn px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-shadow flex items-center gap-2"
                >
                  Get Started <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/properties">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className={`btn px-8 py-4 font-semibold rounded-lg transition-colors ${theme === 'dark' ? 'glass text-white hover:bg-white/10' : 'border border-navy-200 text-navy-700 hover:bg-navy-50'}`}
                >
                  Browse Properties
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
