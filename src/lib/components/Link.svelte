<script lang="ts">
	import { linksStore } from '$lib/stores/links.ts';
	import type { SankeyLink } from '$lib/types/index.ts';
	import { onDestroy, onMount } from 'svelte';

	export let data: SankeyLink;

	onMount(() => {
		linksStore.add(data);
		console.log($linksStore);
	});

	onDestroy(() => {
		linksStore.remove(data);
		console.log($linksStore);
	});
</script>

<!-- <div>{JSON.stringify(data)}</div> -->
<path />
