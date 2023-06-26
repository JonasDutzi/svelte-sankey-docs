<script lang="ts">
	import { pathsStore, wrapperStore } from '$lib/stores/index.ts';

	export let showHeaders: boolean = false;

	let contentRect: DOMRectReadOnly;

	$: {
		if (contentRect) {
			$wrapperStore.wrapperWidth = contentRect.width;
			$wrapperStore.wrapperHeight = contentRect.height;
		}
	}
</script>

<div
	bind:clientWidth={$wrapperStore.wrapperWidth}
	bind:clientHeight={$wrapperStore.wrapperHeight}
	bind:contentRect
	style:--grid-auto-flow={showHeaders ? 'row' : 'column'}
	class="sv-sankey__wrapper"
>
	<svg width={$wrapperStore.wrapperWidth} height={$wrapperStore.wrapperHeight}>
		{#each Array.from($pathsStore) as [pathKey, pathData]}
			<line
				style="stroke:rgb(255,0,0);stroke-width:2"
				x1={pathData.sourcePosition.x}
				y1={pathData.sourcePosition.y}
				x2={pathData.targetPosition.x}
				y2={pathData.targetPosition.y}
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
