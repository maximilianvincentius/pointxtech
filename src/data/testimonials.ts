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
      'PointX understood our business problem better than any vendor we\'ve worked with. They didn\'t just ship code — they helped us rethink the process.',
    author: 'Ravi',
    company: 'Lumière Labs',
    role: 'Founder & CEO',
  },
  {
    id: 't2',
    quote:
      'We needed a platform that could handle our scale from day one. PointX delivered a robust backend and an intuitive frontend without the usual bloat.',
    author: 'Mei',
    company: 'Northwind Trade',
    role: 'CTO',
  },
  {
    id: 't3',
    quote:
      'The team shipped a production-ready MVP in 8 weeks. The UI feels polished and the docs are clear — something rare in a custom build.',
    author: 'Liam',
    company: 'Verified',
    role: 'Product Lead',
  },
]