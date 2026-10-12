export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: 'f1',
    question: 'What kind of projects do you build?',
    answer:
      'A mix of web applications, interactive simulations, games, and experiments. Most start from something I find interesting and grow from there.',
  },
  {
    id: 'f2',
    question: 'How do you approach a new project?',
    answer:
      'Usually it starts with curiosity about a problem or idea. I figure out the scope, pick the right tools, and start building. The direction often evolves as I learn more along the way.',
  },
  {
    id: 'f3',
    question: 'Are these projects finished?',
    answer:
      'Most are works in progress. I treat them as ongoing experiments that keep evolving as I learn new things and come up with new ideas.',
  },
  {
    id: 'f4',
    question: 'Do you work on these alone?',
    answer:
      'Mostly yes. Some projects have had collaborators or mentors involved, but I drive the direction and do the building.',
  },
  {
    id: 'f5',
    question: 'What technologies do you use?',
    answer:
      'It depends on the project. I tend to reach for React, TypeScript, and Node for web work, but I pick whatever makes sense for what I am trying to build.',
  },
  {
    id: 'f6',
    question: 'Can I try the projects?',
    answer:
      'Yes. Most have live demos or links you can explore. Some are still in development and may not be fully polished yet.',
  },
  {
    id: 'f7',
    question: 'How can I get in touch?',
    answer:
      'You can reach me through the contact form below or by email. I am always happy to talk about projects, ideas, or interesting problems.',
  },
]