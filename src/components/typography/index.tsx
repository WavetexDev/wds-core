import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { TypographyProps } from './types';

export const Typography = ({
	variant,
	content,
}: TypographyProps): JSX.Element => {
	let cut = variant.indexOf('-'); // TODO Rename variable
	let tagVariant = variant.substring(0, cut);

	return (
		<>
			<WaveclassTheme>
				<s.Typography
					variant={variant}
					tag={tagVariant}
				>
					{content}
				</s.Typography>
			</WaveclassTheme>
		</>
	);
};
