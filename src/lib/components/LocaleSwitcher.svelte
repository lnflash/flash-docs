<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { locales } from '$lib/config/l10n';
    import Language from '$lib/elements/icons/Language.svelte';
    import { Menu, MenuButton, MenuItems, MenuItem } from '@rgossiaux/svelte-headlessui';

    const dispatch = createEventDispatcher();

    function changeLocale(event: Event) {
        event.preventDefault();
        // @ts-ignore
        dispatch('locale-changed', event?.target?.dataset.localecode);
    }
</script>

<Menu class="relative">
    <MenuButton 
        class="p-2 rounded-flash text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900 transition-colors"
        aria-label="Change language"
    >
        <Language />
    </MenuButton>
    <MenuItems
        class="absolute top-full mt-2 rtl:left-0 ltr:right-0 w-48 rounded-flash shadow-flash-lg
        bg-flash-white dark:bg-flash-gray-950 border border-flash-gray-200 dark:border-flash-gray-800
        py-2 animate-fade-in-down"
    >
        {#each locales as localeItem}
            <MenuItem>
                <a
                    dir={localeItem.alpha2Code === 'fa' ? 'rtl' : 'ltr'}
                    href="/"
                    data-localecode={localeItem.alpha2Code}
                    on:click={changeLocale}
                    class="block px-4 py-2 text-sm text-flash-gray-700 dark:text-flash-gray-300 
                    hover:text-flash-black dark:hover:text-flash-white 
                    hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900 
                    transition-colors no-underline"
                >
                    {localeItem.name}
                </a>
            </MenuItem>
        {/each}
    </MenuItems>
</Menu>
