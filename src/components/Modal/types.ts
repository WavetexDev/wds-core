import React from 'react';
import { Theme } from '../../theme';

// componente
export type Props = {
	isShowing: boolean;
	position: ModalPosition;
	onClose: () => void;
	children: React.ReactNode;
	size?: ModalSize;
	title?: string;
	subtitle?: string;
	confirmButton?: ButtonProps;
	cancelButton?: ButtonProps;
	dangerButton?: ButtonProps;
	customStyles?: CustomStylesProps;
};

export type ModalPosition = 'center' | 'right';

export type ModalSize = 'sm' | 'md' | 'lg';

export type ButtonProps = {
	show?: boolean;
	disabled?: boolean;
	text?: string;
	action?: () => void;
};

export type CustomStylesProps = {
	overlay?: React.CSSProperties;
	modal?: React.CSSProperties;
	title?: React.CSSProperties;
	subtitle?: React.CSSProperties;
	childrenContainer?: React.CSSProperties;
	confirmButton?: React.CSSProperties;
	cancelButton?: React.CSSProperties;
	dangerButton?: React.CSSProperties;
};

// estilização
export type DefaultStyleProps = {
	theme?: Theme;
	customStyles?: React.CSSProperties;
};

export type OverlayProps = DefaultStyleProps & {
	position: ModalPosition;
	isShowing: boolean;
};

export type ModalProps = DefaultStyleProps & {
	size: ModalSize;
	position: ModalPosition;
};
