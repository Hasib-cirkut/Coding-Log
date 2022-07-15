export default {
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
    "@nuxtjs/feed",
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

  feed() {
    const baseUrlArticles = "http://localhost:3000/blog";
    const baseLinkFeedArticles = "/feed/";
    const feedFormats = {
      rss: { type: "rss2", file: "rss.xml" },
      json: { type: "json1", file: "feed.json" },
    };
    const { $content } = require("@nuxt/content");

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: "Conding Log",
        description: "I write about JavaScript and Frontend.",
        link: baseUrlArticles,
      };
      const articles = await $content("articles").fetch();

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;

        const createdDate = new Date(article.createdAt);

        feed.addItem({
          title: article.Title,
          id: url,
          link: url,
          date: createdDate,
          description: article.Description,
          content: article.summary,
          author: article.Author,
        });
      });
    };

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }));
  },

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
