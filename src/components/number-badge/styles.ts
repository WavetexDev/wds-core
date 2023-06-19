import { styled } from 'styled-components';
import { Theme } from '@/theme';
import { getThemeMode } from '../../utils/get-theme-mode';

const currentMode = getThemeMode();

export const NumberBadgeContainer = styled.div<{
	theme?: Theme;
}>`
	min-width: 16px;
	min-height: 16px;

	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) =>
		theme[currentMode].colors.error};
	color: ${({ theme }) =>
		theme[currentMode].colors.black};
	border-radius: 100%;
`;
