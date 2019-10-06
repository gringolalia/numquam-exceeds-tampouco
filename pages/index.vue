<template lang="pug">
  section.container
    div
      logo
      h1.title Numquam Extra Espadas
        
      h2.subtitle SPA for Nuxt to Push to Heroku
        
      .links
        a.button--green(href='https://nuxtjs.org/' target='_blank') Docudramas
        a.button--grey(href='https://github.com/nuxt/nuxt.js' target='_blank') Gitfiddling
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'News Cycle', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #607d8b;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #607d8b;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
