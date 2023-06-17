import { styled } from 'styled-components';
import { Theme } from '@/theme';

export const NumberBadgeContainer = styled.div<{
	theme?: Theme;
}>`
	min-width: 16px;
	min-height: 16px;

	display: flex;
	justify-content: center;
	align-items: center;
	background: ${({ theme }) => theme.light.colors.error};
	color: ${({ theme }) => theme.light.colors.black};
	border-radius: 100%;
`;
