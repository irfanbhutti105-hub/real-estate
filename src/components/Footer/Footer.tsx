import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const footerLinks = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/properties' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  Services: [
    { name: 'Property Buying', href: '/services' },
    { name: 'Property Selling', href: '/services' },
    { name: 'Luxury Rentals', href: '/services' },
    { name: 'Investment Advisory', href: '/services' },
  ],
  Support: [
    { name: 'FAQs', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
]

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`relative transition-colors duration-300 border-t ${
      theme === 'dark' ? 'bg-navy-700/50 border-white/5' : 'bg-surface-900 border-surface-800'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-navy-700" />
              </div>
              <span className="font-heading text-2xl font-bold text-gradient">LuxuryRealty</span>
            </Link>
            <p className={`mb-6 max-w-sm ${theme === 'dark' ? 'text-white/60' : 'text-surface-400'}`}>
              Premium real estate services for discerning clients. Find your dream property with our expert guidance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a key={i} href={social.href} whileHover={{ y: -3, scale: 1.1 }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      theme === 'dark' ? 'glass text-white/60 hover:text-gold-500 hover:border-gold-500/30' : 'bg-surface-800 text-surface-400 hover:text-gold-500'
                    }`}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href}
                      className={`transition-colors text-sm ${theme === 'dark' ? 'text-white/60 hover:text-gold-500' : 'text-surface-400 hover:text-gold-500'}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-surface-700'}`}>
          <div className={`flex items-center gap-2 text-sm mb-4 md:mb-0 ${theme === 'dark' ? 'text-white/60' : 'text-surface-400'}`}>
            <Mail size={16} />
            <span>Subscribe to our newsletter</span>
          </div>
          <div className="flex items-center gap-4">
            <input type="email" placeholder="Enter your email"
              className={`px-4 py-2 rounded-lg focus:outline-none text-sm w-64 ${
                theme === 'dark' ? 'bg-navy-700/50 border border-white/10 focus:border-gold-500 text-white' : 'bg-surface-800 border border-surface-700 focus:border-gold-500 text-white'
              }`}
            />
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="btn px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg text-sm"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        <div className={`text-center mt-8 pt-8 border-t ${theme === 'dark' ? 'border-white/10' : 'border-surface-700'}`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-surface-500'}`}>
            © 2024 LuxuryRealty. All rights reserved. Crafted with elegance.
          </p>
        </div>
      </div>

      <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} whileHover={{ y: -5 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/25 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  )
}
