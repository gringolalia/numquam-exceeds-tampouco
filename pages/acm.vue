<template lang="pug">
  section.container
    div(style="margin-top: 18vh;")
      h1
        i.material-icons.md-64.mt-8 mic
      h1.ui.giganti.header Antônio Carlos Magalhães
        
      h2.ui.large.header Rei da Cocada Branca
      
      h3.ui.big.header  Evil Genius of the PFL
        
      .links
        .ui.large.primary.button.mr-8(href='/' target='_blank') Corrupção
        .ui.large.secondary.button(href='https://github.com/nuxt/nuxt.js' target='_blank') Grande Ladrão
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
