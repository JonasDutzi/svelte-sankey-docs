import { writable } from 'svelte/store';

export type WrapperStore = {
	height: number | undefined;
	width: number | undefined;
	x: number | undefined;
	y: number | undefined;
};

export const wrapperStore = writable<Record<any, any>>({});
