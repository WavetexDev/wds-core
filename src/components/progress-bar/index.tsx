import React from 'react';
import { ProgressBarProps } from './types';

import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';

export const ProgressBar = ({
	percentProgress,
	customStyles,
}: ProgressBarProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.ProgressBarContainer
					customStyles={customStyles}
				>
					<s.ProgressBar
						customStyles={customStyles}
						percentProgress={percentProgress}
					>
						<Typography
							variant="small-bold"
							text={`${percentProgress}%`}
						/>
					</s.ProgressBar>
				</s.ProgressBarContainer>
			</WaveclassTheme>
		</>
	);
};
