export type SankeyData = {
	data: Array<SankeyColumn>;
	links: Array<SankeyLink>;
};

export type SankeyColumn = {
	id: SankeyKey;
	columnLabel?: string;
	rows: Array<SankeyRow>;
};

export type SankeyRow = {
	rowLabel?: string;
	items: Array<SankeyItem>;
};

export type SankeyItem = {
	id: SankeyKey;
	receiverId?: SankeyKey;
	label: string;
	value?: number;
};

export type SankeyLink = {
	source: SankeyKey;
	target: SankeyKey;
	value?: number;
};

export type SankeyKey = string | number;
