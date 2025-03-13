/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
    unoptimized: true,
  },
  output: 'export', // Enable static exports for GitHub Pages
  trailingSlash: true, // Add trailing slashes to all URLs for better compatibility with GitHub Pages
}

module.exports = nextConfig 