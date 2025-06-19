<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';

    export let variant: string = 'primary';
    export let classes: string = '';

    const variantStyles = {
        primary: 'btn-accent',
        secondary: 'btn-secondary',
        filled: 'btn-primary',
        outline: 'btn-secondary',
        text: 'text-flash-accent hover:text-flash-accent/80 transition-colors'
    };

    // @ts-ignore
    let classNames = `${classes} ${variantStyles[variant]}`;
</script>

{#if !$isLoading}
    <a href="lightning:dread@islandbitcoin.com" class={classNames}> ⚡ {$_('donateButton')} </a>
{/if}
