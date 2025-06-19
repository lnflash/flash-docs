<script>
    import { page } from '$app/stores';
    import { _, isLoading } from 'svelte-i18n';
</script>

{#if $page.error && !$isLoading}
    <div class="content-container py-8 md:py-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {$page.error.title}
        </h1>
        <p class="text-xl text-flash-gray-600 dark:text-flash-gray-400 mb-8">
            {$page.error.message}
        </p>
        <p>
            <a
                href="https://github.com/lnflash/flash-how/issues"
                class="text-flash-accent hover:text-flash-accent/80 transition-colors"
            >
                {$_('contactMe')}
            </a>
        </p>
    </div>
{/if}
