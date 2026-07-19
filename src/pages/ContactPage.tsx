import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import PropertyMap from '../components/Map/PropertyMap'

const offices = [
  {
    city: 'Beverly Hills',
    address: '123 Luxury Ave, Beverly Hills, CA 90210',
    phone: '+1 (555) 123-4567',
    email: 'beverlyhills@luxuryrealty.com',
    hours: 'Mon-Fri: 9AM-6PM',
    coordinates: [34.0736, -118.4004] as [number, number],
  },
  {
    city: 'Miami Beach',
    address: '456 Ocean Drive, Miami Beach, FL 33139',
    phone: '+1 (555) 234-5678',
    email: 'miami@luxuryrealty.com',
    hours: 'Mon-Fri: 9AM-6PM',
    coordinates: [25.7617, -80.1918] as [number, number],
  },
  {
    city: 'New York',
    address: '785 Park Avenue, New York, NY 10021',
    phone: '+1 (555) 345-6789',
    email: 'newyork@luxuryrealty.com',
    hours: 'Mon-Fri: 9AM-6PM',
    coordinates: [40.7128, -74.0060] as [number, number],
  },
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function ContactPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'
    }`}>
      {/* Hero */}
      <div className={`relative py-24 overflow-hidden ${
        theme === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-navy-600 to-navy-700'
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 glass rounded-full text-gold-500 text-sm font-medium mb-6"
          >
            We'd Love To Hear From You
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Ready to find your perfect property? Our team of experts is here to help you every step of the way.
          </motion.p>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl ${
            theme === 'dark' ? 'glass' : 'bg-white shadow-xl border border-surface-200'
          }`}
        >
          {[
            { icon: Phone, label: 'Call Us', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
            { icon: Mail, label: 'Email Us', value: 'info@luxuryrealty.com', href: 'mailto:info@luxuryrealty.com' },
            { icon: MapPin, label: 'Visit Us', value: 'Beverly Hills, CA', href: '#' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 p-4 rounded-xl transition-colors group ${
                  theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-surface-50'
                }`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-surface-400'}`}>
                    {item.label}
                  </div>
                  <div className={`font-medium text-sm group-hover:text-gold-500 transition-colors ${
                    theme === 'dark' ? 'text-white' : 'text-navy-700'
                  }`}>
                    {item.value}
                  </div>
                </div>
              </a>
            )
          })}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className={`rounded-2xl p-8 md:p-10 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <h2 className={`font-heading text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-navy-700'
                  }`}>
                    Send Us a Message
                  </h2>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder-white/30'
                          : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder-white/30'
                          : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white placeholder-white/30'
                          : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                        theme === 'dark'
                          ? 'bg-white/5 border border-white/10 text-white'
                          : 'bg-surface-50 border border-surface-200 text-navy-700'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Property Buying</option>
                      <option value="selling">Property Selling</option>
                      <option value="renting">Luxury Rentals</option>
                      <option value="investment">Investment Advisory</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ideal property or any questions you have..."
                    className={`w-full px-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 text-white placeholder-white/30'
                        : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                    }`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="btn w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-gold-500/25 transition-shadow"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Office Hours */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-gold-500" />
                <h3 className={`font-heading text-lg font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'By Appointment' },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className={`flex justify-between py-3 border-b ${
                      theme === 'dark' ? 'border-white/10' : 'border-surface-100'
                    }`}
                  >
                    <span className={theme === 'dark' ? 'text-white/60' : 'text-surface-500'}>
                      {schedule.day}
                    </span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-navy-700'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <h3 className={`font-heading text-lg font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-navy-700'
              }`}>
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socials.map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'bg-white/5 text-white/60 hover:text-gold-500 hover:bg-white/10'
                          : 'bg-surface-50 text-surface-500 hover:text-gold-600 hover:bg-surface-100'
                      }`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className={`rounded-2xl p-8 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <h3 className={`font-heading text-lg font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-navy-700'
              }`}>
                Quick Questions
              </h3>
              <div className="space-y-3">
                {[
                  'How do I schedule a property tour?',
                  'What areas do you serve?',
                  'Do you offer virtual consultations?',
                ].map((q) => (
                  <div
                    key={q}
                    className={`flex items-center justify-between py-3 border-b cursor-pointer group ${
                      theme === 'dark' ? 'border-white/10' : 'border-surface-100'
                    }`}
                  >
                    <span className={`text-sm group-hover:text-gold-500 transition-colors ${
                      theme === 'dark' ? 'text-white/70' : 'text-surface-600'
                    }`}>
                      {q}
                    </span>
                    <ArrowRight size={14} className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Offices */}
      <div className={`py-20 ${theme === 'dark' ? 'bg-navy-700' : 'bg-surface-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
              Our Locations
            </span>
            <h2 className={`section-heading text-4xl font-bold mt-4 ${
              theme === 'dark' ? 'text-white' : 'text-navy-700'
            }`}>
              Visit Our <span className="text-gradient">Offices</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-8 text-center transition-all ${
                  theme === 'dark'
                    ? 'glass hover:border-gold-500/30'
                    : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className={`font-heading text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  {office.city}
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
                  {office.address}
                </p>
                <div className={`text-sm space-y-1 ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                  <p>{office.hours}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <PropertyMap
          markers={offices.map((office) => ({
            position: office.coordinates,
            title: office.city,
            popup: office.address,
          }))}
          center={[36.0, -96.0]}
          zoom={4}
          className="h-80 border border-surface-200"
        />
      </div>
    </div>
  )
}
