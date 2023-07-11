import { Theme } from '../../theme';

export interface PillProps {
	variant: PillVariant;
	text: string;
}

export interface PillStyleProps {
	variant: PillVariant;
	theme?: Theme;
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
