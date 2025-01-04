/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath since this is the root domain
  // basePath: '/hacker-portfolio' // Remove this line
}

module.exports = nextConfig

