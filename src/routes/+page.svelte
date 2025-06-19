<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // This should never show as the server redirect should happen first
    window.location.href = '/en/docs-home';
  });
</script>

<p>Redirecting to Flash Documentation...</p>