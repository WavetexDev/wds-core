import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { OptionButtonProps } from './types';

export const OptionButton = ({
	text,
	icon,
	...props
}: OptionButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.OptionButton {...props}>
					{icon}
					<Typography
						variant={'paragraph-bold'}
						content={text}
					/>
				</s.OptionButton>
			</WaveclassTheme>
		</>
	);
};
