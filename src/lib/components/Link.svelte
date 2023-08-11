<script lang="ts">
	import { logError } from '$helper';
	import { linksStore } from '$stores';
	import type { SankeyLink } from '$types';
	import { onDestroy, onMount } from 'svelte';

	export let data: SankeyLink;

	onMount(() => {
		if (!data.source || !data.target) {
			logError(
				`Sankey Link must have a source and a target - source: "${data.source}" target: "${data.target}"`
			);
		}
		linksStore.add(data);
	});

	onDestroy(() => {
		linksStore.remove(data);
	});
</script>
