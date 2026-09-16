export interface Metric {
  number: string
  label: string
  description?: string
}

export const metrics: Metric[] = [
  {
    number: '3+',
    label: 'YEARS BUILDING',
    description: 'Learning and shipping projects since 2022.',
  },
  {
    number: '5+',
    label: 'PROJECTS',
    description: 'Independent projects across different domains.',
  },
  {
    number: '15+',
    label: 'TECHNOLOGIES USED',
    description: 'Tools and frameworks picked up along the way.',
  },
  {
    number: '∞',
    label: 'IDEAS LEFT TO EXPLORE',
    description: 'The backlog keeps growing faster than I can build.',
  },
]