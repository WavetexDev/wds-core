import styled from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';

import {
	CardVariantProps,
	FavoriteProps,
	LectureCardThumbnailProps,
} from './types';

const currentMode = getThemeMode();

export const CardContainer = styled.article<CardVariantProps>`
	display: flex;
	flex-direction: column-reverse;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};

	padding: ${({ theme }) =>
		theme[currentMode].spacing.sp16};
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray100};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};

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
			? `url('${thumbnail}')`
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
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};

	@media (min-width: 650px) {
		width: calc(100% - 180px);
		gap: 0;
	}
`;

export const LectureTitle = styled.header<CardVariantProps>`
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};
	color: ${({ variant, theme }) =>
		variant === 'primary'
			? theme[currentMode].colors.black
			: theme[currentMode].colors.white};
`;

export const Avaliable = styled.span`
	display: flex;
	justify-content: flex-end;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray300};
`;

export const LectureFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray300};
`;

export const LectureFineDetails = styled.span`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp22};
`;

export const LectureDuration = styled.span`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
`;

export const FavoriteIconContainer = styled.span<FavoriteProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme, isFavorite }) =>
		isFavorite
			? theme[currentMode].colors.warning
			: theme[currentMode].colors.gray300};
`;
