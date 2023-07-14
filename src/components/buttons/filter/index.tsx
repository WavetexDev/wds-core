import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { Typography } from '../../typography';

import { FilterButtonProps } from './types';

export const FilterButton = ({
	text,
	icon,
	customStyles,
	...props
}: FilterButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.FilterButton
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
				</s.FilterButton>
			</WaveclassTheme>
		</>
	);
};
