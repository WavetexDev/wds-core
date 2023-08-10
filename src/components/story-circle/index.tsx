import React from 'react';
import * as S from './styles';
import { WaveclassTheme } from '../../layout';

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
			<WaveclassTheme>
				<S.StoryCircleContainer
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
				</S.StoryCircleContainer>
			</WaveclassTheme>
		</>
	);
};
