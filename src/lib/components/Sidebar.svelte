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
                { href: '/user-guides', localeString: 'nav.guidesOverview' },
                { href: '/guides/get-cash', localeString: 'nav.getCash' },
                { href: '/guides/cash-out', localeString: 'nav.cashOut' },
                { href: '/guides/earn', localeString: 'nav.earn' },
                { href: '/guides/chat', localeString: 'nav.chat' },
                { href: '/guides/contacts', localeString: 'nav.contacts' },
                { href: '/guides/map', localeString: 'nav.map' },
                { href: '/guides/flashcard', localeString: 'nav.flashcard' },
                { href: '/guides/dca', localeString: 'nav.dca' },
                { href: '/guides/non-custodial-wallets', localeString: 'nav.nonCustodialWallets' },
                { href: '/guides/sweep-to-cold-storage', localeString: 'nav.sweepToColdStorage' }
            ]
        },
        {
            title: 'nav.howFlashWorks',
            links: [
                { href: '/flash-infrastructure', localeString: 'nav.technicalArchitecture' },
                { href: '/third-party-vendors', localeString: 'nav.integrationPartners' }
            ]
        },
        {
            title: 'nav.learnBitcoin',
            links: [
                { href: '/bitcoin-protocol', localeString: 'nav.bitcoinBasics' },
                { href: '/lightning-network', localeString: 'nav.lightningNetwork' },
                { href: '/ecash-on-bitcoin', localeString: 'nav.ecashExplained' },
                { href: '/nostr-protocol', localeString: 'nav.nostrMessaging' }
            ]
        },
        {
            title: 'nav.integrations',
            links: [
                { href: '/galoy-project', localeString: 'nav.galoyProject' },
                { href: '/breez-sdk', localeString: 'nav.breezSDK' },
                { href: '/ibex-mercado', localeString: 'nav.ibexMercado' },
                { href: '/btcpay-server', localeString: 'nav.btcpayServer' }
            ]
        },
        {
            title: 'nav.businessDev',
            links: [
                { href: '/business', localeString: 'nav.forBusiness' },
                { href: '/development', localeString: 'nav.forDevelopers' },
                { href: '/contribute', localeString: 'nav.contribute' }
            ]
        }
    ];
</script>

{#if !$isLoading}
    <a href="/" class="flex items-center gap-3 mb-8 group">
        <img src="/images/flashich-150.webp" class="w-10 h-10 group-hover:scale-110 transition-transform" alt="Flash Logo" />
        <span class="text-xl font-bold text-flash-black dark:text-flash-white">{$_('title')}</span>
    </a>

    <nav class="space-y-8 mb-8">
        {#each navSections as section}
            <div class="sidebar-section">
                <h2 class="sidebar-section-title">
                    {$_(section.title)}
                </h2>
                <ul class="nav space-y-1">
                    {#each section.links as link}
                        <li>
                            <NavLink on:navLinkClicked href={link.href} localeString={link.localeString} />
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </nav>

    <div class="mt-auto pt-6 border-t border-flash-gray-200 dark:border-flash-gray-800">
        <div class="mb-4">
            <DonateButton variant="primary" classes="w-full btn-accent" />
        </div>
        <div class="text-center text-sm text-flash-gray-500 dark:text-flash-gray-400">
            <p class="mb-1">
                {$_('colophon')}
                <a
                    href="https://getflash.io"
                    target="_blank"
                    class="font-medium hover:text-flash-accent transition-colors"
                >
                    Flash
                </a>
            </p>
            <p class="text-xs">
                FOSS Attribution:
                <a
                    href="https://snort.social/p/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc"
                    target="_blank"
                    class="hover:text-flash-accent transition-colors"
                >
                    JeffG
                </a>
            </p>
        </div>
    </div>
{/if}
