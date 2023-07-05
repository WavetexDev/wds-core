import { styled } from 'styled-components';

import { getThemeMode } from '../../utils/get-theme-mode';
import { ModuleCardStyleProps } from './types';

const currentMode = getThemeMode();

const convertHexToRgb = (
	hex: string,
	opacity: number
): string => {
	// Remove the '#' character if present
	const cleanHex = hex.replace('#', '');

	// Parse the hexadecimal values
	const r = parseInt(cleanHex.substring(0, 2), 16);
	const g = parseInt(cleanHex.substring(2, 4), 16);
	const b = parseInt(cleanHex.substring(4, 6), 16);

	// Construct and return the RGBA string
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const ModuleCardContainer = styled.article<ModuleCardStyleProps>`
	height: 90px;
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp20} ${theme[currentMode].spacing.sp24}`};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.medium};

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ModuleMainDetails = styled.main`
	height: 100%;

	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp26};
`;

export const ModulePositionContainer = styled.aside<ModuleCardStyleProps>`
	width: 50px;
	color: ${({ theme }) =>
		theme[currentMode].colors.primary};
	background: ${({ theme }) =>
		convertHexToRgb(
			theme[currentMode].colors.primary,
			0.2
		)};
	border-radius: 100%; // Creates a circle

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ModuleDetailsContainer = styled.main<ModuleCardStyleProps>`
	display: flex;
	flex-direction: column;
`;

export const ModuleDetailsTitle = styled.span<ModuleCardStyleProps>``;

export const ModuleDetailsFooter = styled.footer<ModuleCardStyleProps>`
	display: flex;
	justify-content: space-between;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray300};
	margin-top: auto;
`;

export const ExpanderContainer = styled.section<ModuleCardStyleProps>`
	color: ${({ theme }) =>
		theme[currentMode].colors.gray700};
`;
