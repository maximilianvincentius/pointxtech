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
      'A fun shooting game where every level brings its own challenge, keeping the experience fresh and exciting. The game mechanics are well thought out and the controls are responsive, making it a joy to play.',
    author: 'Nining',
    company: 'Fractals of Entropy',
    role: 'Product Owner',
  },
  {
    id: 't3',
    quote:
      'A futuristic racing experience set in a neon-lit cyberpunk city, combining high-speed driving with a stylized vision of the future. The game offers a unique blend of racing and exploration, with a focus on immersive environments and dynamic gameplay.',
    author: 'Liam',
    company: 'Metro Circuit',
    role: 'Product Owner',
  },
]