import { CSSProperties } from 'react';
import { Theme } from '../../theme';

export interface PillProps {
	variant: PillVariant;
	text: string;
	customStyles?: CSSProperties;
}

export interface PillStyleProps {
	variant: PillVariant;
	theme?: Theme;
	customStyles?: CSSProperties;
}

export type PillVariant =
	| 'success'
	| 'warning'
	| 'error'
	| 'info'
	| 'success-outline'
	| 'warning-outline'
	| 'error-outline'
	| 'info-outline'
	| 'primary'
	| 'secondary';
