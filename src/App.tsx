import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react'

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Home = lazy(() => import('./pages/Home'))
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'))
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-800">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-gold-500/20 border-t-gold-500 rounded-full"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
