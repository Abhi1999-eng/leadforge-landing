/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/leadforge-landing' : '',
  assetPrefix: isGitHubPages ? '/leadforge-landing/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
