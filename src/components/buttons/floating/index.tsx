import React from 'react';
import * as s from './styles';
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
				<s.FloatingButton
					variant={variant}
					customStyles={customStyles}
					{...props}
				>
					{icon}
				</s.FloatingButton>
			</WaveclassTheme>
		</>
	);
};
