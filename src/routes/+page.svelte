<script lang="ts">
	import Item from "$lib/components/Item.svelte";
	import ColumnHeader from "$lib/components/ColumnHeader.svelte";
	import ColumnContent from "$lib/components/ColumnContent.svelte";
	import SankeyInspector from "$lib/components/SankeyInspector.svelte";
	import Link from "$lib/components/Link.svelte";
	import { sankeyData } from "$lib/testdata/data.ts";
	import Sankey from "$lib/components/Sankey.svelte";
</script>

<div>
	<Sankey showHeaders>
		{#each sankeyData.data as data}
			<ColumnHeader>
				<div style="font-size: clamp(1.125rem, 2vw, 1.5rem); font-weight: bold; margin-block: 1rem">
					{data.columnLabel === "root" ? data?.rows?.[0].items?.[0]?.label : data.columnLabel}
				</div>
			</ColumnHeader>
		{/each}
		{#each sankeyData.data as data}
			<ColumnContent {data}>
				{#each data.rows as row}
					<div class="row-label">{row.rowLabel}</div>
					{#each row.items as item}
						<Item {item} />
					{/each}
				{/each}
			</ColumnContent>
		{/each}
		{#each sankeyData.links as data}
			<Link {data} />
		{/each}
	</Sankey>
	<!-- <SankeyInspector /> -->
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.row-label {
		font-weight: 700;
		font-size: 1.025rem;
	}
</style>
