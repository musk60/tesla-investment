/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/tesla-investment',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
}

module.exports = nextConfig
