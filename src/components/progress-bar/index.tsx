import React from 'react';
import { ProgressBarProps } from './types';

import * as S from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';

export const ProgressBar = ({
	percentProgress,
	customStyles,
}: ProgressBarProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.ProgressBarContainer
					customStyles={customStyles}
				>
					<S.ProgressBar
						customStyles={customStyles}
						percentProgress={percentProgress}
					>
						<Typography
							variant="small-bold"
							text={`${percentProgress}%`}
						/>
					</S.ProgressBar>
				</S.ProgressBarContainer>
			</WaveclassTheme>
		</>
	);
};
