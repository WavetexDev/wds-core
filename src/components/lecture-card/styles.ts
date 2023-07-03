import styled from 'styled-components';
import { getThemeMode } from '@waveclass/wds-core';

import {
	LectureCardStyleProps,
	LectureCardThumbnailProps,
} from './types';

const currentMode = getThemeMode();

export const CardContainer = styled.article<LectureCardStyleProps>`
	display: flex;
	flex-direction: column-reverse;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};

	padding: ${({ theme }) =>
		theme[currentMode].spacing.sp16};
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray100};
	border-radius: 8px;

	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.medium};

	background: ${({ theme, variant }) =>
		variant === 'primary'
			? theme[currentMode].colors.white
			: `#45465F`};

	@media (min-width: 650px) {
		flex-direction: row;
	}
`;

export const ImageContainer = styled.section<LectureCardThumbnailProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100px;
	padding: ${({ theme }) =>
		theme[currentMode].spacing.sp6};

	color: ${({ theme }) =>
		theme[currentMode].colors.white};

	background: ${({ thumbnail, theme }) =>
		thumbnail !== ''
			? `url(${thumbnail})`
			: `${theme[currentMode].colors.secondary}`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	svg {
		position: absolute;
	}

	div {
		margin-top: auto;
		align-self: flex-end;
	}

	@media (min-width: 650px) {
		width: 180px;
	}
`;

export const LectureDetails = styled.section`
	width: calc(100% - 180px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};

	@media (min-width: 650px) {
		gap: 0;
	}
`;

export const LectureTitle = styled.main<LectureCardStyleProps>`
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};
	color: ${({ variant, theme }) =>
		variant === 'primary'
			? theme[currentMode].colors.black
			: theme[currentMode].colors.white};
`;

export const LectureFooter = styled.footer`
	display: flex;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray300};
	gap: ${({ theme }) => theme[currentMode].spacing.sp22};
`;

export const LectureDuration = styled.span`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
`;
