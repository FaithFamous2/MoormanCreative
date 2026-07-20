import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router'
import { useLang } from '../context/LanguageContext'
import logo from '../imports/Moorman_Creative_logo_zwart.png'

const CREAM = '#F4F1EA'
const BORDER = '#1F1F1F'
const MUTED = 'rgba(244,241,234,0.38)'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { tx, toggle, lang } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navBg = scrolled || !isHome

  const links = [
    { label: tx.nav.work, to: '/work' },
    { label: tx.nav.services, to: '/service' },
    { label: tx.nav.about, to: '/about' },
    { label: tx.nav.contact, to: '/contact' },
  ]

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-6"
        animate={{
          backgroundColor: navBg ? 'rgba(13,13,13,0.92)' : 'rgba(13,13,13,0)',
          backdropFilter: navBg ? 'blur(16px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ borderBottom: navBg ? `1px solid ${BORDER}` : '1px solid transparent' }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isHome ? 1.6 : 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={logo}
              alt="Moorman Creative"
              style={{ height: '22px', filter: 'invert(1)', opacity: 0.88 }}
            />
          </motion.div>
        </Link>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isHome ? 1.8 : 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex items-center gap-10"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname.startsWith(link.to) ? 'page' : undefined}
              style={{ fontFamily: 'var(--font-sans)', color: CREAM, fontSize: '10px', letterSpacing: '0.22em', fontWeight: 300 }}
              className={`elegant-nav-link ${location.pathname.startsWith(link.to) ? 'is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '10px', letterSpacing: '0.22em', fontWeight: 300 }}
            className="hover:opacity-60 transition-opacity duration-300 flex items-center gap-2"
          >
            <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ opacity: lang === 'nl' ? 1 : 0.4 }}>NL</span>
          </button>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            style={{ width: '22px', height: '1px', backgroundColor: CREAM, display: 'block', transformOrigin: 'center' }}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          />
          <motion.span
            style={{ width: '22px', height: '1px', backgroundColor: CREAM, display: 'block' }}
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            style={{ width: '22px', height: '1px', backgroundColor: CREAM, display: 'block', transformOrigin: 'center' }}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0A0A0A' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    aria-current={location.pathname.startsWith(link.to) ? 'page' : undefined}
                    style={{ fontFamily: 'var(--font-serif)', color: CREAM, fontSize: '2.5rem', fontStyle: 'italic', fontWeight: 400 }}
                    className={location.pathname.startsWith(link.to) ? 'opacity-100' : 'opacity-60'}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={toggle}
                style={{ fontFamily: 'var(--font-sans)', color: MUTED, fontSize: '12px', letterSpacing: '0.3em', marginTop: '16px' }}
              >
                <span style={{ opacity: lang === 'en' ? 1 : 0.4 }}>EN</span>
                {' / '}
                <span style={{ opacity: lang === 'nl' ? 1 : 0.4 }}>NL</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
