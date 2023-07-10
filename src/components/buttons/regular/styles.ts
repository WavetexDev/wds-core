import { styled } from 'styled-components';

import { getThemeMode } from '../../../utils/get-theme-mode';

import { RegularButtonStylingProps } from './types';
import { Theme } from '../../../theme';

const currentTheme = getThemeMode();

const getBGColor = (
	variant: string,
	theme: Theme
): string => {
	if (
		variant.includes('ghost') ||
		variant.includes('text')
	) {
		return 'transparent';
	} else if (variant.includes('danger')) {
		return '#FF0000';
	} else if (variant.includes('primary')) {
		return `${theme[currentTheme].colors.primary}`;
	} else {
		return `${theme[currentTheme].colors.secondary}`;
	}
};

const getColor = (
	variant: string,
	theme: Theme
): string => {
	if (
		(variant.includes('ghost') ||
			variant.includes('text')) &&
		!variant.includes('danger')
	) {
		return '#000';
	} else if (
		(variant.includes('ghost') ||
			variant.includes('text')) &&
		variant.includes('danger')
	) {
		return '#FF0000';
	} else {
		return theme[currentTheme].colors.dynamicTextColor(
			getBGColor(variant, theme)
		);
	}
};

const getBorderColor = (
	variant: string,
	theme: Theme
): string => {
	if (variant.includes('primary')) {
		return theme[currentTheme].colors.primary;
	} else if (variant.includes('danger')) {
		return '#FF0000';
	} else {
		return theme[currentTheme].colors.secondary;
	}
};

export const RegularButton = styled.button<RegularButtonStylingProps>`
	width: 100%;
	height: 36px;
	background: ${(props) =>
		getBGColor(props.variant, props.theme)};

	box-shadow: ${(props) =>
		props.variant.includes('contained')
			? `${props.theme[currentTheme].shadows.dark}`
			: 'none'};
	border-radius: 8px;
	color: ${({ theme, variant }) =>
		getColor(variant, theme)};

	cursor: pointer;
	border: ${(props) =>
		props.variant.includes('ghost') ? `2px solid` : 0};
	border-color: ${(props) =>
		getBorderColor(props.variant, props.theme)};

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.9;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
`;
