import { useRef, type CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'

export function WordReveal({
  text,
  className,
  style,
  delay = 0,
}: {
  text: string
  className?: string
  style?: CSSProperties
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const words = text.split(' ')

  return (
    <div ref={ref} className={className} style={style}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.25em' }}>
        {words.map((word, i) => (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
              style={{ display: 'inline-block' }}
              initial={{ y: '115%', opacity: 0 }}
              animate={inView ? { y: '0%', opacity: 1 } : {}}
              transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  )
}
