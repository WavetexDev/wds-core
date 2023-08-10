import React from 'react';
import { CardProps } from './types';
import { WaveclassTheme } from '../../layout';

import { getThemeMode } from '../../utils/get-theme-mode';
import { theme } from '../../theme';

import { CardContainer } from './styles';
import { Typography } from '../typography';
import { GridItem } from '../grid-item';

const currentMode = getThemeMode();

export function Card({
	title,
	text,
	message,
	customStyles,
}: CardProps) {
	return (
		<>
			<WaveclassTheme>
				<CardContainer customStyles={customStyles}>
					<GridItem
						variant="row"
						customStyles={{
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography
							variant="h4-bold"
							text={title}
						/>
						<Typography
							variant="h6-regular"
							text={text}
						/>
					</GridItem>

					<Typography
						variant="small-regular"
						text={message}
						customStyles={{
							color: theme[currentMode].colors
								.gray300,
						}}
					/>
				</CardContainer>
			</WaveclassTheme>
		</>
	);
}
