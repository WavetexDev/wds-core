import styled from 'styled-components';

import { TypographyStylesProps } from './types';
import { toStyledComponent } from '../../utils/css-properties-to-styled-component';

export const Typography = styled.div<TypographyStylesProps>`
	font-weight: ${({ variant }) =>
		variant.includes('bold') ? 'bold' : 'normal'};

	font-style: ${({ variant }) =>
		variant.includes('italic') ? 'italic' : 'normal'};

	font-size: ${({ tag }) =>
		(tag === 'h1' && '32px') ||
		(tag === 'h2' && '26px') ||
		(tag === 'h3' && '20px') ||
		(tag === 'h4' && '16px') ||
		(tag === 'h5' && '14px') ||
		(tag === 'h6' && '12px') ||
		(tag === 'small' && '10px') ||
		(tag === 'p' && '12px') ||
		(tag === 'label' && '12px') ||
		'1rem'};

	margin: 0 0 0 0;

	${({ customStyles }) =>
		customStyles && toStyledComponent(customStyles)}
`;
