import { styled } from 'styled-components';

import { getThemeMode } from '../../utils/get-theme-mode';
import {
	DefaultStyleProps,
	ProgressBarStyleProps,
} from './types';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const ProgressBarContainer = styled.div<DefaultStyleProps>`
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

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ProgressBar = styled.span<ProgressBarStyleProps>`
	min-width: 30px;
	display: flex;
	justify-content: flex-end;
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

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
