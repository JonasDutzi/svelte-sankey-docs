import { derived } from 'svelte/store';
import { anchorsStore, linksStore } from '$stores';

export type Path = {
	sourcePosition: Position;
	targetPosition: Position;
};

export type Position = {
	x: number | undefined;
	y: number | undefined;
};

export type PathsStore = Map<string, Path>;

const createPathsStore = () => {
	const { subscribe } = derived([anchorsStore, linksStore], ([$anchorsStore, $linksStore]) => {
		const paths = new Map<string, Path>();
		if ($linksStore?.size > 0) {
			for (const [linkKey, linkData] of $linksStore.entries()) {
				const sourceAnchor = $anchorsStore.get(linkData.source);
				const targetAnchor = $anchorsStore.get(linkData.target);
				paths.set(linkKey, {
					sourcePosition: {
						x: sourceAnchor?.positionX,
						y: sourceAnchor?.positionY
					},
					targetPosition: {
						x: targetAnchor?.positionX,
						y: targetAnchor?.positionY
					}
				});
			}
		}
		return paths;
	});

	return {
		subscribe
	};
};

export const pathsStore = createPathsStore();
