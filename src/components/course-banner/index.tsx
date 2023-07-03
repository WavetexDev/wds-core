import React from 'react';
import { CourseBannerProps } from './types';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '@waveclass/wds-core';

export const CourseBanner = ({
	courseName,
	bannerImageUrl,
}: CourseBannerProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.BannerContainer banner={bannerImageUrl}>
					<Typography
						variant="h4-regular"
						text={courseName}
					/>
				</s.BannerContainer>
			</WaveclassTheme>
		</>
	);
};
