<script lang="ts">
    import DonateButton from '$lib/components/DonateButton.svelte';
    import { _, isLoading } from 'svelte-i18n';
    import GithubIcon from '$lib/elements/icons/Github.svelte';
</script>

{#if !$isLoading}
    <footer class="bg-flash-gray-50 dark:bg-flash-gray-950 border-t border-flash-gray-200 dark:border-flash-gray-800">
        <div class="content-container py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <!-- Brand Column -->
                <div class="md:col-span-2">
                    <div class="flex items-center gap-3 mb-4">
                        <img src="/images/flashich-150.webp" class="w-10 h-10" alt="Flash Logo" />
                        <span class="text-xl font-bold">{$_('title')}</span>
                    </div>
                    <p class="text-flash-gray-600 dark:text-flash-gray-400 mb-4 max-w-md">
                        Official documentation for Flash - A bitcoin services provider for the Caribbean.
                    </p>
                    <DonateButton variant="primary" classes="btn-accent" />
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="/en/get-started" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">Get Started</a></li>
                        <li><a href="/en/user-guides" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">User Guides</a></li>
                        <li><a href="/en/business" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">For Business</a></li>
                        <li><a href="/en/development" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">Developers</a></li>
                    </ul>
                </div>
                
                <!-- Resources -->
                <div>
                    <h3 class="font-semibold mb-4">Resources</h3>
                    <ul class="space-y-2">
                        <li><a href="https://getflash.io" target="_blank" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">Flash Website</a></li>
                        <li><a href="https://github.com/lnflash/flash-how" target="_blank" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">GitHub</a></li>
                        <li><a href="/en/contribute" class="text-flash-gray-600 dark:text-flash-gray-400 hover:text-flash-black dark:hover:text-flash-white transition-colors">Contribute</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- Bottom Bar -->
            <div class="pt-8 border-t border-flash-gray-200 dark:border-flash-gray-800">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="flex items-center gap-4 text-sm text-flash-gray-600 dark:text-flash-gray-400">
                        <a href="https://github.com/lnflash/flash-how" target="_blank" class="hover:text-flash-black dark:hover:text-flash-white transition-colors">
                            <GithubIcon klass="w-5 h-5" />
                        </a>
                        <span>
                            {$_('foss')}
                            <a
                                href="https://en.wikipedia.org/wiki/MIT_License"
                                class="underline hover:text-flash-black dark:hover:text-flash-white transition-colors"
                                target="_blank"
                            >
                                {$_('mitLicense')}
                            </a>
                        </span>
                    </div>
                    <p class="text-sm text-flash-gray-600 dark:text-flash-gray-400">
                        © {new Date().getFullYear()} Flash Documentation. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
{/if}
