import React from 'react';
import { WaveclassTheme } from '../../layout';
import { PillProps } from './types';
import * as s from './styles';
import { Typography } from '../typography';

export const Pill = ({
	variant,
	text,
	customStyles,
}: PillProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.PillContainer
					customStyles={customStyles}
					variant={variant}
				>
					<Typography
						variant="small-bold"
						text={text}
					/>
				</s.PillContainer>
			</WaveclassTheme>
		</>
	);
};
