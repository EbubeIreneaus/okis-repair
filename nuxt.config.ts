// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app:{
    head:{
      title:"Oki's Repair",
      script:[
      {
        src:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
      }
      ]
    
    }
  },
  css:[
    "bootstrap/dist/css/bootstrap.min.css",
    '@fortawesome/fontawesome-free/css/all.css',
    "animate.css/animate.min.css"
  ],


})
