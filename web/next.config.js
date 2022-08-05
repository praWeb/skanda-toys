/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['cdn.sanity.io']
	},
  experimental: {
    images: {
      unoptimized: true,
    },
  }
}

module.exports = nextConfig
