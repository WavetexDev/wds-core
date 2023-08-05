import { styled } from 'styled-components';
import { Theme } from '../../../theme';
import { getThemeMode } from '../../../utils/get-theme-mode';

const currentMode = getThemeMode();

export const DatePickerWrapper = styled.div<{
	theme?: Theme;
}>`
	border: 1px solid
		${({ theme }) => theme[currentMode].colors.gray100};
	border-radius: ${({ theme }) =>
		theme[currentMode].spacing.sp4};
	display: inline-block;
	position: relative;
	width: 218px;
	margin-top: ${({ theme }) =>
		theme[currentMode].spacing.sp14};

	.react-datepicker-wrapper {
		width: 100%;
	}

	.react-datepicker__input-container {
		position: relative;
		width: 100%;
	}

	.react-datepicker__input-container input {
		border: none;
		padding: 10px 10px 10px 35px;
		width: 100%;
	}

	.react-datepicker__input-container input:focus {
		outline: none;
	}

	.react-datepicker__calendar-container {
		position: absolute;
		top: 40px;
		right: 0;
		z-index: 1;
	}

	.react-datepicker__input-container svg {
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
	}
`;
