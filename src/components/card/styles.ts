import { styled } from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';

import { Theme } from '../../theme';
import { CSSProperties } from 'react';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const CardContainer = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	width: 100%;
	height: auto;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: ${({ theme }) =>
		theme[currentMode].colors.white};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp10} ${theme[currentMode].spacing.sp18}`};
	border: ${({ theme }) =>
		`1px solid ${theme[currentMode].colors.gray100}`};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
