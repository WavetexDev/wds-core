import { CSSProperties } from 'react';

export interface AvatarProps {
	size: AvatarSize;
	img?: string;
	name: string;
	online?: boolean;
	customStyles?: CSSProperties;
}

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
