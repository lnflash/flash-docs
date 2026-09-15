// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://userdocs.flashapp.me',
	integrations: [
		starlight({
			title: 'Flash Docs',
			description:
				'Everything you need to know about using Flash — Bitcoin payments, rewards, and merchant tools for the Caribbean.',
			favicon: '/favicon.ico',
			customCss: ['./src/styles/flash.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/lnflash' },
			],
			lastUpdated: true,
			// English lives at the site root now (old URLs were /en/… — a _redirects
			// rule at the Pages layer maps them here). Adding a locale later is just
			// dropping translated files into src/content/docs/<lang>/ — untranslated
			// pages auto-fall-back to English instead of 404ing.
			locales: {
				root: { label: 'English', lang: 'en' },
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: ['what-is-flash', 'why-flash', 'get-started', 'faq'],
				},
				{
					label: 'Using Flash',
					items: [
						'guides/cash-wallet',
						'guides/bitcoin-wallet',
						'send-bitcoin',
						'guides/get-cash',
						'guides/cash-out',
						'guides/swap',
						'guides/top-up',
						'guides/dca',
						'guides/earn',
						'guides/contacts',
						'guides/chat',
						'guides/map',
						'manage-your-sats',
						'guides/upgrade-account',
					],
				},
				{
					label: 'Merchants & Flashcard',
					items: [
						'training/flash-pos',
						'guides/flashcard',
						'training/flashcard',
						'training/mobile-app',
					],
				},
				{
					label: 'Self-Custody',
					items: [
						'guides/non-custodial-wallets',
						'guides/sweep-to-self-custody',
						'guides/sweep-to-cold-storage',
					],
				},
				{
					label: 'How Flash Works',
					items: [
						'lightning-network',
						'bitcoin-protocol',
						'ecash-on-bitcoin',
						'cashu-progress',
						'galoy-project',
						'ibex-mercado',
						'flash-infrastructure',
						'nerd-stats',
						'breez-sdk',
						'third-party-vendors',
						'btcpay-server',
					],
				},
				{
					label: 'Contribute',
					items: ['contribute', 'development', 'open-source', 'business'],
				},
			],
		}),
	],
});
