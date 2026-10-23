# Samuel Molla — main portfolio

The main React portfolio at https://samuelmolla.dev. The Ubuntu and Kali desktop editions remain independent projects at https://ubuntu.samuelmolla.dev and https://kali.samuelmolla.dev.

## Development

From `React-Portfolio`, run `npm ci`, then `npm run dev`. Build with `npm run build`; preview the output with `npm run preview`. Use Node.js 20.19+ or 22.12+.

## Content

- `src/projects-data.js` retains the seven existing project records.
- `src/Projects.jsx` adds the two desktop projects, project filters, search, and the Playground section. Titles and links come from local records; they do not depend on GitHub API availability.
- `src/Home.jsx`, `src/Header.jsx`, `src/Footer.jsx`, `src/App.jsx`, and `src/index.css` define the design, responsive layout, and light/dark themes.
- `src/Contact.jsx` retains the original EmailJS service configuration. Submitting sends an email through that service; delivery depends on the account configuration. Errors retain the visitor's inputs, and the form prevents duplicate submissions while sending.
- `public/Images/portfolio-ubuntu.png` and `portfolio-kali.png` are screenshots of the actual desktop editions. The portrait and résumé remain the original assets.

## Deployment

The existing Netlify site builds the `main` branch of `Mayufisha/Personal-Portfolio`, with base directory `React-Portfolio`, build command `npm run build`, and publish directory `dist`. Pushing to `main` updates the main site. The desktop editions have separate repositories and deployments.
