<script lang="ts">
	import { dataStore } from '$lib/stores/data.ts';
	import type { SankeyColumn } from '$lib/types/index.ts';
	import { onDestroy, onMount } from 'svelte';

	export let data: SankeyColumn;

	onMount(() => {
		dataStore.addColumn(data);
		console.log($dataStore);
	});

	onDestroy(() => {
		dataStore.removeColumn(data);
		console.log($dataStore);
	});
</script>

<div class="sv-sankey__column-content">
	<slot />
</div>

<style>
	:global(.sv-sankey__column-content) {
		outline: black 1px solid;
	}
</style>
