import { styled } from 'styled-components';

import { getThemeMode } from '../../utils/get-theme-mode';
import { convertHexToRgb } from '../../utils/convert-hex-to-rgba';

import { ModuleCardStyleProps } from './types';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';
import { getSchoolColors } from '../../utils/get-school-colors';

const currentMode = getThemeMode();
const schoolColors = getSchoolColors();

export const ModuleCardContainer = styled.article<ModuleCardStyleProps>`
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp8};
	box-shadow: ${({ theme }) =>
		theme[currentMode].shadows.medium};
	border: 1px solid;
	border-color: ${({ theme, isComplete }) =>
		isComplete
			? `${theme[currentMode].colors.success}`
			: `${theme[currentMode].colors.gray100}`};

	display: flex;
	flex-direction: column;
	justify-content: unset;

	@media (min-width: 650px) {
		flex-direction: row;
		justify-content: space-between;
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ModuleMainDetails = styled.main<ModuleCardStyleProps>`
	height: 100%;
	min-width: 60%;
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp26};
	padding: ${({ theme }) =>
		`${theme[currentMode].spacing.sp16} ${theme[currentMode].spacing.sp16}`};

	@media (min-width: 650px) {
		padding: ${({ theme }) =>
			`${theme[currentMode].spacing.sp20} ${theme[currentMode].spacing.sp24}`};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ModulePositionContainer = styled.aside<ModuleCardStyleProps>`
	min-width: 50px;
	min-height: 50px;
	max-width: 50px;
	max-height: 50px;
	color: ${({ theme }) => schoolColors.primaryColor};
	background: ${({ theme }) =>
		convertHexToRgb(schoolColors.primaryColor, 0.2)};
	border-radius: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ModuleDetailsContainer = styled.main<ModuleCardStyleProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10%;
	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ModuleDetailsFooter = styled.footer<ModuleCardStyleProps>`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ModuleDurationDisplay = styled.span<ModuleCardStyleProps>`
	display: flex;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};
	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ExpanderContainer = styled.section<ModuleCardStyleProps>`
	color: ${({ theme }) =>
		theme[currentMode].colors.gray700};

	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: ${({ theme }) =>
		`0 ${theme[currentMode].spacing.sp22} ${theme[currentMode].spacing.sp6}`};

	@media (min-width: 650px) {
		padding: ${({ theme }) =>
			`${theme[currentMode].spacing.sp32} ${theme[currentMode].spacing.sp32} ${theme[currentMode].spacing.sp10} 0`};
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;

export const ExpanderIconContainer = styled.div<ModuleCardStyleProps>`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 650px) {
		align-items: flex-end;
		flex-direction: column;
	}

	svg {
		align-self: flex-end;

		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
