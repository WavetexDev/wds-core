import React from 'react';
import * as S from './styles';

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
				<S.NumberBadgeContainer
					customStyles={customStyles}
				>
					<Typography
						variant={'small-regular'}
						text={value.toString()}
					/>
				</S.NumberBadgeContainer>
			</WaveclassTheme>
		</>
	);
};
