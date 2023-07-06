import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';

import { StoryCircleProps } from './types';
import { Typography } from '../typography';

export const StoryCircle = ({
	profilePictureUrl,
	username,
}: StoryCircleProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.StoryCircleContainer>
					{profilePictureUrl ? (
						<img
							src={profilePictureUrl}
							alt=""
						/>
					) : (
						<s.UndefinedImageContainer>
							<Typography
								variant="h3-bold"
								text={`${username
									.substring(0, 1)
									.toUpperCase()}`}
							/>
						</s.UndefinedImageContainer>
					)}
				</s.StoryCircleContainer>
			</WaveclassTheme>
		</>
	);
};
