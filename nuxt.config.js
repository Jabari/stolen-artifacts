module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ã',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'stolen artifacts - good things in short supply' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    css: [
      'assets/global.css'
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2fedc0' },
  /*
  ** Cache components
  */
  modules: [
    // Simple usage
    '@nuxtjs/component-cache',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
