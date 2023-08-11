<script lang="ts">
	import { dataStore } from "$stores";
	import type { SankeyColumn } from "$types";
	import { onDestroy, onMount } from "svelte";

	export let data: SankeyColumn;

	onMount(() => {
		dataStore.addColumn(data);
	});

	onDestroy(() => {
		dataStore.removeColumn(data);
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
