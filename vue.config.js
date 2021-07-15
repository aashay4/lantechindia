var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
 configureWebpack: config => {
   if (process.env.NODE_ENV !== 'production') return

   return {
     plugins: [
       new PrerenderSpaPlugin(
         // Absolute path to compiled SPA
         path.resolve(__dirname, 'dist'),
         // List of routes to prerender
         [ '/', '/seo-services', '/contact-us', '/web-development-services', '/mobile-app-development-services', '/configure-layer-3-switch', '/best-javascript-frameworks', '/off-page-seo-techniques', '/trending-seo-techniques', '/best-backend-frameworks', '/best-node-js-packages', '/pros-cons-vue-js'],
       ),
     ]
   }
 }
}
