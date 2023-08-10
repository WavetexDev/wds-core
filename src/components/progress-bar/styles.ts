import { styled } from 'styled-components';

import { getThemeMode } from '../../utils/get-theme-mode';
import {
	DefaultStyleProps,
	ProgressBarStyleProps,
} from './types';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';
import { getSchoolColors } from '../../utils/get-school-colors';

const currentMode = getThemeMode();
const schoolColors = getSchoolColors();

export const ProgressBarContainer = styled.div<DefaultStyleProps>`
	display: flex;
	align-items: center;

	width: 100%;
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp12};
	background: ${({ theme }) =>
		theme[currentMode].colors.gray100};
	border-radius: 100vw;
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
	border-radius: 100vw;
	background: ${({ theme }) => schoolColors.primaryColor};
	color: ${({ theme }) =>
		theme[currentMode].colors.white};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
