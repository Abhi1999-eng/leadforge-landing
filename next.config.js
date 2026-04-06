/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/leadforge-landing',
  assetPrefix: '/leadforge-landing/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
