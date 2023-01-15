import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
		  }),
		  vitePreprocess()
	]
};

export default config;
