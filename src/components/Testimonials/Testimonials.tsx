import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rating: 5,
    text: 'LuxuryRealty made our dream home a reality. Their attention to detail and personalized service exceeded all expectations.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rating: 5,
    text: 'The investment advisory team helped me build an impressive portfolio. Their market insights are unparalleled.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Property Seller',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rating: 5,
    text: 'Sold our property above asking price within two weeks. Their marketing strategy is truly exceptional.',
  },
]

export default function Testimonials() {
  const { theme } = useTheme()

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-navy-700' : 'bg-surface-50'
    }`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-gold-500/10' : 'bg-gold-200/30'
      }`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className={`section-heading text-4xl md:text-5xl font-bold mt-4 mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-navy-700'
          }`}>
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-8 relative ${
                theme === 'dark'
                  ? 'glass'
                  : 'bg-white shadow-lg border border-surface-200'
              }`}
            >
              <Quote className={`absolute top-6 right-6 w-12 h-12 ${
                theme === 'dark' ? 'text-gold-500/20' : 'text-gold-300/50'
              }`} />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-gold-500 text-gold-500" />
                ))}
              </div>

              <p className={`mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-white/70' : 'text-surface-600'
              }`}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-12 h-12 rounded-full object-cover ${
                    theme === 'dark' ? 'border-2 border-gold-500/30' : 'border-2 border-gold-200'
                  }`}
                />
                <div>
                  <h4 className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-navy-700'
                  }`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-white/60' : 'text-surface-500'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
