export interface AvatarProps {
	size: AvatarSize;
	img?: string;
	name: string;
	online?: boolean;
}

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
