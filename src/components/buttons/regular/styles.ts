import { styled } from 'styled-components';

import { getThemeMode } from '../../../utils/get-theme-mode';

import { RegularButtonStylingProps } from './types';
import { Theme } from '../../../theme';

import { toStyledComponent } from '../../../utils/css-properties-to-styled-component';
import { getSchoolColors } from '../../../utils/get-school-colors';

const currentTheme = getThemeMode();
const schoolColors = getSchoolColors();

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
		return `${theme[currentTheme].colors.error}`;
	} else if (variant.includes('primary')) {
		return `${schoolColors.primaryColor}`;
	} else if (variant.includes('secondary')) {
		return `${schoolColors.secondaryColor}`;
	} else if (variant.includes('success')) {
		return `${theme[currentTheme].colors.success}`;
	} else if (variant.includes('warning')) {
		return `${theme[currentTheme].colors.warning}`;
	} else {
		return `${theme[currentTheme].colors.white}`;
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
		return `${theme[currentTheme].colors.error}`;
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
		return schoolColors.primaryColor;
	} else if (variant.includes('danger')) {
		return `${theme[currentTheme].colors.error}`;
	} else {
		return schoolColors.secondaryColor;
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

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
