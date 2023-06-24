import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	showError?: boolean;
	errorMessage?: string;
	icon?: ReactNode;
	hideDefaultIcon?: boolean;
}
