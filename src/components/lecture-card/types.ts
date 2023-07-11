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
}

type CardVariant = 'primary' | 'secondary';

type Lecture = 'VIDEO' | 'AUD' | 'MAT' | 'TXT';

export interface LectureCardStyleProps {
	theme?: Theme;
}

export interface CardVariantProps
	extends LectureCardStyleProps {
	variant: CardVariant;
}

export interface FavoriteProps
	extends LectureCardStyleProps {
	isFavorite?: boolean;
}

export interface LectureCardThumbnailProps
	extends LectureCardStyleProps {
	thumbnail: string;
}
