export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "coding-log",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-coldark-dark.css",
      },
    },
    liveEdit: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/content",
    "@nuxtjs/date-fns",
    [
      "nuxt-supabase",
      {
        supabaseUrl: "https://xunvhurwmsxwmslxpetf.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1bnZodXJ3bXN4d21zbHhwZXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4NzM2NTQsImV4cCI6MTk3MzQ0OTY1NH0.h2iuzXU_UZNtz8Vbgo_pSEcprysrtDkwgH01UWwhqNs",
      },
    ],
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
