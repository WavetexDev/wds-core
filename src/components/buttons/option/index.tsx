import React from 'react';
import * as S from './styles';
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
				<S.OptionButton
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
				</S.OptionButton>
			</WaveclassTheme>
		</>
	);
};
