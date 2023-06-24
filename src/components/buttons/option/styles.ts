import { styled } from 'styled-components';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { Theme } from '../../../theme';

const currentMode = getThemeMode();

export const OptionButton = styled.button<{
	theme?: Theme;
}>`
	width: 100%;
	height: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};

	color: ${(props) =>
		props.theme[currentMode].colors.black};

	border: 1px solid
		${(props) =>
			props.theme[currentMode].colors.gray300};
	box-shadow: ${(props) =>
		props.theme[currentMode].shadows.dark};
	border-radius: 20px;

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.4;
	}
`;
