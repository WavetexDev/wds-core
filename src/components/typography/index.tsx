import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { TypographyProps } from './types';

export const Typography = ({
	variant,
	content,
}: TypographyProps): JSX.Element => {
	const cutIdx = variant.indexOf('-');
	const tagVariant = variant.substring(0, cutIdx);

	return (
		<>
			<WaveclassTheme>
				<s.Typography
					variant={variant}
					tag={tagVariant}
					as={tagVariant}
				>
					{content}
				</s.Typography>
			</WaveclassTheme>
		</>
	);
};
