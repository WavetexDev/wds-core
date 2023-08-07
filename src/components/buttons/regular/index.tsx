import React from 'react';
import * as S from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { RegularButtonProps } from './types';

export const RegularButton = ({
	variant,
	text,
	customStyles,
	...props
}: RegularButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.RegularButton
					variant={variant}
					customStyles={customStyles}
					{...props}
				>
					<Typography
						variant={'paragraph-bold'}
						text={text}
						customStyles={{
							textTransform: 'uppercase',
						}}
					/>
				</S.RegularButton>
			</WaveclassTheme>
		</>
	);
};
