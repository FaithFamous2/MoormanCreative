import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'
import { PROJECTS } from '../data'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-4% 0px' })
  const [hovered, setHovered] = useState(false)
  const { lang } = useLang()
  const l = lang as 'en' | 'nl'

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', border: `1px solid ${BORDER}`, cursor: 'pointer', backgroundColor: '#111' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/work/details/${project.id}`} className="block">
        <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.8) 100%)' }} />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.3em', border: `1px solid rgba(244,241,234,0.4)`, padding: '10px 20px' }}>
              VIEW PROJECT
            </div>
          </motion.div>
        </div>

        <div style={{ padding: '20px 24px 24px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.32em', marginBottom: '8px' }}>
            {project.category[l]} // {project.year}
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1, marginBottom: '6px' }}>
            {project.title}
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.16em', fontWeight: 300 }}>
            {project.subtitle[l]}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const { tx } = useLang()
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true })
  const [selectedYear, setSelectedYear] = useState('ALL')
  const years = ['ALL', ...Array.from(new Set(PROJECTS.map((project) => project.year))).sort((a, b) => Number(b) - Number(a))]
  const filteredProjects = selectedYear === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((project) => project.year === selectedYear)

  return (
    <div style={{ backgroundColor: CHARCOAL, minHeight: '100vh' }}>
      {/* Page header */}
      <div className="px-6 md:px-12 xl:px-20" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '24px' }}
        >
          {tx.work.pageLabel}
        </motion.div>
        <WordReveal
          text={tx.work.pageHeadline}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem]"
        />
      </div>

      {/* Filters row */}
      <div className="work-filters px-6 md:px-12 xl:px-20 mb-12 border-t border-b" style={{ borderColor: BORDER }}>
        <div className="flex items-center gap-8 md:gap-10 overflow-x-auto py-5" role="group" aria-label="Filter projects by year">
        {years.map((year) => {
          const active = selectedYear === year
          const count = year === 'ALL' ? PROJECTS.length : PROJECTS.filter((project) => project.year === year).length

          return (
          <button
            key={year}
            type="button"
            onClick={() => setSelectedYear(year)}
            aria-pressed={active}
            className="work-filter-button"
            style={{ color: active ? CREAM : MUTED }}
          >
            <span>{year}</span>
            <span className="work-filter-count">{String(count).padStart(2, '0')}</span>
            {active && (
              <motion.span
                layoutId="active-work-filter"
                className="work-filter-indicator"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
          </button>
          )
        })}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-12 xl:px-20 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 14 }}
                transition={{ duration: 0.45, delay: i * 0.035, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  )
}
