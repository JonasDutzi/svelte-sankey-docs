<script lang="ts">
	let anchorRef: HTMLDivElement;
	export let label: string;
	$: {
		if (anchorRef) {
			console.log(`${label}: ${JSON.stringify(anchorRef.getBoundingClientRect())}`);
		}
	}
</script>

<div style="height: {15}px;" bind:this={anchorRef} />

<style>
	div {
		width: 15px;
		background-color: aqua;
	}
</style>
