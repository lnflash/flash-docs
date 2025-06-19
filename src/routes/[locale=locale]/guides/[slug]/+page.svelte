<script lang="ts">
    import { supportedLocales } from '$lib/config/l10n';
    import { locale } from 'svelte-i18n';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    export let data;

    const otherLocales: string[] = supportedLocales.filter((item) => {
        return item !== $locale;
    });

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    // Breadcrumb navigation
    $: breadcrumbs = [
        { label: 'Home', href: `/${$locale}` },
        { label: 'User Guides', href: `/${$locale}/user-guides` },
        { label: data.title, href: null }
    ];
</script>

<svelte:head>
    <title>{data.title} - Flash Documentation</title>
    <meta name="description" content={data.description} />
    {#each otherLocales as supportedLocale}
        <link
            rel="alternate"
            hreflang={supportedLocale}
            href="https://flash.how/{supportedLocale}/guides/{data.slug}"
        />
    {/each}
</svelte:head>

{#if mounted}
    <div class="content-container py-8 md:py-12" in:fade={{ duration: 300 }}>
        <!-- Breadcrumbs -->
        <nav class="mb-8" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-2 text-sm">
                {#each breadcrumbs as crumb, i}
                    <li class="flex items-center">
                        {#if crumb.href}
                            <a href={crumb.href} class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">
                                {crumb.label}
                            </a>
                        {:else}
                            <span class="text-flash-gray-700 dark:text-flash-gray-300 font-medium">
                                {crumb.label}
                            </span>
                        {/if}
                        {#if i < breadcrumbs.length - 1}
                            <svg class="w-4 h-4 mx-2 text-flash-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        {/if}
                    </li>
                {/each}
            </ol>
        </nav>

        <!-- Page Header -->
        <header class="page-header">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                {data.title}
            </h1>
            {#if data.description}
                <p class="text-xl text-flash-gray-600 dark:text-flash-gray-400 max-w-3xl">
                    {data.description}
                </p>
            {/if}
        </header>

        <!-- Main Content -->
        <article class="max-w-4xl">
            <div class="markdownContent prose prose-lg dark:prose-invert max-w-none">
                <svelte:component this={data.content} />
            </div>
        </article>

        <!-- Page Navigation -->
        <nav class="mt-12 pt-8 border-t border-flash-gray-200 dark:border-flash-gray-800">
            <div class="flex justify-between items-center">
                <a href={`/${$locale}/user-guides`} class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">
                    ← Back to all guides
                </a>
            </div>
        </nav>
    </div>
{/if}

<style>
    /* Additional styles for better readability */
    :global(.markdownContent) {
        @apply leading-relaxed;
    }
    
    :global(.markdownContent h2) {
        @apply mt-12 mb-6 text-3xl;
    }
    
    :global(.markdownContent h3) {
        @apply mt-8 mb-4 text-2xl;
    }
    
    :global(.markdownContent h4) {
        @apply mt-6 mb-3 text-xl;
    }
    
    :global(.markdownContent p) {
        @apply mb-6;
    }
    
    :global(.markdownContent ul, .markdownContent ol) {
        @apply mb-6 ml-6;
    }
    
    :global(.markdownContent li) {
        @apply mb-2;
    }
    
    :global(.markdownContent blockquote) {
        @apply border-l-4 border-flash-accent pl-4 italic my-6;
    }
</style>