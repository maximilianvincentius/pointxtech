# Software Company Website — Design Guidelines

## 01. Design Direction

Create a premium modern software company website inspired by the visual language of the Flock Ramp Webflow website.

Reference:
https://flock-ramp.webflow.io/

IMPORTANT:
- Do NOT copy the Flock branding, wording, illustrations, or crypto-specific content.
- Use the reference only for layout philosophy, visual rhythm, spacing, typography hierarchy, section structure, and animation style.
- The final website must feel like an established modern software/technology company.
- Prioritize visual storytelling over excessive text.
- The website should feel premium, confident, technical, and trustworthy.

Overall personality:
- Modern
- Minimal
- Premium
- Technical
- Confident
- Clean
- Slightly futuristic
- Professional without feeling corporate
- Strong visual hierarchy
- Smooth motion

Avoid:
- Generic corporate website layouts
- Excessive gradients
- Excessive glassmorphism
- Generic stock-photo hero sections
- Overly colorful UI
- Dense paragraphs
- Excessive cards everywhere
- Cheap-looking SaaS aesthetics

---

## 02. Visual Inspiration

Use the Flock Ramp structure as the main inspiration.

The reference uses:
- Large hero typography
- Strong CTA hierarchy
- Product visual immediately below/around the hero
- Client/partner trust section
- Numbered benefit sections
- Feature storytelling
- Large visual sections
- Statistics
- Testimonials
- Company introduction
- FAQ
- Blog/content section
- Strong final CTA

Translate this structure into a software company context.

Example:

Reference style:
"On/Off ramp built for modern finance."

Software company direction:
"Software built for businesses ready to move faster."

The website should communicate:

> We build serious software that solves real business problems.

---

## 03. Color System

Use a mostly neutral color palette.

Primary:
- Background: #0F0F0F
- Primary text: #F5F5F5
- Secondary text: #A1A1A1
- Muted: #666666
- Border: rgba(255,255,255,0.10)
- Surface: #171717
- Secondary surface: #1D1D1D

Accent:
- Use ONE distinctive accent color.
- Suggested accent: #D7FF3F
- Alternative: #C8FF00

Use the accent sparingly for:
- CTA buttons
- Important highlights
- Small labels
- Hover states
- Selected navigation
- Decorative details

Do NOT make the entire website neon.

The dominant visual should remain black/white/gray.

---

## 04. Typography

Typography is one of the most important parts of the design.

Use a modern grotesk/sans-serif font.

Recommended:
- Inter
- Geist
- Manrope
- Plus Jakarta Sans

Prefer:
- Headings: Bold / Extra Bold
- Body: Regular / Medium

Desktop:
- Hero heading: 72px–110px
- Section heading: 56px–80px
- Subheading: 20px–24px
- Body: 16px–18px
- Small: 13px–14px

Mobile:
- Hero: 48px–64px
- Section headings: 40px–52px
- Body: 16px

Use strong tracking and line-height control to create an editorial feel.

---

## 05. Layout

Use a wide centered container.

Desktop:
- max-width: 1280px–1400px
- horizontal padding: 32px–48px

Mobile:
- horizontal padding: 20px–24px

Sections should have generous vertical spacing.

Typical:
- Desktop: 120px–180px
- Mobile: 80px–120px

Do NOT compress sections together.

Whitespace is an important part of the design.

---

## 06. Navigation

Navigation should be minimal.

Desktop layout:

[LOGO]

Services
Projects
About
Insights

                    [Let's Talk ↗]

Navigation behavior:
- Transparent/dark background initially
- Becomes slightly blurred/darker when scrolling
- Sticky at top
- Smooth transition
- CTA remains visually prominent

Use a compact navigation height.

Avoid large navigation bars.

Mobile:
- Logo on the left
- Menu trigger on the right
- Full-screen or large overlay menu
- Smooth open/close animation

---

## 07. Hero Section

The hero should immediately communicate what the company does.

Structure:

Small eyebrow label

"SOFTWARE ENGINEERING STUDIO"

Large headline:

"WE BUILD SOFTWARE
THAT MOVES BUSINESS
FORWARD."

Short supporting paragraph.

Example:

"We design and engineer scalable digital products, internal platforms, and experiences that help ambitious businesses operate better."

CTA:
[Start a Project ↗]

Secondary:
[View Our Work]

Hero should occupy approximately 85–100vh.

Visual composition:

LEFT:
Large headline and copy

RIGHT / BOTTOM:
Large software/product visual

The visual should feel like an actual product rather than decorative artwork.

The hero must be understandable within a few seconds.

---

## 08. Hero Animation

Hero should feel alive immediately.

Animation sequence:
1. Navigation fades in
2. Eyebrow appears
3. Heading reveals upward
4. Description fades in
5. CTA buttons appear
6. Product visual slides/fades in
7. Small UI elements subtly animate

Use Framer Motion.

Animations should be:
- Smooth
- Fast
- Subtle
- Premium

Avoid:
- Excessive bouncing
- Huge movement
- Constant spinning
- Distracting animations

Recommended reveal:
- opacity: 0 → 1
- y: 20–40px → 0
- duration: 0.5–0.8s
- stagger: 0.05–0.15s

---

## 09. Trust / Client Section

Immediately after hero, introduce credibility.

Example:

"TRUSTED BY TEAMS BUILDING WHAT'S NEXT"

Display:
- Client logos
- Partner logos
- Technology logos
- Selected industries

Use monochrome logos where possible.

Possible layout:

LOGO  LOGO  LOGO  LOGO  LOGO

The section should be visually quiet.

---

## 10. Core Value Proposition

Create a strong section similar to the numbered benefits section in Flock.

Heading:

"BUILT FOR REAL BUSINESS PROBLEMS."

Then 4 numbered items.

Example:

01
STRATEGIC THINKING

We understand the problem before writing the code.

02
SCALABLE ENGINEERING

Systems designed to grow with your business.

03
PRODUCT-FOCUSED

Technology is built around users, not the other way around.

04
LONG-TERM PARTNERSHIP

We stay involved beyond the initial launch.

Design:
- Large number on the left
- Title and description on the right
- Subtle borders between items

On hover:
- Number changes accent color
- Description becomes brighter
- Small arrow appears
- Background subtly changes

---

## 11. Services Section

Heading:

"FROM IDEA TO PRODUCTION."

Show major services.

Example:

01 — Product Development
02 — Web Applications
03 — Mobile Applications
04 — Backend & API Engineering
05 — Cloud & DevOps
06 — AI & Automation

Do NOT make every service a giant card.

Prefer large horizontal rows.

Each row:
- Number
- Service name
- Short description
- Arrow

Hover interaction:
- Row expands slightly
- Arrow moves
- Accent line appears
- Background changes subtly

---

## 12. Featured Projects

This is one of the most important sections.

Heading:

"SELECTED WORK"

Show 3–6 projects.

Each project should have a large visual.

Project layout:
- Large image/product screenshot
- Project name
- Industry
- Short description
- Technology
- [View Case Study ↗]

Use large editorial-style project presentation rather than small portfolio cards.

Example:

PROJECT 01

LUMIÈRE

Wedding management platform

SaaS / Operations / Automation

[Large product screenshot]


PROJECT 02

SCIENCE LEARNING HUB

Interactive physics learning platform

Education / Interactive Web / Simulation

[Large product screenshot]

The portfolio should communicate quality through the work itself.

---

## 13. Project Interaction

Projects should have subtle interaction.

On hover:
- Image scales slightly: 1.03–1.05
- Image becomes slightly brighter
- Arrow moves diagonally
- Project metadata transitions
- Optional cursor-following interaction

Keep it restrained.

The project image should remain the visual focus.

Do not add excessive effects such as:
- Heavy distortion
- Glitch effects
- Excessive cursor effects
- Constant image rotation

---

## 14. Technology / Engineering Section

Create a section demonstrating technical capability.

Heading:

"ENGINEERED FOR WHAT'S NEXT."

Show technology stack visually.

Example:

Frontend
React
Next.js
TypeScript

Backend
Node.js
Express
MongoDB

Infrastructure
Docker
Linux
Nginx
Cloud

AI
LLMs
AI Agents
Automation

Do not make this look like a developer resume.

The purpose is to communicate engineering capability and confidence.

Technology can be presented as:
- Large text
- Interactive rows
- Minimal tags
- Animated technical diagram
- Product architecture visual

Avoid a giant wall of technology logos.

---

## 15. Process Section

Show how the company works.

Heading:

"HOW WE BUILD"

Use 4–5 steps.

01
DISCOVER

Understand the business, users, and problem.

02
DEFINE

Turn requirements into a clear product direction.

03
BUILD

Design, engineer, test, and iterate.

04
LAUNCH

Deploy the product and monitor performance.

05
SCALE

Improve, maintain, and evolve the system.

Use a horizontal timeline on desktop.

Vertical timeline on mobile.

Each step should reveal as the user scrolls.

---

## 16. Metrics Section

Create a strong visual statistics section.

Example:

3+
YEARS ENGINEERING

20+
PROJECTS

99%
UPTIME

24/7
PRODUCTION SUPPORT

Large numbers.

Minimal descriptions.

Use large typography.

Numbers can animate when entering the viewport.

Do not invent metrics.

If real company metrics are unavailable, use qualitative statements instead.

---

## 17. Testimonials

Heading:

"WHAT OUR CLIENTS SAY"

Use large testimonial typography.

Example:

"We needed more than someone who could build the product. We needed someone who understood the business problem."

Client Name

Company

Role

Use a horizontal slider if multiple testimonials exist.

Do not show too many testimonials simultaneously.

One large testimonial should be the focus.

Do not fabricate testimonials.

If testimonials are unavailable, replace this section with:
- Client logos
- Case-study outcomes
- Project highlights

---

## 18. About Section

Create a visually strong company introduction.

Heading:

"WE BUILD DIGITAL PRODUCTS
WITH PURPOSE."

Short paragraph explaining:
- Who the company is
- What it builds
- Who it works with
- Why it exists

Use one strong image or abstract technical visual.

Avoid long corporate history.

The section should feel personal and confident.

---

## 19. FAQ

Heading:

"QUESTIONS, ANSWERED."

Use accordion interaction.

Example questions:
- What type of software do you build?
- How does your development process work?
- How long does a project take?
- Can you work with an existing development team?
- Do you provide maintenance?
- Can you build MVPs?
- Can you work with startups?

Accordion behavior:
- Smooth height animation
- Rotate or move the plus icon
- Clear active state
- Only use multiple-open behavior if it improves usability

---

## 20. Final CTA

The final CTA should be visually powerful.

Large heading:

"LET'S BUILD
SOMETHING USEFUL."

Supporting text:

"Have an idea, a product, or a problem that needs solving? Let's talk."

Button:
[Start a Conversation ↗]

Optional secondary:
[View Our Work]

Make this section feel like the natural conclusion of the page.

---

## 21. Footer

Large footer.

Include:

Company logo

Short company statement.

Navigation:
- Work
- Services
- About
- Insights
- Contact

Social:
- LinkedIn
- Instagram
- GitHub

Contact:
hello@company.com

Bottom:
© 2026 Company Name

Privacy
Terms

Keep the footer spacious and minimal.

---

## 22. Motion System

Motion is a major part of the website experience.

Use Framer Motion.

Global animation principles:
- Ease-out
- 0.4–0.8s duration
- Small translation distances
- Opacity transitions
- Scale between 0.98–1.03
- Stagger children slightly

Section reveal:

initial:
opacity: 0
y: 30

animate:
opacity: 1
y: 0

transition:
duration: 0.7

Use viewport-triggered animation.

Example behavior:

As the user scrolls:

SECTION
↓
fade + move upward
↓
CONTENT
↓
staggered elements

Animations should support the content rather than compete with it.

---

## 23. Scroll Experience

The website should feel smooth while scrolling.

Use:
- Sticky elements where useful
- Horizontal project galleries where appropriate
- Scroll-triggered reveals
- Image scale effects
- Parallax used sparingly
- Section transitions

Avoid excessive scroll-jacking.

Normal browser scrolling must remain intact.

Do not hijack the user's scroll behavior.

---

## 24. Image Treatment

Images should feel editorial and premium.

Use:
- Large screenshots
- Product UI
- Architecture visuals
- Team photography
- Abstract technical visuals

Image style:
- Slightly rounded corners
- Large compositions
- High contrast
- Minimal borders

Avoid:
- Generic stock photos
- Random office photos
- Excessive rounded cards

Project images should be large enough to understand the product.

---

## 25. UI Components

Create reusable components.

Required:
- Navbar
- Button
- SectionHeading
- ProjectCard
- ProjectShowcase
- ServiceRow
- Metric
- Testimonial
- FAQItem
- Footer

Use consistent spacing and typography.

Avoid creating unique styling for every section.

---

## 26. Responsive Design

Desktop should be the primary visual reference.

Tablet:
- Reduce typography
- Reduce section spacing
- Convert horizontal layouts where necessary

Mobile:
- Single-column layout
- Hero text remains large
- Navigation becomes hamburger
- Horizontal project sections become vertical
- Timeline becomes vertical
- Statistics become 2-column
- Buttons become comfortable touch targets

Never simply shrink desktop.

Redesign layouts where necessary.

Test at:
- 1440px
- 1280px
- 1024px
- 768px
- 390px
- 375px

---

## 27. Accessibility

Maintain:
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Good contrast
- Alt text
- Reduced-motion support

Respect:

prefers-reduced-motion

When reduced motion is enabled:
- Disable parallax
- Reduce transforms
- Remove unnecessary animated transitions

Buttons and links must have clear interactive states.

---

## 28. Design Tokens

Prefer Tailwind utilities and Tailwind configuration for reusable design decisions.

If CSS variables are needed, keep them limited to true design tokens.

Example:

:root {
  --accent: #D7FF3F;
}

Do not create CSS variables for every individual spacing or typography value.

Recommended conceptual tokens:

Background:
#0F0F0F

Foreground:
#F5F5F5

Muted:
#A1A1A1

Surface:
#171717

Border:
rgba(255,255,255,0.10)

Accent:
#D7FF3F

Spacing:
- 8px
- 16px
- 24px
- 48px
- 80px
- 120px
- 180px

---

# 29. Implementation Direction

## Tech Stack

Use ONLY the following core stack unless a strong technical reason requires otherwise:

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

Do not introduce unnecessary libraries.

## Styling Rules

Tailwind CSS must be the primary styling system.

Prefer Tailwind utility classes for:
- Layout
- Spacing
- Typography
- Colors
- Borders
- Shadows
- Responsive behavior
- Hover states
- Focus states
- Transitions
- Simple animations

Example:

```jsx
<section className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
```

Prefer this over creating a custom CSS class.

### Minimize Native CSS

Avoid creating separate `.css` files unless necessary.

Do NOT create CSS classes for simple styling such as:

```css
.hero-title {
  font-size: 80px;
  margin-bottom: 24px;
}
```

Instead use Tailwind:

```jsx
<h1 className="mb-6 text-6xl font-bold tracking-tight lg:text-8xl">
```

### When Native CSS Is Allowed

Use native CSS only when Tailwind becomes impractical.

Examples:
- Complex custom animations
- Highly specific pseudo-element effects
- Complex background patterns
- CSS variables/design tokens
- Browser-specific behavior
- Complex scrollbar customization
- Advanced CSS effects that would make Tailwind classes unreadable

Keep these styles minimal and isolated.

Do NOT create large global CSS files.

## Tailwind First Rule

Before writing custom CSS, ask:

> Can this be reasonably implemented with Tailwind?

If yes:
→ Use Tailwind.

If no:
→ Use minimal CSS.

## Component Styling

Components should be styled directly with Tailwind classes.

Example:

```jsx
<motion.article
  className="
    group relative overflow-hidden rounded-2xl
    border border-white/10
    bg-white/[0.03]
    transition-colors duration-500
    hover:border-white/20
  "
>
```

Avoid:

```jsx
<motion.article className="project-card">
```

with:

```css
.project-card {
  ...
}
```

unless the styling genuinely requires custom CSS.

## Responsive Design

Use Tailwind responsive breakpoints.

Example:

```jsx
<div className="
  grid
  grid-cols-1
  gap-8
  md:grid-cols-2
  lg:grid-cols-3
">
```

Prefer Tailwind responsive utilities over custom media queries.

## Animations

Use Framer Motion for major UI animations.

Examples:
- Section reveals
- Hero animations
- Project transitions
- Staggered content
- Page transitions
- Scroll-triggered animation

Use Tailwind for simple transitions:

```jsx
className="transition-transform duration-500 group-hover:scale-[1.03]"
```

Do not write custom CSS animations unless Framer Motion or Tailwind cannot reasonably handle them.

## Architecture

Use:

src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── testimonials.ts
├── pages/
├── assets/
└── App.tsx

Keep content separated from components.

Projects, services, testimonials, and FAQ content should come from data files.

Components should focus on:
- Presentation
- Layout
- Interaction
- Animation

Avoid putting large amounts of content directly inside components.

## Code Quality

Keep components:
- Reusable
- Small
- Readable
- Maintainable

Avoid:
- Huge components
- Repeated Tailwind class combinations
- Unnecessary abstractions
- Inline style objects when Tailwind can handle the styling
- Excessive custom CSS

Use Tailwind composition and reusable React components where appropriate.

---

## 30. Content Guidelines

The content must sound like a real software engineering company.

Tone:
- Confident
- Direct
- Technical when appropriate
- Human
- Clear
- Business-oriented

Avoid marketing clichés such as:
- "We revolutionize the digital landscape"
- "Cutting-edge solutions"
- "Unlock your digital potential"
- "Transform your business with innovation"
- "Next-generation technology"

Prefer concrete language.

Instead of:

"We deliver cutting-edge digital transformation solutions."

Use:

"We design and build software that helps teams operate faster."

Instead of:

"Leverage our expertise to transform your business."

Use:

"We turn complex business processes into simple digital products."

Keep copy concise.

The visual design should carry much of the communication.

---

## 31. Overall Page Structure

Final homepage order:

1. Navigation
2. Hero
3. Client / Partner Logos
4. Core Value Proposition
5. Services
6. Featured Projects
7. Engineering / Technology
8. Process
9. Metrics
10. Testimonials
11. About
12. FAQ
13. Final CTA
14. Footer

Sections can be reordered when actual content requires a stronger narrative.

---

## 32. Important Design Rule

The website must NOT feel like:

> "Here is a software company with a bunch of cards."

It should feel like:

> "A sophisticated technology company presenting its work through an editorial product experience."

Prioritize:

TYPOGRAPHY
→ SPACING
→ VISUAL STORYTELLING
→ PRODUCT VISUALS
→ MOTION
→ CONTENT

in that order.

The design should communicate confidence without trying too hard.

Think:

> Premium engineering studio

rather than:

> Generic SaaS landing page.

---

## 33. Performance

Keep the website fast.

Requirements:
- Optimize large images
- Lazy-load below-the-fold images
- Avoid unnecessary animation loops
- Avoid excessive JavaScript
- Use responsive image sizes
- Avoid heavy third-party libraries
- Prefer CSS/Tailwind for simple effects
- Use Framer Motion selectively

Animations must not significantly affect scrolling performance.

Avoid animating expensive properties when possible.

Prefer:
- transform
- opacity

Avoid unnecessary animation of:
- width
- height
- top
- left
- expensive filters

---

## 34. Interaction Principles

Every interactive element should provide clear feedback.

Buttons:
- Subtle movement
- Background transition
- Arrow movement
- Clear hover state

Links:
- Underline or color transition
- Arrow movement where appropriate

Cards:
- Subtle border/background change
- Image scale
- Metadata transition

Navigation:
- Active state
- Smooth mobile menu transition

Do not animate everything.

Use motion to establish hierarchy.

---

## 35. Final Quality Target

The final result should feel comparable to a premium Webflow/Framer technology template.

Target characteristics:
- Strong first impression
- Large typography
- Excellent whitespace
- High-quality project presentation
- Smooth scrolling experience
- Subtle but noticeable animations
- Clear CTA
- Strong visual hierarchy
- Professional engineering identity
- Responsive
- Fast
- Accessible

Do not over-design.

Every visual element should have a purpose.

The final experience should feel:
- Premium
- Intentional
- Cohesive
- Modern
- Technically credible

---

## 36. Final Instruction to the Development Agent

Build the website as a polished production-quality React website.

Follow the design direction above consistently.

Do not:
- Copy the reference website directly
- Use placeholder lorem ipsum
- Add unnecessary sections
- Add excessive cards
- Overuse gradients
- Overuse animations
- Create large amounts of custom CSS
- Add unnecessary dependencies
- Sacrifice usability for visual effects

Do:
- Use React components
- Use Tailwind CSS as the primary styling system
- Use Framer Motion for meaningful motion
- Keep native CSS minimal
- Keep content data-driven
- Make project visuals prominent
- Maintain strong typography and whitespace
- Make the website fully responsive
- Make interactions subtle and polished
- Prioritize performance and accessibility

The end result should look like a premium software engineering studio, not a generic corporate website.
