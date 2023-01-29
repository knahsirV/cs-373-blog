<script>
	let posts = [
		{
			title: 'Introduction and getting to know me',
			description: 'This is a quick intro to me and my background, including why I\'m doing this class and what I expect to get out of it.',
			slug: 'post-1',
			date: '01/14/2023',
			image: 'https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
		},
		{
			title: 'Reviewing my second week & getting into the groove of things',
			description: "Here's some of my thoughts about how my second week went, what I'm looking forward to in the future, and some of my favorite things from the week.",
			slug: 'post-2',
			date: '01/21/2023',
			image: 'https://images.unsplash.com/photo-1579562738344-5274ba7aee76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
		},
		{
			title: 'A retroperspective on my third week',
			description: "Here's some of my thoughts about how my third week went, what I'm looking forward to in the future, and some of my favorite things from the week.",
			slug: 'post-3',
			date: '01/29/2023',
			image: 'https://images.unsplash.com/photo-1579562738344-5274ba7aee76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
		},
	];
</script>


<div  class="py-12">
	<div class="xl:container m-auto px-6  md:px-12 xl:px-6 animate-fade-in-up">
	  <div class="mb-12 space-y-2 text-center">
		<h2 class="text-3xl font-bold  md:text-4xl ">CS 373 Spring 2023: Vrishank Viswanath</h2>
		<p class="lg:mx-auto lg:w-6/12  ">
		  Welcome! This is where I'll be posting my weekly blog posts for CS 373. The site is pretty barebones right now since we only had a couple days to submit our first blog post, but I'll be adding more complexity as the semester goes on.
		</p>
	  </div>
	  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto md:justify-content-center">
		{#each posts as post}
		<div class="group p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-800 bg-opacity-50 shadow-2xl hover:scale-105 transition-all">
		  <div class="relative overflow-hidden rounded-xl">
			<img src="{post.image}"
			alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105"/>
		  </div>
		  <div class="mt-6 relative">
			<h3 class="text-2xl font-semibold ">
			  {post.title}
			</h3>
			<p class="mt-3 mb-4  ">
				{post.date}
			  </p>
			<p class="mt-3 mb-8  ">
			  {post.description}
			</p>
			<a class="font-semibold text-[#01B1FC] flex items-center" href="/{post.slug}">
			  <span class=" hover:underline">Read more</span>
			  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
				<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
			  </svg>
			  
			</a>
		  </div>
		  
		  
		</div>
		{/each}
	  </div>
	</div>
  </div>
									  