import React from 'react';
import * as S from './styles';
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
				<S.FilterButton
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
				</S.FilterButton>
			</WaveclassTheme>
		</>
	);
};
