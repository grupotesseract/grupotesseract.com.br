/* eslint-disable */

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Grupo Tesseract - Sites, Sistemas e Aplicativos! 📱 💻 🌐',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'tesseract, desenvolvimento web, laravel, vue, react, empresa desenvolvimento, sites, sistemas, aplicativos' },
      { hid: 'description', name: 'description', content: 'Empresa Especializada em Desenvolvimento para Web. Nós amamos Tecnologia. Trabalhamos com Laravel, React, Vue, Angular. Equipes Personalizadas para seu Projeto' },
      { name: 'og:description', content: 'Empresa Especializada em Desenvolvimento para Web. Nós amamos Tecnologia. Trabalhamos com Laravel, React, Vue, Angular. Equipes Personalizadas para seu Projeto' },
      { name: 'og:title', content: 'Grupo Tesseract - Sites, Sistemas e Aplicativos! 📱 💻 🌐' },
      { name: 'og:image', content: '/ogimage.jpeg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],

    //including jivoChat script in all pages
    script: [
      { src: '//code.jivosite.com/widget.js', async: true, 'jv-id':'dgbdpcS1d8' }
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0097aa' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/style/global.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuetify',
    { src: '@/plugins/vue-waypoint', ssr: false },
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        }
      ]
    }]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // proxy: {
  //   '/api/': {
  //     target: 'https://develop-api.grupotesseract.com.br',
  //     pathRewrite: {'^/api/': ''}
  //   }
  // },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
