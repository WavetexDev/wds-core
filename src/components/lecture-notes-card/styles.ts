import { styled } from 'styled-components';

import { Theme } from '../../theme';
import { CSSProperties } from 'react';

import { getThemeMode } from '../../utils/get-theme-mode';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const LectureNotesCardContainer = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;

	background-color: ${({ theme }) =>
		theme[currentMode].colors.white};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp20} ${theme[currentMode].spacing.sp22}`};
	border: ${({ theme }) =>
		`1px solid ${theme[currentMode].colors.gray100}`};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
