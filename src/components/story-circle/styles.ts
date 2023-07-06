import { styled } from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';
import { StoryCircleStyleProps } from './types';

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

	img {
		max-height: 95%;
		border-radius: 100%;
	}

	&:hover {
		box-shadow: ${({ theme }) =>
			`0px 0px 6px 2px ${theme[currentMode].colors.primary}`};
	}
`;

export const UndefinedImageContainer = styled.div<StoryCircleStyleProps>`
	min-width: 95%;
	min-height: 95%;
	border-radius: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) =>
		theme[currentMode].colors.gray300};
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};
`;
