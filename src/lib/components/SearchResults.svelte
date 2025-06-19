<script lang="ts">
    import { searchResults, searchQuery } from '$lib/search/searchIndex';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    export let isOpen = false;
    
    let selectedIndex = 0;
    
    function handleKeydown(event: KeyboardEvent) {
        if (!isOpen || $searchResults.length === 0) return;
        
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                selectedIndex = (selectedIndex + 1) % $searchResults.length;
                break;
            case 'ArrowUp':
                event.preventDefault();
                selectedIndex = selectedIndex === 0 ? $searchResults.length - 1 : selectedIndex - 1;
                break;
            case 'Enter':
                event.preventDefault();
                if ($searchResults[selectedIndex]) {
                    navigateToResult($searchResults[selectedIndex].url);
                }
                break;
            case 'Escape':
                event.preventDefault();
                isOpen = false;
                searchQuery.set('');
                break;
        }
    }
    
    function navigateToResult(url: string) {
        goto(url);
        isOpen = false;
        searchQuery.set('');
    }
    
    function highlightMatch(text: string, query: string) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="bg-flash-accent/20 text-flash-accent font-semibold">$1</mark>');
    }
    
    onMount(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    });
    
    // Reset selected index when results change
    $: if ($searchResults) {
        selectedIndex = 0;
    }
</script>

{#if isOpen && $searchResults.length > 0}
    <div class="absolute top-full left-0 right-0 mt-2 bg-flash-white dark:bg-flash-gray-900 rounded-lg shadow-flash-xl border border-flash-gray-200 dark:border-flash-gray-800 max-h-96 overflow-y-auto z-50">
        <ul class="py-2">
            {#each $searchResults as result, index}
                <li>
                    <button
                        class="w-full px-4 py-3 text-left hover:bg-flash-gray-100 dark:hover:bg-flash-gray-800 transition-colors
                               {selectedIndex === index ? 'bg-flash-gray-100 dark:bg-flash-gray-800' : ''}"
                        on:click={() => navigateToResult(result.url)}
                        on:mouseenter={() => selectedIndex = index}
                    >
                        <div class="flex items-start justify-between">
                            <div class="flex-1 min-w-0">
                                <h4 class="font-semibold text-flash-black dark:text-flash-white mb-1">
                                    {@html highlightMatch(result.title, $searchQuery)}
                                </h4>
                                {#if result.description}
                                    <p class="text-sm text-flash-gray-600 dark:text-flash-gray-400 mb-1">
                                        {@html highlightMatch(result.description, $searchQuery)}
                                    </p>
                                {/if}
                                {#if result.snippet}
                                    <p class="text-xs text-flash-gray-500 dark:text-flash-gray-500 line-clamp-2">
                                        {@html highlightMatch(result.snippet, $searchQuery)}
                                    </p>
                                {/if}
                            </div>
                            <span class="text-xs text-flash-gray-500 dark:text-flash-gray-500 ml-4 flex-shrink-0">
                                {result.section}
                            </span>
                        </div>
                    </button>
                </li>
            {/each}
        </ul>
    </div>
{:else if isOpen && $searchQuery.length >= 2}
    <div class="absolute top-full left-0 right-0 mt-2 bg-flash-white dark:bg-flash-gray-900 rounded-lg shadow-flash-xl border border-flash-gray-200 dark:border-flash-gray-800 p-8 text-center z-50">
        <p class="text-flash-gray-500 dark:text-flash-gray-400">
            No results found for "{$searchQuery}"
        </p>
    </div>
{/if}

<style>
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>