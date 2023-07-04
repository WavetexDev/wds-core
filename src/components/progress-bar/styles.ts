import { styled } from 'styled-components';

import { getThemeMode } from '@waveclass/wds-core';
import { ProgressBarStyleProps } from './types';

const currentMode = getThemeMode();

export const ProgressBarContainer = styled.div<ProgressBarStyleProps>`
	display: flex;
	align-items: center;

	width: 100%;
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp12};
	background: ${({ theme }) =>
		theme[currentMode].colors.gray100};
	border-radius: 100vw;
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.medium};
`;

export const ProgressBar = styled.span<ProgressBarStyleProps>`
	display: flex;
	justify-content: ${({ percentProgress }) =>
		percentProgress > 0 ? `flex-end` : `center`};
	padding: 0
		${({ theme }) => theme[currentMode].spacing.sp8};

	position: absolute;
	width: ${({ percentProgress }) =>
		`${percentProgress}%`};
	height: ${({ theme }) =>
		theme[currentMode].spacing.sp12};
	border-radius: 100vw;
	background: ${({ theme }) =>
		theme[currentMode].colors.primary};
	color: ${({ theme }) =>
		theme[currentMode].colors.white};
`;
