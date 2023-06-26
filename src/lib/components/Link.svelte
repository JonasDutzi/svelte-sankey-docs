<script lang="ts">
	import { linksStore } from '$stores';
	import type { SankeyLink } from '$types';
	import { onDestroy, onMount } from 'svelte';

	export let data: SankeyLink;

	onMount(() => {
		linksStore.add(data);
	});

	onDestroy(() => {
		linksStore.remove(data);
	});
</script>
