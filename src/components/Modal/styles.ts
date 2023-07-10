import styled from 'styled-components';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';
import { getThemeMode } from '../../utils/get-theme-mode';

import {
	DefaultStyleProps,
	OverlayProps,
	ModalProps,
	ModalSize,
} from './types';
import { theme } from '../../theme';

const currentThemeMode = getThemeMode();
const modalSizes: Record<ModalSize, string> = {
	sm: '500px',
	md: '700px',
	lg: '900px',
};

export const Overlay = styled.div<OverlayProps>`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.25);

	display: ${({ isShowing }) =>
		isShowing ? 'flex' : 'none'};
	${({ position }) =>
		position === 'center' &&
		`align-items: center;
		justify-content: center;`}

	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const Modal = styled.div<ModalProps>`
	margin: ${({ position, theme }) => {
		const spacing =
			theme[currentThemeMode].spacing.sp16;

		return position === 'center'
			? spacing
			: '0 0 0 auto';
	}};
	padding: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp30};
	width: ${({ size }) => modalSizes[size]};
	height: ${({ position }) =>
		position === 'center' ? 'fit-content' : '100%'};
	max-height: ${({ position }) =>
		position === 'center' ? '75%' : '100%'};
	background: #fff;
	border-radius: ${({ position, theme }) => {
		const spacing =
			theme[currentThemeMode].spacing.sp30;

		return position === 'center'
			? spacing
			: `${spacing} 0 0 ${spacing}`;
	}};
	box-shadow: ${({ theme }) =>
		theme[currentThemeMode].shadows.medium};
	position: relative;

	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100%;
		${({ position }) =>
			position === 'right' && 'border-radius: 0;'};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const CloseButton = styled.button<DefaultStyleProps>`
	background: none;
	border: 0;
	cursor: pointer;
	font-size: 0;

	position: absolute;
	top: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp20};
	right: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp20};
`;

export const Header = styled.div``;

export const ChildrenContainer = styled.div<DefaultStyleProps>`
	margin: ${({ theme }) =>
			theme[currentThemeMode].spacing.sp20}
		0 auto;
	padding-right: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp6};
	padding-bottom: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp4};
	overflow-y: auto;

	display: flex;
	flex-direction: column;

	&::-webkit-scrollbar {
		width: ${({ theme }) =>
			theme[currentThemeMode].spacing.sp8};
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) =>
			theme[currentThemeMode].colors.gray300};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ButtonWrapper = styled.div<DefaultStyleProps>`
	margin-top: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp30};
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: ${({ theme }) =>
		theme[currentThemeMode].spacing.sp16};
`;

export const ActionButtonStyles = {
	maxWidth: '120px',
};

export const CancelButtonStyles = {
	...ActionButtonStyles,
	borderColor: theme[currentThemeMode].colors.gray300,
	color: theme[currentThemeMode].colors.gray500,
};
