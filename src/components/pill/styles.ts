import { styled } from 'styled-components';
import { PillStyleProps } from './types';

import { getThemeMode } from '../../utils/get-theme-mode';
import { Theme } from '../../theme';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

const getBGColor = (
	variant: string,
	theme: Theme
): string => {
	if (variant.includes('outline')) return `transparent`;
	switch (variant) {
		case 'success':
			return theme[currentMode].colors.success;
		case 'warning':
			return theme[currentMode].colors.warning;
		case 'error':
			return theme[currentMode].colors.error;
		case 'info':
			return theme[currentMode].colors.info;
		case 'primary':
			return theme[currentMode].colors.primary;
		case 'secondary':
			return theme[currentMode].colors.secondary;

		default:
			return theme[currentMode].colors.white;
	}
};

const getColor = (
	variant: string,
	theme: Theme
): string => {
	return variant.includes('outline')
		? `theme[currentMode].colors.black`
		: theme[currentMode].colors.dynamicTextColor(
				getBGColor(variant, theme)
		  );
};

export const PillContainer = styled.div<PillStyleProps>`
	width: auto;
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp20};
	padding: ${({ theme }) =>
		theme[currentMode].spacing.sp4};

	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp20};
	border: 1px solid;
	border-color: ${({ variant, theme }) =>
		(variant === 'success-outline' &&
			theme[currentMode].colors.success) ||
		(variant === 'warning-outline' &&
			theme[currentMode].colors.warning) ||
		(variant === 'error-outline' &&
			theme[currentMode].colors.error) ||
		(variant === 'info-outline' &&
			theme[currentMode].colors.info) ||
		'transparent'};
	color: ${({ variant, theme }) =>
		getColor(variant, theme)};
	background-color: ${({ variant, theme }) =>
		getBGColor(variant, theme)};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
