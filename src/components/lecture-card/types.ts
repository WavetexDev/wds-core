import { ReactNode } from 'react';

export interface LectureCardProps {
	icon: ReactNode;
	title: string;
	thumbnail: string;
	author: string;
	duration: number;
}
