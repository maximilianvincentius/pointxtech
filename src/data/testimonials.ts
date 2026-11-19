export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Phyxhub started as an idea to make learning physics more interactive, and it has grown into a project that I genuinely enjoy to learn physics. Great job Max',
    author: 'Felix',
    company: 'Phyxhub',
    role: 'Project Mentor',
  }
]