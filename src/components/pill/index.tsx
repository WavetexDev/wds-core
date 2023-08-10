import React from 'react';
import { WaveclassTheme } from '../../layout';
import { PillProps } from './types';
import * as S from './styles';
import { Typography } from '../typography';

export const Pill = ({
	variant,
	text,
	customStyles,
}: PillProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.PillContainer
					customStyles={customStyles}
					variant={variant}
				>
					<Typography
						variant="small-bold"
						text={text}
					/>
				</S.PillContainer>
			</WaveclassTheme>
		</>
	);
};
