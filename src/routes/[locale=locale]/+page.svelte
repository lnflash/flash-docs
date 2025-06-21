<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import { locale } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let content: any;
    let title: string = '';
    let description: string = '';
    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    async function loadMarkdown() {
        try {
            const homepage = await import(`../pages/${$locale}/index.md`);
            title = homepage.metadata.title;
            description = homepage.metadata.description;
            content = homepage.default;
        } catch (error) {
            // Fallback to English if locale not found
            const homepage = await import(`../pages/en/index.md`);
            title = homepage.metadata.title;
            description = homepage.metadata.description;
            content = homepage.default;
        }
    }

    $: {
        if (!$isLoading && $locale) {
            loadMarkdown();
        }
    }

    // Feature cards data
    $: features = [
        {
            icon: '💰',
            title: $_('home.features.multiCurrency.title'),
            description: $_('home.features.multiCurrency.description')
        },
        {
            icon: '⚡',
            title: $_('home.features.lightning.title'),
            description: $_('home.features.lightning.description')
        },
        {
            icon: '🏪',
            title: $_('home.features.business.title'),
            description: $_('home.features.business.description')
        },
        {
            icon: '💬',
            title: $_('home.features.chat.title'),
            description: $_('home.features.chat.description')
        },
        {
            icon: '🎁',
            title: $_('home.features.rewards.title'),
            description: $_('home.features.rewards.description')
        },
        {
            icon: '🔒',
            title: $_('home.features.selfCustody.title'),
            description: $_('home.features.selfCustody.description')
        }
    ];

    $: quickLinks = [
        { href: 'get-started', label: $_('home.quickLinks.getStarted'), icon: '🚀' },
        { href: 'user-guides', label: $_('home.quickLinks.userGuides'), icon: '📚' },
        { href: 'business', label: $_('home.quickLinks.forBusiness'), icon: '🏢' },
        { href: 'development', label: $_('home.quickLinks.developers'), icon: '👩‍💻' }
    ];
</script>

<svelte:head>
    <title>{title || $_('home.hero.title')}</title>
    <meta name="description" content={description || $_('home.hero.description')} />
</svelte:head>

{#if !$isLoading && mounted}
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-flash-gray-50 to-flash-gray-100 dark:from-flash-gray-950 dark:to-flash-black -z-10"></div>
        
        <div class="content-container py-20 md:py-32">
            <div class="max-w-4xl mx-auto text-center">
                <h1 
                    class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
                    in:fade={{ duration: 600, delay: 100 }}
                >
                    <span class="text-gradient">{$_('home.hero.title')}</span>
                </h1>
                
                <p 
                    class="text-xl md:text-2xl text-flash-gray-600 dark:text-flash-gray-400 mb-12 max-w-2xl mx-auto"
                    in:fade={{ duration: 600, delay: 200 }}
                >
                    {description || $_('home.hero.description')}
                </p>

                <!-- Quick Links -->
                <div 
                    class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                    in:fly={{ y: 20, duration: 600, delay: 300 }}
                >
                    {#each quickLinks as link}
                        <a 
                            href="/{$locale}/{link.href}" 
                            class="card p-6 text-center hover-lift group"
                        >
                            <span class="text-3xl mb-2 block group-hover:scale-110 transition-transform">{link.icon}</span>
                            <span class="text-sm font-medium text-flash-gray-700 dark:text-flash-gray-300">{link.label}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 bg-flash-white dark:bg-flash-black">
        <div class="content-container">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
                {$_('home.features.sectionTitle')}
            </h2>
            <p class="text-center text-flash-gray-600 dark:text-flash-gray-400 mb-12 max-w-2xl mx-auto">
                {$_('home.features.sectionDescription')}
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each features as feature, i}
                    <div 
                        class="card p-8 hover-lift"
                        in:fly={{ y: 30, duration: 500, delay: 400 + (i * 100) }}
                    >
                        <div class="text-4xl mb-4">{feature.icon}</div>
                        <h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p class="text-flash-gray-600 dark:text-flash-gray-400">
                            {feature.description}
                        </p>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Getting Started CTA -->
    <section class="py-20 bg-flash-gray-50 dark:bg-flash-gray-950">
        <div class="content-container text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                {$_('home.cta.title')}
            </h2>
            <p class="text-flash-gray-600 dark:text-flash-gray-400 mb-8 max-w-xl mx-auto">
                {$_('home.cta.description')}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/{$locale}/get-started" class="btn-primary">
                    {$_('home.cta.getStartedButton')}
                </a>
                <a href="/{$locale}/user-guides" class="btn-secondary">
                    {$_('home.cta.browseGuidesButton')}
                </a>
            </div>
        </div>
    </section>

    <!-- Content from Markdown (if any additional content exists) -->
    {#if content}
        <section class="py-12">
            <div class="content-container">
                <div class="markdownContent prose-lg dark:prose-invert max-w-none">
                    <svelte:component this={content} on:locale-changed={loadMarkdown()} />
                </div>
            </div>
        </section>
    {/if}
{/if}

<style>
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>