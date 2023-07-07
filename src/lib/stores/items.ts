import { derived } from 'svelte/store';
import { dataStore, linksStore } from '$stores';
import type { SankeyKey } from '$types';

export type SankeyItem = {
	id: SankeyKey;
	label: string;
	columnKey: SankeyKey;
	sources?: Array<SankeyKey>;
	targets?: Array<SankeyKey>;
};

export type ItemsStore = Map<string, SankeyItem>;

const createItemsStore = () => {
	const { subscribe } = derived([dataStore, linksStore], ([$dataStore, $linksStore]) => {
		const items = new Map<SankeyKey, any>();
		if ($dataStore?.size > 0) {
			for (const [columnKey, columnData] of $dataStore.entries()) {
				for (const row of columnData.rows) {
					for (const item of row.items) {
						const sources: Array<SankeyKey> = [];
						const targets: Array<SankeyKey> = [];
						for (const link of $linksStore.values()) {
							if (link.source === item.id) {
								targets.push(link.target);
							}
							if (link.target === item.id) {
								sources.push(link.source);
							}
						}
						items.set(item.id, {
							id: item.id,
							label: item.label,
							columnKey,
							sources,
							targets
						});
					}
				}
			}
		}
		return items;
	});

	return {
		subscribe
	};
};

export const itemsStore = createItemsStore();
