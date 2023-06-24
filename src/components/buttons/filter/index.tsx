import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { FilterButtonProps } from './types';

export const FilterButton = ({
	text,
	icon,
	...props
}: FilterButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.FilterButton {...props}>
					{icon}
					<Typography
						variant={'paragraph-bold'}
						content={text}
						customStyles={{
							textTransform: 'uppercase',
						}}
					/>
				</s.FilterButton>
			</WaveclassTheme>
		</>
	);
};
