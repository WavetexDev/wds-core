import { Theme } from '../../../theme';

export interface RegularButtonStylingProps {
	variant:
		| 'primary-contained'
		| 'primary-ghost'
		| 'primary-text'
		| 'secondary-contained'
		| 'secondary-ghost'
		| 'secondary-text';
	theme?: Theme;
}

export interface RegularButtonProps
	extends RegularButtonStylingProps {
	content: string;
}
