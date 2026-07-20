import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'
import { SERVICES } from '../data'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export default function Services() {
  const { tx } = useLang()
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true })

  return (
    <div style={{ backgroundColor: CHARCOAL, minHeight: '100vh' }}>
      {/* Header */}
      <div className="px-6 md:px-12 xl:px-20" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <motion.div ref={headerRef} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '24px' }}>
          {tx.services.pageLabel}
        </motion.div>
        <WordReveal text={tx.services.pageHeadline}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem]" />
      </div>

      {/* Services list */}
      <div className="px-6 md:px-12 xl:px-20 pb-28 space-y-8">
        {SERVICES.map((service, i) => (
          <ServiceFullCard key={service.id} service={service} index={i} />
        ))}
      </div>

      <Footer />
    </div>
  )
}

function ServiceFullCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const { lang, tx } = useLang()
  const l = lang as 'en' | 'nl'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ border: `1px solid ${BORDER}`, borderRadius: '14px', overflow: 'hidden', backgroundColor: '#0C0C0C' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image band */}
      <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
        <motion.img src={service.image} alt={service.title[l]} className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(12,12,12,0.95) 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 px-8 pb-6">
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.38em', marginBottom: '8px' }}>{service.tag[l]}</div>
          <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}>{service.title[l]}</div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-10 grid md:grid-cols-3 gap-10">
        {/* Description */}
        <div className="md:col-span-2">
          <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '14px', lineHeight: 1.85, fontWeight: 300, marginBottom: '28px' }}>
            {service.shortDesc[l]}
          </div>

          {/* Includes */}
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.36em', marginBottom: '14px' }}>
            {tx.services.includes}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span style={{ color: MUTED, fontSize: '10px', marginTop: '2px' }}>→</span>
                <span style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '12px', fontWeight: 300, lineHeight: 1.5 }}>{item[l]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process + CTA */}
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.36em', marginBottom: '14px' }}>
            {tx.services.process}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {service.processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b" style={{ borderColor: BORDER }}>
                <span style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.1em', flexShrink: 0, paddingTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '12px', fontWeight: 300, lineHeight: 1.5 }}>{step[l]}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to={`/service/${service.id}`}
              style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.28em', border: `1px solid ${BORDER}`, padding: '12px 24px', display: 'inline-block' }}
              className="hover:opacity-60 transition-opacity">
              {tx.services.learnMore}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
