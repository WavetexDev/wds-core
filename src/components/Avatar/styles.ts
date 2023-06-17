import styled from 'styled-components';
import { AvatarSize } from './types';
import { Theme } from '../../theme';
import { getThemeMode } from '../../utils/get-theme-mode';

const currentThemeMode = getThemeMode();

const getWidth = (size: AvatarSize): number => {
	switch (size) {
		case 'sm':
			return 30;
		case 'md':
			return 45;
		case 'lg':
			return 70;
		case 'xl':
			return 90;
		default:
			return 30;
	}
};

const getHeight = (size: AvatarSize): number => {
	switch (size) {
		case 'sm':
			return 30;
		case 'md':
			return 45;
		case 'lg':
			return 70;
		case 'xl':
			return 90;
		default:
			return 30;
	}
};

const getFontSize = (
	size: AvatarSize,
	theme: any
): string => {
	const fontSizes = theme[currentThemeMode].fontSizes;
	switch (size) {
		case 'sm':
			return fontSizes.fs20;
		case 'md':
			return fontSizes.fs24;
		case 'lg':
			return fontSizes.fs32;
		case 'xl':
			return fontSizes.fs40;
		default:
			return fontSizes.fs20;
	}
};

export const Container = styled.span<{
	size: AvatarSize;
	img?: string;
	theme?: Theme;
}>`
	display: block;
	position: relative;
	background-color: ${({ theme }) =>
		theme[currentThemeMode].colors.gray100};
	border: 2px solid
		${({ theme }) =>
			theme[currentThemeMode].colors.primary};
	width: ${({ size }) => getWidth(size)}px;
	min-width: ${({ size }) => getWidth(size)}px;
	height: ${({ size }) => getHeight(size)}px;
	min-height: ${({ size }) => getHeight(size)}px;
	border-radius: 50%;
	font-size: ${({ size, theme }) =>
		getFontSize(size, theme)};
	color: ${({ theme }) =>
		theme[currentThemeMode].colors.gray500};

	${({ img }) => {
		if (!img)
			return `
				display: flex;
				justify-content: center;
				align-items: center;
				text-transform: uppercase;
			`;
		else
			return `
			& img {
				width: 100%;
				max-width: 100%;
				min-width: 100%;
				height: 100%;
				min-height: 100%;
				max-height: 100%;
				border-radius: 50%;
			}
		`;
	}}
`;

export const OnlineBadge = styled.span<{
	size: AvatarSize;
	theme?: Theme;
}>`
	width: ${({ size }) => getWidth(size) * 0.2}px;
	min-width: ${({ size }) => getWidth(size) * 0.2}px;
	height: ${({ size }) => getHeight(size) * 0.2}px;
	min-height: ${({ size }) => getHeight(size) * 0.2}px;
	background-color: ${({ theme }) =>
		theme[currentThemeMode].colors.success};
	border-radius: 50%;
	position: absolute;
	right: -4%;
	top: 8%;
`;
