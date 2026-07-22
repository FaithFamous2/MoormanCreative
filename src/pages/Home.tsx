import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'
import { PROJECTS, SERVICES } from '../data'
import logo from '../imports/Moorman_Creative_logo_zwart.png'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

// --- HERO ---
function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.94])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const { tx } = useLang()

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: '100svh' }}>
      <motion.div className="absolute inset-0 origin-center" style={{ y: bgY, scale: bgScale }}>
        <div className="absolute inset-0" style={{ backgroundColor: '#060606' }} />
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1400&q=75&auto=format&fit=crop"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => undefined)
          }}
          className="elegant-hero-video absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <source src="https://videos.pexels.com/video-files/29816822/12808277_1080_1920_30fps.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(6,6,6,0.5) 0%, rgba(6,6,6,0.18) 44%, rgba(6,6,6,0.62) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 62% 46% at 50% 50%, transparent 20%, rgba(6,6,6,0.62) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          opacity: 0.055,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(244,241,234,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 35% at 15% 105%, rgba(244,241,234,0.03) 0%, transparent 65%)' }} />
        <motion.div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(244,241,234,0.018) 0%, transparent 65%)' }}
          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>

      <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: contentOpacity, scale: contentScale }}>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <img src={logo} alt="Moorman Creative" className="w-[300px] md:w-[460px] lg:w-[580px] xl:w-[660px]" style={{ filter: 'invert(1)', opacity: 0.92 }} />
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 1.2 }}>
        <span style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.38em' }}>{tx.hero.scroll}</span>
        <motion.div style={{ width: '1px', height: '44px', backgroundColor: MUTED, transformOrigin: 'top' }}
          animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
      </motion.div>
    </section>
  )
}

// --- MARQUEE ---
function Marquee() {
  const { tx } = useLang()
  const items = [...tx.marquee.items, ...tx.marquee.items]
  return (
    <div className="relative overflow-hidden py-7 border-t border-b" style={{ borderColor: BORDER, backgroundColor: '#080808' }}>
      <motion.div className="flex whitespace-nowrap" style={{ gap: '5rem' }}
        animate={{ x: ['0%', '-50%'] }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}>
        {items.map((c, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.34em' }}>{c}</span>
        ))}
      </motion.div>
    </div>
  )
}

// --- WORK PREVIEW ---
function WorkPreview() {
  const { tx, lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const featured = PROJECTS.slice(0, 3)

  return (
    <section id="work" className="px-6 md:px-12 xl:px-20 py-28" style={{ backgroundColor: CHARCOAL }}>
      <div className="mb-14" ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '24px' }}>
          {tx.work.label}
        </motion.div>
        <WordReveal text={tx.work.headline}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem]" />
      </div>

      {/* Bento grid */}
      <div style={{ gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: '340px 340px', gap: '14px' }} className="hidden md:grid">
        <HomeWorkCard project={featured[0]} index={0} style={{ gridColumn: '1', gridRow: '1 / 3' }} lang={lang} />
        <HomeWorkCard project={featured[1]} index={1} style={{ gridColumn: '2 / 4', gridRow: '1' }} lang={lang} />
        <HomeWorkCard project={featured[2]} index={2} style={{ gridColumn: '2 / 4', gridRow: '2' }} lang={lang} />
      </div>
      <div className="flex flex-col gap-4 md:hidden">
        {featured.map((p, i) => (
          <HomeWorkCard
            key={p.id}
            project={p}
            index={i}
            style={{ width: '100%', height: 'clamp(280px, 88vw, 360px)' }}
            lang={lang}
          />
        ))}
      </div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.7, duration: 0.7 }} className="mt-10 flex justify-end">
        <Link to="/work" className="flex items-center gap-4 group">
          <span style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.3em' }} className="group-hover:opacity-50 transition-opacity duration-300">{tx.work.viewAll}</span>
          <div style={{ width: '44px', height: '1px', backgroundColor: CREAM }} className="group-hover:w-16 transition-all duration-300" />
        </Link>
      </motion.div>
    </section>
  )
}

function HomeWorkCard({ project, index, style, lang }: { project: typeof PROJECTS[0]; index: number; style?: React.CSSProperties; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div ref={ref} initial={{ y: 70, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: '#111111', border: `1px solid ${BORDER}`, borderRadius: '14px', overflow: 'hidden', cursor: 'pointer', position: 'relative', ...style }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/work/details/${project.id}`} className="block absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.1) 30%, rgba(13,13,13,0.92) 100%)' }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.32em', marginBottom: '10px' }}>
            CASE STUDY // {project.tags[lang as 'en' | 'nl']} // {project.year}
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1 }}>{project.title}</div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.18em', marginTop: '6px' }}>{project.subtitle[lang as 'en' | 'nl']}</div>
        </div>
        <motion.div className="absolute inset-0 pointer-events-none" style={{ borderRadius: 'inherit' }} initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.35 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(244,241,234,0.05) 0%, transparent 55%)', border: `1px solid rgba(244,241,234,0.07)`, borderRadius: 'inherit' }} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

// --- STICKY REEL ---
function StickyReel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.88])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const { tx } = useLang()
  const words = ['DIRECTION', 'AI SYSTEMS', 'VFX', 'COMMERCIAL', 'IDENTITY', 'MOTION']

  return (
    <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505', overflow: 'hidden' }}>
        <motion.div style={{ opacity }} className="w-full">
          <motion.div style={{ x: x1, display: 'flex', gap: '5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            {words.map((w) => (
              <span key={w} style={{ fontFamily: 'var(--font-serif)', color: 'rgba(244,241,234,0.07)', fontSize: 'clamp(3rem,6vw,5.5rem)', fontStyle: 'italic', whiteSpace: 'nowrap', fontWeight: 400 }}>{w}</span>
            ))}
          </motion.div>
          <motion.div style={{ scale, textAlign: 'center', position: 'relative', zIndex: 2, padding: '2rem 0' }}>
            <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.15 }}>
              {tx.sticky.headline1}<br />
              <span style={{ fontWeight: 300 }}>{tx.sticky.headline2}</span>
            </div>
          </motion.div>
          <motion.div style={{ x: x2, display: 'flex', gap: '5rem', marginTop: '1.5rem', justifyContent: 'center' }}>
            {[...words].reverse().map((w) => (
              <span key={w} style={{ fontFamily: 'var(--font-serif)', color: 'rgba(244,241,234,0.07)', fontSize: 'clamp(3rem,6vw,5.5rem)', fontStyle: 'italic', whiteSpace: 'nowrap', fontWeight: 400 }}>{w}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// --- PROCESS ---
function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const { tx } = useLang()

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden" style={{ backgroundColor: '#080808' }}>
      <div className="grid md:grid-cols-2 min-h-screen">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1000&h=1300&fit=crop&auto=format" alt="Production studio" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 55%, #080808 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #080808 0%, transparent 12%, transparent 88%, #080808 100%)' }} />
        </div>
        <div className="flex flex-col justify-center px-10 md:pl-16 xl:pl-20 py-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '28px' }}>
            {tx.philosophy.label}
          </motion.div>
          <WordReveal text={tx.philosophy.headline}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}
            className="text-4xl md:text-5xl mb-14" />
          <div>
            {tx.philosophy.steps.map((step: { num: string; title: string; desc: string }, i: number) => (
              <ProcessStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: { num: string; title: string; desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-7 py-8 border-t" style={{ borderColor: BORDER }}>
      <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.12em', flexShrink: 0, paddingTop: '3px' }}>{step.num}</div>
      <div>
        <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 400, marginBottom: '8px' }}>{step.title}</div>
        <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '13px', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</div>
      </div>
    </motion.div>
  )
}

// --- SERVICES PREVIEW ---
function ServicesPreview() {
  const { tx, lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })

  return (
    <section id="services" className="capabilities-section px-6 md:px-12 xl:px-20 py-28 md:py-36">
      <div className="capabilities-glow" aria-hidden="true" />

      <div className="relative z-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20 items-end mb-16 md:mb-24" ref={ref}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="capabilities-kicker"
          >
            <span>01</span>
            <span>{tx.services.label}</span>
          </motion.div>
          <WordReveal text={tx.services.headline}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 0.92 }}
            className="text-6xl md:text-8xl lg:text-[6.5rem]" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="capabilities-intro"
        >
          Strategy, storytelling and emerging technology brought together to create
          images and experiences built for attention.
        </motion.p>
      </div>

      <div className="relative z-10 capabilities-list">
        {SERVICES.map((s, i) => (
          <ServicePreviewBlock key={s.id} service={s} index={i} lang={lang} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-12 md:mt-16 flex justify-end"
      >
        <Link to="/service" className="capabilities-cta group">
          <span>{tx.services.viewAll}</span>
          <span className="capabilities-cta-line" />
          <span className="capabilities-cta-arrow">↗</span>
        </Link>
      </motion.div>
    </section>
  )
}

function ServicePreviewBlock({ service, index, lang }: { service: typeof SERVICES[0]; index: number; lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const [hovered, setHovered] = useState(false)
  const l = lang as 'en' | 'nl'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="capability-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/service/${service.id}`} className="capability-link">
        <motion.div
          className="capability-image-wrap"
          animate={{ clipPath: hovered ? 'inset(0% 0% 0% 0%)' : 'inset(8% 4% 8% 4%)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={service.image}
            alt=""
            className="capability-image"
            animate={{ scale: hovered ? 1.04 : 1.12, filter: hovered ? 'grayscale(0%)' : 'grayscale(75%)' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="capability-image-shade" />
        </motion.div>

        <div className="capability-number">{String(index + 1).padStart(2, '0')}</div>
        <div className="capability-copy">
          <div className="capability-tag">{service.tag[l]}</div>
          <h3 className="capability-title">{service.title[l]}</h3>
        </div>

        <motion.p
          className="capability-description"
          animate={{ opacity: hovered ? 0.82 : 0.46 }}
          transition={{ duration: 0.35 }}
        >
          {service.shortDesc[l]}
        </motion.p>

        <motion.div
          className="capability-arrow"
          animate={{ x: hovered ? 6 : 0, rotate: hovered ? 45 : 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          →
        </motion.div>
      </Link>
    </motion.article>
  )
}

// --- CTA ---
function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const { tx } = useLang()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-36 px-6 md:px-12 xl:px-20" style={{ backgroundColor: CREAM }}>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY, opacity: 0.04 }}>
        <div className="w-full h-full" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '300px 300px' }} />
      </motion.div>
      <div className="relative">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(13,13,13,0.38)', fontSize: '9px', letterSpacing: '0.4em', marginBottom: '28px' }}>
          {tx.cta.label}
        </motion.div>
        <WordReveal text={tx.cta.headline}
          style={{ fontFamily: 'var(--font-serif)', color: CHARCOAL, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.05 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-16 max-w-5xl" />
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} exit={{ opacity: 0, y: -10 }} transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col md:flex-row gap-4 items-start md:items-end max-w-lg">
              <div className="flex-1 w-full">
                <div style={{ fontFamily: 'var(--font-sans)', color: 'rgba(13,13,13,0.4)', fontSize: '9px', letterSpacing: '0.3em', marginBottom: '10px' }}>{tx.cta.emailLabel}</div>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={tx.cta.placeholder}
                  className="w-full bg-transparent outline-none py-3 text-sm font-light border-b-2 transition-colors"
                  style={{ fontFamily: 'var(--font-sans)', color: CHARCOAL, borderColor: 'rgba(13,13,13,0.2)', fontWeight: 300 }} />
              </div>
              <button onClick={() => email && setSent(true)} className="px-8 py-3 text-[10px] tracking-[0.28em] transition-opacity hover:opacity-70 flex-shrink-0"
                style={{ fontFamily: 'var(--font-sans)', backgroundColor: CHARCOAL, color: CREAM, borderRadius: '2px' }}>
                {tx.cta.button}
              </button>
            </motion.div>
          ) : (
            <motion.div key="thanks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              style={{ fontFamily: 'var(--font-serif)', color: CHARCOAL, fontSize: '1.5rem', fontStyle: 'italic' }}>
              {tx.cta.thanks}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div style={{ backgroundColor: CHARCOAL }}>
      <Hero />
      <Marquee />
      <WorkPreview />
      <StickyReel />
      <Process />
      <ServicesPreview />
      <CTA />
      <Footer />
    </div>
  )
}
