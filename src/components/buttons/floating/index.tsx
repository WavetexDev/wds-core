import React from 'react';
import * as S from './styles';
import { WaveclassTheme } from '../../../layout';

import { FloatingButtonProps } from './types';

export const FloatingButton = ({
	variant,
	icon,
	customStyles,
	...props
}: FloatingButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.FloatingButton
					variant={variant}
					customStyles={customStyles}
					{...props}
				>
					{icon}
				</S.FloatingButton>
			</WaveclassTheme>
		</>
	);
};
