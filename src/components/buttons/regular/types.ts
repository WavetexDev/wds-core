import { CSSProperties } from 'react';
import { Theme } from '../../../theme';
import { ButtonProps } from '../types';

export interface RegularButtonStylingProps {
	variant: Variant;
	theme?: Theme;
	customStyles?: CSSProperties;
}

type Variant =
	| 'primary-contained'
	| 'primary-ghost'
	| 'primary-text'
	| 'secondary-contained'
	| 'secondary-ghost'
	| 'secondary-text'
	| 'danger-contained'
	| 'danger-ghost'
	| 'danger-text'
	| 'success-contained'
	| 'warning-contained';

export interface RegularButtonProps extends ButtonProps {
	text: string;
	variant: Variant;
}
