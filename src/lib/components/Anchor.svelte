<script lang="ts">
	import type { SankeyKey } from '$types';
	import { onDestroy } from 'svelte';
	import { anchorsStore, wrapperStore, itemsStore } from '$stores';
	import type { SankeyEdge } from '$lib/stores/items.ts';

	let anchorRef: HTMLDivElement;
	export let id: SankeyKey;
    
    
    let anchorHeight = 1;
    
    $: {
        let item = $itemsStore.get(id);
        if (item) {
            anchorHeight = item.sourcesTotalValue > 0 ? item.sourcesTotalValue : item.targetsTotalValue
        }
    }

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

<div style:--anchor-height="{anchorHeight}px" bind:this={anchorRef} />

<style>
	div {
		width: 15px;
		background-color: aqua;
		height: var(--anchor-height);
	}
</style>
