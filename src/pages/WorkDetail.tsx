import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'
import { PROJECTS } from '../data'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>()
  const { tx, lang } = useLang()
  const l = lang as 'en' | 'nl'

  const project = PROJECTS.find((p) => p.id === id)
  const currentIndex = PROJECTS.findIndex((p) => p.id === id)
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const infoRef = useRef<HTMLDivElement>(null)
  const infoInView = useInView(infoRef, { once: true })

  if (!project) {
    return (
      <div style={{ backgroundColor: CHARCOAL, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '2rem', fontStyle: 'italic' }}>Project not found.</div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: CHARCOAL }}>
      {/* Full-bleed hero */}
      <div ref={heroRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.7) 70%, rgba(13,13,13,1) 100%)' }} />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 xl:px-20 pb-16"
          style={{ opacity: heroOpacity }}
        >
          {/* Back link */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mb-8">
            <Link to="/work" style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.3em' }}
              className="hover:opacity-60 transition-opacity">{tx.work.back}</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.36em', marginBottom: '16px' }}>
            CASE STUDY // {project.tags[l]} // {project.year}
          </motion.div>

          <WordReveal text={project.title}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
            className="text-6xl md:text-8xl lg:text-[8rem] mb-4"
            delay={0.5} />

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '11px', letterSpacing: '0.2em' }}>
            {project.subtitle[l]}
          </motion.div>
        </motion.div>
      </div>

      {/* Overview section */}
      <div ref={infoRef} className="px-6 md:px-12 xl:px-20 py-24 grid md:grid-cols-2 gap-16 border-b" style={{ borderColor: BORDER }}>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.38em', marginBottom: '16px' }}>{tx.work.challenge}</div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={infoInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
            style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>
            {project.challenge[l]}
          </motion.div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.38em', marginBottom: '16px' }}>{tx.work.solution}</div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={infoInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '15px', lineHeight: 1.8, fontWeight: 300 }}>
            {project.solution[l]}
          </motion.div>
        </div>
      </div>

      {/* Process images */}
      <div className="px-6 md:px-12 xl:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {project.images[1] && (
            <ImgReveal src={project.images[1]} alt={project.title} index={0} />
          )}
          {project.images[2] && (
            <ImgReveal src={project.images[2]} alt={project.title} index={1} />
          )}
        </div>
      </div>

      {/* Tech stack */}
      <TechStack project={project} tx={tx} />

      {/* Next project */}
      <NextProject project={nextProject} lang={l} tx={tx} />

      <Footer />
    </div>
  )
}

function ImgReveal({ src, alt, index }: { src: string; alt: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderRadius: '10px', overflow: 'hidden', height: '320px' }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  )
}

function TechStack({ project, tx }: { project: typeof PROJECTS[0]; tx: any }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="px-6 md:px-12 xl:px-20 py-16 border-t border-b" style={{ borderColor: BORDER }}>
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '32px' }}>
        {tx.work.techStack}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.techStack.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.6 }}
            style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '11px', letterSpacing: '0.12em', fontWeight: 300, padding: '14px 0', borderBottom: `1px solid ${BORDER}` }}>
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function NextProject({ project, lang, tx }: { project: typeof PROJECTS[0]; lang: 'en' | 'nl'; tx: any }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <Link to={`/work/details/${project.id}`}>
      <motion.div ref={ref} className="relative overflow-hidden" style={{ height: '50vh', cursor: 'pointer' }}>
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.6) 100%)' }} />
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7 }}>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '16px' }}>{tx.work.nextProject}</div>
          <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(2rem,6vw,5rem)', fontStyle: 'italic', fontWeight: 400 }}>{project.title}</div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.2em', marginTop: '10px' }}>{project.subtitle[lang]}</div>
        </motion.div>
      </motion.div>
    </Link>
  )
}
