export interface Metric {
  number: string
  label: string
  description?: string
}

export const metrics: Metric[] = [
  {
    number: '3+',
    label: 'YEARS ENGINEERING',
    description: 'We have deep expertise building at scale.',
  },
  {
    number: '20+',
    label: 'PROJECTS',
    description: 'Delivered solutions for global clients.',
  },
  {
    number: '99%',
    label: 'UPTIME',
    description: 'Reliably hosted for 24/7 usage.',
  },
  {
    number: '24/7',
    label: 'PRODUCTION SUPPORT',
    description: 'Round‑the‑clock assistance when you need it.',
  },
]