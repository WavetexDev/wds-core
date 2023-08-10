import { styled } from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';

import { Theme } from '../../theme';
import { CSSProperties } from 'react';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const PaperContainer = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	width: 100%;
	height: auto;

	background-color: ${({ theme }) =>
		theme[currentMode].colors.white};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp22} ${theme[currentMode].spacing.sp28}`};
	border: ${({ theme }) =>
		`1px solid ${theme[currentMode].colors.gray100}`};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.light};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
