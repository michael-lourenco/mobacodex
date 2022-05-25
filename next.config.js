const withImages = require('next-images')

module.exports = withImages({
 esModule: true
})

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'http://localhost:3000', 
      'https://localhost:3000', 
      'localhost', 
      'localhost:3000',
      'http://www.mobacodex.com/',
      'www.mobacodex.com/', 
      'https://www.mobacodex.com/'],
  },
  typescript: {
    ignoreBuildErrors: true
  }
  // env:{
  //   BASE_URL: 'http://www.mobacodex.com',
  //   DRAGONTAIL_URL:'http://www.mobacodex.com/src/backend/data/dragontail',
  // }
}
