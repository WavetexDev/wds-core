import { styled } from 'styled-components';

import { RegularButtonStylingProps } from './types';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { Theme } from '../../../theme';

const currentTheme = getThemeMode();

const getBGColor = (
	variant: string,
	theme: Theme
): string => {
	return variant.includes('ghost') ||
		variant.includes('text')
		? `transparent`
		: variant.includes('primary')
		? `${theme[currentTheme].colors.primary}`
		: `${theme[currentTheme].colors.secondary}`;
};

export const RegularButton = styled.button<RegularButtonStylingProps>`
	width: 183px;
	height: 36px;
	background: ${(props) =>
		getBGColor(props.variant, props.theme)};

	box-shadow: ${(props) =>
		props.variant.includes('contained')
			? `${props.theme[currentTheme].shadows.dark}`
			: 'none'};
	border-radius: 8px;
	color: ${({ theme, variant }) =>
		theme[currentTheme].colors.dynamicTextColor(
			getBGColor(variant, theme)
		)};

	cursor: pointer;
	border: ${(props) =>
		props.variant.includes('ghost') ? `2px solid` : 0};
	border-color: ${(props) =>
		props.variant.includes('primary')
			? `${props.theme[currentTheme].colors.primary}`
			: `${props.theme[currentTheme].colors.secondary}`};

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.9;
	}
`;
