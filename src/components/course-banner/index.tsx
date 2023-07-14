import React from 'react';
import { CourseBannerProps } from './types';
import * as s from './styles';
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
				<s.BannerContainer
					onClick={() => onClick(courseId)}
					banner={bannerImageUrl}
					customStyles={customStyles}
				>
					<Typography
						variant="h4-regular"
						text={courseName}
					/>
				</s.BannerContainer>
			</WaveclassTheme>
		</>
	);
};
