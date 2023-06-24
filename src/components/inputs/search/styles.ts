import { styled } from 'styled-components';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { InputStylingProps } from '../types';

const currentMode = getThemeMode();

export const SearchInputContainer = styled.div<InputStylingProps>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
`;

export const SearchInputWrapper = styled.div<InputStylingProps>`
	width: 100%;
	height: 40px;
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};
	border-bottom: 1px solid
		${({ theme }) => theme[currentMode].colors.gray500};
	padding-left: ${({ theme }) =>
		theme[currentMode].spacing.sp12};

	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};
`;

export const SearchInput = styled.input<InputStylingProps>`
	width: 100%;
	border: 0;
	outline: 0;

	&::placeholder {
		color: ${({ theme }) =>
			theme[currentMode].colors.gray700};
	}

	&:focus {
		outline: 0;
		box-shadow: 0px 4px 4px
				${({ theme }) =>
					theme[currentMode].shadows.light},
			inset 0px 0px 5px -1px ${({ theme }) => theme[currentMode].colors.gray500};
	}
`;

export const ErrorMessage = styled.span<InputStylingProps>`
	color: ${({ theme }) =>
		theme[currentMode].colors.error};
`;
