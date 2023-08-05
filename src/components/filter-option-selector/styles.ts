import styled from 'styled-components';
import { Theme } from '../../theme';
import { getThemeMode } from '../../utils/get-theme-mode';

import { CSSProperties } from 'react';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const ModalWrapper = styled.div<{
	theme?: Theme;
	isOpen: boolean;
	customStyles?: CSSProperties;
}>`
	display: ${({ isOpen }) =>
		isOpen ? 'inline-flex' : 'none'};
	margin-top: ${({ theme }) =>
		theme[currentMode].spacing.sp16};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)};
`;

export const ModalContent = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	// TODO Check width and height
	width: 260px;
	height: 300px;
	background-color: ${({ theme }) =>
		theme[currentMode].colors.white};
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray300};
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.light};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp6};
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme[currentMode].spacing.sp6};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp12} ${theme[currentMode].spacing.sp10}`};
	overflow-y: auto;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)};
`;

export const OptionWrapper = styled.div<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};

	&:not(:first-child) {
		margin-top: ${({ theme }) =>
			theme[currentMode].spacing.sp8};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)};
`;

export const OptionCheckbox = styled.input<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	// TODO Check width and height
	appearance: none;
	width: 18px;
	height: 18px;
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray300};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp2};
	position: relative;
	transition: all 0.15s;

	&:checked {
		background-color: ${({ theme }) =>
			theme[currentMode].colors.white};
		border-color: ${({ theme }) =>
			theme[currentMode].colors.black};

		&::before {
			content: '✔';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			color: ${({ color }) => color};
			font-size: ${({ theme }) =>
				theme[currentMode].fontSizes.fs14};
		}
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)};
`;

export const OptionName = styled.span<{
	theme?: Theme;
	customStyles?: CSSProperties;
}>`
	display: inline-block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray700};
	// ! Not a dark enough color;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)};
`;
