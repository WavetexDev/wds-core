import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { RegularButtonProps } from './types';

export const RegularButton = ({
	variant,
	content,
}: RegularButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.RegularButton variant={variant}>
					<Typography
						variant={'paragraph-bold'}
						content={content}
					/>
				</s.RegularButton>
			</WaveclassTheme>
		</>
	);
};
