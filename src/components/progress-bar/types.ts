import { CSSProperties } from 'react';
import { Theme } from '../../theme';

export interface ProgressBarProps {
	percentProgress: number;
	customStyles?: CSSProperties;
}

export interface DefaultStyleProps {
	theme?: Theme;
	customStyles?: CSSProperties;
}

export interface ProgressBarStyleProps
	extends DefaultStyleProps {
	percentProgress: number;
}
