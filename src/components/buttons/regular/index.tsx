import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { RegularButtonProps } from './types';

export const RegularButton = ({
	variant,
	text,
	...props
}: RegularButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.RegularButton
					variant={variant}
					{...props}
				>
					<Typography
						variant={'paragraph-bold'}
						text={text}
						customStyles={{
							textTransform: 'uppercase',
						}}
					/>
				</s.RegularButton>
			</WaveclassTheme>
		</>
	);
};
