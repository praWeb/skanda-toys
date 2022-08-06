/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['cdn.sanity.io'],
    loader: 'imgix',
    path: 'https://skanda-toys.imgix.net'
	}
}

module.exports = nextConfig
