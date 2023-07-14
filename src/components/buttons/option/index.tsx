import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { OptionButtonProps } from './types';

export const OptionButton = ({
	text,
	icon,
	customStyles,
	...props
}: OptionButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.OptionButton
					customStyles={customStyles}
					{...props}
				>
					{icon}
					<Typography
						variant={'paragraph-bold'}
						text={text}
						customStyles={{
							textTransform: 'uppercase',
						}}
					/>
				</s.OptionButton>
			</WaveclassTheme>
		</>
	);
};
