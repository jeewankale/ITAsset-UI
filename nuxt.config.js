
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */modules: ['bootstrap-vue/nuxt'],
  
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    // middleware: 'auth'
    // Run the middleware/user-agent.js on every page
    // middleware: 'user-agent'
    // mode: 'hash' | 'history' | 'abstract'
    base: "/ITAsset/"
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
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  modules: [
    'mdbvue/nuxt'
  ],
  mdbvue: {
    icons: false, // FA5
    roboto: false, // font Roboto
    css: false, // MDB CSS
    bootstrap: false // Bootstrap CSS
  },
}
