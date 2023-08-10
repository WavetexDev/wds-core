import { CSSProperties, ReactNode } from 'react';

export interface CardProps {
	title: string;
	text: string;
	message: string;
	customStyles?: CSSProperties;
}
