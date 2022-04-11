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
  env:{
    base_url:{
      dragontail:'/home/michael/devTestes/mobacodex/src/backend/data/dragontail',
    },
    dragontail_url:'/home/michael/devTestes/mobacodex/src/backend/data/dragontail',
  }
}
