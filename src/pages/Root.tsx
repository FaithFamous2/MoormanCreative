import { useEffect, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from '../components/Nav'
import { Seo } from '../components/Seo'

export default function Root() {
  const location = useLocation()

  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior

    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior
    }
  }, [location.key])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'
      }
    }
  }, [])

  return (
    <>
      <Seo />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
