export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Product Ideas',
    description:
      'Started from interesting problems and turned them into working products. Figuring out what to build and why.',
    tags: ['Discovery', 'Prototyping', 'Iteration'],
  },
  {
    number: '02',
    title: 'Web Applications',
    description:
      'Building fast, accessible web apps with modern tools. Learning by shipping real things.',
    tags: ['React', 'TypeScript', 'Performance'],
  },
  {
    number: '03',
    title: 'Game Development',
    description:
      'Exploring interactive systems and game mechanics. Building things that are fun to use.',
    tags: ['Game Engines', 'Physics', 'Interaction'],
  },
  {
    number: '04',
    title: 'Backend & APIs',
    description:
      'Designing data models and building APIs. Understanding how systems talk to each other.',
    tags: ['Node', 'Postgres', 'GraphQL'],
  },
  {
    number: '05',
    title: 'Infrastructure',
    description:
      'Setting up deployment, containers, and CI/CD. Figuring out how code actually gets to production.',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    number: '06',
    title: 'AI & Automation',
    description:
      'Experimenting with LLMs and automation workflows. Testing what AI can do in practice.',
    tags: ['LLMs', 'Agents', 'Workflows'],
  },
]
