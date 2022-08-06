/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		//domains: ['cdn.sanity.io'],
    loader: 'imgix',
    path: 'https://skanda-toys.imgix.net'
	},
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // }
}

module.exports = nextConfig
