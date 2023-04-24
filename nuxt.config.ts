export default defineNuxtConfig({
   css: ["@/styles/style.scss"],
   modules: ["nuxt-icon"],
   runtimeConfig: {
      public: {
         API_KEY: "e30de7f71b54f49a227ae87142d1e8a4",
      },
   },
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
      },
   },
});
