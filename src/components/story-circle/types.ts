import { CSSProperties } from 'react';
import { Theme } from '../../theme';

export interface StoryCircleProps {
	img: string;
	name: string;
	highlight?: boolean;
	onClick: () => void;
	customStyles?: CSSProperties;
}

export interface StoryCircleStyleProps {
	theme?: Theme;
	highlight?: boolean;
	customStyles?: CSSProperties;
}
