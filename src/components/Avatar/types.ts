export interface AvatarProps {
	size: AvatarSize;
	img?: string;
	name: string;
	online?: boolean;
}

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
