import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { AnimatePresence, motion, useScroll, useTransform, useInView } from 'framer-motion'
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
          {project.video ? (
            <video
              src={project.video}
              poster={project.image}
              aria-label={`${project.title} hero film`}
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline preload="auto"
            />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.2) 0%, rgba(13,13,13,0.7) 70%, rgba(13,13,13,1) 100%)' }} />
        </motion.div>

        <motion.div
          className="project-hero-copy absolute bottom-0 left-0 right-0 px-6 md:px-12 xl:px-20 pb-16"
          style={{ opacity: heroOpacity }}
        >
          {/* Back link */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="project-hero-back mb-8">
            <Link to="/work" style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.3em' }}
              className="hover:opacity-60 transition-opacity">{tx.work.back}</Link>
          </motion.div>

          <motion.div className="project-hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.36em', marginBottom: '16px' }}>
            CASE STUDY // {project.tags[l]} // {project.year}
          </motion.div>

          <WordReveal text={project.title}
            style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
            className="project-hero-title text-6xl md:text-8xl lg:text-[8rem] mb-4"
            delay={0.5} />

          <motion.div className="project-hero-subtitle" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
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

      {/* Project film and supporting media */}
      <ProjectGallery project={project} lang={l} />

      {/* Tech stack */}
      <TechStack project={project} tx={tx} />

      {/* Next project */}
      <NextProject project={nextProject} lang={l} tx={tx} />

      <Footer />
    </div>
  )
}

function ProjectGallery({ project, lang }: { project: typeof PROJECTS[0]; lang: 'en' | 'nl' }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  const videos = project.videos ?? (project.video ? [project.video] : [])
  const allMedia: { type: 'video' | 'image'; src: string }[] = []
  const mediaCount = Math.max(videos.length, project.images.length)
  for (let index = 0; index < mediaCount; index += 1) {
    if (videos[index]) allMedia.push({ type: 'video', src: videos[index] })
    if (project.images[index]) allMedia.push({ type: 'image', src: project.images[index] })
  }
  const [activeMedia, setActiveMedia] = useState<number | null>(null)

  const moveModal = (direction: number) => {
    setActiveMedia((current) => current === null ? null : (current + direction + allMedia.length) % allMedia.length)
  }

  useEffect(() => {
    if (activeMedia === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMedia(null)
      if (event.key === 'ArrowLeft') moveModal(-1)
      if (event.key === 'ArrowRight') moveModal(1)
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeMedia, allMedia.length])

  const renderMedia = (media: { type: 'video' | 'image'; src: string }, modal = false) => media.type === 'video' ? (
    <AutoplayVideo src={media.src} poster={project.image} label={`${project.title} project film`} controls={modal} />
  ) : (
    <img src={media.src} alt={`${project.title} production still`} loading={modal ? 'eager' : 'lazy'} />
  )

  return (
    <section ref={ref} className="project-gallery px-6 md:px-12 xl:px-20 py-20 md:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="project-gallery-heading">
        <div>
          <span>{lang === 'en' ? 'PROJECT FILM' : 'PROJECTFILM'}</span>
          <h2>{lang === 'en' ? 'Inside the work.' : 'Achter het werk.'}</h2>
        </div>
        <p>{lang === 'en' ? 'Selected motion and stills from the production.' : 'Geselecteerde bewegende beelden en stills uit de productie.'}</p>
      </motion.div>

      {allMedia[0] && (
        <motion.div className="project-gallery-lead" role="button" tabIndex={0} aria-label={`Open ${project.title} media gallery`}
          onClick={() => setActiveMedia(0)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setActiveMedia(0) }}
          initial={{ opacity: 0, y: 42 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
          {renderMedia(allMedia[0])}
          <span className="project-gallery-open">VIEW GALLERY</span>
        </motion.div>
      )}

      <div className="project-gallery-grid">
        {allMedia.slice(1).map((media, index) => (
          <motion.article key={`${media.type}-${media.src}`} className={`project-gallery-tile project-gallery-tile-${media.type}`}
            role="button" tabIndex={0} aria-label={`Open ${project.title} media ${index + 2}`}
            onClick={() => setActiveMedia(index + 1)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setActiveMedia(index + 1) }}
            initial={{ opacity: 0, y: 34 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.14 + index * 0.055, ease: [0.16, 1, 0.3, 1] }}>
            {renderMedia(media)}
            <span className="project-gallery-open">VIEW</span>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeMedia !== null && allMedia[activeMedia] && (
          <motion.div className="media-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} media gallery`}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveMedia(null)}>
            <button type="button" className="media-lightbox-close" aria-label="Close media gallery" onClick={() => setActiveMedia(null)}>×</button>
            <button type="button" className="media-lightbox-arrow media-lightbox-prev" aria-label="Previous media"
              onClick={(event) => { event.stopPropagation(); moveModal(-1) }}>←</button>
            <motion.div key={allMedia[activeMedia].src} className="media-lightbox-stage"
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              onClick={(event) => event.stopPropagation()}>
              <div className="media-lightbox-viewport">
                {renderMedia(allMedia[activeMedia], true)}
              </div>
              <div className="media-lightbox-footer">
                <div>
                  <span>{allMedia[activeMedia].type === 'video' ? 'FILM' : (lang === 'en' ? 'STILL' : 'BEELD')}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="media-lightbox-count">{String(activeMedia + 1).padStart(2, '0')} / {String(allMedia.length).padStart(2, '0')}</div>
              </div>
            </motion.div>
            <button type="button" className="media-lightbox-arrow media-lightbox-next" aria-label="Next media"
              onClick={(event) => { event.stopPropagation(); moveModal(1) }}>→</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function AutoplayVideo({ src, poster, label, controls = false }: { src: string; poster: string; label: string; controls?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => undefined)
      else video.pause()
    }, { threshold: 0.12 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return (
    <video ref={videoRef} src={src} poster={poster} aria-label={label} autoPlay muted loop controls={controls}
      playsInline preload="metadata" onCanPlay={(event) => event.currentTarget.play().catch(() => undefined)} />
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
        {project.video ? (
          <video src={project.video} poster={project.image} aria-label={`${project.title} next project preview`}
            className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.52)' }}
            autoPlay muted loop playsInline preload="metadata" />
        ) : (
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.4)' }} />
        )}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.6) 100%)' }} />
        <motion.div className="next-project-copy absolute inset-0 flex flex-col items-center justify-center" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.7 }}>
          <div className="next-project-label" style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em' }}>{tx.work.nextProject}</div>
          <div className="next-project-title" style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: 'clamp(2rem,6vw,5rem)', fontStyle: 'italic', fontWeight: 400 }}>{project.title}</div>
          <div className="next-project-subtitle" style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.2em' }}>{project.subtitle[lang]}</div>
        </motion.div>
      </motion.div>
    </Link>
  )
}
