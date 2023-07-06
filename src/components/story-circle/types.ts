import { Theme } from '../../theme';

export interface StoryCircleProps {
	profilePictureUrl: string;
	username: string;
	highlight?: boolean;
}

export interface StoryCircleStyleProps {
	theme?: Theme;
	highlight: boolean;
}
