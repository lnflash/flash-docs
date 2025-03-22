<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import DonateButton from '$lib/components/DonateButton.svelte';
    import NavLink from '$lib/components/NavLink.svelte';

    const navSections = [
        {
            title: 'nav.gettingStarted',
            links: [
                { href: '/get-started', localeString: 'nav.getStarted' },
                { href: '/what-is-flash', localeString: 'nav.whatIsFlash' },
                { href: '/why-flash', localeString: 'nav.whyFlash' }
            ]
        },
        {
            title: 'nav.userGuides',
            links: [
                { href: '/user-guides', localeString: 'nav.guides' },
                { href: '/guides/get-cash', localeString: 'nav.getCash' },
                { href: '/guides/cash-out', localeString: 'nav.cashOut' },
                { href: '/guides/earn', localeString: 'nav.earn' },
                { href: '/guides/chat', localeString: 'nav.chat' },
                { href: '/guides/contacts', localeString: 'nav.contacts' },
                { href: '/guides/map', localeString: 'nav.map' },
                { href: '/guides/dca', localeString: 'nav.dca' },
                { href: '/guides/non-custodial-wallets', localeString: 'nav.nonCustodialWallets' },
                { href: '/guides/sweep-to-cold-storage', localeString: 'nav.guideSweepSats' }
            ]
        },
        {
            title: 'nav.infrastructure',
            links: [
                { href: '/infrastructure', localeString: 'nav.infrastructure' },
                { href: '/flash-infrastructure', localeString: 'nav.openSource' },
                { href: '/bitcoin-protocol', localeString: 'nav.flashProtocol' },
                { href: '/lightning-network', localeString: 'nav.clients' },
                { href: '/ecash-on-bitcoin', localeString: 'nav.relays' },
                { href: '/nostr-protocol', localeString: 'nav.relayImplementations' }
            ]
        },
        {
            title: 'nav.vendors',
            links: [
                { href: '/third-party-vendors', localeString: 'nav.vendors' },
                { href: '/galoy-project', localeString: 'nav.whatIs' },
                { href: '/breez-sdk', localeString: 'nav.whyWeNeed' },
                { href: '/ibex-mercado', localeString: 'nav.whatZaps' }
            ]
        },
        {
            title: 'nav.businessDev',
            links: [
                { href: '/business', localeString: 'nav.business' },
                { href: '/development', localeString: 'nav.resources' },
                { href: '/contribute', localeString: 'nav.contribute' }
            ]
        }
    ];
</script>

{#if !$isLoading}
    <a href="/" class="hidden md:flex flex-row gap-2 items-end text-3xl no-underline mb-8">
        <img src="/images/flashich-150.webp" class="w-10 h-10" alt="flashich" />
        <span class="font-extrabold leading-tight">{$_('title')}</span>
    </a>

    <div class="space-y-6 mb-8">
        {#each navSections as section}
            <div class="navSection rtl:mr-2 ltr:ml-2">
                <h2 class="mb-3 font-semibold text-sm uppercase tracking-wide border-b border-zinc-200 dark:border-zinc-700 pb-2">
                    {$_(section.title)}
                </h2>
                <ul class="nav text-base space-y-2 pl-1">
                    {#each section.links as link}
                        <li>
                            <NavLink on:navLinkClicked href={link.href} localeString={link.localeString} />
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <div class="flex flex-col items-center mx-auto mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-700">
        <DonateButton variant="primary" classes="text-sm" />
        <div class="colophon text-zinc-500 dark:text-zinc-400 mt-4 text-sm">
            <span>{$_('colophon')} </span>
            <a
                href="https://getflash.io"
                target="_blank"
                class="underline hover:text-zinc-600 dark:hover:text-zinc-200"
            >
                Flash
            </a>
        </div>
        <div class="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
            FOSS Attribution: 
            <a
                href="https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc"
                target="_blank"
                class="underline hover:text-zinc-600 dark:hover:text-zinc-200"
            >
                JeffG
            </a>
        </div>
    </div>
{/if}
