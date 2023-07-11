import { styled } from 'styled-components';

import { getThemeMode } from '../../utils/get-theme-mode';
import { ProgressBarStyleProps } from './types';

const currentMode = getThemeMode();

export const ProgressBarContainer = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp12};
	background: ${({ theme }) =>
		theme[currentMode].colors.gray100};
	border-radius: 100vw; // Automatically makes a pill shape, independent of screen size or component width, height, padding, etc
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.light};
`;

export const ProgressBar = styled.span<ProgressBarStyleProps>`
	display: flex;
	justify-content: ${({ percentProgress }) =>
		percentProgress > 2 ? `flex-end` : `center`};
	padding-inline: ${({ theme }) => `
		${theme[currentMode].spacing.sp12}
		${theme[currentMode].spacing.sp10}`};

	width: ${({ percentProgress }) =>
		`${percentProgress}%`};
	height: 100%;
	border-radius: 100vw; // Automatically makes a pill shape, independent of screen size or component width, height, padding, etc
	background: ${({ theme }) =>
		theme[currentMode].colors.primary};
	color: ${({ theme }) =>
		theme[currentMode].colors.white};
`;