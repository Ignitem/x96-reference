import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
	lang: 'en-US',
	base: '/x96-reference/',

	title: 'x96 Reference',
	description: 'Reference of all x96 Assembly instructions and opcodes',

	theme: defaultTheme({
		logo: 'https://avatars.githubusercontent.com/u/183313352',
		docsRepo: 'https://github.com/Ignitem/x96-reference',
		repo: 'https://github.com/Ignitem/x96-reference',
		navbar: ['/', '/get-started'],
	}),

	head: [
		['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/183313352' }],
	],

	plugins: [
		searchPlugin({
			maxSuggestions: 10,
		}),
	],

	bundler: viteBundler(),
})
