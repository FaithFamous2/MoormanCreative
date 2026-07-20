import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'
import { SERVICES } from '../data'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const { tx, lang } = useLang()
  const l = lang as 'en' | 'nl'

  const service = SERVICES.find((s) => s.id === id)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const bodyRef = useRef<HTMLDivElement>(null)
  const bodyInView = useInView(bodyRef, { once: true })

  if (!service) {
    return (
      <div style={{ backgroundColor: CHARCOAL, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '2rem', fontStyle: 'italic' }}>Service not found.</div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: CHARCOAL }}>
      {/* Hero */}
      <div ref={heroRef} style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={service.image} alt={service.title[l]} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.8) 70%, rgba(13,13,13,1) 100%)' }} />
        </motion.div>

        <motion.div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 xl:px-20 pb-16" style={{ opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
            <Link to="/service" style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.3em' }}
              className="hover:opacity-60 transition-opacity">{tx.services.back}</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.36em', marginBottom: '16px' }}>
            {service.tag[l]}
          </motion.div>
          <WordReveal text={service.title[l]}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
            className="text-5xl md:text-7xl lg:text-[6rem]" delay={0.5} />
        </motion.div>
      </div>

      {/* Full description */}
      <div ref={bodyRef} className="px-6 md:px-12 xl:px-20 py-24 grid md:grid-cols-2 gap-16 border-b" style={{ borderColor: BORDER }}>
        <WordReveal text={service.fullDesc[l]}
          style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '15px', lineHeight: 1.85, fontWeight: 300 }} />
        <div>
          {/* What's included */}
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.38em', marginBottom: '24px' }}>{tx.services.includes}</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {service.includes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={bodyInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-start gap-4 py-4 border-b" style={{ borderColor: BORDER }}>
                <span style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.12em', flexShrink: 0, paddingTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300, lineHeight: 1.6 }}>{item[l]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <ProcessSection service={service} lang={l} tx={tx} />

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-20 py-28 text-center" style={{ backgroundColor: '#080808' }}>
        <WordReveal text={`Ready to start a project?`}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}
          className="text-4xl md:text-6xl mb-10" />
        <Link to="/contact"
          style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.3em', border: `1px solid rgba(244,241,234,0.3)`, padding: '16px 40px', display: 'inline-block' }}
          className="hover:opacity-60 transition-opacity">
          {tx.services.startProject}
        </Link>
      </div>

      <Footer />
    </div>
  )
}

function ProcessSection({ service, lang, tx }: { service: typeof SERVICES[0]; lang: 'en' | 'nl'; tx: any }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="px-6 md:px-12 xl:px-20 py-20 border-b" style={{ borderColor: BORDER }}>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '40px' }}>
        {tx.services.process}
      </motion.div>
      <div className="grid md:grid-cols-5 gap-0">
        {service.processSteps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="border-l pl-6 pb-8" style={{ borderColor: BORDER }}>
            <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.12em', marginBottom: '10px' }}>{String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300, lineHeight: 1.6 }}>{step[lang]}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
