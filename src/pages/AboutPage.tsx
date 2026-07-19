import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  TrendingUp,
  Users,
  Award,
  Globe,
  Heart,
  Target,
  Gem,
  ArrowRight,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const stats = [
  { icon: TrendingUp, value: '$2B+', label: 'Properties Sold' },
  { icon: Users, value: '1,200+', label: 'Happy Clients' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Globe, value: '25+', label: 'Countries' },
]

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about connecting people with their dream homes.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every interaction and transaction.',
  },
  {
    icon: Gem,
    title: 'Integrity',
    description: 'Transparent, honest, and always acting in your best interest.',
  },
]

const team = [
  {
    name: 'Victoria Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'With 20+ years in luxury real estate, Victoria has built the most trusted name in premium property.',
  },
  {
    name: 'Alexander Reed',
    role: 'Director of Sales',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Alexander brings a unique blend of market analysis and client relations to every deal.',
  },
  {
    name: 'Emily Davis',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Emily crafts the marketing strategies that give our properties maximum global exposure.',
  },
  {
    name: 'Michael Chen',
    role: 'Investment Advisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Michael\'s financial expertise helps clients build wealth through strategic property investments.',
  },
]

const milestones = [
  { year: '2009', title: 'Founded', description: 'LuxuryRealty was established in Beverly Hills with a vision to redefine luxury real estate.' },
  { year: '2013', title: 'First $100M', description: 'Reached our first $100 million in cumulative sales within just four years.' },
  { year: '2017', title: 'Global Expansion', description: 'Expanded operations to Miami, New York, and international markets.' },
  { year: '2020', title: 'Digital Innovation', description: 'Launched virtual tours and AI-powered property matching technology.' },
  { year: '2024', title: '$2B Milestone', description: 'Surpassed $2 billion in total property sales with 1,200+ satisfied clients.' },
]

export default function AboutPage() {
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
          <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-gold-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 glass rounded-full text-gold-500 text-sm font-medium mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-gradient">LuxuryRealty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            For over 15 years, we've been connecting discerning clients with exceptional properties. 
            Our commitment to excellence has made us the most trusted name in luxury real estate.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl ${
            theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'
          }`}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <Icon size={32} className="text-gold-500 mx-auto mb-3" />
                <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Mission & Values */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Our Mission
            </span>
            <h2 className={`section-heading text-4xl font-bold mt-4 mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Redefining <span className="text-gradient">Luxury Living</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-white/70' : 'text-surface-600'
            }`}>
              Our mission is to provide an unparalleled real estate experience by combining 
              deep market expertise with personalized service. We believe that finding a home 
              should be as exceptional as the home itself.
            </p>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-white/70' : 'text-surface-600'
            }`}>
              Every client receives a bespoke journey tailored to their unique vision, 
              backed by our extensive network and cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className={`text-center p-6 rounded-2xl ${
                    theme === 'dark'
                      ? 'glass'
                      : 'bg-white shadow-lg border border-surface-200'
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-navy-700" />
                  </div>
                  <h3 className={`font-heading text-lg font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-navy-700'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className={`py-24 ${theme === 'dark' ? 'bg-navy-700' : 'bg-surface-100'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Our Journey
            </span>
            <h2 className={`section-heading text-4xl font-bold mt-4 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Key <span className="text-gradient">Milestones</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gold-500/30" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-6 rounded-2xl ${
                    theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
                  }`}>
                    <div className="text-gold-500 font-bold text-sm mb-1">{m.year}</div>
                    <h3 className={`font-heading text-xl font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-navy-700'
                    }`}>
                      {m.title}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                      {m.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gold-500 rounded-full flex-shrink-0 relative z-10 ring-4 ring-navy-800" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
            Meet The Experts
          </span>
            <h2 className={`section-heading text-4xl font-bold mt-4 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Our <span className="text-gradient">Team</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group rounded-2xl overflow-hidden text-center transition-all duration-300 ${
                theme === 'dark'
                  ? 'glass hover:border-gold-500/30'
                  : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className={`font-heading text-lg font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  {member.name}
                </h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{member.role}</p>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ${
            theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'
          }`}
        >
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            Let's Work Together
          </h2>
          <p className={`max-w-xl mx-auto mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
            Experience the LuxuryRealty difference. Get in touch and let us help you find your dream property.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-xl hover:shadow-gold-500/25 transition-shadow flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={18} />
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
                View Properties
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
