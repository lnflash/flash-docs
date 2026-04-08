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
    <a href="https://www.fygaro.com/en/pb/93b0f6b8-652f-4965-8387-2285e3c92df0/" target="_blank" rel="noopener noreferrer" class={classNames}> ⚡ {$_('donateButton')} </a>
{/if}
