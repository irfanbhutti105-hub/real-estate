import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { properties } from '../../data/properties'

export default function FeaturedProperties() {
  const { theme } = useTheme()

  return (
    <section id="properties" className={`py-24 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'
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
            Our Portfolio
          </span>
          <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            Featured <span className="text-gradient">Properties</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-white/60' : 'text-surface-500'
          }`}>
            Explore our handpicked selection of exceptional properties,
            each offering unique luxury and unparalleled craftsmanship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link to={`/property/${property.id}`} className="block">
                <div className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  theme === 'dark'
                    ? 'glass hover:border-gold-500/30'
                    : 'bg-white shadow-lg hover:shadow-xl border border-surface-200 hover:border-gold-300'
                }`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-500 text-navy-700 text-xs font-semibold rounded-full">
                        {property.tag}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight className="text-navy-700" size={20} />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className={`flex items-center gap-2 text-sm mb-2 ${
                      theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                    }`}>
                      <MapPin size={14} className="text-gold-500" />
                      <span>{property.location}</span>
                    </div>
                    <h3 className={`font-heading text-xl font-semibold mb-4 transition-colors ${
                      theme === 'dark'
                        ? 'text-white group-hover:text-gold-500'
                        : 'text-navy-700 group-hover:text-gold-600'
                    }`}>
                      {property.title}
                    </h3>

                    <div className={`flex items-center gap-4 text-sm mb-4 pb-4 border-b ${
                      theme === 'dark' ? 'text-white/60 border-white/10' : 'text-surface-500 border-surface-200'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Bed size={14} /> {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={14} /> {property.baths} Baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square size={14} /> {property.sqft} sqft
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gradient">{property.price}</span>
                      <span className={`px-4 py-2 rounded-lg text-gold-500 transition-colors text-sm ${
                        theme === 'dark'
                          ? 'glass hover:bg-gold-500/10'
                          : 'border border-gold-200 hover:bg-gold-50'
                      }`}>
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`btn px-8 py-4 rounded-lg text-gold-500 font-semibold transition-colors ${
              theme === 'dark'
                ? 'glass hover:bg-gold-500/10'
                : 'border border-gold-200 hover:bg-gold-50'
            }`}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
