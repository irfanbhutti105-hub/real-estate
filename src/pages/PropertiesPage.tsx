import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Grid3X3,
  LayoutList,
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { properties } from '../data/properties'

const tags = ['All', 'Featured', 'New', 'Popular', 'Exclusive', 'Premium', 'Heritage']
const priceRanges = ['Any Price', '$1M - $5M', '$5M - $10M', '$10M+']
const bedOptions = ['Any', '2+', '3+', '4+', '5+']

export default function PropertiesPage() {
  const { theme } = useTheme()
  const [activeTag, setActiveTag] = useState('All')
  const [activePrice, setActivePrice] = useState('Any Price')
  const [activeBeds, setActiveBeds] = useState('Any')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filtered = properties.filter((p) => {
    const matchTag = activeTag === 'All' || p.tag === activeTag
    const matchSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchTag && matchSearch
  })

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-800' : 'bg-surface-50'
    }`}>
      {/* Hero Banner */}
      <div className={`relative py-20 overflow-hidden ${
        theme === 'dark' ? 'bg-navy-700' : 'bg-gradient-to-br from-navy-600 to-navy-700'
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-gold-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 glass rounded-full text-gold-500 text-sm font-medium mb-6"
          >
            Browse Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-4"
          >
            All <span className="text-gradient">Properties</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto mb-10"
          >
            Discover our complete portfolio of luxury properties across the most desirable locations.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center glass rounded-2xl p-2">
              <Search size={20} className="text-white/40 ml-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or location..."
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/40 focus:outline-none"
              />
              <button className="btn px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-700 font-semibold rounded-xl hover:shadow-lg hover:shadow-gold-500/25 transition-shadow">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters & Results */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Filters Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-2 mr-4">
            <SlidersHorizontal size={18} className={theme === 'dark' ? 'text-white/60' : 'text-surface-400'} />
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white/60' : 'text-surface-500'}`}>
              Filters:
            </span>
          </div>

          {/* Tag Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTag === tag
                    ? 'bg-gold-500 text-navy-700'
                    : theme === 'dark'
                      ? 'glass text-white/70 hover:text-gold-500'
                      : 'bg-surface-100 text-surface-600 hover:text-gold-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-gold-500 text-navy-700'
                  : theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-surface-400 hover:text-surface-700'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-gold-500 text-navy-700'
                  : theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-surface-400 hover:text-surface-700'
              }`}
            >
              <LayoutList size={18} />
            </button>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className={`mb-6 ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
          Showing {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
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
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <ArrowUpRight className="text-navy-700" size={20} />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className={`flex items-center gap-2 text-sm mb-2 ${
                        theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                      }`}>
                        <MapPin size={14} className="text-gold-500" />
                        {property.location}
                      </div>
                      <h3 className={`font-heading text-xl font-semibold mb-3 transition-colors ${
                        theme === 'dark'
                          ? 'text-white group-hover:text-gold-500'
                          : 'text-navy-700 group-hover:text-gold-600'
                      }`}>
                        {property.title}
                      </h3>
                      <div className={`flex items-center gap-4 text-sm mb-4 pb-4 border-b ${
                        theme === 'dark' ? 'text-white/60 border-white/10' : 'text-surface-500 border-surface-200'
                      }`}>
                        <span className="flex items-center gap-1"><Bed size={14} /> {property.beds} Beds</span>
                        <span className="flex items-center gap-1"><Bath size={14} /> {property.baths} Baths</span>
                        <span className="flex items-center gap-1"><Square size={14} /> {property.sqft} sqft</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gradient">{property.price}</span>
                        <span className={`px-4 py-2 rounded-lg text-gold-500 text-sm ${
                          theme === 'dark' ? 'glass hover:bg-gold-500/10' : 'border border-gold-200 hover:bg-gold-50'
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
        ) : (
          /* List View */
          <div className="space-y-4">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={`/property/${property.id}`} className="block">
                  <div className={`group flex flex-col md:flex-row rounded-2xl overflow-hidden transition-all duration-300 ${
                    theme === 'dark'
                      ? 'glass hover:border-gold-500/30'
                      : 'bg-white shadow-lg hover:shadow-xl border border-surface-200'
                  }`}>
                    <div className="relative w-full md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gold-500 text-navy-700 text-xs font-semibold rounded-full">
                          {property.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className={`flex items-center gap-2 text-sm mb-2 ${
                          theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                        }`}>
                          <MapPin size={14} className="text-gold-500" />
                          {property.location}
                        </div>
                        <h3 className={`font-heading text-2xl font-semibold mb-2 transition-colors ${
                          theme === 'dark'
                            ? 'text-white group-hover:text-gold-500'
                            : 'text-navy-700 group-hover:text-gold-600'
                        }`}>
                          {property.title}
                        </h3>
                        <div className={`flex items-center gap-6 text-sm mb-4 ${
                          theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                        }`}>
                          <span className="flex items-center gap-1"><Bed size={14} /> {property.beds} Beds</span>
                          <span className="flex items-center gap-1"><Bath size={14} /> {property.baths} Baths</span>
                          <span className="flex items-center gap-1"><Square size={14} /> {property.sqft} sqft</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gradient">{property.price}</span>
                        <span className={`px-6 py-3 rounded-lg text-gold-500 font-medium ${
                          theme === 'dark' ? 'glass hover:bg-gold-500/10' : 'border border-gold-200 hover:bg-gold-50'
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
        )}

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className={`text-xl ${theme === 'dark' ? 'text-white/50' : 'text-surface-400'}`}>
              No properties found matching your criteria.
            </p>
            <button
              onClick={() => { setActiveTag('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 text-gold-500 hover:underline"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
