<template lang="pug">
	.ui.huge.fixed.borderless.primary.inverted.menu
		a.item(style="font-size: 24px;" href="/")
			i.material-icons.md-48 autorenew
			| &nbsp; &nbsp;Engenho Novo LLC
		a.item.computer.only
			| In Principio

		a.item.computer.only
			| In Media Res

		.right.menu

			a.item
				.ui.compact.primary.inverted.menu
					.ui.simple.dropdown.item
						i.material-icons.md-36 rowing
						| &nbsp;&nbsp;Eminent Babylonians
						i.dropdown.icon
						.menu
							a.item(href="/Gilgamesh")
								i.material-icons.md-24.mr1 rowing
								| Gilgamesh

							a.item(href="/Inanna")
								i.material-icons.md-24.mr1 track_changes
								| Inanna
							a.item(href="/Atrahasis")
								i.material-icons.md-24.mr1 call
								| Atrahasis
							a.item(href="/Enmerker")
								i.material-icons.md-24.mr1 autorenew
								| Enmerkar
							a.item(href="/EnumaElish")
								i.material-icons.md-24.mr1 account_balance
								| Enuma Elish
							a.item(href="/Karet")
								i.material-icons.md-24.mr1 pool
								| Karet
							a.item(href="/Kumarbi")
								i.material-icons.md-24.mr1 directions_run
								| Kumarbi
							a.item(href="/Lugalbanda")
								i.material-icons.md-24.mr1 beach_access
								| Lugalbanda
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

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
