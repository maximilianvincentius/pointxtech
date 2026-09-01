export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  industry: string[]
  technologies: string[]
  image: string
  href: string
}

export const projects: Project[] = [
  {
    id: 'lumiere',
    number: '01',
    title: 'LUMIÈRE',
    subtitle: 'Wedding Management Platform',
    description:
      'A unified platform for couples and vendors — scheduling, payments, guest lists, and timelines in one place.',
    industry: ['SaaS', 'Operations', 'Automation'],
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
    image: '/assets/lumiere.png',
    href: '/work/lumiere',
  },
  {
    id: 'science-hub',
    number: '02',
    title: 'SCIENCE LEARNING HUB',
    subtitle: 'Interactive Physics Learning Platform',
    description:
      'A simulation-first platform that lets students manipulate variables and watch physics come alive in real time.',
    industry: ['Education', 'Interactive Web', 'Simulation'],
    technologies: ['React', 'WebGL', 'Express', 'MongoDB'],
    image: '/assets/science-hub.png',
    href: '/work/science-hub',
  },
  {
    id: 'northwind',
    number: '03',
    title: 'NORTHWIND TRADE',
    subtitle: 'Supply Chain Intelligence Dashboard',
    description:
      'Real-time visibility across inventory, orders, and shipments for mid-market wholesalers.',
    industry: ['B2B', 'Analytics', 'Logistics'],
    technologies: ['SvelteKit', 'Python', 'Postgres', 'Kafka'],
    image: '/assets/northwind.png',
    href: '/work/northwind-trade',
  },
  {
    id: 'atlas',
    number: '04',
    title: 'ATLAS FIELD',
    subtitle: 'Mobile Workforce Management App',
    description:
      'Offline-first mobile app for field crews with sync, timesheets, and route optimization.',
    industry: ['Mobile', 'Productivity', 'GPS'],
    technologies: ['React Native', 'Go', 'Firebase', 'Mapbox'],
    image: '/assets/atlas.png',
    href: '/work/atlas-field',
  },
  {
    id: 'vera',
    number: '05',
    title: 'VERA HEALTH',
    subtitle: 'Patient Scheduling & Records',
    description:
      'HIPAA-compliant platform connecting clinics, providers, and patients for care coordination.',
    industry: ['Healthtech', 'SaaS', 'Compliance'],
    technologies: ['Vue', '.NET', 'Azure', 'FHIR'],
    image: '/assets/vera.png',
    href: '/work/vera-health',
  },
]
