import React from 'react';
import { GridItemProps } from './types';
import { WaveclassTheme } from '../../layout';

import * as S from './styles';

export const GridItem = ({
	variant,
	id,
	customStyles,
	children,
}: GridItemProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.GridItem
					id={id}
					variant={variant}
					customStyles={customStyles}
				>
					{children}
				</S.GridItem>
			</WaveclassTheme>
		</>
	);
};
