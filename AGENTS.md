# AGENTS.md

## Project

This is a premium software engineering company website.

The website is inspired by the visual quality and design philosophy of:

https://flock-ramp.webflow.io/

The website must **NOT** copy the reference directly.

The goal is to create a premium software engineering studio website with a polished, modern, intentional visual experience.

---

# 1. Source of Truth

This file is the primary instruction file for the project.

Before performing any implementation task:

1. Read this file completely.
2. Inspect the existing project structure.
3. Inspect the relevant source files.
4. Read `DESIGN.md` when the task involves UI, UX, visual design, layout, animation, or frontend presentation.
5. Follow the requirements in both files.

Priority:

1. `AGENTS.md`
2. `DESIGN.md`
3. Current developer/user task
4. Existing project architecture
5. Existing implementation

If there is a conflict, prefer the higher-priority instruction.

---

# 2. Required Tech Stack

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React

Do not introduce unnecessary dependencies.

Before adding a dependency, check whether the existing stack can reasonably solve the problem.

Prefer existing project utilities and components over introducing new libraries.

---

# 3. Styling

Tailwind CSS is the primary styling system.

Always prefer Tailwind for:

* Layout
* Spacing
* Typography
* Colors
* Borders
* Responsive behavior
* Hover states
* Focus states
* Simple transitions

Before creating custom CSS, ask:

> Can Tailwind reasonably handle this?

If yes, use Tailwind.

If no, use minimal native CSS.

Avoid:

* Large CSS files
* Duplicated styles
* Unnecessary CSS abstractions
* Inline styles when Tailwind can handle the requirement

Prefer existing design tokens and utility classes already used by the project.

---

# 4. Animation

Use Framer Motion for meaningful UI animation.

Use it for:

* Hero entrance
* Section reveal
* Staggered content
* Scroll-triggered animation
* Project interactions
* Page transitions
* Meaningful visual feedback

Use Tailwind transitions for simple hover effects.

Avoid unnecessary animation.

Animations should feel:

* Smooth
* Premium
* Subtle
* Intentional
* Responsive
* Performance-friendly

## Animation Rules

Avoid multiple animation systems controlling the same property.

For example, do not combine:

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="transition-transform hover:scale-105"
/>
```

Instead, choose one animation system for the property.

Preferred responsibility:

```text
Framer Motion
→ opacity
→ transform
→ entrance animations
→ scroll animations
→ complex interactions

Tailwind
→ colors
→ borders
→ backgrounds
→ simple hover transitions
```

Avoid `transition-all` when a Framer Motion component is also controlling transforms or opacity.

Prefer:

```text
transition-colors
transition-opacity
```

over:

```text
transition-all
```

Avoid deeply nested or competing Framer Motion animations unless they provide a clear design benefit.

Keep animation performance in mind.

Prefer transform and opacity animations over layout-affecting properties such as:

* `width`
* `height`
* `top`
* `left`
* `margin`
* `padding`

---

# 5. Architecture

Use reusable React components.

Preferred structure:

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   └── ui/
│
├── data/
├── pages/
├── assets/
├── App.tsx
└── main.tsx
```

Keep content separate from presentation.

Projects, services, testimonials, FAQ, metrics, and similar content should be data-driven.

Prefer reusable components when the same UI pattern appears multiple times.

---

# 6. Component Rules

Keep components:

* Small
* Focused
* Reusable
* Readable
* Maintainable

Avoid:

* Giant components
* Duplicated UI
* Hardcoded repeated content
* Unnecessary abstractions
* Excessive prop drilling
* Unnecessary state
* Unnecessary effects

Before creating a new component, check whether an existing component can be reused or extended.

Do not create abstractions solely for the sake of abstraction.

---

# 7. Design

For any task involving:

* UI
* UX
* Layout
* Visual styling
* Animation
* Responsive design
* Interaction
* Typography
* Colors
* Components
* Spacing

Read:

```text
DESIGN.md
```

Do not make independent design decisions that contradict `DESIGN.md`.

The design should maintain a consistent visual language throughout the website.

Prioritize:

* Visual hierarchy
* Spacing
* Typography
* Consistency
* Accessibility
* Responsiveness
* Interaction quality
* Performance

Do not blindly copy external references.

Use references for inspiration and design direction only.

---

# 8. Working With Existing Code

Do not blindly rewrite existing code.

First inspect:

* Existing components
* Existing data
* Existing styling
* Existing assets
* Existing dependencies
* Existing architecture

Reuse good existing implementation.

Refactor only when necessary.

Preserve existing functionality unless the task explicitly requires changing it.

When modifying a component:

1. Understand its current behavior.
2. Identify the smallest necessary change.
3. Preserve unrelated functionality.
4. Avoid unnecessary rewrites.

Do not modify unrelated files unless required by the task.

---

# 9. Execution Rules

Do not only explain what should be done.

Actually modify the project when implementation is requested.

Before implementing:

1. Read `AGENTS.md`.
2. Read `DESIGN.md` if relevant.
3. Inspect the relevant project structure.
4. Inspect the relevant source files.
5. Understand the existing implementation.
6. Implement the requested change.

After implementation:

1. Review the changed code.
2. Check for obvious syntax issues.
3. Check for obvious TypeScript issues.
4. Check for obvious logic issues.
5. Ensure the requested behavior is implemented.
6. Stop.

---

# 10. Validation Rules

**Do NOT automatically run validation commands after every change.**

Do not automatically run:

```text
npm run build
npm run lint
npm run typecheck
npx tsc
npm test
```

Do not automatically:

* Start the development server
* Install dependencies
* Update dependencies
* Run formatting commands
* Run unrelated shell commands
* Perform automated checks that were not requested

Only run validation when the user explicitly requests it.

Examples of explicit validation requests:

* "Run the build"
* "Run lint"
* "Check TypeScript"
* "Run the tests"
* "Validate the changes"
* "Make sure it builds"
* "Check for errors"

When validation is explicitly requested, run only the relevant validation commands.

For example:

```text
User: "Run lint"
→ Run lint only.

User: "Check TypeScript"
→ Run TypeScript validation only.

User: "Run build"
→ Run the build only.

User: "Run everything"
→ Run the appropriate full validation suite.
```

Do not interpret:

* "fix this"
* "implement this"
* "update this"
* "change this"
* "make this better"
* "revamp this"

as permission to run build, lint, test, or type-check commands.

---

# 11. Token Efficiency

The project uses an iterative development workflow.

Prioritize implementation over automated verification.

Do not waste tokens repeatedly running expensive validation commands during small UI changes.

Default workflow:

```text
READ
↓
INSPECT
↓
IMPLEMENT
↓
REVIEW
↓
STOP
```

Do not automatically perform:

```text
READ
↓
IMPLEMENT
↓
BUILD
↓
LINT
↓
TEST
↓
FIX
↓
BUILD
↓
LINT
↓
TEST
```

For small visual changes, prefer making the requested change immediately rather than spending tokens validating unrelated parts of the application.

When the user is iterating on UI/UX, assume they want fast implementation unless they explicitly request validation.

---

# 12. Error Handling

If an error is directly encountered while implementing the requested task, fix it when the fix is clearly related to the current change.

Do not proactively scan the entire project for unrelated errors.

Do not run the entire project's validation suite just because an unrelated issue might exist.

If an existing unrelated error prevents the requested implementation, explain the blocker clearly.

Do not claim that the project builds, passes lint, or passes tests unless those checks were actually executed.

---

# 13. Responsive Design

All UI changes must consider:

* Mobile
* Tablet
* Desktop
* Large desktop screens

Use Tailwind responsive utilities.

Prefer mobile-first implementation.

Check for:

* Overflow
* Text wrapping
* Grid behavior
* Spacing
* Touch interaction
* Navigation behavior
* Animation behavior

Do not introduce horizontal scrolling unless explicitly intended by the design.

---

# 14. Accessibility

Preserve and improve accessibility where practical.

Use:

* Semantic HTML
* Proper heading hierarchy
* Meaningful `alt` text
* Accessible links and buttons
* Visible focus states
* Keyboard-friendly interactions

Do not sacrifice accessibility for visual effects.

Animations should respect:

```text
prefers-reduced-motion
```

When reduced motion is requested, disable or significantly reduce non-essential animations.

---

# 15. Performance

Prefer performant implementations.

Avoid:

* Unnecessary React re-renders
* Excessive animation instances
* Large unnecessary dependencies
* Layout-triggering animations
* Expensive effects
* Unnecessary event listeners
* Repeated calculations during render

For animations, prefer:

```text
transform
opacity
```

over layout-affecting properties.

For repeated UI elements, avoid creating unnecessary animation complexity for every child.

---

# 16. Content and Data

Keep content separate from presentation.

Prefer:

```text
src/data/
```

for:

* Projects
* Services
* Testimonials
* Metrics
* FAQs
* Navigation data
* Other repeated content

Do not duplicate content directly inside multiple components.

When adding new content, follow the existing data structure.

---

# 17. Dependencies

Do not add dependencies unless necessary.

Before installing a package:

1. Check whether the functionality already exists in the project.
2. Check whether React, Framer Motion, Tailwind, or an existing utility can solve it.
3. Only introduce a dependency when there is a clear benefit.

Never install dependencies automatically just because a library could be useful.

Only install or modify dependencies when:

* Explicitly requested, or
* Absolutely necessary for the requested implementation.

---

# 18. File Changes

Keep changes scoped to the requested task.

Do not:

* Rewrite unrelated components
* Reformat unrelated files
* Rename unrelated files
* Change project configuration unnecessarily
* Modify dependencies unnecessarily
* Change the architecture without a clear reason

Prefer small, targeted changes.

---

# 19. Final Response

After completing an implementation:

* Briefly summarize what was changed.
* Mention important implementation decisions if useful.
* Do not claim build/lint/test success unless those checks were actually run.
* Do not provide unnecessary explanations.
* If validation was not requested, do not run it simply to provide a status update.

For UI implementation tasks, focus the final response on the actual changes made.

---

# 20. Design Reference

The visual direction is documented separately.

Read:

```text
DESIGN.md
```

Do not duplicate the entire design specification inside this file.

Keep architectural and development instructions here.

Keep visual/design instructions in `DESIGN.md`.

---

# 21. Antislop Filter

When building or editing UI/visual work, also read:

```text
skills/antislop/antislop.md
```

Antislop is a filter that catches generic AI-generated design patterns (slop). It complements `DESIGN.md` and `AGENTS.md`. Priority remains: `AGENTS.md` > `DESIGN.md` > antislop.

---

## Anti-Repetition Rule

Before modifying code:

1. Search existing implementation.
2. Verify whether requested behavior already exists.
3. Never recreate an existing solution.
4. Never repeat completed investigation.
5. Never refactor working code without concrete reason.
6. Prefer smallest change solves problem.

Maintain task checklist:

* `[ ]` Not investigated
* `[~]` In progress
* `[✓]` Completed verified
* `[-]` Not applicable

Once an item `[✓]`, do not revisit it unless new evidence demonstrates regression unresolved problem.

If requested optimization already implemented correctly, report: `Already implemented — no change needed.`

Do not make cosmetic or architectural changes merely demonstrate activity.

Every code change must specific reason tied current task.

