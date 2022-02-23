export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meta-code',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        body: true,
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
      },
      // {
      //   body: true,
      //   src: "https://beingmomen.github.io/cdn/js/jquery.js",
      // },
      {
        body: true,
        src: "https://beingmomen.github.io/cdn/js/ui-feather.js",
      },
      // {
      //   body: true,
      //   src: "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js",
      // },
      // {
      //   body: true,
      //   src: "https://cdn.jsdelivr.net/npm/apexcharts",
      // },
      // {
      //   type: 'text/javascript',
      //   src: "/js/jquery.js",
      //   body: true,
      // },
      // {
      //   body: true,
      //   src: "/bootstrap.js",
      // },
      // {
      //   type: 'text/javascript',
      //   src: "/js/ui-feather.js",
      //   body: true,
      // },
      // {
      //   body: true,
      //   src: "~assets/app-assets/vendors/js/charts/apexcharts.min.js",
      // },
      // {
      //   body: true,
      //   src: "~/assets/app-assets/vendors/js/extensions/toastr.min.js",
      // },
      // {
      //   body: true,
      //   src: "~/assets/app-assets/js/core/app-menu.js",
      // },
      // {
      //   body: true,
      //   src: "~/assets/app-assets/js/core/app.js",
      // },
      // {
      //   body: true,
      //   src: "~/assets/app-assets/js/scripts/pages/dashboard-ecommerce.js",
      // },
      // {
      //   body: true,
      //   src: "@/assets/js/ui-feather.js",
      // },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@assets/css/bootstrap.min.css",
    // BEGIN: Vendor CSS
    "@assets/app-assets/vendors/css/vendors.min.css",
    "@assets/app-assets/vendors/css/charts/apexcharts.css",
    "@assets/app-assets/vendors/css/extensions/toastr.min.css",
    // END: Vendor CSS

    // BEGIN: Theme CSS
    "@assets/app-assets/css/bootstrap.css",
    "@assets/app-assets/css/bootstrap-extended.css",
    "@assets/app-assets/css/colors.css",
    "@assets/app-assets/css/themes/dark-layout.css",
    "@assets/app-assets/css/components.css",
    "@assets/app-assets/css/themes/semi-dark-layout.css",
    "@assets/app-assets/css/themes/bordered-layout.css",
    // END: Theme CSS

    // BEGIN: Page CSS
    "@assets/app-assets/css/core/menu/menu-types/vertical-menu.css",
    "@assets/app-assets/css/pages/dashboard-ecommerce.css",
    "@assets/app-assets/css/pages/ui-feather.css",
    "@assets/app-assets/css/plugins/charts/chart-apex.css",
    "@assets/app-assets/css/plugins/extensions/ext-component-toastr.css",
    // END: Page CSS

    // BEGIN: Custom CSS
    "@/assets/assets/css/style.css",
    // END: Custom CSS
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/mixins/test.js",
    // { src: "~plugins/jquery.js", mode: "client" },
    // { src: "~plugins/feather-file.js", mode: "client" },
    { src: "~plugins/feather.js", mode: "client" },
    // { src: "~plugins/jquery.js", mode: "client" },
    // { src: "~plugins/ui-feather.js", mode: "client" },
    // "~plugins/jquery.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
