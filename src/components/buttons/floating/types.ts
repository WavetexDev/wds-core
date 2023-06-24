import { Theme } from '../../../theme';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface FloatingButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	variant: 'primary' | 'secondary';
}

export interface FloatingButtonStylesProps
	extends FloatingButtonProps {
	theme?: Theme;
}
