<script>
    import { page } from '$app/stores';
    import { _ } from 'svelte-i18n';
    export let error;
</script>

<div class="min-h-[50vh] flex items-center justify-center">
    <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">{error.title || $_('errors.noTranslationTitle')}</h1>
        <p class="text-lg text-flash-gray-600 dark:text-flash-gray-400 mb-8">
            {error.message || $_('errors.noTranslationMessage')}
        </p>
        <a href="/{$page.params.locale}/docs-home" class="btn btn-primary">
            {$_('nav.docsHome')}
        </a>
    </div>
</div>