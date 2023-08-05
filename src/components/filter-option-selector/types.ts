export interface FilterOptionSelectorProps {
	isOpen: boolean;
	options?: OptionsT;
	selectedOptions?: OptionsT;
	onOptionClick?: (props: OptionT) => void;
	filterType: 'list' | 'period';
	onDateRangeChange?: (
		startDate: string,
		endDate: string
	) => void;
	startDate?: string | number;
	endDate?: string | number;
}

export interface OptionsT extends Array<OptionT> {}

export interface OptionT
	extends Record<string, string | number> {
	value: string | number;
	label: string;
}
