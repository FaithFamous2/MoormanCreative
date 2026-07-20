import { useRef } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export default function About() {
  const { tx, lang } = useLang()
  const l = lang as 'en' | 'nl'
  const a = tx.about

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div style={{ backgroundColor: CHARCOAL }}>
      {/* Hero */}
      <div ref={heroRef} style={{ height: '80vh', position: 'relative', overflow: 'hidden' }}>
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&h=1000&fit=crop&auto=format"
            alt="Moorman Creative Studio" className="w-full h-full object-cover" style={{ filter: 'brightness(0.5)' }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.2), rgba(13,13,13,0.85) 80%, rgba(13,13,13,1) 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 xl:px-20 pb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '20px' }}>
            {a.label}
          </motion.div>
          <WordReveal text={a.headline}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
            className="text-5xl md:text-7xl lg:text-[6rem]" delay={0.4} />
        </div>
      </div>

      {/* Intro */}
      <IntroSection tx={tx} lang={l} />

      {/* Stats */}
      <StatsSection tx={tx} lang={l} />

      {/* Mission */}
      <MissionSection tx={tx} lang={l} />

      {/* Values */}
      <ValuesSection tx={tx} lang={l} />

      {/* Team */}
      <TeamSection tx={tx} lang={l} />

      {/* CTA */}
      <div className="px-6 md:px-12 xl:px-20 py-28 text-center" style={{ backgroundColor: '#080808' }}>
        <WordReveal text="Ready to collaborate?"
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}
          className="text-4xl md:text-6xl mb-10" />
        <Link to="/contact"
          style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.3em', border: `1px solid rgba(244,241,234,0.3)`, padding: '16px 40px', display: 'inline-block' }}
          className="hover:opacity-60 transition-opacity">
          {tx.contact.label}
        </Link>
      </div>

      <Footer />
    </div>
  )
}

function IntroSection({ tx }: { tx: any; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="px-6 md:px-12 xl:px-20 py-24 border-b" style={{ borderColor: BORDER }}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: 'clamp(1rem,2vw,1.2rem)', lineHeight: 1.9, fontWeight: 300 }}>
          {tx.about.intro}
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection({ tx }: { tx: any; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="px-6 md:px-12 xl:px-20 py-16 border-b" style={{ borderColor: BORDER }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {tx.about.stats.map((stat: { value: string; label: string }, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(2.5rem,5vw,4rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.2em', marginTop: '8px', fontWeight: 300 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function MissionSection({ tx }: { tx: any; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="grid md:grid-cols-2 min-h-[60vh]" style={{ backgroundColor: '#080808' }}>
      <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <motion.div className="absolute inset-0" style={{ y: imgY }}>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=700&fit=crop&auto=format"
            alt="Mission" className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #080808 100%)' }} />
      </div>
      <div className="flex flex-col justify-center px-10 md:pl-16 xl:pl-20 py-20">
        <WordReveal text={tx.about.mission.label}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '28px' }} />
        <WordReveal text={tx.about.mission.title}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}
          className="text-3xl md:text-4xl mb-8" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '14px', lineHeight: 1.85, fontWeight: 300 }}>
          {tx.about.mission.desc}
        </motion.div>
      </div>
    </section>
  )
}

function ValuesSection({ tx }: { tx: any; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="px-6 md:px-12 xl:px-20 py-24 border-t border-b" style={{ borderColor: BORDER }}>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '40px' }}>
        {tx.about.values.label}
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {tx.about.values.items.map((v: { title: string; desc: string }, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border-t pt-8" style={{ borderColor: BORDER }}>
            <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 400, marginBottom: '12px' }}>{v.title}</div>
            <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '13px', lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TeamSection({ tx }: { tx: any; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const member = tx.about.team.members[0] as { name: string; role: string; bio: string }
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="founder-section px-6 md:px-12 xl:px-20 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="founder-kicker"
      >
        <span>01</span>
        <span>{tx.about.team.label}</span>
      </motion.div>

      <div className="founder-layout">
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1.25, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="founder-portrait"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1000&h=1200&fit=crop&auto=format"
            alt={member.name}
            className="founder-image"
            style={{ y: imageY }}
            initial={{ scale: 1.12 }}
            animate={inView ? { scale: 1.04 } : {}}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="founder-image-overlay" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="founder-image-index"
          >
            FOUNDER / 001
          </motion.div>
        </motion.div>

        <div className="founder-copy">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="founder-role"
          >
            {member.role}
          </motion.div>

          <div className="founder-name-wrap">
            {member.name.split(' ').map((word: string, index: number) => (
              <span className="founder-name-line" key={word}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ delay: 0.42 + index * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.68, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="founder-rule"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.78, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="founder-bio"
          >
            {member.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="founder-signature"
          >
            MOORMAN CREATIVE — AMSTERDAM
          </motion.div>
        </div>
      </div>
    </section>
  )
}
