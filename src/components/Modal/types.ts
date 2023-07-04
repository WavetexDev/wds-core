import React from 'react';

export type ModalPositionT = 'center' | 'right';

// componente
export type PropsT = {
	position: ModalPositionT;
	isShowing: boolean;
	title?: string;
	subtitle?: string;
	onClose: () => void;
	children: React.ReactNode;
	customStyle?: {
		overlay?: React.CSSProperties;
		modal?: React.CSSProperties;
		title?: React.CSSProperties;
		subtitle?: React.CSSProperties;
	};
};

// estilização
export type ModalPropsT = {
	position: ModalPositionT;
	customStyle?: React.CSSProperties;
};

export type OverlayPropsT = ModalPropsT & {
	isShowing: boolean;
};

export type HeaderPropsT = {
	customStyle?: React.CSSProperties;
};
