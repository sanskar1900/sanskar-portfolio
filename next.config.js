/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
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
