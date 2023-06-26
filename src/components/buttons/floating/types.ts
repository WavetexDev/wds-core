import { Theme } from '../../../theme';
import {
	ButtonHTMLAttributes,
	CSSProperties,
	ReactNode,
} from 'react';

export interface FloatingButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	variant: 'primary' | 'secondary';
	customStyles?: CSSProperties;
}

export interface FloatingButtonStylesProps
	extends FloatingButtonProps {
	theme?: Theme;
}
