<script lang="ts">
	import { pathsStore, wrapperStore } from '$lib/stores/index.ts';

	export let showHeaders: boolean = false;

	let contentRect: DOMRectReadOnly;
	let wrapperRef: any;
	let test: any;

	$: {
		if (contentRect) {
			const wrapperRect = wrapperRef?.getBoundingClientRect();
			$wrapperStore.width = wrapperRect.width;
			$wrapperStore.height = wrapperRect.height;
			$wrapperStore.top = wrapperRect.top;
			$wrapperStore.left = wrapperRect.left;
		}
	}
</script>

<div
	bind:this={wrapperRef}
	bind:clientWidth={$wrapperStore.width}
	bind:clientHeight={$wrapperStore.height}
	bind:contentRect
	style:--grid-auto-flow={showHeaders ? 'row' : 'column'}
	class="sv-sankey__wrapper"
>
	<svg width={$wrapperStore.width} height={$wrapperStore.height}>
		{#each Array.from($pathsStore) as [pathKey, pathData]}
			<line
				style="stroke:rgb(255,0,0);stroke-width:2"
				x1={pathData.sourcePosition.x ?? 0 - $wrapperStore.left}
				y1={pathData.sourcePosition.y ?? 0 + $wrapperStore.top}
				x2={pathData.targetPosition.x ?? 0 - $wrapperStore.left}
				y2={pathData.targetPosition.y ?? 0 + $wrapperStore.top}
			/>
		{/each}
	</svg>
	<slot />
</div>

<style>
	:global(.sv-sankey__wrapper) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: black 3px solid;
		display: grid;
		grid-auto-flow: var(--grid-auto-flow);
		/* grid-template-rows: max-content; */
		gap: 0.5rem;
		/* padding: 1.4rem; */
		/* margin-top: 3rem; */
		/* overflow-x: scroll; */
		position: relative;
	}
	svg {
		position: absolute;
	}
</style>
