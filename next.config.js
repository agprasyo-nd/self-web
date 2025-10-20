/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML for deployment on any static hosting.
  output: 'export',
  // Disable image optimization so exported site works without additional config.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;