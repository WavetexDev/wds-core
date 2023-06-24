import { Theme } from '../../../theme';
import { ButtonProps } from '../types';

export interface RegularButtonStylingProps {
	variant: Variant;
	theme?: Theme;
}

type Variant =
	| 'primary-contained'
	| 'primary-ghost'
	| 'primary-text'
	| 'secondary-contained'
	| 'secondary-ghost'
	| 'secondary-text';

export interface RegularButtonProps extends ButtonProps {
	text: string;
	variant: Variant;
}
