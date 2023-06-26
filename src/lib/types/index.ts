type SankeyData = {
	data: Array<SankeyColumn>;
	links: Array<SankeyLink>;
};

type SankeyColumn = {
	id: SankeyKey;
	columnLabel?: string;
	rows: Array<SankeyRow>;
};

type SankeyRow = {
	rowLabel?: string;
	items: Array<SankeyItem>;
};

type SankeyItem = {
	id: SankeyKey;
	receiverId?: SankeyKey;
	label: string;
	value?: number;
};

type SankeyLink = {
	source: SankeyKey;
	target: SankeyKey;
	value?: number;
};

type SankeyKey = string | number;

export type { SankeyData, SankeyColumn, SankeyItem, SankeyKey, SankeyLink, SankeyRow };
