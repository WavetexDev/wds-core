import styled from 'styled-components';
import { Theme } from '../../../theme';
import { getThemeMode } from '../../../utils/get-theme-mode';

const currentMode = getThemeMode();

export const InputContainer = styled.div<{
	theme: Theme;
}>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};
`;

export const InputWrapper = styled.div<{
	theme: Theme;
}>`
	width: 100%;
	height: 40px;
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray500};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};
	padding-left: ${({ theme }) =>
		theme[currentMode].spacing.sp12};

	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};
`;

export const Input = styled.input<{
	theme: Theme;
}>`
	width: 100%;
	height: 100%;
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

export const ErrorMessage = styled.span<{
	theme: Theme;
}>`
	color: ${({ theme }) =>
		theme[currentMode].colors.error};
`;
