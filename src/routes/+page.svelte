<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import ColumnHeader from '$lib/components/ColumnHeader.svelte';
	import ColumnContent from '$lib/components/ColumnContent.svelte';
	import type { SankeyData } from '$types';
	import Link from '$lib/components/Link.svelte';
	import { anchorsStore, linksStore, dataStore, pathsStore } from '$stores';
	import Sankey from '$lib/components/Sankey.svelte';

	let sankeyData: SankeyData = {
		data: [
			{
				id: 'input',
				columnLabel: 'Input',
				rows: [
					{
						rowLabel: 'Product',
						items: [
							{ id: 'fluor', receiverId: 'semi_finished_good', label: 'Fluor', value: 3 },
							{ id: 'biscuit', receiverId: 'semi_finished_good', label: 'Biscuit', value: 6 }
						]
					},
					{
						rowLabel: 'Resource Usage',
						items: [{ id: 'chocolate_production', label: 'Chocolate Production' }]
					}
				]
			},
			{
				id: 'root',
				columnLabel: 'root',
				rows: [
					{
						rowLabel: 'Product',
						items: [{ id: 'semi_finished_good', label: 'Semi-finished good' }]
					}
				]
			},
			{
				id: 'output',
				columnLabel: 'Output',
				rows: [
					{
						rowLabel: 'Product',
						items: [{ id: 'cake', label: 'Cake' }]
					}
				]
			}
		],
		links: [
			{
				source: 'fluor',
				target: 'semi_finished_good',
				value: 5
			},
			{
				source: 'biscuit',
				target: 'semi_finished_good',
				value: 3
			},
			{
				source: 'chocolate_production',
				target: 'semi_finished_good',
				value: 8
			},
			{
				source: 'semi_finished_good',
				target: 'cake',
				value: 16
			}
		]
	};

	const addLink = () => {
		sankeyData.links.push({ source: 'tdsg', target: 'fsdg', value: 4 });
		sankeyData = sankeyData;
	};

	const addColumn = () => {
		sankeyData.data.push({
			id: 'test',
			columnLabel: 'test',
			rows: [
				{
					rowLabel: 'Product',
					items: [
						{ id: 'Output-Product 1', label: 'Output-Product 1' },
						{ id: 'Output-Product 2', label: 'Output-Product 2' }
					]
				},
				{
					rowLabel: 'Resource Usage',
					items: [{ id: 'Output-Product 3', label: 'Output-Product 3' }]
				}
			]
		});
		sankeyData = sankeyData;
	};
</script>

<div>
	<button on:click={addLink}>Add Link</button>
	<button on:click={addColumn}>Add Column</button>
	<Sankey showHeaders>
		{#each sankeyData.data as data}
			<ColumnHeader>
				<div style="font-size: clamp(1.125rem, 2vw, 1.5rem); font-weight: bold; margin-block: 1rem">
					{data.columnLabel === 'root' ? data?.rows?.[0].items?.[0]?.label : data.columnLabel}
				</div>
			</ColumnHeader>
		{/each}
		{#each sankeyData.data as data}
			<ColumnContent {data}>
				{#each data.rows as row}
					<div style="font-weight: 600;">{row.rowLabel}</div>
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
	<div class="inspector">
		<b>State Inspector:</b>
		<div>
			<b>Links:</b>
			{#each Array.from($linksStore) as link}
				<div>{JSON.stringify(link)}</div>
			{/each}
		</div>
		<div>
			<b>Data:</b>
			{#each Array.from($dataStore) as data}
				<div>{JSON.stringify(data)}</div>
			{/each}
		</div>
		<div>
			<b>Anchors:</b>
			{#each Array.from($anchorsStore) as data}
				<div>{JSON.stringify(data)}</div>
			{/each}
		</div>
		<div>
			<b>Paths:</b>
			<!-- <p>{$pathsStore}</p> -->
			{#each Array.from($pathsStore) as data}
				<div>{JSON.stringify(data)}</div>
			{/each}
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.inspector {
		margin-top: 8rem;
	}
	.inspector > div {
		margin: 2rem;
	}
</style>
