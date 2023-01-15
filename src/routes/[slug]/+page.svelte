<script>
	import Header from '$lib/components/Header.svelte';
	import profile from '$lib/assets/profile.png';

	export let data;
</script>

<Header />
<article class="md:w-3/4 md:mx-auto text-center space-y-8 animate-fade-in-up">
	<h1 class="text-4xl font-semibold ">{data.title}</h1>
	<p>{data.description}</p>

	<div class="flex justify-center mt-3 space-x-3 text-gray-400 font-semibold">
		<div class="flex items-center gap-3">
			<div class="relative flex-shrink-0 w-10 h-10" />
			<img
				class="aspect-square w-24 rounded-full object-cover object-center border border-gray-400 bg-slate-200/20"
				src={profile}
				alt="profile"
				loading="lazy"
			/>
			<div>
				<p class="">Vrishank Viswanath</p>
				<div class="flex items-center space-x-2 text-sm">
					<time class="">
						{data.date}
					</time>
				</div>
			</div>
		</div>
	</div>

	<div class="relative overflow-hidden rounded-xl">
		<img
			src={data.image}
			alt="art cover"
			loading="lazy"
			class="w-full aspect-video object-cover object-center"
		/>
	</div>
	<div class=" space-y-4 text-justify leading-10 md:w-3/4 md:mx-auto post-content">
		<svelte:component this={data.content} />
	</div>
	<a
		href="/"
		class="text-left w-3/4 mx-auto text-[#01B1FC] flex items-center font-bold hover:underline justify-center"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			class="w-5 h-5"
		>
			<path
				fill-rule="evenodd"
				d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
				clip-rule="evenodd"
			/>
		</svg>
		<span>View all posts</span></a
	>
	<hr class=" border-t-2 border-gray-200/10" />
</article>
