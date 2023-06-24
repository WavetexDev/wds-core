import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonProps } from '../types';

export interface FilterButtonProps
	extends ButtonProps,
		ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
}
