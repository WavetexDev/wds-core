export interface LectureCardProps {
	variant?: CardVariant;
	type: Lecture;
	name: string;
	thumbnail: string;
	teacher: string;
	duration: number;
	finished?: boolean;
	progress?: number;
	onClick: () => void;
	avaliable: boolean;
	favorite?: boolean;
}

type CardVariant = 'primary' | 'secondary';

type Lecture = 'VIDEO' | 'AUD' | 'MAT' | 'TEXT';

export interface LectureCardStyleProps {
	variant: CardVariant;
}

export interface LectureCardThumbnailProps {
	thumbnail: string;
}
