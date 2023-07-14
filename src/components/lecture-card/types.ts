import { CSSProperties } from 'react';
import { Theme } from '../../theme';

export interface LectureCardProps {
	variant?: CardVariant;
	type: Lecture;
	name: string;
	thumbnail: string;
	teacher: string;
	duration: number;
	finished?: boolean;
	onClick: () => void;
	avaliable: boolean;
	avaliableMessage?: string;
	toggleFavorite?: () => void;
	favorite?: boolean;
	remainingSeconds?: number;
	customStyles?: CSSProperties;
}

type CardVariant = 'primary' | 'secondary';

type Lecture = 'VIDEO' | 'AUD' | 'MAT' | 'TXT';

export interface DefaultStyleProps {
	theme?: Theme;
	customStyles?: CSSProperties;
}

export interface CardVariantProps
	extends DefaultStyleProps {
	variant: CardVariant;
}

export interface FavoriteProps extends DefaultStyleProps {
	isFavorite?: boolean;
}

export interface LectureCardThumbnailProps
	extends DefaultStyleProps {
	thumbnail: string;
	hasPill: boolean;
}
