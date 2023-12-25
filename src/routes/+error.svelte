<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<div class="error">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
