<template lang="pug">
div
	.ui.container
		div(style="margin-top: 25vh; height: 75vh")
			h1
				i.fas.fa-cogs.fa-5x.mt-12
			h1.ui.enormous.header New Efficient Extra
				
			h2.ui.huge.header Semantic SPA for New Extremes 
			
			h3.ui.big.header  Push Me to Heroku Yoko
				
			.links
				.ui.large.primary.button.mr-8(href='https://nuxtjs.org/' target='_blank') Docudramas
				.ui.large.secondary.button(href='https://github.com/nuxt/nuxt.js' target='_blank') Gitfiddling
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
