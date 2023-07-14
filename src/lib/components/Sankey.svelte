<script lang="ts">
	import { linksStore, pathsStore, wrapperStore } from '$lib/stores/index.ts';
    import { Axis } from "$types";

	export let showHeaders: boolean = false;

	let wrapperRef: HTMLDivElement;
	export let minPathWidth: number = 1;

    const getPosition = (value: number, axis: Axis) => {
        if (axis === Axis.x) {
            return value ?? 0 - $wrapperStore.left;
        }
        if (axis === Axis.y) {
            return value ?? 0 + $wrapperStore.top;
        }
    }

	$: {
		if (wrapperRef) {
			const wrapperRect = wrapperRef?.getBoundingClientRect();
			$wrapperStore.width = wrapperRect.width;
			$wrapperStore.height = wrapperRect.height;
			$wrapperStore.top = wrapperRect.top;
			$wrapperStore.left = wrapperRect.left;
		}
	}

	const calculatePathWidth = (pathKey: string) => {
		const linkData = $linksStore.get(pathKey);
		if (linkData?.value! > minPathWidth) {
			return linkData?.value;
		}
		return minPathWidth;
	};
</script>

<div
	bind:this={wrapperRef}
	bind:clientWidth={$wrapperStore.width}
	bind:clientHeight={$wrapperStore.height}
	style:--grid-auto-flow={showHeaders ? 'row' : 'column'}
	class="sv-sankey__wrapper"
>
	<svg width={$wrapperStore.width} height={$wrapperStore.height}>
		{#each Array.from($pathsStore) as [pathKey, pathData]}
            {@const pathWidth = calculatePathWidth(pathKey)}
			<line
				style:--path-width={pathWidth}
				x1={getPosition(pathData.sourcePosition.x, Axis.x)}
				y1={getPosition(pathData.sourcePosition.y, Axis.y)}
				x2={getPosition(pathData.targetPosition.x, Axis.x)}
				y2={getPosition(pathData.targetPosition.y, Axis.y)}
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
	line {
		stroke: rgb(0, 255, 255);
		stroke-width: var(--path-width);
	}
</style>
