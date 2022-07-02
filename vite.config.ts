import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import laravel from 'vite-plugin-laravel'

export default defineConfig({
	plugins: [
		laravel({
			postcss: [
				autoprefixer(),
			],
		}),
	]
})
