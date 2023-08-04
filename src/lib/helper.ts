export const logWarning = (message?: unknown, ...optionalParams: Array<unknown>) => {
	console.warn('svelte-sankey: ', message, ...optionalParams);
};
export const logError = (message?: unknown, ...optionalParams: Array<unknown>) => {
	console.error('svelte-sankey: ', message, ...optionalParams);
};
