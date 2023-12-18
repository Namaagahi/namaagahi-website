/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DOMAIN: 'http://localhost:3000/',
      },
    images: {
        domains: ['res.cloudinary.com']
    }
}

module.exports = nextConfig
