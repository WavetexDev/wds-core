import styled from 'styled-components';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { InputStyleProps } from '../types';

import { toStyledComponent } from '../../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const InputContainer = styled.div<InputStyleProps>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
	width: 100%;
`;

export const InputWrapper = styled.div<InputStyleProps>`
	width: 100%;
	height: 40px;
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray300};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};
	padding: 0
		${({ theme }) => theme[currentMode].spacing.sp12};

	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};

	& svg {
		max-width: 18px;
		max-height: 18px;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const Input = styled.input<InputStyleProps>`
	width: 100%;
	border: 0;
	outline: 0;

	&::placeholder {
		color: ${({ theme }) =>
			theme[currentMode].colors.gray300};
	}

	&:focus {
		outline: 0;
		box-shadow: 0px 4px 4px
				${({ theme }) =>
					theme[currentMode].shadows.light},
			inset 0px 0px 5px -1px ${({ theme }) => theme[currentMode].colors.gray500};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ErrorMessage = styled.span<InputStyleProps>`
	color: ${({ theme }) =>
		theme[currentMode].colors.error};
`;
