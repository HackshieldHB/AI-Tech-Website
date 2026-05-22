/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.aitech-ilt.co.id',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },

    // Silence noisy build output in production
    logging: {
        fetches: {
            fullUrl: false,
        },
    },
}

module.exports = nextConfig
