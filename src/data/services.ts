export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Product Development',
    description:
      'We turn ambiguous business problems into clear product direction, then build the thing end to end.',
    tags: ['Discovery', 'Prototyping', 'Roadmaps'],
  },
  {
    number: '02',
    title: 'Web Applications',
    description:
      'Fast, accessible web platforms engineered to handle real scale and real users.',
    tags: ['React', 'TypeScript', 'Performance'],
  },
  {
    number: '03',
    title: 'Mobile Applications',
    description:
      'Native-quality mobile experiences with the polish your customers expect.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    number: '04',
    title: 'Backend & API Engineering',
    description:
      'Resilient services, clean APIs, and data layers designed to grow with you.',
    tags: ['Node', 'Postgres', 'GraphQL'],
  },
  {
    number: '05',
    title: 'Cloud & DevOps',
    description:
      'Reliable infrastructure, observability, and deployment pipelines you can trust.',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    number: '06',
    title: 'AI & Automation',
    description:
      'Practical AI features and automation that remove friction from real workflows.',
    tags: ['LLMs', 'Agents', 'Workflows'],
  },
]
