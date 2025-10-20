# Self‑Web – Portfolio Website

This repository contains a simple **static portfolio website** built with **Next.js 14**.

The project uses the new **app directory** (app router) and is configured to be exported as
a fully static site via `next export`. You can deploy the generated files to any static
hosting platform such as GitHub Pages, Vercel, Netlify, or your own server.

## iPortfolio Template

The folder `public/iPortfolio-1.0.0/` contains the original HTML template from the
**iPortfolio** Bootstrap theme. The home page (`src/app/page.tsx`) embeds the
template’s `index.html` file inside an iframe. This approach lets you use the
original design and scripts without manually converting the HTML into React
components.

If you prefer to port the template to React/Next.js components, you can:

- Move static assets (images, CSS, JS) into the `public` folder.
- Convert sections of `index.html` into JSX and split them into reusable
  components.
- Replace the iframe in `src/app/page.tsx` with your new components.

## Getting Started

> **Note**
> This repository is intentionally set up without installing dependencies, since
> it is designed to be bootstrapped in environments without internet access. Before
> running the site locally, make sure you have Node.js and npm installed, then
> install dependencies with `npm install`.

### Install dependencies

```
npm install
```

### Development server

Start the development server with:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build and export

To build the application and export it as static HTML, run:

```
npm run build
```

This will output the static files to the `out` folder. You can deploy this folder
to any static file hosting service.

### Deployment on GitHub Pages

1. Push the code in this repository to GitHub.
2. Create a new branch called `gh-pages`.
3. After running `npm run build`, copy the contents of the `out` directory into the root
   of the `gh-pages` branch.
4. Commit and push the `gh-pages` branch.
5. In the GitHub repository settings, enable **GitHub Pages** and choose the `gh-pages`
   branch as the source.
6. Your portfolio will be live at `https://<your-username>.github.io/<repository-name>/`.

Alternatively, you can deploy directly from the main branch using services like Vercel.

## Customization

- Edit `/src/app/page.tsx` to update the home page content.
- Add personal details and a bio in `/src/app/about/page.tsx`.
- Update `/src/app/projects/page.tsx` with your own projects.
- Modify `/src/app/globals.css` to customise styling.

Feel free to extend the site with additional pages and components as needed.