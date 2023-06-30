import { CSSProperties } from 'react';

export interface GridItemProps {
	id?: string;
	variant: Variant;
	customStyles?: CSSProperties;
}

export type Variant =
	| 'row'
	| 'col-1'
	| 'col-2'
	| 'col-3'
	| 'col-4'
	| 'col-5'
	| 'col-6'
	| 'col-7'
	| 'col-8'
	| 'col-9'
	| 'col-10'
	| 'col-11'
	| 'col-12';
