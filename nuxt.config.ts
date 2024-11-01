// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Global page headers
  head: {
    title: "Rivertown Coffee Co. | Florence, AL's Quirky Café Since 2004",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Discover Rivertown Coffee Co. in Florence, AL—a welcoming café serving delicious coffee, breakfast, lunch, and dinner since 2004. Join us for a unique experience where everyone feels at home.",
      },
    ],
    link: [
      // Google Fonts
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap",
      },
    ],
  },

  // Modules
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", '@nuxtjs/google-fonts', "@nuxt/icon"],

  // Build Configuration
  build: {},

  // Target: Static
  target: "static",
  devtools: { enabled: false },
  compatibilityDate: "2024-10-31",
};