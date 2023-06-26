import { writable } from 'svelte/store';

export type WrapperStore = { wrapperWidth?: number; wrapperHeight?: number };

export const wrapperStore = writable<WrapperStore>({});
