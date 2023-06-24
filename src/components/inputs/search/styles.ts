import { styled } from 'styled-components';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { Theme } from '../../../theme';

const currentMode = getThemeMode();

export const SearchInputContainer = styled.div<{
	theme?: Theme;
}>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme[currentMode].spacing.sp4};
`;

export const SearchInputWrapper = styled.div<{
	theme?: Theme;
}>`
	width: 100%;
	height: 40px;
	background: ${({ theme }) =>
		theme[currentMode].colors.white};
	color: ${({ theme }) =>
		theme[currentMode].colors.gray500};
	border-bottom: 1px solid
		${({ theme }) => theme[currentMode].colors.gray300};
	padding: 0
		${({ theme }) => theme[currentMode].spacing.sp12};

	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};

	& svg {
		max-width: 18px;
		max-height: 18px;
	}
`;

export const SearchInput = styled.input<{
	theme?: Theme;
}>`
	width: 100%;
	border: 0;
	outline: 0;

	&::placeholder {
		color: ${({ theme }) =>
			theme[currentMode].colors.gray300};
	}

	&:focus {
		outline: 0;
		box-shadow: 0px 4px 4px
				${({ theme }) =>
					theme[currentMode].shadows.light},
			inset 0px 0px 5px -1px ${({ theme }) => theme[currentMode].colors.gray500};
	}

	&:disabled {
		background: ${({ theme }) =>
			theme[currentMode].colors.gray100};
	}
`;
