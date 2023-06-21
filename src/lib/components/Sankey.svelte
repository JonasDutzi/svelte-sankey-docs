<script lang="ts">
	let wrapperWidth: number;
	let wrapperHeight: number;
</script>

<div bind:clientWidth={wrapperWidth} bind:clientHeight={wrapperHeight} class="sv-sankey__wrapper">
	<svg width={wrapperWidth} height={wrapperHeight} />
	<slot />
</div>

<style>
	:global(.sv-sankey__wrapper) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: black 3px solid;
		display: grid;
		grid-auto-flow: row;
		/* grid-template-rows: max-content; */
		gap: 0.5rem;
		padding: 0.2rem;
		margin-top: 3rem;
		/* overflow-x: scroll; */
		position: relative;
	}
	svg {
		position: absolute;
	}
</style>
