import { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	customStyles?: CSSProperties;
}
