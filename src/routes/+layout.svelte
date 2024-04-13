<script lang="ts">
	import svelteLogo from '$lib/assets/images/svelte-logo.svg';
	import './styles.css';
</script>

<div id="app" class="app">
	<main class="app-main">
		<div class="container">
			<slot />
		</div>
	</main>
	<footer class="app-footer">
		<div class="container">
			<a
				href="https://github.com/rodrigodagostino/vite-svelte-ts-template"
				target="_blank"
				rel="noreferrer"
			>
				Made with <img src={svelteLogo} alt="SvelteKit" /> by Rodrigo D’Agostino
			</a>
		</div>
	</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.app-main {
		margin-top: 24vh;
	}

	.app-footer {
		font-size: 0.875rem;
		text-align: center;
		margin-top: auto;

		.container {
			display: flex;
			justify-content: center;
			padding: 1rem 0;
		}

		a {
			display: flex;
			color: var(--gray-500);
		}

		img {
			height: 1.25rem;
			width: auto;
			vertical-align: middle;
			margin: 0 0.25rem;
			display: inline-block;
		}
	}

	.container {
		max-width: 54rem;
		margin: 0 auto;
		padding: 1rem;
		position: relative;
	}
</style>
