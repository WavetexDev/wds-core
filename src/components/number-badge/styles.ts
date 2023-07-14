import { styled } from 'styled-components';
import { Theme } from '@/theme';
import { getThemeMode } from '../../utils/get-theme-mode';

import { CSSProperties } from 'react';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const NumberBadgeContainer = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	min-width: ${({ theme }) =>
		theme[currentMode].spacing.sp16};
	width: ${({ theme }) =>
		theme[currentMode].spacing.sp16};
	min-height: ${({ theme }) =>
		theme[currentMode].spacing.sp16};
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp16};

	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) =>
		theme[currentMode].colors.error};
	color: ${({ theme }) =>
		theme[currentMode].colors.white};
	border-radius: 50%;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
