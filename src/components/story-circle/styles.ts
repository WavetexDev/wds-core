import { styled } from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';
import { StoryCircleStyleProps } from './types';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const StoryCircleContainer = styled.div<StoryCircleStyleProps>`
	width: 60px;
	height: 60px;

	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) =>
		`linear-gradient(259deg, ${theme[currentMode].colors.primary} 4.50%, ${theme[currentMode].colors.secondary} 100%)`};
	border-radius: 100%;
	box-shadow: ${({ theme, highlight }) =>
		highlight
			? `0px 0px 6px 2px ${theme[currentMode].colors.primary}`
			: 0};

	img {
		max-height: 95%;
		border-radius: 100%;

		${({ customStyles }) =>
			customStyles && toStyledComponent(customStyles)}
	}
`;
