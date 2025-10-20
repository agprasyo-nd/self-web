// The home page embeds the iPortfolio static HTML template using an iframe.
// The template files are located in the public directory under
// `/public/iPortfolio-1.0.0/`. When running in development or after export,
// Next.js will serve files in the `public` folder from the web root.

export default function HomePage() {
  return (
    <main style={{ padding: 0 }}>
      {/*
        We use an iframe to display the imported iPortfolio template. This
        allows you to keep the original styling and scripts intact without
        converting the HTML to JSX manually. Feel free to replace this
        implementation with custom React components if you wish to port the
        template natively into Next.js.
      */}
      <iframe
        src="/iPortfolio-1.0.0/index.html"
        style={{ border: 'none', width: '100%', minHeight: '100vh' }}
        title="iPortfolio Template"
      />
    </main>
  )
}