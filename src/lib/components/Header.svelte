<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
    import SearchResults from '$lib/components/SearchResults.svelte';
    import { _, isLoading } from 'svelte-i18n';
    import { setupI18n } from '$lib/i18n';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import MenuIcon from '$lib/elements/icons/Menu.svelte';
    import { sidebarVisible } from '$lib/store';
    import { onMount } from 'svelte';
    import { searchQuery, buildSearchIndex } from '$lib/search/searchIndex';

    let scrolled = false;
    let theme = 'light';
    let searchInput: HTMLInputElement;
    let readingProgress = 0;
    let searchOpen = false;

    // Build search index when locale changes
    $: if ($page.params.locale) {
        buildSearchIndex($page.params.locale || 'en');
    }

    // Open search when query changes
    $: if ($searchQuery) {
        searchOpen = true;
    }

    onMount(() => {
        // Check for saved theme preference or default to light
        theme = localStorage.getItem('theme') || 'light';
        updateTheme();

        // Initial search index build
        buildSearchIndex($page.params.locale || 'en');

        // Handle scroll effect and reading progress
        const handleScroll = () => {
            scrolled = window.scrollY > 10;
            
            // Calculate reading progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            readingProgress = height > 0 ? (winScroll / height) * 100 : 0;
        };
        window.addEventListener('scroll', handleScroll);

        // Handle CMD+K or CTRL+K for search
        const handleKeydown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchInput?.focus();
            }
        };
        window.addEventListener('keydown', handleKeydown);

        // Close search on click outside
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.search-container')) {
                searchOpen = false;
            }
        };
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('click', handleClickOutside);
        };
    });

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        updateTheme();
    }

    function updateTheme() {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    function updateLocale(newLocale: string) {
        setupI18n({ locale: newLocale });
        if (!$page.url.pathname.startsWith(`/${newLocale}`)) {
            const newPathname = `/${newLocale}/` + $page.url.pathname.split('/').slice(2).join('/');
            goto(newPathname);
        }
    }
</script>

{#if !$isLoading}
    <header
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
            ? 'bg-flash-white/95 dark:bg-flash-black/95 backdrop-blur-lg shadow-flash-md'
            : 'bg-transparent'}"
    >
        <div class="max-w-7xl mx-auto">
            <div class="px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <!-- Mobile menu button only -->
                    <div class="flex items-center">
                        <button
                            on:click={() => sidebarVisible.set(!$sidebarVisible)}
                            class="md:hidden p-2 rounded-flash text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <MenuIcon />
                        </button>
                    </div>

                    <!-- Search Bar -->
                    <div class="flex-1 max-w-2xl mx-4 md:mx-8 search-container">
                        <div class="relative">
                            <input
                                bind:this={searchInput}
                                bind:value={$searchQuery}
                                type="search"
                                placeholder="Search documentation..."
                                class="w-full px-4 py-2 pl-10 pr-4 text-sm rounded-full
                                       bg-flash-gray-100 dark:bg-flash-gray-900
                                       border border-flash-gray-200 dark:border-flash-gray-800
                                       text-flash-gray-900 dark:text-flash-gray-100
                                       placeholder-flash-gray-500 dark:placeholder-flash-gray-500
                                       focus:outline-none focus:ring-2 focus:ring-flash-accent focus:border-transparent
                                       transition-all duration-200"
                                on:focus={() => searchOpen = true}
                            />
                            <svg class="absolute left-3 top-2.5 w-5 h-5 text-flash-gray-500 dark:text-flash-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            {#if !$searchQuery}
                                <kbd class="hidden sm:block absolute right-3 top-2 px-2 py-0.5 text-xs font-semibold
                                         bg-flash-gray-200 dark:bg-flash-gray-800
                                         text-flash-gray-600 dark:text-flash-gray-400
                                         rounded border border-flash-gray-300 dark:border-flash-gray-700">
                                    ⌘K
                                </kbd>
                            {:else}
                                <button
                                    on:click={() => { $searchQuery = ''; searchOpen = false; }}
                                    class="absolute right-3 top-2 p-1 rounded-full
                                           text-flash-gray-500 dark:text-flash-gray-400
                                           hover:text-flash-gray-700 dark:hover:text-flash-gray-200
                                           hover:bg-flash-gray-200 dark:hover:bg-flash-gray-800
                                           transition-colors"
                                    aria-label="Clear search"
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            {/if}
                            <SearchResults bind:isOpen={searchOpen} />
                        </div>
                    </div>

                    <!-- Right side actions -->
                    <div class="flex items-center space-x-4">
                        <!-- GitHub Edit Link -->
                        <a
                            href="https://github.com/lnflash/flash-how/edit/main/src/routes/pages{$page.url.pathname}.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="hidden lg:flex items-center gap-2 px-3 py-1.5 text-sm rounded-flash
                                   text-flash-gray-600 dark:text-flash-gray-400
                                   hover:text-flash-black dark:hover:text-flash-white
                                   hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900
                                   transition-colors"
                            aria-label="Edit this page on GitHub"
                        >
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>Edit</span>
                        </a>

                        <!-- Theme toggle -->
                        <button
                            on:click={toggleTheme}
                            class="p-2 rounded-flash text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white hover:bg-flash-gray-100 dark:hover:bg-flash-gray-900 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {#if theme === 'light'}
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            {:else}
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            {/if}
                        </button>

                        <!-- Language switcher -->
                        <LocaleSwitcher on:locale-changed={(e) => updateLocale(e.detail)} />

                        <!-- CTA Button -->
                        <DonateButton variant="primary" classes="hidden sm:block btn-primary" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Reading Progress Indicator -->
        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-flash-gray-200 dark:bg-flash-gray-800">
            <div 
                class="h-full bg-flash-accent transition-all duration-150 ease-out"
                style="width: {readingProgress}%"
            ></div>
        </div>
    </header>
    <!-- Spacer to account for fixed header -->
    <div class="h-16"></div>
{/if}
