import { styled } from 'styled-components';
import { CourseBannerStyleProps } from './types';

import { getThemeMode } from '../../utils/get-theme-mode';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

const currentMode = getThemeMode();

export const BannerContainer = styled.div<CourseBannerStyleProps>`
	width: 250px;
	height: 320px;
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp10};

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	color: ${({ theme }) =>
		theme[currentMode].colors.white};
	padding: ${({ theme }) =>
		theme[currentMode].spacing.sp14};

	background: ${({ banner }) =>
		banner !== ''
			? `linear-gradient(
				rgba(28, 18, 36, 0) 22.92%,
				rgb(28, 18, 36) 100%
			)
			0% 0% / cover,
		url('${banner}')`
			: `linear-gradient(180deg, #071834 0%, rgba(23, 54, 105, 0.79) 100%)`};
	background-repeat: no-repeat;
	background-size: cover;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
