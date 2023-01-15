<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<main class="p-8" >
	<slot />
</main>
