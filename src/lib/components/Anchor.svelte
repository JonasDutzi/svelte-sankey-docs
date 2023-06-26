<script lang="ts">
	import type { SankeyKey } from '$types';
	import { onDestroy } from 'svelte';
	import { anchorsStore, wrapperStore } from '$stores';

	let anchorRef: HTMLDivElement;
	export let id: SankeyKey;
	export let value: number | undefined;

	$: $wrapperStore,
		(() => {
			if (anchorRef) {
				const rect = anchorRef.getBoundingClientRect();
				console.log(id + JSON.stringify(rect));
				anchorsStore.setAnchor({ id: id, positionX: rect.x, positionY: rect.y });
			}
		})();

	onDestroy(() => {
		anchorsStore.remove(id);
	});
</script>

<div style="height: {value ? value * 2 : 2}px;" bind:this={anchorRef} />

<style>
	div {
		width: 15px;
		background-color: aqua;
	}
</style>
