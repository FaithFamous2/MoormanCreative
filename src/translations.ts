export type Lang = 'en' | 'nl'

export const t = {
  en: {
    lang: { en: 'EN', nl: 'NL', switch: 'NL' },
    nav: { work: 'WORK', services: 'SERVICES', about: 'ABOUT', contact: 'CONTACT' },
    hero: { scroll: 'SCROLL' },
    marquee: { items: ['NIKE', 'DECATHLON', 'RED BULL', 'PORSCHE', 'SAMSUNG', 'CANAL+', 'SPOTIFY', 'ADIDAS'] },

    work: {
      label: 'SELECTED WORK',
      headline: 'Moving Image. Reimagined.',
      viewAll: 'VIEW ALL WORK',
      pageLabel: 'ALL PROJECTS',
      pageHeadline: 'Selected Case Studies.',
      back: '← BACK',
      challenge: 'THE CHALLENGE',
      solution: 'THE AI SOLUTION',
      techStack: 'TECH STACK',
      nextProject: 'NEXT PROJECT',
      viewProject: 'VIEW PROJECT →',
      year: 'YEAR',
      category: 'CATEGORY',
    },

    services: {
      label: 'CAPABILITIES',
      headline: 'What we build.',
      viewAll: 'VIEW ALL SERVICES',
      pageLabel: 'CAPABILITIES & SPECIALIZATIONS',
      pageHeadline: 'What we excel at.',
      back: '← BACK',
      learnMore: 'LEARN MORE →',
      process: 'OUR PROCESS',
      includes: 'WHAT IS INCLUDED',
      startProject: 'START A PROJECT',
    },

    philosophy: {
      label: 'OUR PHILOSOPHY',
      headline: 'Precision. Artistry. Velocity.',
      steps: [
        {
          num: '01', title: 'Concept',
          desc: "We begin with a deep editorial brief — dissecting your brand, audience, and the feeling the final work must produce. Nothing moves until the vision is crystallized.",
        },
        {
          num: '02', title: 'Generation',
          desc: 'Our proprietary AI systems and creative directors work in tandem. Custom-trained models generate cinematography that would otherwise require weeks of traditional production.',
        },
        {
          num: '03', title: 'Polish',
          desc: 'Every frame passes through human artistic review. VFX compositing, colour grading, and sound design elevate AI-generated content into cinematic finality.',
        },
      ],
    },

    sticky: { headline1: 'Elite production.', headline2: 'Unrestricted ambition.' },

    cta: {
      label: "LET'S COLLABORATE",
      headline: "Let's create something unforgettable.",
      emailLabel: 'YOUR EMAIL',
      placeholder: 'hello@yourstudio.com',
      button: 'INQUIRE',
      thanks: "Thank you. We'll be in touch.",
    },

    about: {
      label: 'ABOUT US',
      headline: 'We are Moorman Creative.',
      intro: 'Founded in Amsterdam, Moorman Creative is an elite AI-powered production studio redefining what is possible in moving image. We work with the world\'s most ambitious brands to create visual content that is indistinguishable from the best traditional film production — at a fraction of the time and cost.',
      mission: {
        label: 'MISSION',
        title: 'Shaping the future of moving image.',
        desc: 'We believe the next generation of visual storytelling will be defined by the intersection of human creativity and artificial intelligence. Our mission is to lead that intersection — building proprietary systems, training bespoke AI models, and directing campaigns that set a new standard for the industry.',
      },
      values: {
        label: 'OUR VALUES',
        items: [
          { title: 'Craft First', desc: 'Every output is held to an exacting standard. AI is a tool, not a shortcut.' },
          { title: 'Radical Transparency', desc: 'We are open about our methods, our process, and our technology.' },
          { title: 'Ambitious by Default', desc: "We only take on work where we can push what's possible." },
        ],
      },
      stats: [
        { value: '120+', label: 'Projects Delivered' },
        { value: '38', label: 'Brand Partners' },
        { value: '4', label: 'Years of Excellence' },
        { value: '1', label: 'Founder-led Studio' },
      ],
      team: {
        label: 'THE TEAM',
        members: [
          { name: 'Laurent Moorman', role: 'Founder & Creative Director', bio: 'Former senior director at Framestore. 12 years of cinematic production across Europe and the US.' },
        ],
      },
    },

    contact: {
      label: 'GET IN TOUCH',
      headline: "Let's talk.",
      intro: 'Whether you have a campaign brief, a creative challenge, or simply want to explore what is possible — we want to hear from you.',
      form: {
        name: 'YOUR NAME',
        namePlaceholder: 'First and last name',
        email: 'EMAIL ADDRESS',
        emailPlaceholder: 'your@email.com',
        company: 'COMPANY',
        companyPlaceholder: 'Your studio or brand',
        budget: 'PROJECT BUDGET',
        budgetOptions: ['Under €10K', '€10K – €50K', '€50K – €150K', '€150K+', 'Not sure yet'],
        message: 'TELL US ABOUT YOUR PROJECT',
        messagePlaceholder: 'Describe your vision, goals, and timeline...',
        send: 'SEND INQUIRY',
        sending: 'SENDING...',
        thanks: "Thank you. We'll respond within 24 hours.",
      },
      info: {
        studioLabel: 'STUDIO',
        studio: 'Moorman Creative BV',
        address: 'Keizersgracht 123\n1015 CJ Amsterdam\nThe Netherlands',
        emailLabel: 'EMAIL',
        email: 'hello@moorman.studio',
        phoneLabel: 'PHONE',
        phone: '+31 20 123 4567',
        hoursLabel: 'HOURS',
        hours: 'Mon – Fri, 09:00 – 18:00 CET',
      },
    },

    footer: {
      tagline: 'Elite AI-powered production studio. Shaping the future of moving image.',
      location: 'Amsterdam — Global',
      sections: {
        work: 'WORK',
        services: 'SERVICES',
        studio: 'STUDIO',
      },
      links: {
        caseStudies: 'Case Studies', commercial: 'Commercial', brandFilms: 'Brand Films', ipProjects: 'IP Projects',
        aiVideo: 'AI Video', customSystems: 'Custom Systems', direction: 'Direction', postProd: 'Post Production',
        about: 'About', careers: 'Careers', instagram: 'Instagram', contact: 'Contact',
      },
      rights: '© 2026 MOORMAN CREATIVE — ALL RIGHTS RESERVED',
      legal: 'PRIVACY // TERMS // INSTAGRAM',
    },
  },

  nl: {
    lang: { en: 'EN', nl: 'NL', switch: 'EN' },
    nav: { work: 'WERK', services: 'DIENSTEN', about: 'OVER ONS', contact: 'CONTACT' },
    hero: { scroll: 'SCROLL' },
    marquee: { items: ['NIKE', 'DECATHLON', 'RED BULL', 'PORSCHE', 'SAMSUNG', 'CANAL+', 'SPOTIFY', 'ADIDAS'] },

    work: {
      label: 'GESELECTEERD WERK',
      headline: 'Bewegend Beeld. Opnieuw Uitgedacht.',
      viewAll: 'BEKIJK AL HET WERK',
      pageLabel: 'ALLE PROJECTEN',
      pageHeadline: 'Geselecteerde Case Studies.',
      back: '← TERUG',
      challenge: 'DE UITDAGING',
      solution: 'DE AI-OPLOSSING',
      techStack: 'TECHNOLOGIE',
      nextProject: 'VOLGEND PROJECT',
      viewProject: 'BEKIJK PROJECT →',
      year: 'JAAR',
      category: 'CATEGORIE',
    },

    services: {
      label: 'MOGELIJKHEDEN',
      headline: 'Wat wij bouwen.',
      viewAll: 'BEKIJK ALLE DIENSTEN',
      pageLabel: 'MOGELIJKHEDEN & SPECIALISATIES',
      pageHeadline: 'Waarin wij uitblinken.',
      back: '← TERUG',
      learnMore: 'MEER INFORMATIE →',
      process: 'ONS PROCES',
      includes: 'WAT IS INBEGREPEN',
      startProject: 'START EEN PROJECT',
    },

    philosophy: {
      label: 'ONZE FILOSOFIE',
      headline: 'Precisie. Vakmanschap. Snelheid.',
      steps: [
        {
          num: '01', title: 'Concept',
          desc: 'We beginnen met een diepgaande creatieve briefing — uw merk, doelgroep en het gevoel dat het eindwerk moet oproepen. Niets beweegt totdat de visie helder is.',
        },
        {
          num: '02', title: 'Generatie',
          desc: 'Onze eigen AI-systemen en creatieve directeuren werken samen. Op maat getrainde modellen genereren cinematografie die anders weken aan traditionele productie zou vereisen.',
        },
        {
          num: '03', title: 'Afwerking',
          desc: 'Elk frame wordt beoordeeld door een menselijke kunstenaar. VFX-compositie, kleurbewerking en geluidsontwerp tillen AI-gegenereerde content naar cinematografische perfectie.',
        },
      ],
    },

    sticky: { headline1: 'Elite productie.', headline2: 'Onbeperkte ambitie.' },

    cta: {
      label: 'LATEN WE SAMENWERKEN',
      headline: 'Laten we iets onvergetelijks creëren.',
      emailLabel: 'UW E-MAILADRES',
      placeholder: 'hallo@uwstudio.com',
      button: 'AANVRAGEN',
      thanks: 'Dank u. We nemen snel contact op.',
    },

    about: {
      label: 'OVER ONS',
      headline: 'Wij zijn Moorman Creative.',
      intro: 'Opgericht in Amsterdam is Moorman Creative een elite AI-gedreven productiestudio die opnieuw definieert wat mogelijk is in bewegend beeld. Wij werken samen met de meest ambitieuze merken ter wereld om visuele content te creëren die ononderscheidbaar is van de beste traditionele filmproductie — in een fractie van de tijd en kosten.',
      mission: {
        label: 'MISSIE',
        title: 'De toekomst van bewegend beeld vormgeven.',
        desc: 'Wij geloven dat de volgende generatie visueel verhalen vertellen bepaald zal worden door de kruising van menselijke creativiteit en kunstmatige intelligentie. Onze missie is die kruising te leiden — door eigen systemen te bouwen, AI-modellen op maat te trainen en campagnes te regisseren die een nieuwe standaard stellen voor de industrie.',
      },
      values: {
        label: 'ONZE WAARDEN',
        items: [
          { title: 'Vakmanschap Eerst', desc: 'Elke output wordt aan een nauwkeurige standaard gehouden. AI is een instrument, geen snelkoppeling.' },
          { title: 'Radicale Transparantie', desc: 'We zijn open over onze methoden, ons proces en onze technologie.' },
          { title: 'Ambitieus als Standaard', desc: 'We nemen alleen werk aan waarbij we kunnen pushen wat mogelijk is.' },
        ],
      },
      stats: [
        { value: '120+', label: 'Afgeleverde Projecten' },
        { value: '38', label: 'Merkpartners' },
        { value: '4', label: 'Jaar Excellentie' },
        { value: '1', label: 'Studio onder leiding van oprichter' },
      ],
      team: {
        label: 'HET TEAM',
        members: [
          { name: 'Laurent Moorman', role: 'Oprichter & Creatief Directeur', bio: 'Voormalig senior directeur bij Framestore. 12 jaar cinematografische productie door Europa en de VS.' },
        ],
      },
    },

    contact: {
      label: 'NEEM CONTACT OP',
      headline: 'Laten we praten.',
      intro: 'Of u nu een campagnebriefing heeft, een creatieve uitdaging, of gewoon wilt verkennen wat mogelijk is — we horen graag van u.',
      form: {
        name: 'UW NAAM',
        namePlaceholder: 'Voor- en achternaam',
        email: 'E-MAILADRES',
        emailPlaceholder: 'uw@email.com',
        company: 'BEDRIJF',
        companyPlaceholder: 'Uw studio of merk',
        budget: 'PROJECTBUDGET',
        budgetOptions: ['Onder €10K', '€10K – €50K', '€50K – €150K', '€150K+', 'Nog niet zeker'],
        message: 'VERTEL ONS OVER UW PROJECT',
        messagePlaceholder: 'Beschrijf uw visie, doelen en tijdlijn...',
        send: 'VERSTUUR AANVRAAG',
        sending: 'VERSTUREN...',
        thanks: 'Dank u. We reageren binnen 24 uur.',
      },
      info: {
        studioLabel: 'STUDIO',
        studio: 'Moorman Creative BV',
        address: 'Keizersgracht 123\n1015 CJ Amsterdam\nNederland',
        emailLabel: 'E-MAIL',
        email: 'hallo@moorman.studio',
        phoneLabel: 'TELEFOON',
        phone: '+31 20 123 4567',
        hoursLabel: 'OPENINGSTIJDEN',
        hours: 'Ma – Vr, 09:00 – 18:00 CET',
      },
    },

    footer: {
      tagline: 'Elite AI-gedreven productiestudio. De toekomst van bewegend beeld vormgeven.',
      location: 'Amsterdam — Wereldwijd',
      sections: {
        work: 'WERK',
        services: 'DIENSTEN',
        studio: 'STUDIO',
      },
      links: {
        caseStudies: 'Case Studies', commercial: 'Commercieel', brandFilms: 'Merkfilms', ipProjects: 'IP-projecten',
        aiVideo: 'AI-video', customSystems: 'Eigen Systemen', direction: 'Regie', postProd: 'Nabewerking',
        about: 'Over Ons', careers: 'Vacatures', instagram: 'Instagram', contact: 'Contact',
      },
      rights: '© 2026 MOORMAN CREATIVE — ALLE RECHTEN VOORBEHOUDEN',
      legal: 'PRIVACYBELEID // VOORWAARDEN // INSTAGRAM',
    },
  },
} as const
