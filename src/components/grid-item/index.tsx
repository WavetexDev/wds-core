import React from 'react';
import { GridItemProps } from './types';
import { WaveclassTheme } from '../../layout';

import * as s from './styles';

export const GridItem = ({
	variant,
	id,
	customStyles,
}: GridItemProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.GridItem
					id={id}
					variant={variant}
					style={customStyles ?? {}}
				></s.GridItem>
			</WaveclassTheme>
		</>
	);
};
