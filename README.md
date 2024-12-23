# UX Developer Challenge

## Introduction

This is my solution to the challenge assigned for the UX Dev position at Making Sense.

Based on a provided design, the idea was to analyze it and build primitives and update tokens accordingly. After that I started building/updating the base layout, while I was adding some new components to follow the atomic design pattern. Finally, I switched to a more a11y focused approach and added some attrs and tools from both HTML and CSS to enhance and get closer to a basic compliance. In addition, I added Storybook with a sample story to demonstrate the flexibility of the primitives and atomic design pattern.

At the end there is a simple changelog which contains my approaches and task done, and their order. This is a very useful guide to use a reference for future projects or endeavors.

After that there is a list of, my preferred, next steps to give continuity to the project and draw a possible path for a v2.0

Last but not least, you can see the solution deployed in this [link](https://making-sense-ux-dev-challenge-sr.vercel.app/)

## Stack

- vite
- react router
- Storybook
- CSS Modules
- Vercel

## Setup

To setup dependencies, just do the following:

```javascript
npm i
```

For the project:

```javascript
npm run dev
```

For the project:

```javascript
npm run storybook
```

## UI

These are rough notes from my experience working with different UI libraries, frameworks and projects. Think of this as "my criteria" for both new and existing projects.

You will find breakpoints and their corresponding virtual devices (which you can add from the inspector tools from the browser) along with the media queries that matches and group them for a better maintainability

### Breakpoints and Virtual Devices

#### Mobile

- iPhone 5/SE - 320x568 (design)
- iPhone 6/7/8 Plus - 414x736

---

- Nexus 7 - 600x960

---

#### Tablet

- iPad Mini - 768x1024
- iPad Air - 820x1180 (design)

---

- iPad Pro 12.9 - 1024x1366

---

#### Desktop

- MDPI Laptop Screen - 1280x800
- HiDPI Laptop Screen - 1440x900 (design)

---

- 1080p FHD Screen - 1920x1080
- 4k UHD Screen - 3840x2160

### Media Queries with Mobile-First approach

- 0px
- 576px
- 768px
- 992px
- 1200px
- 1600px

## Changelog

- Add mobile-first on the existing base layout
- Update design tokens for fonts, colors and gradients
- Add atomic design structure for components
- Refactor types outside UI
- Add main components, atomic design primitives and business logic
- Add extra component outside the base design
- Add focus, focus-visible and active pseudo-classes
- Add keyboard navigation and actions
- Adjust dark mode theme
- Add hover states
- Add Storybook and a sample story

## Next Steps

- Add jest and RTL for unit tests and snapshots tests
- Add Cypress for E2E, integration and visual flow tests
- Fine-tune components following atomic design patterns
- Update design tokens and variants in both Figma and the code
- Add documentation regarding a11y checks (Axe, Lighthouse, color-contrast-checker, etc)
- Perform in-depth a11y test (screen readers, keyboard navigation and actions, multi-device support)
- Fine-tune animations and layout shifting
