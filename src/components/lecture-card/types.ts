import { PillVariant } from '../pill/types';

export interface LectureCardProps {
	cardVariant: CardVariant;
	lectureType: Lecture;
	title: string;
	thumbnail: string;
	author: string;
	duration: number;
	pillVariant: PillVariant;
	pillText: string;
}

type CardVariant = 'primary' | 'secondary';

type Lecture = 'video' | 'audio' | 'material' | 'text';

export interface LectureCardStyleProps {
	variant: CardVariant;
}

export interface LectureCardThumbnailProps {
	thumbnail: string;
}
