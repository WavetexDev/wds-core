import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';

import { StoryCircleProps } from './types';
import { Avatar } from '../avatar';

export const StoryCircle = ({
	img,
	name,
	highlight,
	onClick,
}: StoryCircleProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.StoryCircleContainer
					onClick={onClick}
					highlight={highlight ?? false}
				>
					<Avatar
						size="md"
						name={name}
						img={img}
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
