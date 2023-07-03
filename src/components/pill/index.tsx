import React from 'react';
import { WaveclassTheme } from '../../layout';
import { PillProps } from './types';
import * as s from './styles';
import { Typography } from '@waveclass/wds-core';

export const Pill = ({
	variant,
	text,
}: PillProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.PillContainer variant={variant}>
					<Typography
						variant="small-bold"
						text={text}
					/>
				</s.PillContainer>
			</WaveclassTheme>
		</>
	);
};
