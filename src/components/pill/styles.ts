import { styled } from 'styled-components';
import { PillStyleProps } from './types';

import { getThemeMode } from '@waveclass/wds-core';
import { Theme } from '../../theme';

const currentMode = getThemeMode();

const getBGColor = (
	variant: string,
	theme: Theme
): string => {
	return variant.includes('outline')
		? `transparent`
		: (variant === 'success' &&
				theme[currentMode].colors.success) ||
				(variant === 'warning' &&
					theme[currentMode].colors.warning) ||
				(variant === 'error' &&
					theme[currentMode].colors.error) ||
				(variant === 'info' &&
					theme[currentMode].colors.info) ||
				(variant === 'primary' &&
					theme[currentMode].colors.primary) ||
				(variant === 'secondary' &&
					theme[currentMode].colors.secondary) ||
				'white';
};

const getColor = (
	variant: string,
	theme: Theme
): string => {
	return variant.includes('outline')
		? `black`
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
`;
