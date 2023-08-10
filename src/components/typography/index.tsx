import React from 'react';
import * as S from './styles';
import { WaveclassTheme } from '../../layout';
import { TypographyProps } from './types';

export const Typography = ({
	variant,
	text,
	customStyles,
}: TypographyProps): JSX.Element => {
	const cutIdx = variant.indexOf('-');
	let tagVariant = variant.substring(0, cutIdx);
	if (tagVariant === 'paragraph') tagVariant = 'p';

	return (
		<>
			<WaveclassTheme>
				<S.Typography
					variant={variant}
					tag={tagVariant}
					as={tagVariant}
					customStyles={customStyles}
				>
					{text}
				</S.Typography>
			</WaveclassTheme>
		</>
	);
};
