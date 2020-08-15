const PrerenderSpaPlugin = require('prerender-spa-plugin');
var path = require('path')
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        // Absolute path to compiled SPA
        // List of routes to prerender
        new PrerenderSpaPlugin(
          {
            staticDir: path.resolve(__dirname, 'dist'),
            routes: ['/', '/about']
          }
        ),
      ]
    }
  }
}