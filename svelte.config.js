
/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			lib: "src/lib",
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		ssr: false,
	}
};

export default config;
