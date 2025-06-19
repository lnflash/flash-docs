<script lang="ts">
    import '../app.css';
    import { waitLocale, locale } from 'svelte-i18n';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import { sidebarVisible } from '$lib/store';
    import CloseIcon from '$lib/elements/icons/Close.svelte';
    import { slide, fade } from 'svelte/transition';
    import { dev } from '$app/environment';

    export async function preload() {
        return waitLocale($locale as string);
    }
</script>

<div class="min-h-screen flex flex-col bg-flash-white dark:bg-flash-black" dir={$locale === 'fa' ? 'rtl' : 'ltr'}>
    <Header />
    
    <div class="flex flex-1 relative">

        <!-- Desktop Sidebar -->
        <aside
            class="hidden md:block w-80 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto
            bg-flash-gray-50 dark:bg-flash-gray-950 border-r border-flash-gray-200 dark:border-flash-gray-800"
        >
            <div class="p-6">
                <Sidebar />
            </div>
        </aside>
        <!-- Mobile Sidebar Overlay -->
        {#if $sidebarVisible}
            <button
                class="fixed inset-0 z-40 md:hidden bg-transparent border-0 p-0"
                on:click={() => sidebarVisible.set(false)}
                aria-label="Close menu"
                transition:fade={{ duration: 200 }}
            >
                <div class="absolute inset-0 bg-flash-black/50" />
            </button>
            
            <aside
                transition:slide={{ axis: 'x', duration: 300 }}
                class="fixed left-0 top-0 bottom-0 w-80 z-50 md:hidden
                bg-flash-white dark:bg-flash-gray-950 shadow-flash-xl"
            >
                <div class="flex items-center justify-between p-4 border-b border-flash-gray-200 dark:border-flash-gray-800">
                    <span class="text-lg font-semibold">Menu</span>
                    <button
                        class="p-2 rounded-flash hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900 transition-colors"
                        on:click={() => sidebarVisible.set(false)}
                    >
                        <CloseIcon />
                    </button>
                </div>
                <div class="p-6 overflow-y-auto h-[calc(100%-4rem)]">
                    <Sidebar on:navLinkClicked={() => sidebarVisible.set(false)} />
                </div>
            </aside>
        {/if}

        <!-- Main Content -->
        <main class="flex-1 overflow-x-hidden">
            <div class="min-h-[calc(100vh-4rem)]">
                <slot />
            </div>
            <Footer />
        </main>
    </div>
</div>
