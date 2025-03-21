<script lang="ts">
    import { _, isLoading, locale } from 'svelte-i18n';
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let href: string;
    export let localeString: string;

    function navLinkClick() {
        dispatch('navLinkClicked');
    }
</script>

{#if !$isLoading}
    <a
        href={`/${$locale}${href}`}
        data-sveltekit-preload-data="tap"
        class="block py-1.5 px-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
        class:active={$page.url.pathname.includes(href)}
        class:activeLink={$page.url.pathname.includes(href)}
        on:click={navLinkClick}
    >
        {$_(localeString)}
    </a>
{/if}

<style lang="postcss">
    .activeLink {
        @apply font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border-l-2 border-purple-500;
    }
</style>
