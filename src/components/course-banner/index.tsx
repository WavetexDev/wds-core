import React from 'react';
import { CourseBannerProps } from './types';
import * as S from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';

export const CourseBanner = ({
	courseName,
	bannerImageUrl,
	courseId,
	customStyles,
	onClick,
}: CourseBannerProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.BannerContainer
					onClick={() => onClick(courseId)}
					banner={bannerImageUrl}
					customStyles={customStyles}
				>
					<Typography
						variant="h4-regular"
						text={courseName}
					/>
				</S.BannerContainer>
			</WaveclassTheme>
		</>
	);
};
