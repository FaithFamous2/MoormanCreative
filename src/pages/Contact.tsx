import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import { WordReveal } from '../components/WordReveal'
import { Footer } from '../components/Footer'

const CREAM = '#F4F1EA'
const CHARCOAL = '#0D0D0D'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

const inputStyle = {
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: `1px solid rgba(244,241,234,0.15)`,
  padding: '14px 0',
  color: CREAM,
  fontFamily: 'var(--font-sans)',
  fontSize: '14px',
  fontWeight: 300,
  outline: 'none',
  lineHeight: 1.5,
}

const labelStyle = {
  fontFamily: 'var(--font-sans)',
  color: MUTED,
  fontSize: '8px',
  letterSpacing: '0.38em',
  marginBottom: '8px',
  display: 'block',
}

export default function Contact() {
  const { tx } = useLang()
  const c = tx.contact
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1200)
  }

  return (
    <div style={{ backgroundColor: CHARCOAL, minHeight: '100vh' }}>
      {/* Header */}
      <div className="px-6 md:px-12 xl:px-20" style={{ paddingTop: '140px', paddingBottom: '40px' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginBottom: '24px' }}>
          {c.label}
        </motion.div>
        <WordReveal text={c.headline}
          style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}
          className="text-6xl md:text-8xl lg:text-[8rem] mb-8" delay={0.2} />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
          className="max-w-xl"
          style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '14px', lineHeight: 1.8, fontWeight: 300 }}>
          {c.intro}
        </motion.div>
      </div>

      {/* Main grid */}
      <div ref={ref} className="px-6 md:px-12 xl:px-20 py-16 grid md:grid-cols-3 gap-16 border-t" style={{ borderColor: BORDER }}>
        {/* Form — 2/3 */}
        <div className="md:col-span-2">
          {sent ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '2rem', fontStyle: 'italic', lineHeight: 1.4, paddingTop: '40px' }}>
              {c.form.thanks}
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                {/* Name */}
                <div>
                  <label style={labelStyle}>{c.form.name}</label>
                  <input type="text" placeholder={c.form.namePlaceholder} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} required />
                </div>
                {/* Email */}
                <div>
                  <label style={labelStyle}>{c.form.email}</label>
                  <input type="email" placeholder={c.form.emailPlaceholder} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} required />
                </div>
                {/* Company */}
                <div>
                  <label style={labelStyle}>{c.form.company}</label>
                  <input type="text" placeholder={c.form.companyPlaceholder} value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={inputStyle} />
                </div>
                {/* Budget */}
                <div>
                  <label style={labelStyle}>{c.form.budget}</label>
                  <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="" disabled style={{ backgroundColor: CHARCOAL }}>—</option>
                    {c.form.budgetOptions.map((opt: string) => (
                      <option key={opt} value={opt} style={{ backgroundColor: CHARCOAL }}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-12">
                <label style={labelStyle}>{c.form.message}</label>
                <textarea placeholder={c.form.messagePlaceholder} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5}
                  style={{ ...inputStyle, resize: 'none', borderBottom: `1px solid rgba(244,241,234,0.15)` }} />
              </div>

              <button type="submit" disabled={sending}
                style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.3em', backgroundColor: 'transparent', border: `1px solid rgba(244,241,234,0.4)`, padding: '16px 40px', cursor: 'pointer', transition: 'opacity 0.3s', opacity: sending ? 0.5 : 1 }}>
                {sending ? c.form.sending : c.form.send}
              </button>
            </motion.form>
          )}
        </div>

        {/* Info — 1/3 */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-10">
          <InfoBlock label={c.info.studioLabel}>
            <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300, lineHeight: 1.7 }}>{c.info.studio}</div>
            <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '12px', fontWeight: 300, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.info.address}</div>
          </InfoBlock>
          <InfoBlock label={c.info.emailLabel}>
            <a href={`mailto:${c.info.email}`} style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300 }}
              className="hover:opacity-60 transition-opacity">{c.info.email}</a>
          </InfoBlock>
          <InfoBlock label={c.info.phoneLabel}>
            <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300 }}>{c.info.phone}</div>
          </InfoBlock>
          <InfoBlock label={c.info.hoursLabel}>
            <div style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '13px', fontWeight: 300 }}>{c.info.hours}</div>
          </InfoBlock>
        </motion.div>
      </div>

      {/* Map-style decorative block */}
      <div className="mx-6 md:mx-12 xl:mx-20 mb-20 rounded-xl overflow-hidden" style={{ height: '280px', backgroundColor: '#0C0C0C', border: `1px solid ${BORDER}`, position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', color: 'rgba(244,241,234,0.12)', fontSize: '6rem', fontStyle: 'italic', fontWeight: 400, lineHeight: 1 }}>Amsterdam</div>
            <div style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '9px', letterSpacing: '0.4em', marginTop: '8px' }}>52.3676° N, 4.9041° E</div>
          </div>
        </div>
        {/* Grid lines decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-5" style={{ pointerEvents: 'none' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke={CREAM} strokeWidth="1" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 5}%`} y1="0" x2={`${i * 5}%`} y2="100%" stroke={CREAM} strokeWidth="1" />
          ))}
          <circle cx="50%" cy="50%" r="8" fill={CREAM} opacity="0.4" />
          <circle cx="50%" cy="50%" r="20" fill="none" stroke={CREAM} strokeWidth="1" opacity="0.3" />
          <circle cx="50%" cy="50%" r="40" fill="none" stroke={CREAM} strokeWidth="1" opacity="0.15" />
        </svg>
      </div>

      <Footer />
    </div>
  )
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t pt-8" style={{ borderColor: BORDER }}>
      <div style={labelStyle as React.CSSProperties}>{label}</div>
      {children}
    </div>
  )
}
