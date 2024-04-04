<script lang="ts">
	import svelteLogo from '$lib/assets/images/svelte-logo.svg';
</script>

<svelte:head>
	<title>Welcome to SvelteKit</title>
</svelte:head>

<div class="page">
	<a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
		<img src={svelteLogo} alt="SvelteKit" />
	</a>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation.</p>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;

		img {
			width: 6rem;
			height: auto;
			margin: 0 auto;
		}

		h1 {
			margin: 2rem 0 1rem;
		}
	}
</style>
