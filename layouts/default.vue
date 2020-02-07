<template lang="pug">
div#app
	.ui.huge.fixed.borderless.inverted.menu
		a.item(style="font-size: 24px; color: #ffffff;" href="/")
			i.material-icons.md-72.mr-4 my_location
			| Engenho Novo LLC
		a.item.computer.only
			| In Principio

		a.item.computer.only
			| In Media Res

		.right.menu

			a.item
				.ui.compact.primary.inverted.menu
					.ui.simple.dropdown.item
						i.material-icons.md-36.mr-4 rowing
						| Notorious Brazilians
						i.dropdown.icon
						.menu
							a.item(href="/bolsonaro")
								i.material-icons.md-24.mr-5 rowing
								| Jair Bolsonaro

							a.item(href="/maluf")
								i.material-icons.md-24.mr-5 track_changes
								| Paulo Maluf
							a.item(href="/acm")
								i.material-icons.md-24.mr-5 call
								| Antônio Carlos Magalhães
							a.item(href="/")
								i.material-icons.md-24.mr-5 autorenew
								| Carlos Lacerda
							a.item(href="/olavo")
								i.material-icons.md-24.mr-5 account_balance
								| Olavo de Carvalho
							a.item(href="/fleury")
								i.material-icons.md-24.mr-5 pool
								| Sérgio Fleury
							a.item(href="/getulio")
								i.material-icons.md-24.mr-5 my_location
								| Getúlio Vargas
							a.item(href="/janaina")
								i.material-icons.md-24.mr-5 directions_run
								| Janaina Paschoal
							a.item(href="/marinho")
								i.material-icons.md-24.mr-5 tv
								| Clan Marinho
							a.item(href="/civita")
								i.material-icons.md-24.mr-5 local_library
								| The Civita Dynasty
						script.
							$(document).ready(function(){
									$('.ui.dropdown').dropdown();
								});

						script.
							$('.activating.element')
							.popup()
							;
	nuxt
</template>

<style>

@import 'semantic/dist/semantic.css';
@import '../node_modules/raisincss/raisin.css';

html {
	font-family: 'News Cycle', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
      html, body, .header, .button, .ui {
        font-family: "News Cycle", sans-serif !important;
        font-weight: 300 !important;
        font-style: normal !important;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: "News Cycle", sans-serif !important;
        font-weight: 300 !important;
        font-style:normal !important;
      }

      .dignity {
        font-family: "News Cycle", sans-serif !important;
        font-weight: 300 !important;
        font-style:normal !important;
      }
      i, .material-icons {
        vertical-align: middle;
      }

		.material-icons.md-18 { font-size: 18px; }
		.material-icons.md-24 { font-size: 24px; }
		.material-icons.md-36 { font-size: 36px; }
		.material-icons.md-48 { font-size: 48px; }
		.material-icons.md-56 { font-size: 56px; }
		.material-icons.md-64 { font-size: 64px; }
		.material-icons.md-72 { font-size: 72px; }
		.material-icons.md-80 { font-size: 80px; }
		.material-icons.md-96 { font-size: 96px; }
      /* Rules for using icons as black on a light background. */
      .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
      .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

      /* Rules for using icons as white on a dark background. */
      .material-icons.md-light { color: rgba(255, 255, 255, 1); }
      .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

    </style>

</style>
