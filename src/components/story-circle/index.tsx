import React from 'react';
import * as s from './styles';
import {
	ScaleUpCenterAnimation,
	WaveclassTheme,
} from '../../layout';

import { StoryCircleProps } from './types';
import { Avatar } from '../avatar';

export const StoryCircle = ({
	img,
	name,
	highlight,
	onClick,
	customStyles,
}: StoryCircleProps): JSX.Element => {
	return (
		<>
			<ScaleUpCenterAnimation>
				<WaveclassTheme>
					<s.StoryCircleContainer
						onClick={onClick}
						highlight={highlight ?? false}
						customStyles={customStyles}
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
			</ScaleUpCenterAnimation>
		</>
	);
};
