/**
 * Every piece of personal content on the site lives here.
 * Edit this file and the whole portfolio updates — you should not
 * need to touch the component files to change your details.
 */

import portraitImg from './assets/about.jpg';

export const profile = {
  /** Shown in the nav, top-left. */
  navName: 'ANSH.',
  /** Used for the browser tab title and image alt text. */
  fullName: 'Ansh Arora',
  /** The handwritten-script signature in the hero and on the portrait. */
  signature: 'Ansh',
  /** Single letter used for the emblem watermark over the hero video. */
  monogram: 'A',
  /** The three big stacked words in the hero headline. */
  headline: ['I SCALE', 'BRANDS', 'NATIONWIDE'],
  /** The small spaced-out line under the headline. */
  disciplines: ['GROWTH MARKETING', 'E-COMMERCE', 'AI BUILDS'],
  /** One or two sentences under the disciplines. */
  tagline:
    'I turn market opportunity into operating reality — taking a brand on Blinkit from Kolkata to 350+ dark stores across 7 states with 52% online sales growth. Now I build AI agents, scrapers, automations and apps that do the groundwork.',
  /** The two short uppercase lines in the hero's quote card. */
  motto: ['STRATEGY IS THE CRAFT.', 'GROWTH IS THE PROOF.'],
  /**
   * Your CV, served from public/resume.pdf. BASE_URL keeps this correct when
   * the site is deployed under a sub-path such as /portfolio/.
   */
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
} as const;

/** Nav links across the top of the hero. */
export const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'EXPERTISE', href: '#skills' },
  { name: 'JOURNEY', href: '#experience' },
  { name: 'AWARDS', href: '#awards' },
  { name: 'CONTACT', href: '#contact' },
];

/** The small gold eyebrow label above each section. */
export const sectionLabels = {
  about: '01 / ABOUT ME',
  work: '02 / SELECTED WORK',
  skills: '03 / CAPABILITY MATRIX',
  experience: '04 / JOURNEY',
  awards: '05 / ACHIEVEMENTS',
  contact: '06 / CONTACT',
};

export const about = {
  /** Two stacked lines of the About headline. */
  headline: ["I DON'T JUST PITCH GROWTH.", 'I GO OUT AND BUILD IT.'],
  /** Your bio. Your name is bolded automatically at the front. */
  bio:
    'a marketing professional with over a year across digital channels, e-commerce growth and commercial strategy. I led a brand’s Blinkit expansion from Kolkata to 350+ dark stores across 7 states, drove 52% online sales growth through paid media, and closed a ₹30L Adani Group Diwali order. I also build bespoke Claude integrations, multi-agent venture evaluation tools, AI creative pipelines and automated outreach systems, and launched an independent fragrance enterprise during my undergraduate studies. IESEG France graduate and merit scholarship recipient, now on the Young Leaders Cohort at Masters’ Union.',
  /** Four headline numbers. An empty array hides the whole strip. */
  stats: [
    { value: '350+', label: 'Dark Stores Scaled', gold: false },
    { value: '52%', label: 'Online Sales Growth', gold: true },
    { value: '₹30L', label: 'Enterprise Revenue', gold: false },
    { value: '5X', label: 'Competition Podiums', gold: true },
  ],
  /**
   * Your portrait, imported at the top of this file. To change it, replace
   * src/assets/about.jpg. Set this to null to fall back to the monogram plate.
   * The frame is 4:5 and crops from the top, so a portrait-orientation photo
   * with the face in the upper half sits best.
   */
  portrait: portraitImg as string | null,
};

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  /** Optional CTA at the bottom of the card. Omit both to hide the button. */
  linkUrl?: string;
  linkLabel?: string;
  /** Levers, tools and channels used — rendered as pills. */
  tech: string[];
  metrics: { label: string; value: string }[];
}

/** The scroll-stacked cards in the Selected Work section. */
export const projects: Project[] = [
  {
    number: '01',
    title: 'National Dark-Store Scale-Up',
    category: 'GROWTH / QUICK COMMERCE GTM',
    description:
      'Led the brand’s go-to-market expansion on Blinkit from Kolkata to 350+ dark stores across 7 states. Ran paid media, ROAS optimisation and keyword strategy behind that footprint, driving 52% online sales growth.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'GTM Expansion',
      'Blinkit',
      'Paid Media',
      'ROAS Optimisation',
      'Keyword Strategy',
      'Funnel Optimisation',
    ],
    metrics: [
      { label: 'FOOTPRINT', value: '350+ dark stores' },
      { label: 'REACH', value: 'Kolkata → 7 states' },
      { label: 'ONLINE SALES', value: '+52%' },
    ],
  },
  {
    number: '02',
    title: 'Marketplace CRO & AI Design Workflow',
    category: 'E-COMMERCE / DIGITAL TRANSFORMATION',
    description:
      'Grew Meesho and Blinkit conversions through CRO across marketplace launch and listing optimisation. Brought AI tools into the gift-box design workflow, cutting design time and lifting output speed by 86%.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Meesho',
      'Blinkit',
      'CRO',
      'Listing Optimisation',
      'AI Design Tools',
      'Digital Transformation',
    ],
    metrics: [
      { label: 'CHANNELS', value: 'Meesho & Blinkit' },
      { label: 'OUTPUT SPEED', value: '+86%' },
      { label: 'LEVER', value: 'CRO + AI tools' },
    ],
  },
  {
    number: '03',
    title: 'Corporate Gifting Partnerships',
    category: 'BRAND PARTNERSHIPS / CORPORATE MARKETING',
    description:
      'Secured a ₹30L Adani Group Diwali order by converting a corporate lead through partnership marketing, then won the landmark Shree Cement corporate gifting business through brand collaboration and client acquisition.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Partnership Marketing',
      'Brand Collaboration',
      'Client Acquisition',
      'Corporate Sales',
      'Negotiation',
    ],
    metrics: [
      { label: 'ORDER', value: '₹30L Diwali order' },
      { label: 'ACCOUNTS', value: 'Adani, Shree Cement' },
      { label: 'CHANNEL', value: 'Partnership marketing' },
    ],
  },
  {
    number: '04',
    title: 'Founders Lab — Venture Evaluator',
    category: 'AI BUILD / MULTI-AGENT CLAUDE PLUGIN',
    description:
      'A Claude plugin of 10+ agents that researches, models and stress-tests business ideas before launch: local and market scouting, idea generation, unit economics in three scenarios, blind prosecution against locked kill criteria, an evidence audit, and a final verdict.',
    linkUrl: 'https://github.com/ansharora2028-spec/founders-lab',
    linkLabel: 'VIEW ON GITHUB',
    tech: [
      'Claude Code',
      'Multi-Agent Design',
      'Prompt Engineering',
      'Market Research',
      'Unit Economics',
    ],
    metrics: [
      { label: 'AGENTS', value: '10+' },
      { label: 'OUTPUT', value: 'Do it / don’t verdict' },
      { label: 'BUILT', value: "Aug–Oct '26" },
    ],
  },
  {
    number: '05',
    title: 'LinkedIn Content Strategist',
    category: 'AI BUILD / CLAUDE PLUGIN',
    description:
      'An 8-stage Claude plugin that revamps a user’s LinkedIn profile and then automates post creation, carrying positioning from the profile through to every post it drafts.',
    tech: [
      'Claude Code',
      'Workflow Design',
      'Content Strategy',
      'Personal Branding',
      'AI Automations',
    ],
    metrics: [
      { label: 'PIPELINE', value: '8 stages' },
      { label: 'SCOPE', value: 'Profile + posts' },
      { label: 'BUILT', value: "Aug–Oct '26" },
    ],
  },
  {
    number: '06',
    title: 'Munchy Mates',
    category: 'AI BUILD / MACOS DESKTOP APP',
    description:
      'A desktop pet for macOS whose mood shifts with battery level and time of day, with a PDF processing tool built in.',
    tech: ['macOS', 'Desktop App', 'UI/UX Design', 'PDF Processing', 'Claude Code'],
    metrics: [
      { label: 'PLATFORM', value: 'macOS' },
      { label: 'TRIGGERS', value: 'Battery & time' },
      { label: 'EXTRA', value: 'PDF tool' },
    ],
  },
  {
    number: '07',
    title: 'Pinterest Trend Scraper',
    category: 'AI BUILD / APIFY ACTOR',
    description:
      'An Apify actor that extracts pins, saves and trend keywords from Pinterest by search, board or profile — raw material for spotting what is gaining traction before it peaks.',
    tech: ['Apify', 'Web Scraping', 'Trend Research', 'Data Extraction'],
    metrics: [
      { label: 'INPUTS', value: 'Search, board, profile' },
      { label: 'DATA', value: 'Pins, saves, keywords' },
      { label: 'USE', value: 'Trend discovery' },
    ],
  },
  {
    number: '08',
    title: 'EmpowerLille',
    category: 'SOCIAL ENTERPRISE / IESEG CAPSTONE',
    description:
      'Co-researcher and strategy lead on a B2B2C social enterprise linking waste management with homeless reintegration. Built a dual-revenue model validating unit economics across B2B partnerships and B2C sales, backed by hypothesis-driven primary research.',
    linkUrl: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
    linkLabel: 'VIEW ON LINKEDIN',
    tech: [
      'Business Modelling',
      'Unit Economics',
      'Primary Research',
      'Hypothesis Testing',
      'Go-to-Market',
    ],
    metrics: [
      { label: 'VALIDATION', value: '80% of concept' },
      { label: 'MODEL', value: 'Dual-revenue B2B2C' },
      { label: 'GRADE', value: 'A' },
    ],
  },
  {
    number: '09',
    title: 'MU Muse Match',
    category: 'PRODUCT / AI MATCHMAKING',
    description:
      'A compatibility platform for verified Masters\u2019 Union students, built end to end. Instead of swiping on photos it profiles people across OCEAN personality traits, loyalty attitudes, ambition and lifestyle, then matches on the result and coaches the pairing afterwards.',
    linkUrl: 'https://preview--mu-muse-match.lovable.app',
    linkLabel: 'OPEN THE APP',
    tech: [
      'Product Design',
      'Psychometrics',
      'OCEAN Profiling',
      'AI Matchmaking',
      'Lovable',
      'Supabase',
    ],
    metrics: [
      { label: 'ACCESS', value: 'Verified MU email' },
      { label: 'ENGINE', value: 'Psychometric scoring' },
      { label: 'STATUS', value: 'Live preview' },
    ],
  },
  {
    number: '10',
    title: 'India Coffee & Caf\u00e9 Market Map',
    category: 'VC RESEARCH / MARKET STRATEGY',
    description:
      'A ten-slide investor-style market map arguing that India\u2019s caf\u00e9 boom is a marketing channel and the durable profit sits in the home cup. Built on company filings rather than aggregators, it lines up Tata Starbucks against CCL/Continental and closes on a backable position.',
    linkUrl: `${import.meta.env.BASE_URL}work/coffee-market-map.pdf`,
    linkLabel: 'VIEW THE DECK',
    tech: [
      'Market Sizing',
      'Competitive Benchmarking',
      'Unit Economics',
      'Financial Analysis',
      'Investment Thesis',
    ],
    metrics: [
      { label: 'SCOPE', value: '\u20b98,200 Cr market' },
      { label: 'EVIDENCE', value: 'FY26 filings' },
      { label: 'TEAM', value: 'Team 6, PGP-TBM' },
    ],
  },
  {
    number: '11',
    title: 'Orders-to-Stock-Alert Automation',
    category: 'OPERATIONS / WORKFLOW AUTOMATION',
    description:
      'A no-code inventory system for a coffee shop. Every order read from Airtable is exploded through its recipe, the ingredient stock is decremented, and anything that falls to its reorder threshold triggers a single alert email carrying a ready-to-send supplier request \u2014 with a failure handler so a broken run never passes silently.',
    linkUrl: `${import.meta.env.BASE_URL}work/coffee-stock-alert.blueprint.json`,
    linkLabel: 'VIEW THE BLUEPRINT',
    tech: [
      'Make.com',
      'Airtable',
      'Process Design',
      'Inventory Logic',
      'Error Handling',
    ],
    metrics: [
      { label: 'TRIGGER', value: 'New order row' },
      { label: 'LOGIC', value: 'Recipe-based depletion' },
      { label: 'OUTPUT', value: 'Threshold alert email' },
    ],
  },
];

/** The four bento cards in the Capability Matrix section. */
export const skills = [
  {
    title: 'GROWTH & DIGITAL MARKETING',
    badge: 'CORE PILLAR',
    items: ['Meta Ads', 'Paid Media & ROAS', 'Funnel Optimisation', 'SEO & GEO', 'Google Analytics', 'Campaign Management'],
    description:
      'Owning the commercial funnel end to end — paid media, keyword strategy and conversion — and reading the numbers that say what to scale next.',
    stat: '+52% ONLINE SALES',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'E-COMMERCE & GTM',
    badge: 'EXECUTION',
    items: ['GTM Expansion', 'Marketplace CRO', 'Listing Optimisation', 'E-commerce Platform Management'],
    description:
      'Taking a brand from one city to a national quick-commerce footprint without losing speed or conversion along the way.',
    stat: '350+ STORES',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI BUILDS & AUTOMATION',
    badge: 'BUILDER',
    items: ['Claude Code', 'AI Prompt Engineering', 'AI Automations', 'Compound Engineering', 'Higgsfield AI', 'Runway'],
    description:
      'Multi-agent Claude plugins, AI creative pipelines and automated outreach — tools that do the research and busywork so the decisions get made faster.',
    stat: '10+ AGENT PLUGIN',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'STRATEGY & PARTNERSHIPS',
    badge: 'COMMERCIAL',
    items: [
      'Business Strategy',
      'Market Research',
      'Consumer Insights',
      'Design Thinking',
      'Negotiation & Persuasion',
      'Advanced Excel',
      'Figma & Canva',
    ],
    description:
      'Sizing the opportunity, understanding the customer, then carrying the case into the room — corporate partnerships closed on the strength of it.',
    stat: '₹30L SECURED',
    colSpan: 'lg:col-span-7',
  },
];

export interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

/** The vertical timeline. Newest first — it renders top to bottom. */
export const journey: RouteStop[] = [
  {
    id: '01',
    year: 'PURSUING',
    title: 'PGP, TECHNOLOGY & BUSINESS MANAGEMENT',
    organization: "MASTERS' UNION — NEW DELHI",
    description:
      'Selected for the Young Leaders Cohort, building on an operating track record in growth and e-commerce.',
  },
  {
    id: '02',
    year: "AUG '26 – OCT '26",
    title: 'AI BUILDS',
    organization: 'INDEPENDENT — GURGAON',
    description:
      'Built a 10+ agent Claude plugin that stress-tests business ideas, an 8-stage LinkedIn Content Strategist plugin, the Munchy Mates macOS desktop pet, and a Pinterest trend-scraping Apify actor.',
  },
  {
    id: '03',
    year: "SEPT '25 – JUN '26",
    title: 'MARKETING EXECUTIVE',
    organization: 'INDO DIVINE SPIRITUAL SOLUTIONS PVT. LTD. — JAIPUR',
    description:
      'Led Blinkit GTM expansion from Kolkata to 350+ dark stores across 7 states, drove 52% online sales growth through paid media, and secured a ₹30L Adani Group Diwali order.',
  },
  {
    id: '04',
    year: "APR '25 – AUG '25",
    title: 'SALES & MARKETING INTERN',
    organization: 'JK CEMENTS LTD. — GURGAON',
    description:
      'Benchmarked JKProfix construction chemicals against competitors, fed consumer insights into the Zonal Head’s regional planning, and coordinated GTM execution with 16 Area Sales Managers across 5 zones.',
  },
  {
    id: '05',
    year: '2024 – 2025',
    title: 'BBA — INTERNATIONAL DEGREE',
    organization: 'IESEG SCHOOL OF MANAGEMENT — LILLE, FRANCE',
    description:
      "Grade 'A' across two semesters with a EUR 1,241 merit scholarship. Led the EmpowerLille capstone on B2B2C social enterprise design.",
  },
  {
    id: '06',
    year: "MAY '24 – JUL '24",
    title: 'MARKETING INTERN',
    organization: 'SVATANTRA MICRO HOUSING FINANCE — JAIPUR',
    description:
      'Ran 12 field surveys mapping customer needs across underserved segments, turning the findings into sharper acquisition targeting and simpler onboarding scripts.',
  },
  {
    id: '07',
    year: "AUG '23 – FEB '24",
    title: 'MARKETING TEAM MEMBER',
    organization: 'AIESEC IN BENGALURU',
    description:
      'Lifted engagement and programme enrolments through social content and digital campaigns, and worked on virtual exchanges with AIESEC in Siberia.',
  },
  {
    id: '08',
    year: '2022 – 2024',
    title: 'BBA (HONOURS)',
    organization: 'CHRIST UNIVERSITY — BENGALURU',
    description:
      'GPA 3.36/4, top 20% of cohort, and a member of the Christ national-level festing team. Selected from 400+ students across 4 campuses for the IESEG credit transfer programme.',
  },
  {
    id: '09',
    year: '2019 – 2022',
    title: 'CLASS XII, CBSE COMMERCE',
    organization: 'NEERJA MODI SCHOOL — JAIPUR',
    description:
      'Commerce with Applied Mathematics, 83.6% (Class X: 91%). Agni House Prefect on the Student Council.',
  },
];

export interface Award {
  placement: string;
  level: string;
  event: string;
  detail: string;
}

/** Competition wins and honours. */
export const awards: Award[] = [
  {
    placement: '2ND',
    level: 'NATIONAL',
    event: 'Sustainathon',
    detail: 'Sustainability-driven business solutions.',
  },
  {
    placement: '2ND',
    level: 'NATIONAL',
    event: 'Enchainer Business Fest',
    detail: 'Problem-solving and business strategy.',
  },
  {
    placement: '1ST',
    level: 'INTER-COLLEGE',
    event: 'Marketing Premier League',
    detail: 'Head-to-head marketing challenges.',
  },
  {
    placement: '1ST',
    level: 'INTRA-COLLEGE',
    event: 'Colossus Business Fest',
    detail: 'Competed as PR & Marketing Manager.',
  },
  {
    placement: '2ND',
    level: 'INTRA-COLLEGE',
    event: 'Novice Business Fest',
    detail: 'Strategic marketing and execution.',
  },
  {
    placement: 'AWARD',
    level: 'IESEG, FRANCE',
    event: 'EUR 1,241 Merit Scholarship',
    detail: "Grade 'A' on the international degree.",
  },
  {
    placement: '400+',
    level: 'SELECTION',
    event: 'IESEG Credit Transfer Programme',
    detail: 'Chosen from 400+ students across 4 campuses.',
  },
];

/** Positions of responsibility, shown under the awards grid. */
export const leadership = {
  note: 'All at Christ University, Bengaluru',
  roles: [
    { org: 'SDG CELL', role: 'Sub-Head, Logistics' },
    { org: 'CUSBMA', role: 'Organisational Committee, Logistics' },
    { org: 'SWO', role: 'Stage Committee' },
    { org: 'CAPS', role: 'Research Team Member' },
  ],
};

export const contact = {
  headline: ['START A', 'CONVERSATION.'],
  blurb:
    'Have a brand to scale, a growth problem worth solving, or a role you think I would fit? Send a note below and I will come back to you.',
  /**
   * Where the contact form posts. Empty means the form falls back to opening
   * the visitor's mail client, so nothing is silently dropped. Paste a
   * Formspree (or similar) endpoint here to collect submissions properly.
   */
  formEndpoint: '' as string,
  email: 'ansharora116@gmail.com',
  phone: '+91 98291 17034',
  linkedin: 'https://www.linkedin.com/in/ansh-arora-44b51a257',
  footerNote: 'ANSH ARORA // PORTFOLIO 2026',
  footerTagline: 'BUILT WITH INTENT',
};
