import React from 'react';
import * as s from './styles';

import { Typography } from '../typography';
import { WaveclassTheme } from '../../layout';
import { NumberBadgeProps } from './types';

export const NumberBadge = ({
	value,
	customStyles,
}: NumberBadgeProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.NumberBadgeContainer
					customStyles={customStyles}
				>
					<Typography
						variant={'small-regular'}
						text={value.toString()}
					/>
				</s.NumberBadgeContainer>
			</WaveclassTheme>
		</>
	);
};
