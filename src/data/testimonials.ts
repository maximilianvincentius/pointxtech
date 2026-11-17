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
  },
  {
    id: 't2',
    quote:
      'Swastisvarna needed more than a good-looking website. We needed tools the team would actually use every day. Max delivered our official site, an online hiring portal, and a shift and absence system that replaced our paper logbooks, and he kept the communication clear from start to finish.',
    author: 'Nining',
    company: 'swastisvarna',
    role: 'Product Owner',
  },
]