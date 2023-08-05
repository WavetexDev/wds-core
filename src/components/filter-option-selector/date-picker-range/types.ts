export interface PropsT {
	startDate: string | number;
	endDate: string | number;
	onDateRangeChange?: (
		startDate: string,
		endDate: string
	) => void;
}

export interface RangeT {
	startDate: Date;
	endDate: Date;
	key: string;
}
