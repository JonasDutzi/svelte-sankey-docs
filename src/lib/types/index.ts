export type SankeyData = {
	data: Array<SankeyColumn>;
	links: Array<SankeyLink>;
};

export type SankeyColumn = {
	id: string | number;
	columnLabel?: string;
	rows: Array<SankeyRow>;
};

export type SankeyRow = {
	rowLabel?: string;
	items: Array<SankeyItem>;
};

export type SankeyItem = {
	id: string | number;
	label: string;
};

export type SankeyLink = {
	source: string | number;
	target: string | number;
	value?: number;
};
