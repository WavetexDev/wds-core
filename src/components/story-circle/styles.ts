import { styled } from 'styled-components';
import { StoryCircleStyleProps } from './types';

import { toStyledComponent } from '../../utils/css-properties-to-styled-component';
import { getSchoolColors } from '../../utils/get-school-colors';

const schoolColors = getSchoolColors();

export const StoryCircleContainer = styled.div<StoryCircleStyleProps>`
	width: 60px;
	height: 60px;

	display: flex;
	align-items: center;
	justify-content: center;
	background: ${() =>
		`linear-gradient(259deg, ${schoolColors.primaryColor} 4.50%, ${schoolColors.secondaryColor} 100%)`};
	border-radius: 100%;
	box-shadow: ${({ highlight }) =>
		highlight
			? `0px 0px 6px 2px ${schoolColors.primaryColor}`
			: 0};

	img {
		max-height: 95%;
		border-radius: 100%;

		${({ customStyles }) =>
			customStyles && toStyledComponent(customStyles)}
	}
`;
