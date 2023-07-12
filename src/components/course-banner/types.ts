import { CSSProperties } from 'react';

export interface CourseBannerProps {
	courseName: string;
	courseId: string;
	bannerImageUrl: string;
	customStyles?: CSSProperties;
	onClick: (courseId: string) => void;
}

export interface CourseBannerStyleProps {
	banner: string;
	customStyles?: CSSProperties;
}
