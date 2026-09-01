export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'What type of software do you build?',
    answer:
      'We build custom web applications, mobile apps, internal platforms, and API-driven systems for businesses looking to ship fast and scale reliably.',
  },
  {
    id: 'f2',
    question: 'How does your development process work?',
    answer:
      'We follow a clear five‑step process — Discover, Define, Build, Launch, and Scale. Each phase has deliverables and reviews so you always know where things stand.',
  },
  {
    id: 'f3',
    question: 'How long does a project take?',
    answer:
      'It depends on scope, but a typical MVP takes 8–12 weeks. Larger platforms are usually delivered in quarterly increments with regular milestones.',
  },
  {
    id: 'f4',
    question: 'Can you work with an existing development team?',
    answer:
      'Yes. We can augment your team with senior engineers, take ownership of specific components, or act as the lead technical partner.',
  },
  {
    id: 'f5',
    question: 'Do you provide maintenance?',
    answer:
      'Yes. We offer post‑launch monitoring, feature roadmaps, and ongoing support contracts tailored to the level of involvement you need.',
  },
  {
    id: 'f6',
    question: 'Can you build MVPs?',
    answer:
      'Yes. We specialize in building production-ready MVPs that are scalable from day one — not throw‑away prototypes.',
  },
  {
    id: 'f7',
    question: 'Can you work with startups?',
    answer:
      'Yes. We work with funded startups and bootstrapped founders alike. We can also help with investor demos and pitch‑ready presentations.',
  },
]