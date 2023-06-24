import { styled } from 'styled-components';
import { Theme } from '../../../theme';
import { getThemeMode } from '../../../utils/get-theme-mode';

const currentTheme = getThemeMode();

export const FilterButton = styled.button<{
	theme?: Theme;
}>`
	width: 100%;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme[currentTheme].spacing.sp8};

	color: ${(props) =>
		props.theme[currentTheme].colors.black};

	border: 1px solid
		${(props) =>
			props.theme[currentTheme].colors.gray300};
	box-shadow: ${(props) =>
		props.theme[currentTheme].shadows.medium};
	border-radius: 20px;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
		transition: 0.4s ease;
	}

	& svg {
		max-width: 18px;
		max-height: 18px;
	}
`;
