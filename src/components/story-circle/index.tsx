import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';

import { StoryCircleProps } from './types';
import { Avatar } from '../avatar';

export const StoryCircle = ({
	profilePictureUrl,
	username,
	highlight,
}: StoryCircleProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.StoryCircleContainer
					highlight={highlight ?? false}
				>
					<Avatar
						size="md"
						name={username}
						img={profilePictureUrl}
						customStyles={{
							border: 0,
							width: '55px',
							height: '55px',
						}}
					/>
				</s.StoryCircleContainer>
			</WaveclassTheme>
		</>
	);
};
