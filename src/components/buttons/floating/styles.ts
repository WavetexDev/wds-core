import { styled } from 'styled-components';

import { FloatingButtonStylesProps } from './types';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { Theme } from '../../../theme';

import { toStyledComponent } from '../../../utils/css-properties-to-styled-component';

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

export const FloatingButton = styled.button<FloatingButtonStylesProps>`
	min-width: 32px;
	min-height: 32px;
	background: ${(props) =>
		getBGColor(props.variant, props.theme)};
	border: 0;
	border-radius: 100%;
	color: ${({ theme, variant }) =>
		theme[currentTheme].colors.dynamicTextColor(
			getBGColor(variant, theme)
		)};

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
