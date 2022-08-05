const client = require('./client')

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
  },
  // Make sure that your node enviroment supports async/await
  exportPathMap: async function (defaultPathMap) {
    const secret = 'j8heapkqy4rdz6kudrvsc7ywpvfhrv022abyx5zgmuwpc1xv'
    const path = await client
      // get all the posts and return those with slugs
      .fetch('*[_type == "toy"].slug.current')
      .then(data => 
        // use reduce to build an object with routes
        // and select the blog.js file, and send in the
        // correct query paramater.
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/${slug}`]: { page: "/[slug]", query: { slug } },
            '/api/preview': { page: '/api/preview', query: {secret, slug}}
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  }
}

module.exports = nextConfig
