<script lang="ts">
	import type { SankeyItem } from '$lib/types/index.ts';
	import Anchor from './Anchor.svelte';
	import Label from './Label.svelte';

	export let item: SankeyItem;
</script>

<div class="sv-sankey__item">
	<Anchor label={item.label} />
	<Label label={item.label} />
	<slot />
</div>

<style>
	:global(.sv-sankey__item) {
		display: flex;
		align-items: flex-start;
		justify-content: start;
		flex-direction: row;
		margin-block: 1em;
	}
</style>
