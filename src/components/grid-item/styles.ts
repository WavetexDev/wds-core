import styled from 'styled-components';
import { Theme } from '@/theme';
import { getThemeMode } from '../../utils/get-theme-mode';
import { Variant } from './types';

const currentMode = getThemeMode();

export const GridItem = styled.div<{
	theme?: Theme;
	variant: Variant;
}>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme[currentMode].spacing.sp8};

	background-color: ${({ theme }) =>
		theme[currentMode].colors
			.black}; // TODO Remove this

	width: ${({ variant }) =>
		(variant === 'col-1' && '8.3%') ||
		(variant === 'col-2' && '16.6%') ||
		(variant === 'col-3' && '24.9%') ||
		(variant === 'col-4' && '33.2%') ||
		(variant === 'col-5' && '41.5%') ||
		(variant === 'col-6' && '49.8%') ||
		(variant === 'col-7' && '58.1%') ||
		(variant === 'col-8' && '66.4%') ||
		(variant === 'col-9' && '74.7%') ||
		(variant === 'col-10' && '83.0%') ||
		(variant === 'col-11' && '91.3%') ||
		(variant === 'col-12' && '99.6%') ||
		(variant === 'row' && '100%') ||
		'100%'};

	height: 50px;
`;
