import { Theme } from '../../theme';

export interface StoryCircleProps {
	img: string;
	name: string;
	highlight?: boolean;
	onClick: () => void;
}

export interface StoryCircleStyleProps {
	theme?: Theme;
	highlight?: boolean;
}
