import { BFormGroup, BBadge, BCardText } from "bootstrap-vue";

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
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=3' },
    { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" }
  ],
  script: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
    { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
    { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' }
  ],
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
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'ToastPlugin',
      'ModalPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin', 'VBScrollspyPlugin'],
    components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal','BCard','BFormGroup','BBadge','BCardText'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
