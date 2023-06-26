import type { SankeyColumn, SankeyKey } from '$types';
import { writable } from 'svelte/store';

type DataStore = Map<SankeyKey, SankeyColumn>;

const createDataStore = () => {
	const { subscribe, update } = writable<DataStore>(new Map());
	return {
		subscribe,
		addColumn: (column: SankeyColumn) =>
			update((currentColumns) => currentColumns.set(column.id, column)),
		removeColumn: (column: SankeyColumn) =>
			update((currentColumns) => {
				currentColumns.delete(column.id);
				return currentColumns;
			})
	};
};

export const dataStore = createDataStore();
