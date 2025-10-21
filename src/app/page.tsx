// The home page embeds the iPortfolio static HTML template using an iframe.
// The template files are located in the public directory under
// `/public/iPortfolio-1.0.0/`. When running in development or after export,
// Next.js will serve files in the `public` folder from the web root.

import { fetchHome } from '../lib/api';

export default async function HomePage() {
  let home: any = null;
  try {
    home = await fetchHome();
  } catch (e) {
    // swallow - fallback to template
  }

  return (
    <main style={{ padding: 0 }}>
      {home && (
        <header style={{ padding: '1rem', background: '#111', color: '#fff' }}>
          <h1 style={{ margin: 0 }}>{home.heroTitle}</h1>
          <p style={{ margin: 0 }}>{home.heroSubtitle}</p>
        </header>
      )}

      <iframe
        src="/iPortfolio-1.0.0/index.html"
        style={{ border: 'none', width: '100%', minHeight: '100vh' }}
        title="iPortfolio Template"
      />
    </main>
  );
}