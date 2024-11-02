// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts'],

  css: [
    '@/assets/main.scss',
    '@/assets/_variables.scss',
  ],

  googleFonts: {
    families: {
      'Noto Sans': true
    }
  },
})