/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export', // Enable static exports for GitHub Pages
  basePath: '/eportfolio',
  assetPrefix: '/eportfolio',
}

module.exports = nextConfig 