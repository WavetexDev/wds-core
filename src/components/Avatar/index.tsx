import * as S from './styles';
import { WaveclassTheme } from '../../layout';
import React from 'react';
import { AvatarProps } from './types';

export const Avatar = ({
	size,
	img,
	name,
	online,
	customStyles,
}: AvatarProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.Container
					size={size}
					img={img}
					title={name}
					style={customStyles ?? {}}
				>
					{img ? (
						<img src={img} alt={name} />
					) : (
						name.charAt(0)
					)}

					{online && (
						<S.OnlineBadge size={size} />
					)}
				</S.Container>
			</WaveclassTheme>
		</>
	);
};
