import React from 'react';
import { PaperProps } from './types';
import { WaveclassTheme } from '../../layout';

import { PaperContainer } from './styles';

export function Paper({
	children,
	customStyles,
}: PaperProps) {
	return (
		<>
			<WaveclassTheme>
				<PaperContainer customStyles={customStyles}>
					{children}
				</PaperContainer>
			</WaveclassTheme>
		</>
	);
}
