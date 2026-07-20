import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { PROJECTS, SERVICES } from '../data'
import { useLang } from '../context/LanguageContext'
import logo from '../imports/Moorman_Creative_logo_zwart.png'

const BRAND = 'Moorman Creative'

type SeoData = {
  title: string
  description: string
  image?: string
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

function getSeo(pathname: string, lang: 'en' | 'nl'): SeoData {
  const projectId = pathname.match(/^\/work\/details\/([^/]+)/)?.[1]
  const serviceId = pathname.match(/^\/service\/([^/]+)/)?.[1]
  const project = PROJECTS.find((item) => item.id === projectId)
  const service = SERVICES.find((item) => item.id === serviceId)

  if (project) {
    return {
      title: `${project.title} — ${project.category[lang]}`,
      description: project.challenge[lang],
      image: project.image,
    }
  }

  if (service) {
    return {
      title: service.title[lang],
      description: service.shortDesc[lang],
      image: service.image,
    }
  }

  const pages: Record<string, SeoData> = lang === 'nl'
    ? {
        '/': {
          title: 'AI-gedreven creatieve studio',
          description: 'Moorman Creative maakt cinematografische campagnes, merkfilms, VFX en AI-gedreven visuele ervaringen.',
        },
        '/work': {
          title: 'Werk',
          description: 'Bekijk geselecteerde campagnes, merkfilms, motion design en AI-gedreven producties van Moorman Creative.',
        },
        '/service': {
          title: 'Diensten',
          description: 'Cinematografische AI-video, VFX, creatieve regie en visuele systemen voor ambitieuze merken.',
        },
        '/about': {
          title: 'Over ons',
          description: 'Ontdek de visie, werkwijze en creatieve technologie achter Moorman Creative.',
        },
        '/contact': {
          title: 'Contact',
          description: 'Start een project met Moorman Creative en vertel ons over uw volgende campagne, film of visuele ervaring.',
        },
      }
    : {
        '/': {
          title: 'AI-powered creative studio',
          description: 'Moorman Creative creates cinematic campaigns, brand films, VFX and AI-powered visual experiences.',
        },
        '/work': {
          title: 'Selected Work',
          description: 'Explore selected campaigns, brand films, motion design and AI-powered productions by Moorman Creative.',
        },
        '/service': {
          title: 'Creative Services',
          description: 'Cinematic AI video, VFX, creative direction and visual systems for ambitious global brands.',
        },
        '/about': {
          title: 'About',
          description: 'Discover the vision, process and creative technology behind Moorman Creative.',
        },
        '/contact': {
          title: 'Contact',
          description: 'Start a project with Moorman Creative and tell us about your next campaign, film or visual experience.',
        },
      }

  return pages[pathname] ?? pages['/']
}

export function Seo() {
  const { pathname } = useLocation()
  const { lang } = useLang()

  useEffect(() => {
    const seo = getSeo(pathname, lang)
    const fullTitle = `${seo.title} | ${BRAND}`
    const canonicalUrl = `${window.location.origin}${pathname}`
    const imageUrl = seo.image?.startsWith('http')
      ? seo.image
      : `${window.location.origin}${seo.image ?? logo}`

    document.title = fullTitle
    document.documentElement.lang = lang

    upsertMeta('meta[name="description"]', { name: 'description', content: seo.description })
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: BRAND })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: lang === 'nl' ? 'nl_NL' : 'en_US' })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle })
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [pathname, lang])

  return null
}
