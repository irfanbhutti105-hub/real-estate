import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Building2 } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? theme === 'dark'
              ? 'glass-dark py-3'
              : 'glass py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center"
            >
              <Building2 className="w-6 h-6 text-navy-700" />
            </motion.div>
            <span className="font-heading text-2xl font-bold text-gradient">
              LuxuryRealty
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-gold-500'
                      : theme === 'dark'
                        ? 'text-white/70 hover:text-white hover:bg-white/5'
                        : 'text-surface-600 hover:text-navy-700 hover:bg-surface-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold-500 rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'dark'
                  ? 'glass text-gold-500 hover:bg-white/10'
                  : 'bg-surface-100 text-navy-600 hover:bg-surface-200'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-shadow"
              >
                Schedule Tour
              </motion.button>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'text-gold-500' : 'text-navy-600'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={theme === 'dark' ? 'text-white p-2' : 'text-navy-700 p-2'}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 pt-24 ${
              theme === 'dark' ? 'glass-dark' : 'bg-white'
            }`}
          >
            <div className="flex flex-col items-center gap-6 pt-8">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-2xl font-heading font-semibold transition-colors ${
                        isActive
                          ? 'text-gold-500'
                          : theme === 'dark'
                            ? 'text-white/90 hover:text-gold-500'
                            : 'text-navy-700 hover:text-gold-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact">
                  <button className="btn mt-4 px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg">
                    Schedule Tour
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
