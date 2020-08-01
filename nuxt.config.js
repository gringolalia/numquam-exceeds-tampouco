const pkg = require('./package')

module.exports = {
  mode: 'spa',
  head: {
    title: "Numquam Exceeds Tampouco",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=News+Cycle|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css' },
      { rel: 'stylesheet', href: './semantic/dist/semantic.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/frow@3/dist/frow.min.css' }

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [

  ],

  generate: {
        dir: 'public'
      },
      
      router: {
        base: '/numquam-exceeds-tampouco/'
      },

  /*
  ** Build configuration
  */
  // build: {
  //   extend(config, ctx) {},
  //   transpile: [
  //     'mdbvue/lib/components'
  //   ]
  // },
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
      
    // }
  // }
}
