<script lang="ts">
	import type { SankeyKey } from '$types';
	import { onDestroy } from 'svelte';
	import { anchorsStore, wrapperStore } from '$stores';

	let anchorRef: HTMLDivElement;
	export let id: SankeyKey;

	$: {
		if (anchorRef) {
			const rect = anchorRef.getBoundingClientRect();
			anchorsStore.setAnchor({
				id: id,
				positionX: rect.x - $wrapperStore.left,
				positionY: rect.y - $wrapperStore.top
			});
		}
	}

	onDestroy(() => {
		anchorsStore.remove(id);
	});
</script>

<div style="height: {1}px;" bind:this={anchorRef} />

<style>
	div {
		width: 15px;
		background-color: aqua;
	}
</style>
