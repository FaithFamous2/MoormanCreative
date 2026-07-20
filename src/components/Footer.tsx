import { Link } from 'react-router'
import { useLang } from '../context/LanguageContext'

const CREAM = '#F4F1EA'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export function Footer() {
  const { tx } = useLang()
  const f = tx.footer

  return (
    <footer
      className="px-6 md:px-12 xl:px-20 pt-20 pb-10"
      style={{ backgroundColor: '#060606', borderTop: `1px solid ${BORDER}` }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.26em', marginBottom: '16px' }}>
            MOORMAN CREATIVE
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '12px', lineHeight: 1.75, fontWeight: 300, maxWidth: '220px' }}>
            {f.tagline}
          </div>
          <div style={{ marginTop: '20px', fontFamily: 'var(--font-sans)', color: 'rgba(244,241,234,0.22)', fontSize: '10px', letterSpacing: '0.16em' }}>
            {f.location}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.38em', marginBottom: '18px' }}>
            {f.sections.work}
          </div>
          {[
            { label: f.links.caseStudies, to: '/work' },
            { label: f.links.commercial, to: '/work' },
            { label: f.links.brandFilms, to: '/work' },
            { label: f.links.ipProjects, to: '/work' },
          ].map((l) => (
            <div key={l.label} style={{ marginBottom: '10px' }}>
              <Link
                to={l.to}
                style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '12px', fontWeight: 300, opacity: 0.75 }}
                className="hover:opacity-40 transition-opacity"
              >
                {l.label}
              </Link>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.38em', marginBottom: '18px' }}>
            {f.sections.services}
          </div>
          {[
            { label: f.links.aiVideo, to: '/service' },
            { label: f.links.customSystems, to: '/service' },
            { label: f.links.direction, to: '/service' },
            { label: f.links.postProd, to: '/service' },
          ].map((l) => (
            <div key={l.label} style={{ marginBottom: '10px' }}>
              <Link
                to={l.to}
                style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '12px', fontWeight: 300, opacity: 0.75 }}
                className="hover:opacity-40 transition-opacity"
              >
                {l.label}
              </Link>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '8px', letterSpacing: '0.38em', marginBottom: '18px' }}>
            {f.sections.studio}
          </div>
          {[
            { label: f.links.about, to: '/about' },
            { label: f.links.careers, to: '/contact' },
            { label: f.links.instagram, to: '/contact' },
            { label: f.links.contact, to: '/contact' },
          ].map((l) => (
            <div key={l.label} style={{ marginBottom: '10px' }}>
              <Link
                to={l.to}
                style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '12px', fontWeight: 300, opacity: 0.75 }}
                className="hover:opacity-40 transition-opacity"
              >
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8"
        style={{ borderTop: `1px solid ${BORDER}` }}
      >
        <div style={{ fontFamily: 'var(--font-sans)', color: 'rgba(244,241,234,0.22)', fontSize: '9px', letterSpacing: '0.2em' }}>
          {f.rights}
        </div>
        <div
          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(244,241,234,0.22)', fontSize: '9px', letterSpacing: '0.2em', marginTop: '12px' }}
          className="md:mt-0"
        >
          {f.legal}
        </div>
      </div>
    </footer>
  )
}
