/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
   images: {
    domains: ['imgs.search.brave.com'],
  },
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/page', // The desired root page (page.tsx)
        },
      
      {
        source:'/experience',
        destination:'/experience'
      }
    ];
    },
  }
