export interface Project {
  id: string
  title: string
  subtitle: { en: string; nl: string }
  tags: { en: string; nl: string }
  year: string
  category: { en: string; nl: string }
  image: string
  video?: string
  videos?: string[]
  images: string[]
  challenge: { en: string; nl: string }
  solution: { en: string; nl: string }
  techStack: string[]
}

export interface Service {
  id: string
  title: { en: string; nl: string }
  tag: { en: string; nl: string }
  shortDesc: { en: string; nl: string }
  fullDesc: { en: string; nl: string }
  image: string
  processSteps: { en: string; nl: string }[]
  includes: { en: string; nl: string }[]
}

const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 'velocity',
    title: 'Velocity',
    subtitle: { en: 'NIKE × MOORMAN CREATIVE', nl: 'NIKE × MOORMAN CREATIVE' },
    tags: { en: 'DIRECTION & VFX', nl: 'REGIE & VFX' },
    year: '2026',
    category: { en: 'Commercial', nl: 'Commercieel' },
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Nike needed a campaign launch film for their new running collection — cinematic, visceral, and unlike anything previously seen in athletic wear advertising. Budget and timeline were both compressed.',
      nl: 'Nike had een campagnefilm nodig voor hun nieuwe hardloopcollectie — cinematografisch, visceraal en ongelijk aan alles wat eerder in sportkleding advertenties was gezien. Budget en tijdlijn waren beide beperkt.',
    },
    solution: {
      en: 'We deployed our custom-trained motion diffusion model, fine-tuned on archival sports cinematography. Combined with Unreal Engine 5 environments and traditional VFX compositing, we delivered 4 minutes of broadcast-ready footage in 6 weeks.',
      nl: 'We zetten ons op maat getrainde bewegingsdiffusiemodel in, verfijnd op gearchiveerde sportcinematografie. Gecombineerd met Unreal Engine 5-omgevingen en traditionele VFX-compositie leverden we 4 minuten uitzendklare beelden in 6 weken.',
    },
    techStack: ['AI SYSTEM: CUSTOM DIFFUSION MODEL', 'ENGINE: UNREAL ENGINE 5', 'VFX: NUKE', 'GRADE: DAVINCI RESOLVE', 'AUDIO: DOLBY ATMOS'],
  },
  {
    id: 'altitude',
    title: 'Altitude',
    subtitle: { en: 'RED BULL × AI CAMPAIGN', nl: 'RED BULL × AI CAMPAGNE' },
    tags: { en: 'AI GENERATION', nl: 'AI GENERATIE' },
    year: '2025',
    category: { en: 'Brand Campaign', nl: 'Merkcampagne' },
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Red Bull wanted to visualise extreme altitude sports in environments physically impossible to film — sub-zero mountain ranges at 7,000m, lightning storms at 10,000ft. The content had to feel real, dangerous, and alive.',
      nl: 'Red Bull wilde extreme hoogtemsporten visualiseren in omgevingen die fysiek onmogelijk te filmen zijn — ijskoude bergketens op 7.000m, onweersstormen op 10.000 voet. De content moest echt, gevaarlijk en levend aanvoelen.',
    },
    solution: {
      en: 'A hybrid production: real athletes filmed on controlled sets, composited into fully AI-generated environments. Our atmospheric generation model produced photorealistic storm and snowscape footage at any altitude, any condition.',
      nl: 'Een hybride productie: echte atleten gefilmd op gecontroleerde sets, gecompositeerd in volledig AI-gegenereerde omgevingen. Ons atmosferisch generatiemodel produceerde fotorealistische storm- en sneeuwlandschapbeelden op elke hoogte, in elke conditie.',
    },
    techStack: ['AI SYSTEM: MIDJOURNEY + CUSTOM PIPELINE', 'COMPOSITING: AFTER EFFECTS', 'VFX: HOUDINI', 'GRADE: BASELIGHT', 'DELIVERY: BROADCAST + DIGITAL'],
  },
  {
    id: 'epoch',
    title: 'Epoch',
    subtitle: { en: 'BRAND IDENTITY & FILM', nl: 'MERKIDENTITEIT & FILM' },
    tags: { en: 'MOTION DESIGN', nl: 'MOTION DESIGN' },
    year: '2025',
    category: { en: 'Brand Identity', nl: 'Merkidentiteit' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'A luxury watch brand launching globally needed a brand identity film that communicated the weight of time, precision, and legacy — in under 90 seconds, across 12 markets.',
      nl: 'Een luxe horlogemerk dat wereldwijd lanceerde had een merkidentiteitsfilm nodig die het gewicht van tijd, precisie en erfenis communiceerde — in minder dan 90 seconden, in 12 markten.',
    },
    solution: {
      en: 'We created a single, continuous shot illusion using AI-generated timelapses of geological formations, ocean currents, and celestial mechanics — all composited to move through the interior of the watch mechanism.',
      nl: 'We creëerden een illusie van één doorlopende opname met AI-gegenereerde time-lapses van geologische formaties, oceaanstromingen en hemelse mechanica — allemaal gecompositeerd om door het interieur van het uurwerkmechanisme te bewegen.',
    },
    techStack: ['AI SYSTEM: STABLE DIFFUSION (CUSTOM FINE-TUNE)', 'MOTION: AFTER EFFECTS', '3D: CINEMA 4D', 'GRADE: DAVINCI RESOLVE', 'MUSIC: ORIGINAL SCORE'],
  },
  {
    id: 'meridian',
    title: 'Meridian',
    subtitle: { en: 'PORSCHE × CINEMATIC LAUNCH', nl: 'PORSCHE × CINEMATOGRAFISCHE LANCERING' },
    tags: { en: 'AUTOMOTIVE DIRECTION', nl: 'AUTOMOTIVE REGIE' },
    year: '2025',
    category: { en: 'Automotive', nl: 'Automotive' },
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Porsche needed a global launch film for the new 911 variant that bypassed traditional production schedules — 8 weeks from brief to delivery, photorealistic environments across five continents.',
      nl: 'Porsche had een wereldwijde lanceringsfilm nodig voor de nieuwe 911-variant die de traditionele productieschema\'s omzeilde — 8 weken van briefing tot oplevering, fotorealistische omgevingen op vijf continenten.',
    },
    solution: {
      en: 'Using our automotive-tuned generation pipeline, we created photorealistic driving environments in Norwegian fjords, Moroccan desert, and Tokyo nightscapes. Real car footage composited seamlessly into AI-generated worlds.',
      nl: 'Met behulp van onze automotive-afgestemde generatiepipeline creëerden we fotorealistische rijomgevingen in Noorse fjorden, Marokkaanse woestijn en Tokio-nachtlandschappen. Echte auto-opnames naadloos gecompositeerd in AI-gegenereerde werelden.',
    },
    techStack: ['AI SYSTEM: CUSTOM AUTOMOTIVE PIPELINE', 'ENGINE: UNREAL ENGINE 5', 'VFX: NUKE', 'CAMERA: ARRI ALEXA 35', 'GRADE: BASELIGHT'],
  },
  {
    id: 'surge',
    title: 'Surge',
    subtitle: { en: 'ADIDAS × PERFORMANCE CAMPAIGN', nl: 'ADIDAS × PERFORMANCECAMPAGNE' },
    tags: { en: 'CAMPAIGN DIRECTION', nl: 'CAMPAGNEREGIE' },
    year: '2024',
    category: { en: 'Commercial', nl: 'Commercieel' },
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Adidas wanted a campaign that captured the emotional surge of peak athletic performance — the moment before the finish line, the split second where everything slows down.',
      nl: 'Adidas wilde een campagne die de emotionele surge van piekprestatieve atletiek vastlegde — het moment voor de finishlijn, het splitseconde waarop alles vertraagt.',
    },
    solution: {
      en: 'We developed a proprietary slow-motion AI upscaling pipeline that turned 120fps footage into hyper-realistic 960fps equivalents. Combined with AI-generated stadium environments and a real athlete cast.',
      nl: 'We ontwikkelden een eigen slow-motion AI-upscalingpipeline die 120fps beelden omzette in hyperrealistische 960fps equivalenten. Gecombineerd met AI-gegenereerde stadionimgevingen en een echte atletencast.',
    },
    techStack: ['AI SYSTEM: CUSTOM SLOW-MO PIPELINE', 'CAMERA: RED KOMODO', 'VFX: AFTER EFFECTS', 'GRADE: DAVINCI RESOLVE', 'MUSIC: LICENSED ORIGINAL'],
  },
  {
    id: 'aurora',
    title: 'Aurora',
    subtitle: { en: 'SAMSUNG × GALAXY LAUNCH', nl: 'SAMSUNG × GALAXY LANCERING' },
    tags: { en: 'TECH VISUAL', nl: 'TECH VISUAL' },
    year: '2024',
    category: { en: 'Technology', nl: 'Technologie' },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Samsung needed a flagship product film that felt as advanced as the technology itself — abstract, beautiful, and technically irreproachable. The brief asked for something no traditional studio could produce.',
      nl: 'Samsung had een vlaggenschipproductfilm nodig die zo geavanceerd aanvoelde als de technologie zelf — abstract, mooi en technisch onberispelijk. De briefing vroeg om iets dat geen traditionele studio kon produceren.',
    },
    solution: {
      en: 'An entirely AI-generated visual world inspired by aurora borealis physics. Every frame generated, refined, and composited into a seamless 60-second product reveal with zero live-action footage.',
      nl: 'Een volledig AI-gegenereerde visuele wereld geïnspireerd op de natuurkunde van het noorderlicht. Elk frame gegenereerd, verfijnd en gecompositeerd in een naadloze 60-seconden productonthulling zonder live-action beelden.',
    },
    techStack: ['AI SYSTEM: FLUX + CUSTOM PIPELINE', 'COMPOSITING: NUKE', 'MOTION: HOUDINI', 'GRADE: DAVINCI RESOLVE', 'DELIVERY: 8K HDR'],
  },
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: { en: 'SPOTIFY × ARTIST SERIES', nl: 'SPOTIFY × ARTIESTENSERIE' },
    tags: { en: 'MUSIC VISUAL', nl: 'MUZIEK VISUAL' },
    year: '2024',
    category: { en: 'Music & Entertainment', nl: 'Muziek & Entertainment' },
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Spotify needed an artist visual series — 8 short films for 8 artists, each expressing their sonic world visually. 8 unique visual languages. 10 weeks. Limited budget per artist.',
      nl: 'Spotify had een artiestenvisuele serie nodig — 8 korte films voor 8 artiesten, elk die hun sonische wereld visueel uitdrukken. 8 unieke visuele talen. 10 weken. Beperkt budget per artiest.',
    },
    solution: {
      en: 'We built a style-transfer pipeline that extracted the sonic characteristics of each track — tempo, tonality, texture — and used them as conditioning inputs for our visual generation models. Each film is literally derived from its music.',
      nl: 'We bouwden een stijl-transfer-pipeline die de sonische kenmerken van elke track extraheerde — tempo, tonaliteit, textuur — en ze gebruikte als conditionerende invoer voor onze visuele generatiemodellen. Elke film is letterlijk afgeleid van zijn muziek.',
    },
    techStack: ['AI SYSTEM: AUDIO-CONDITIONED GENERATION', 'MOTION: AFTER EFFECTS', 'GRADE: DAVINCI RESOLVE', 'DELIVERY: VERTICAL + HORIZONTAL', 'MUSIC: 8 ORIGINAL ARTISTS'],
  },
  {
    id: 'chronicle',
    title: 'Chronicle',
    subtitle: { en: 'CANAL+ × DOCUMENTARY SERIES', nl: 'CANAL+ × DOCUMENTAIRESERIE' },
    tags: { en: 'DOCUMENTARY DIRECTION', nl: 'DOCUMENTAIREREGIE' },
    year: '2023',
    category: { en: 'Documentary', nl: 'Documentaire' },
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop&auto=format',
    images: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&h=900&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&h=700&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop&auto=format',
    ],
    challenge: {
      en: 'Canal+ commissioned a 4-part documentary series on the history of AI in cinema — covering 40 years, with archival footage that barely existed and budgets that excluded high-end reconstruction.',
      nl: 'Canal+ gaf opdracht voor een 4-delige documentaireserie over de geschiedenis van AI in de cinema — 40 jaar bestrijkend, met archiefmateriaal dat nauwelijks bestond en budgetten die high-end reconstructie uitsloten.',
    },
    solution: {
      en: 'We used AI restoration and generation to rebuild archival scenes, animate stills, and create contextual environments from historical photography. The result was 4 hours of documentary that felt like it had always existed.',
      nl: 'We gebruikten AI-restauratie en -generatie om archiefsscènes te herbouwen, stilstaande beelden te animeren en contextuele omgevingen te creëren uit historische fotografie. Het resultaat was 4 uur documentaire die aanvoelde alsof hij altijd al had bestaan.',
    },
    techStack: ['AI SYSTEM: RESTORATION + GENERATION PIPELINE', 'ARCHIVAL: 35MM SCAN', 'COMPOSITING: NUKE', 'GRADE: BASELIGHT', 'DELIVERY: 4K HDR + SDR'],
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'catwalk', title: 'The Catwalk', year: '2026',
    subtitle: { en: 'AI FASHION FILM', nl: 'AI-MODEFILM' },
    tags: { en: 'CONCEPT & ANIMATION', nl: 'CONCEPT & ANIMATIE' },
    category: { en: 'Fashion', nl: 'Mode' },
    image: '/projects/catwalk.jpg', video: '/projects/catwalk.mp4',
    videos: ['/projects/catwalk.mp4', '/projects/catwalk-02.mp4', '/projects/catwalk-03.mp4'],
    images: ['/projects/catwalk.jpg', '/projects/catwalk-02.jpg', '/projects/catwalk-03.jpg'],
    challenge: {
      en: 'Create an editorial-grade fashion campaign with the presence, movement, and attitude of a real runway production—without the scale and cost of a traditional shoot.',
      nl: 'Een modecampagne van redactioneel niveau creëren met de uitstraling, beweging en attitude van een echte catwalkproductie—zonder de schaal en kosten van een traditionele shoot.',
    },
    solution: {
      en: 'A hyper-realistic model and visual concept were created in Nano Banana 2, then animated with Seedance 2.0 to achieve fluid runway movement and a cinematic high-fashion finish.',
      nl: 'Een hyperrealistisch model en visueel concept werden gemaakt in Nano Banana 2 en vervolgens geanimeerd met Seedance 2.0 voor vloeiende catwalkbewegingen en een cinematografische high-fashion afwerking.',
    },
    techStack: ['MODEL & CONCEPT: NANO BANANA 2', 'ANIMATION: SEEDANCE 2.0', 'FORMAT: DIGITAL CAMPAIGN', 'DIRECTION: MOORMAN CREATIVE'],
  },
  {
    id: 'floreros', title: 'Floreros', year: '2026',
    subtitle: { en: 'PRODUCT SHOWCASE FILM', nl: 'PRODUCTSHOWCASEFILM' },
    tags: { en: 'AI VISUALS & MOTION', nl: 'AI-BEELD & MOTION' },
    category: { en: 'Product Film', nl: 'Productfilm' },
    image: '/projects/floreros.jpg', video: '/projects/floreros.mp4',
    videos: ['/projects/floreros.mp4', '/projects/floreros-02.mp4', '/projects/floreros-03.mp4'],
    images: ['/projects/floreros.jpg'],
    challenge: {
      en: 'Translate Floreros’ distinctive vase collection into a short showcase film that captures the character of the brand and makes the products feel vivid on social media.',
      nl: 'De karakteristieke vazencollectie van Floreros vertalen naar een korte showcasefilm die het merkgevoel vangt en de producten levendig presenteert op social media.',
    },
    solution: {
      en: 'The visual world was generated with Midjourney and Nano Banana 2, then brought to life in Kling 3.0—turning a chance local-market meeting into a polished digital brand collaboration.',
      nl: 'De visuele wereld werd gecreëerd met Midjourney en Nano Banana 2 en tot leven gebracht in Kling 3.0—waarmee een toevallige ontmoeting op de lokale markt uitgroeide tot een verzorgde digitale merksamenwerking.',
    },
    techStack: ['VISUALS: MIDJOURNEY', 'REFINEMENT: NANO BANANA 2', 'ANIMATION: KLING 3.0', 'DELIVERY: SOCIAL FILM'],
  },
  {
    id: 'roots-routes', title: 'Roots & Routes', year: '2026',
    subtitle: { en: 'CAFÉ BRAND EXPERIENCE', nl: 'CAFÉ MERKBELEVING' },
    tags: { en: 'AI BRAND CAMPAIGN', nl: 'AI-MERKCAMPAGNE' },
    category: { en: 'Hospitality', nl: 'Hospitality' },
    image: '/projects/roots-routes.png', video: '/projects/roots-routes.mp4',
    videos: ['/projects/roots-routes.mp4', '/projects/roots-routes-02.mp4', '/projects/roots-routes-03.mp4'],
    images: ['/projects/roots-routes.png'],
    challenge: {
      en: 'Roots & Routes Café needed an inviting online atmosphere that expressed its distinctive identity, without the cost and limitations of a conventional location shoot.',
      nl: 'Roots & Routes Café had een uitnodigende online sfeer nodig die de eigen identiteit voelbaar maakte, zonder de kosten en beperkingen van een traditionele locatieshoot.',
    },
    solution: {
      en: 'A bespoke visual campaign was built entirely digitally. Midjourney imagery was refined with Nano Banana Pro and animated in Kling AI, creating an immersive sensory journey without a camera crew or a day on location.',
      nl: 'Een volledig digitale campagne werd ontwikkeld. Midjourney-beelden werden verfijnd met Nano Banana Pro en geanimeerd in Kling AI, voor een meeslepende zintuiglijke reis zonder cameraploeg of draaidag op locatie.',
    },
    techStack: ['VISUAL DIRECTION: MIDJOURNEY', 'REFINEMENT: NANO BANANA PRO', 'ANIMATION: KLING AI', 'PRODUCTION: FULLY DIGITAL'],
  },
  {
    id: 'pontiac-firebird', title: 'Pontiac Firebird Trans Am', year: '2026',
    subtitle: { en: 'AUTOMOTIVE SOCIAL FILM', nl: 'AUTOMOTIVE SOCIAL FILM' },
    tags: { en: 'AI AUTOMOTIVE DIRECTION', nl: 'AI-AUTOMOTIVE REGIE' },
    category: { en: 'Automotive', nl: 'Automotive' },
    image: '/projects/pontiac.jpg', video: '/projects/pontiac.mp4',
    videos: ['/projects/pontiac.mp4', '/projects/pontiac-02.mp4', '/projects/pontiac-03.mp4'],
    images: ['/projects/pontiac.jpg', '/projects/pontiac-02.jpg', '/projects/pontiac-03.jpg'],
    challenge: {
      en: 'Present an iconic black Pontiac Firebird Trans Am with the drama and mythology of a cinematic car commercial across social-first formats.',
      nl: 'Een iconische zwarte Pontiac Firebird Trans Am presenteren met de dramatiek en mythe van een cinematografische autoreclame, geschikt voor social-first formaten.',
    },
    solution: {
      en: 'Atmospheric automotive shots, driving perspectives, and detailed close-ups were developed into a focused social film that treats the classic car as a living legend.',
      nl: 'Sfeervolle autoshots, rijperspectieven en detailbeelden werden samengebracht in een krachtige social film die de klassieker als een levende legende neerzet.',
    },
    techStack: ['AI-GENERATED VISUALS', 'CINEMATIC MOTION', 'EDIT & SOUND DESIGN', 'DELIVERY: SOCIAL + 4K'],
  },
  {
    id: 'tendenz', title: 'TendenZ Wonen', year: '2026',
    subtitle: { en: 'FREEDOM SOFA CAMPAIGN', nl: 'FREEDOM BANKSTELCAMPAGNE' },
    tags: { en: 'PRODUCT CAMPAIGN', nl: 'PRODUCTCAMPAGNE' },
    category: { en: 'Interiors', nl: 'Interieur' },
    image: '/projects/tendenz.jpg', video: '/projects/tendenz.mp4',
    videos: ['/projects/tendenz.mp4', '/projects/tendenz-02.mp4', '/projects/tendenz-03.mp4'],
    images: ['/projects/tendenz.jpg', '/projects/tendenz-02.jpg', '/projects/tendenz-03.jpg'],
    challenge: {
      en: 'Showcase the Freedom sofa as a premium Dutch living product while keeping the visual language warm, aspirational, and centred on comfort.',
      nl: 'Het Freedom-bankstel presenteren als een hoogwaardig Nederlands woonproduct, met een warme, ambitieuze beeldtaal waarin comfort centraal staat.',
    },
    solution: {
      en: 'Product photography and generated motion studies were shaped into a polished furniture film, using measured camera movement and changing environments to elevate the sofa’s design.',
      nl: 'Productfotografie en gegenereerde motion-studies werden verwerkt tot een verzorgde meubelfilm, met beheerste camerabewegingen en wisselende omgevingen die het ontwerp van de bank versterken.',
    },
    techStack: ['PRODUCT PHOTOGRAPHY', 'AI ENVIRONMENT GENERATION', 'MOTION DESIGN', 'EDIT & MUSIC'],
  },
  {
    id: 'montagna-doro', title: 'Montagna d’Oro', year: '2026',
    subtitle: { en: 'CLASSIC AUTOMOTIVE CONTENT', nl: 'KLASSIEKE AUTOMOTIVE CONTENT' },
    tags: { en: 'AUTOMOTIVE VISUALS', nl: 'AUTOMOTIVE BEELD' },
    category: { en: 'Automotive', nl: 'Automotive' },
    image: '/projects/montagna.jpg', video: '/projects/montagna.mp4',
    videos: ['/projects/montagna.mp4', '/projects/montagna-02.mp4', '/projects/montagna-03.mp4'],
    images: ['/projects/montagna.jpg', '/projects/montagna-02.jpg', '/projects/montagna-03.jpg'],
    challenge: {
      en: 'Give rare Italian collector cars a visual presentation that communicates their design details, heritage, and showroom character in a contemporary format.',
      nl: 'Zeldzame Italiaanse verzamelauto’s een visuele presentatie geven die hun ontwerpdetails, erfgoed en showroomkarakter in een eigentijds formaat overbrengt.',
    },
    solution: {
      en: 'Original vehicle photography was extended into cinematic motion content, creating elegant digital assets that preserve the authenticity of each classic while adding atmosphere and movement.',
      nl: 'Originele autofotografie werd uitgebreid tot cinematografische motion-content, met elegante digitale assets die de authenticiteit van elke klassieker bewaren en tegelijk sfeer en beweging toevoegen.',
    },
    techStack: ['ORIGINAL AUTOMOTIVE PHOTOGRAPHY', 'AI-ASSISTED MOTION', 'MULTILINGUAL CONTENT', 'DIGITAL DELIVERY'],
  },
]

export const SERVICES: Service[] = [
  {
    id: 'cinematic-ai-video',
    title: { en: 'Cinematic AI Video Production', nl: 'Cinematografische AI Videoproductie' },
    tag: { en: 'PRODUCTION', nl: 'PRODUCTIE' },
    shortDesc: {
      en: 'Custom-trained diffusion models generate cinematography indistinguishable from traditional film. Concept to final render in a fraction of the time.',
      nl: 'Op maat getrainde diffusiemodellen genereren cinematografie die ononderscheidbaar is van traditionele film. Concept tot definitieve render in een fractie van de tijd.',
    },
    fullDesc: {
      en: 'Our cinematic AI video production service represents the convergence of machine learning and traditional cinematographic craft. We do not use off-the-shelf AI tools — we build and train proprietary models, fine-tuned on curated libraries of archival cinematography, to produce content that carries the weight, grain, and emotional resonance of traditional film. The result is broadcast-ready footage that would be impossible to distinguish from high-end location shoots.',
      nl: 'Onze cinematografische AI-videoproductieservice vertegenwoordigt de convergentie van machine learning en traditionele cinematografische vakkundigheid. We gebruiken geen kant-en-klare AI-tools — we bouwen en trainen eigen modellen, verfijnd op gecureerde bibliotheken van gearchiveerde cinematografie, om content te produceren die het gewicht, het grein en de emotionele resonantie van traditionele film draagt. Het resultaat is uitzendklare beelden die niet te onderscheiden zijn van high-end locatie-opnames.',
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1400&h=700&fit=crop&auto=format',
    processSteps: [
      { en: 'Creative briefing and visual direction', nl: 'Creatieve briefing en visuele richting' },
      { en: 'Model selection and custom fine-tuning', nl: 'Modelselectie en aanpassing op maat' },
      { en: 'Generation and iterative refinement', nl: 'Generatie en iteratieve verfijning' },
      { en: 'VFX compositing and colour grade', nl: 'VFX-compositie en kleurbewerking' },
      { en: 'Sound design and final delivery', nl: 'Geluidsontwerp en definitieve levering' },
    ],
    includes: [
      { en: 'Fully bespoke AI generation pipeline', nl: 'Volledig op maat gemaakte AI-generatiepipeline' },
      { en: 'Up to 4K / 8K delivery', nl: 'Tot 4K / 8K levering' },
      { en: 'Broadcast and digital masters', nl: 'Uitzend- en digitale masters' },
      { en: 'Full rights ownership', nl: 'Volledig eigendomsrecht' },
      { en: 'Unlimited revision rounds', nl: 'Onbeperkte revisierondes' },
    ],
  },
  {
    id: 'custom-ai-systems',
    title: { en: 'Custom AI Systems & Training', nl: 'Maatwerk AI Systemen & Training' },
    tag: { en: 'TECHNOLOGY', nl: 'TECHNOLOGIE' },
    shortDesc: {
      en: 'We build and train bespoke AI pipelines for your brand — character consistency, brand-tuned aesthetics, and proprietary style models.',
      nl: 'We bouwen en trainen op maat gemaakte AI-pipelines voor uw merk — karakterconsistentie, merkafgestemde esthetiek en eigen stijlmodellen.',
    },
    fullDesc: {
      en: 'Beyond production, we build AI infrastructure. For brands that need consistent visual output at scale — across markets, formats, and time zones — we develop and train proprietary models that encode your visual DNA. From LoRA fine-tunes that maintain character and product consistency, to full custom architectures for specific use cases, we build systems that make your brand generatable.',
      nl: 'Naast productie bouwen we ook AI-infrastructuur. Voor merken die consistente visuele output op grote schaal nodig hebben — over markten, formaten en tijdzones — ontwikkelen en trainen we eigen modellen die uw visuele DNA coderen. Van LoRA-fine-tunes die karakter- en productconsistentie handhaven, tot volledige aangepaste architecturen voor specifieke gebruiksscenario\'s, wij bouwen systemen die uw merk genereerbaar maken.',
    },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop&auto=format',
    processSteps: [
      { en: 'Brand and visual audit', nl: 'Merk- en visuele audit' },
      { en: 'Dataset curation and preparation', nl: 'Dataset-curatie en -voorbereiding' },
      { en: 'Model architecture design', nl: 'Modelarchitectuurontwerp' },
      { en: 'Training, evaluation, and iteration', nl: 'Training, evaluatie en iteratie' },
      { en: 'Deployment and integration support', nl: 'Implementatie en integratie-ondersteuning' },
    ],
    includes: [
      { en: 'Full model ownership — you own the weights', nl: 'Volledig modeligendom — u bezit de gewichten' },
      { en: 'API access and deployment guidance', nl: 'API-toegang en implementatiebegeleiding' },
      { en: 'Style consistency guarantee', nl: 'Stijlconsistentiegarantie' },
      { en: 'Ongoing maintenance and updates', nl: 'Voortdurend onderhoud en updates' },
      { en: 'Training data compliance review', nl: 'Beoordeling van naleving van trainingsgegevens' },
    ],
  },
  {
    id: 'creative-direction',
    title: { en: 'Creative Direction & IP Production', nl: 'Creatieve Regie & IP Productie' },
    tag: { en: 'DIRECTION', nl: 'REGIE' },
    shortDesc: {
      en: 'End-to-end creative leadership for brand campaigns, IP development, and commercial productions demanding an elite standard of visual craft.',
      nl: 'End-to-end creatief leiderschap voor merkcampagnes, IP-ontwikkeling en commerciële producties die een elite standaard van visueel vakmanschap eisen.',
    },
    fullDesc: {
      en: 'Our creative direction service is for clients who need more than a technical solution — they need a creative partner. From the initial concept to the final grade, our directors take full ownership of the visual narrative. We develop IP alongside brands, direct live-action elements, write treatments, cast talent, and produce content that endures. AI is the tool; storytelling is the mission.',
      nl: 'Onze creatieve regieservice is voor klanten die meer nodig hebben dan een technische oplossing — ze hebben een creatieve partner nodig. Van het eerste concept tot de definitieve kleurbewerking nemen onze regisseurs volledig eigenaarschap van het visuele verhaal. We ontwikkelen IP samen met merken, regisseren live-action-elementen, schrijven treatments, casten talent en produceren content die lang meegaat. AI is het instrument; storytelling is de missie.',
    },
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=700&fit=crop&auto=format',
    processSteps: [
      { en: 'Brand immersion and creative strategy', nl: 'Merkinspiratie en creatieve strategie' },
      { en: 'Treatment and visual development', nl: 'Treatment en visuele ontwikkeling' },
      { en: 'Pre-production and casting', nl: 'Pre-productie en casting' },
      { en: 'Production and direction', nl: 'Productie en regie' },
      { en: 'Post-production and delivery', nl: 'Nabewerking en levering' },
    ],
    includes: [
      { en: 'Senior creative director assignment', nl: 'Toewijzing van senior creatief directeur' },
      { en: 'Full production management', nl: 'Volledig productiebeheer' },
      { en: 'Talent casting and management', nl: 'Talentcasting en -beheer' },
      { en: 'IP rights and licensing guidance', nl: 'IP-rechten en licentiebegeleiding' },
      { en: 'Multi-platform content adaptation', nl: 'Multi-platform inhoudsadaptatie' },
    ],
  },
]
