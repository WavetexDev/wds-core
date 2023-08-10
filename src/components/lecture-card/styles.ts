import styled from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

import {
	CardVariantProps,
	DefaultStyleProps,
	FavoriteProps,
	LectureCardThumbnailProps,
} from './types';
import { getSchoolColors } from '../../utils/get-school-colors';

const currentMode = getThemeMode();
const schoolColors = getSchoolColors();

export const CardContainer = styled.article<CardVariantProps>`
	width: 100%;
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

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
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
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};

	color: ${({ theme }) =>
		theme[currentMode].colors.white};

	background: ${({ thumbnail, theme }) =>
		thumbnail !== ''
			? `linear-gradient(rgba(28, 18, 36, 0) 22.92%, rgb(28, 18, 36) 100%) 0% 0% / cover, url('${thumbnail}')`
			: `${schoolColors.secondaryColor}`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
		transition: 0.4s ease;
	}

	svg {
		transform: ${({ hasPill, theme }) =>
			hasPill ? `translate(0, 130%)` : null};
	}

	div {
		margin-top: auto;
		align-self: flex-end;
	}

	@media (min-width: 650px) {
		width: 180px;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const LectureDetails = styled.section<DefaultStyleProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};

	@media (min-width: 650px) {
		width: calc(100% - 180px);
		gap: 0;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const LectureTitle = styled.header<CardVariantProps>`
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};
	color: ${({ variant, theme }) =>
		variant === 'primary'
			? theme[currentMode].colors.black
			: theme[currentMode].colors.white};
	cursor: pointer;

	&:hover {
		opacity: 0.8;
		transition: 0.4s ease;
		text-decoration: underline;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const Avaliable = styled.span<DefaultStyleProps>`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};
	justify-content: flex-end;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const LectureFooter = styled.footer<DefaultStyleProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const LectureFineDetails = styled.span<DefaultStyleProps>`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp22};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const LectureDuration = styled.span<DefaultStyleProps>`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const FavoriteIconContainer = styled.span<FavoriteProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme, isFavorite }) =>
		isFavorite
			? theme[currentMode].colors.warning
			: theme[currentMode].colors.gray300};
	cursor: pointer;

	&:hover {
		opacity: 0.8;
		transition: 0.4s ease;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
