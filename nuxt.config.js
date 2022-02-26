export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meta-code',
    htmlAttrs: {
      lang: 'en',
      class: `loading bordered-layout`,
      'data-textdirection': "rtl",
      'data-layout': "bordered-layout",

    },
    bodyAttrs: {
      class: "vertical-layout vertical-menu-modern navbar-floating footer-static",
      'data-open': "click",
      'data-menu': "vertical-menu-modern",
      'data-col': ""
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
      {
        body: true,
        src: "/app-assets/vendors/js/vendors.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/charts/apexcharts.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/extensions/toastr.min.js",
      },
      {
        body: true,
        src: "/app-assets/js/core/app-menu.js",
      },
      {
        body: true,
        src: "/app-assets/js/core/app.js",
      },
      {
        body: true,
        src: "/app-assets/js/scripts/pages/dashboard-ecommerce.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/forms/validation/jquery.validate.min.js",
      },
      {
        body: true,
        src: "/app-assets/js/scripts/pages/page-auth-login.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/jquery.dataTables.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/datatables.bootstrap4.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/dataTables.responsive.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/responsive.bootstrap4.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/datatables.checkboxes.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/datatables.buttons.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/jszip.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/pdfmake.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/vfs_fonts.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/buttons.html5.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/buttons.print.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/tables/datatable/dataTables.rowGroup.min.js",
      },
      {
        body: true,
        src: "/app-assets/vendors/js/pickers/flatpickr/flatpickr.min.js",
      },
      {
        body: true,
        src: "/app-assets/js/scripts/tables/table-datatables-basic.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "@/assets/assets/css/bootstrap.rtl.min.css",


    // BEGIN: Vendor CSS
    "@/assets/app-assets/vendors/css/vendors-rtl.min.css",
    "@/assets/app-assets/vendors/css/charts/apexcharts.css",
    "@/assets/app-assets/vendors/css/extensions/toastr.min.css",
    "@/assets/app-assets/vendors/css/tables/datatable/dataTables.bootstrap4.min.css",
    "@/assets/app-assets/vendors/css/tables/datatable/responsive.bootstrap4.min.css",
    "@/assets/app-assets/vendors/css/tables/datatable/buttons.bootstrap4.min.css",
    "@/assets/app-assets/vendors/css/tables/datatable/rowGroup.bootstrap4.min.css",
    "@/assets/app-assets/vendors/css/pickers/flatpickr/flatpickr.min.css",
    // END: Vendor CSS



    // BEGIN: Theme CSS
    "@/assets/app-assets/css-rtl/bootstrap.css",
    "@/assets/app-assets/css-rtl/bootstrap-extended.css",
    "@/assets/app-assets/css-rtl/colors.css",
    "@/assets/app-assets/css-rtl/components.css",
    "@/assets/app-assets/css-rtl/themes/dark-layout.css",
    "@/assets/app-assets/css-rtl/themes/bordered-layout.css",
    "@/assets/app-assets/css-rtl/themes/semi-dark-layout.css",
    // END: Theme CSS



    // BEGIN: Page CSS
    "@/assets/app-assets/css-rtl/core/menu/menu-types/vertical-menu.css",
    "@/assets/app-assets/css-rtl/pages/dashboard-ecommerce.css",
    "@/assets/app-assets/css-rtl/plugins/charts/chart-apex.css",
    "@/assets/app-assets/css-rtl/plugins/extensions/ext-component-toastr.css",
    "@/assets/app-assets/css-rtl/plugins/forms/form-validation.css",
    "@/assets/app-assets/css-rtl/pages/page-auth.css",
    "@/assets/app-assets/css-rtl/pages/ui-feather.css",
    // END: Page CSS //

    // BEGIN: Custom CSS
    "@/assets/app-assets/css-rtl/custom-rtl.css",
    "@/assets/assets/css/style-rtl.css",
    // END: Custom CSS
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~plugins/mixins/test.js",
    // { src: "~plugins/apexCharts.js", ssr: false },
    { src: "~plugins/js/feather.js", ssr: false },
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
    ["vue-toastification/nuxt", {
      timeout: 3000,
      draggable: false,
      position: "top-center",
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vue-apexchart'
    ]
  },
  env: {
    fbAPIKey: 'AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE'
  }

}
