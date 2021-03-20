
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ogur Test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     '@/assets/css/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //{src: 'plugins/swiper.js', ssr: false},
    "~/plugins/notiflix.js",
    "~/plugins/axios.js",
    //"~/plugins/i18n.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
     '@nuxtjs/router-extras',
    ['nuxt-fontawesome', {
    component: 'fa', //customize component name
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faLightbulb', 'faCartArrowDown', 'faShoppingCart', 'faSearch', 'faUserCircle', 'faHeart', 'faBars', 'faWindowClose', 'faTrash','faArrowRight'
          ,'faRocket','faCreditCard','faEnvelope','faGift','faAngleDown'
          ]
        },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGithub','faFacebook']
        },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faLightbulb',]
        },
    ]
 }]

  ],

   tailwindcss: {
    cssPath: '~/assets/css/plugins/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: true,
    config: {},
    viewer: false
  },


  axios: {
    proxy: true,
    credentials: true,
    debug: false,
    headers: {
      common: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {}
  }
  },


   proxy: {

  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso: 'en-GB',
          name: 'English',
          file: 'en.json'
        },
        {
          code: 'tr',
          iso: 'tr-TR',
          name: 'Türkçe',
          file: 'tr.json'
        }
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected'
      },
      defaultLocale: 'en',
      lazy: true,
      langDir: 'locales/',
      fallbackLocale: 'tr'
    }],
    ['nuxt-vue-select', { /* module options */ }],
    '@nuxtjs/axios',
    'nuxt-route-meta',
    '@nuxtjs/proxy'
  ],



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
