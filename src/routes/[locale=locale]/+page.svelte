<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    const quickLinks = [
        { href: 'get-started', label: 'Get Started', icon: '🚀' },
        { href: 'user-guides', label: 'User Guides', icon: '📚' },
        { href: 'guides/cash-wallet', label: 'Cash Wallet', icon: '💵' },
        { href: 'guides/bitcoin-wallet', label: 'Bitcoin Wallet', icon: '₿' }
    ];

    const features = [
        {
            icon: '💵',
            title: 'Cash Wallet',
            description: 'Hold USD, show it in your local currency, and move money with bank transfers or Flashpoints.'
        },
        {
            icon: '₿',
            title: 'Bitcoin Wallet',
            description: 'Send and receive Bitcoin instantly with Lightning or on-chain.'
        },
        {
            icon: '🔁',
            title: 'Swap',
            description: 'Move value between your Cash Wallet and Bitcoin Wallet in a few taps.'
        },
        {
            icon: '🏪',
            title: 'Merchant Tools',
            description: 'Accept payments, top up, cash out, and run Flash POS at your business.'
        },
        {
            icon: '💬',
            title: 'Secure Chat',
            description: 'Message other Flash users and get help from support in the app.'
        },
        {
            icon: '🎁',
            title: 'Flashcard',
            description: 'Use your Flashcard at supported merchants and tie it to your account.'
        }
    ];
</script>

<svelte:head>
    <title>Flash Docs</title>
    <meta name="description" content="Flash Docs helps Caribbean users get started with Cash Wallet, Bitcoin Wallet, Swap, top ups, cash outs, and merchant tools." />
    <link rel="canonical" href="https://documentation.getflash.io/" />

    <!-- Open Graph -->
    <meta property="og:title" content="Flash Documentation" />
    <meta property="og:description" content="Flash Docs helps Caribbean users get started with Cash Wallet, Bitcoin Wallet, Swap, top ups, cash outs, and merchant tools." />
    <meta property="og:url" content="https://documentation.getflash.io/" />

    <!-- Twitter Card -->
    <meta name="twitter:title" content="Flash Documentation" />
    <meta name="twitter:description" content="Flash Docs helps Caribbean users get started with Cash Wallet, Bitcoin Wallet, Swap, top ups, cash outs, and merchant tools." />
</svelte:head>

{#if mounted}
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-flash-gray-50 to-flash-gray-100 dark:from-flash-gray-950 dark:to-flash-black -z-10"></div>

        <div class="content-container py-20 md:py-32">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-7xl font-bold mb-6" in:fade={{ duration: 500 }}>
                    <span class="text-gradient">Flash Docs</span>
                </h1>

                <p class="text-xl md:text-2xl text-flash-gray-600 dark:text-flash-gray-400 mb-10 max-w-3xl mx-auto" in:fade={{ duration: 500, delay: 100 }}>
                    Everything a Flash user needs to get started, use their wallets, swap between them, and move money in and out.
                </p>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" in:fly={{ y: 20, duration: 500, delay: 150 }}>
                    {#each quickLinks as link}
                        <a href={link.href} class="card p-6 text-center hover-lift group">
                            <span class="text-3xl mb-2 block group-hover:scale-110 transition-transform">{link.icon}</span>
                            <span class="text-sm font-medium text-flash-gray-700 dark:text-flash-gray-300">{link.label}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-flash-white dark:bg-flash-black">
        <div class="content-container">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">What you can do in Flash</h2>
            <p class="text-center text-flash-gray-600 dark:text-flash-gray-400 mb-12 max-w-2xl mx-auto">
                A simple overview of the main things users do in the app every day.
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each features as feature, i}
                    <div class="card p-8 hover-lift" in:fly={{ y: 30, duration: 400, delay: 200 + (i * 60) }}>
                        <div class="text-4xl mb-4">{feature.icon}</div>
                        <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p class="text-flash-gray-600 dark:text-flash-gray-400">{feature.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <section class="py-20 bg-flash-gray-50 dark:bg-flash-gray-950">
        <div class="content-container text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Need a place to start?</h2>
            <p class="text-flash-gray-600 dark:text-flash-gray-400 mb-8 max-w-xl mx-auto">
                Start with the account guide, then learn your wallets, then use swap, top up, and cash out.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="get-started" class="btn-primary">Get Started</a>
                <a href="user-guides" class="btn-secondary">Browse Guides</a>
            </div>
        </div>
    </section>
{/if}
