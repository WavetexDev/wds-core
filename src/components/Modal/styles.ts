import styled from 'styled-components';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

import {
	OverlayPropsT,
	ModalPropsT,
	HeaderPropsT,
} from './types';

export const Overlay = styled.div<OverlayPropsT>`
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

	${({ customStyle }) =>
		customStyle && toStyledComponent(customStyle)}
`;

export const Modal = styled.div<ModalPropsT>`
	margin: ${({ position }) =>
		position === 'center' ? '15px' : '0 0 0 auto'};
	padding: 2rem;
	width: 400px;
	height: ${({ position }) =>
		position === 'center' ? 'fit-content' : '100%'};
	background: #fff;
	border-radius: ${({ position }) =>
		position === 'center' ? '30px' : '30px 0 0 30px'};
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
	position: relative;
	overflow-y: auto;

	display: flex;
	flex-direction: column;

	${({ customStyle }) =>
		customStyle && toStyledComponent(customStyle)}
`;

export const CloseButton = styled.button`
	background: none;
	border: 0;
	cursor: pointer;
	font-size: 0;

	position: absolute;
	top: 20px;
	right: 20px;
`;

export const Header = styled.div`
	margin-bottom: 30px;
`;

export const Title = styled.strong<HeaderPropsT>`
	display: block;
	color: #001334;
	font-size: 24px;

	${({ customStyle }) =>
		customStyle && toStyledComponent(customStyle)}
`;

export const Subtitle = styled.strong<HeaderPropsT>`
	margin: 0;
	color: #001334;
	font-size: 18px;
	font-weight: 500;

	${({ customStyle }) =>
		customStyle && toStyledComponent(customStyle)}
`;
