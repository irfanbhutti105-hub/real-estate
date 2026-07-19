import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function Contact() {
  const { theme } = useTheme()

  return (
    <section id="contact" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-surface-100'
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
            Get In Touch
          </span>
          <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-surface-500'
          }`}>
            Ready to find your perfect property? Our team of experts
            is here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8 mb-8">
              {[
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: Mail, label: 'Email', value: 'info@luxuryrealty.com' },
                { icon: MapPin, label: 'Office', value: '123 Luxury Ave, Beverly Hills, CA' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white/90' : 'text-navy-700'
                      }`}>
                        {item.label}
                      </h4>
                      <p className={theme === 'dark' ? 'text-white/60' : 'text-surface-500'}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={`rounded-2xl p-6 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <h3 className={`font-heading text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-navy-700'
              }`}>
                Office Hours
              </h3>
              <div className={`space-y-2 ${
                theme === 'dark' ? 'text-white/60' : 'text-surface-500'
              }`}>
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className={`rounded-2xl p-8 space-y-6 ${
              theme === 'dark' ? 'glass' : 'bg-white shadow-lg border border-surface-200'
            }`}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                  }`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                      theme === 'dark'
                        ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white'
                        : 'bg-surface-50 border border-surface-200 focus:border-gold-500 text-navy-700'
                    }`}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                  }`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                      theme === 'dark'
                        ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white'
                        : 'bg-surface-50 border border-surface-200 focus:border-gold-500 text-navy-700'
                    }`}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                    theme === 'dark'
                      ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white'
                      : 'bg-surface-50 border border-surface-200 focus:border-gold-500 text-navy-700'
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                }`}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                    theme === 'dark'
                      ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white'
                      : 'bg-surface-50 border border-surface-200 focus:border-gold-500 text-navy-700'
                  }`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                }`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors resize-none ${
                    theme === 'dark'
                      ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white'
                      : 'bg-surface-50 border border-surface-200 focus:border-gold-500 text-navy-700'
                  }`}
                  placeholder="How can we help you?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-gold-500/25 transition-shadow"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
