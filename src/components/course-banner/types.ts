export interface CourseBannerProps {
	courseName: string;
	courseId: string;
	bannerImageUrl: string;
	onClick: (courseId: string) => void;
}

export interface CourseBannerStyleProps {
	banner: string;
}
