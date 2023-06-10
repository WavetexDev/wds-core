import { CSSProperties } from 'react';

export interface AvatarProps {
	size: AvatarSize;
	name: string;
	img?: string;
	online?: boolean;
	customStyles?: CSSProperties;
}

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
