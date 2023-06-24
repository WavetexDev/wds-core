import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { FloatingButtonProps } from './types';

export const FloatingButton = ({
	variant,
	icon,
	...props
}: FloatingButtonProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.FloatingButton
					variant={variant}
					{...props}
				>
					{icon}
				</s.FloatingButton>
			</WaveclassTheme>
		</>
	);
};
