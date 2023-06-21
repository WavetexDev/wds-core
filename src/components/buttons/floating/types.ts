import { Theme } from '../../../theme';
import { ReactNode } from 'react';

export interface FloatingButtonProps {
	icon?: ReactNode;
	variant: 'primary' | 'secondary';
}

export interface FloatingButtonStylesProps
	extends FloatingButtonProps {
	theme?: Theme;
}
