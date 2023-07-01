import styled from 'styled-components';
import { getThemeMode } from '../../utils/get-theme-mode';

const currentMode = getThemeMode();

export const CardContainer = styled.article`
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

	@media (min-width: 650px) {
		flex-direction: row;
	}
`;

export const ImageContainer = styled.section`
	width: 100%;
	height: 100px;

	img {
		width: 100%;
		max-height: 100%;
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

export const LectureTitle = styled.main`
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp16};
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
