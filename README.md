# my-cv

Personal CV website built with Next.js. Includes pages for about, projects, blog, and contact, with support for multiple languages.

## Features

- **About** — skills, experience, and education
- **Projects** — portfolio showcase
- **Blog** — writing and updates
- **Contact** — get in touch
- **i18n** — English, French, Spanish, and German via react-i18next

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [i18next](https://www.i18next.com/) / [react-i18next](https://react.i18next.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start development server |
| `npm run build` | Build for production   |
| `npm run start` | Start production server |

## Project Structure

```
├── locales/          # Translation files (en, fr, es, de)
├── pages/            # Next.js routes
├── src/
│   ├── components/   # Shared UI components
│   └── i18n.js       # i18n configuration
└── styles/           # Global CSS
```

## Adding Translations

Edit the JSON files in `locales/<language>/translation.json`. Use the language switcher in the nav to preview changes.
