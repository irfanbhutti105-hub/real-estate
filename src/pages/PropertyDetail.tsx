import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Car,
  Phone,
  Mail,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Check,
  Send,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { getPropertyById, properties } from '../data/properties'
import PropertyMap from '../components/Map/PropertyMap'

export default function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { theme } = useTheme()
  const property = getPropertyById(Number(id))
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Property Not Found</h2>
          <Link to="/" className="text-gold-500 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.gallery.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.gallery.length) % property.gallery.length)
  }

  const relatedProperties = properties
    .filter((p) => p.id !== property.id)
    .slice(0, 3)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-700' : 'bg-surface-50'
    }`}>
      {/* Top Bar */}
      <div className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        theme === 'dark'
          ? 'bg-navy-700/80 border-white/10'
          : 'bg-white/80 border-surface-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 font-medium transition-colors ${
              theme === 'dark'
                ? 'text-white/70 hover:text-gold-500'
                : 'text-surface-600 hover:text-gold-600'
            }`}
          >
            <ArrowLeft size={20} />
            Back
          </motion.button>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsFavorited(!isFavorited)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'dark' ? 'glass' : 'bg-surface-100'
              }`}
            >
              <Heart
                size={18}
                className={isFavorited ? 'fill-red-500 text-red-500' : ''}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                theme === 'dark' ? 'glass' : 'bg-surface-100'
              }`}
            >
              <Share2 size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={property.gallery[currentImage]}
              alt={property.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-navy-700 hover:bg-white transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-navy-700 hover:bg-white transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {property.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentImage
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
          {property.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentImage
                  ? 'border-gold-500'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tag & Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gold-500 text-navy-700 text-xs font-semibold rounded-full">
                  {property.tag}
                </span>
                <span className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                  Listing ID: {property.id.toString().padStart(6, '0')}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {property.title}
              </h1>

              <div className={`flex items-center gap-2 mb-6 ${
                theme === 'dark' ? 'text-white/60' : 'text-surface-500'
              }`}>
                <MapPin size={18} className="text-gold-500" />
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="text-4xl font-bold text-gradient mb-8">
                {property.price}
              </div>

              {/* Quick Stats */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 rounded-2xl ${
                theme === 'dark' ? 'glass' : 'bg-white border border-surface-200 shadow-sm'
              }`}>
                {[
                  { icon: Bed, value: property.beds, label: 'Bedrooms' },
                  { icon: Bath, value: property.baths, label: 'Bathrooms' },
                  { icon: Square, value: property.sqft, label: 'Sq Ft' },
                  { icon: Car, value: property.garage, label: 'Garage' },
                ].map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div key={stat.label} className="text-center">
                      <Icon size={24} className="text-gold-500 mx-auto mb-2" />
                      <div className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-navy-700'
                      }`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-white/50' : 'text-surface-400'
                      }`}>
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className={`font-heading text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  About This Property
                </h2>
                <p className={`leading-relaxed ${
                  theme === 'dark' ? 'text-white/70' : 'text-surface-600'
                }`}>
                  {property.description}
                </p>
              </div>

              {/* Property Details */}
              <div className={`p-6 rounded-2xl mb-10 ${
                theme === 'dark' ? 'glass' : 'bg-white border border-surface-200 shadow-sm'
              }`}>
                <h2 className={`font-heading text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  Property Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Year Built', value: property.yearBuilt },
                    { label: 'Property Type', value: 'Luxury Residence' },
                    { label: 'Status', value: 'For Sale' },
                    { label: 'Garage', value: `${property.garage} Car` },
                    { label: 'Bedrooms', value: property.beds },
                    { label: 'Bathrooms', value: property.baths },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className={`flex justify-between py-3 border-b ${
                        theme === 'dark' ? 'border-white/10' : 'border-surface-100'
                      }`}
                    >
                      <span className={theme === 'dark' ? 'text-white/50' : 'text-surface-400'}>
                        {detail.label}
                      </span>
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-navy-700'
                      }`}>
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-10">
                <h2 className={`font-heading text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  Features & Amenities
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        theme === 'dark' ? 'bg-white/5' : 'bg-surface-50'
                      }`}
                    >
                      <div className="w-6 h-6 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-gold-500" />
                      </div>
                      <span className={theme === 'dark' ? 'text-white/80' : 'text-surface-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Map */}
              <div className="mb-10">
                <h2 className={`font-heading text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  Location
                </h2>
                <PropertyMap
                  markers={[{
                    position: property.coordinates,
                    title: property.title,
                    popup: property.location,
                  }]}
                  center={property.coordinates}
                  zoom={13}
                  className="h-72 border border-surface-200"
                />
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              {/* Agent Card */}
              <div className={`p-6 rounded-2xl mb-6 ${
                theme === 'dark' ? 'glass' : 'bg-white border border-surface-200 shadow-lg'
              }`}>
                <h3 className={`font-heading text-lg font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-700'
                }`}>
                  Contact Agent
                </h3>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/30"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-navy-700'
                    }`}>
                      {property.agent.name}
                    </h4>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-white/50' : 'text-surface-400'
                    }`}>
                      {property.agent.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10'
                        : 'bg-surface-50 hover:bg-surface-100'
                    }`}
                  >
                    <Phone size={16} className="text-gold-500" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      {property.agent.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10'
                        : 'bg-surface-50 hover:bg-surface-100'
                    }`}
                  >
                    <Mail size={16} className="text-gold-500" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-white/80' : 'text-surface-700'
                    }`}>
                      {property.agent.email}
                    </span>
                  </a>
                </div>

                {/* Contact Form */}
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 text-white placeholder-white/40'
                        : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 text-white placeholder-white/40'
                        : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                    }`}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 text-white placeholder-white/40'
                        : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                    }`}
                  />
                  <textarea
                    rows={3}
                    placeholder={`I'm interested in ${property.title}...`}
                    className={`w-full px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all resize-none ${
                      theme === 'dark'
                        ? 'bg-white/5 border border-white/10 text-white placeholder-white/40'
                        : 'bg-surface-50 border border-surface-200 text-navy-700 placeholder-surface-400'
                    }`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="btn w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-500/25 transition-shadow"
                  >
                    <Send size={16} />
                    Send Inquiry
                  </motion.button>
                </form>
              </div>

              {/* Price Card */}
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' ? 'glass' : 'bg-white border border-surface-200 shadow-lg'
              }`}>
                <div className="text-center">
                  <span className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
                    Asking Price
                  </span>
                  <div className="text-3xl font-bold text-gradient mt-1">{property.price}</div>
                </div>
                <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-surface-200'}`}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className={theme === 'dark' ? 'text-white/50' : 'text-surface-400'}>
                      Price per sqft
                    </span>
                    <span className={theme === 'dark' ? 'text-white' : 'text-navy-700'}>
                      ${Math.round(parseInt(property.price.replace(/[$,]/g, '')) / parseInt(property.sqft.replace(',', ''))).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={theme === 'dark' ? 'text-white/50' : 'text-surface-400'}>
                      <Calendar size={14} className="inline mr-1" />
                      Year Built
                    </span>
                    <span className={theme === 'dark' ? 'text-white' : 'text-navy-700'}>
                      {property.yearBuilt}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Properties */}
        <div className="mt-16 pt-10 border-t border-theme">
          <h2 className={`section-heading text-3xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            Similar <span className="text-gradient">Properties</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProperties.map((rp, i) => (
              <motion.div
                key={rp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/property/${rp.id}`}>
                  <div className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                    theme === 'dark'
                      ? 'glass hover:border-gold-500/30'
                      : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'
                  }`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <div className={`text-sm mb-1 ${
                        theme === 'dark' ? 'text-white/50' : 'text-surface-400'
                      }`}>
                        {rp.location}
                      </div>
                      <h3 className={`font-heading text-lg font-semibold mb-2 transition-colors ${
                        theme === 'dark'
                          ? 'text-white group-hover:text-gold-500'
                          : 'text-navy-700 group-hover:text-gold-600'
                      }`}>
                        {rp.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="flex items-center gap-1">
                          <Bed size={14} /> {rp.beds}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath size={14} /> {rp.baths}
                        </span>
                        <span className="flex items-center gap-1">
                          <Square size={14} /> {rp.sqft}
                        </span>
                      </div>
                      <div className="mt-3 text-xl font-bold text-gradient">{rp.price}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
