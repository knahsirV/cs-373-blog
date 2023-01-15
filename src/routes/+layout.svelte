<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;
</script>

<!-- <div class="box-border p-8 h-screen w-screen bg-slate-10">
	<Header />

	{#key data.currentRoute}
		<main class="" >
			<slot />
		</main>
	{/key}
</div> -->
<main class="p-8" >
	<slot />
</main>
