import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';

import { LectureCardProps } from './types';

import {
	TfiControlPlay,
	TfiHeadphone,
	TfiBookmarkAlt,
	TfiAgenda,
	TfiTime,
} from 'react-icons/tfi';
import { Pill } from '../pill';

import { secondsToFriendlyString } from '../../utils/format-seconds';

export const LectureCard = ({
	variant,
	type,
	name,
	thumbnail,
	teacher,
	duration,
}: LectureCardProps): JSX.Element => {
	function determineLectureTypeIcon() {
		switch (type) {
			case 'VIDEO':
				return <TfiControlPlay size={24} />;

			case 'AUD':
				return <TfiHeadphone size={24} />;

			case 'MAT':
				return <TfiBookmarkAlt size={24} />;

			case 'TEXT':
				return <TfiAgenda size={24} />;
		}
	}

	const formattedClassDuration =
		secondsToFriendlyString(duration);

	const lectureTypeIcon = determineLectureTypeIcon();

	return (
		<>
			<WaveclassTheme>
				<s.CardContainer
					variant={variant ?? 'secondary'}
				>
					<s.LectureDetails>
						<s.LectureTitle
							variant={variant ?? 'secondary'}
						>
							{lectureTypeIcon}
							<Typography
								variant="h4-bold"
								text={name}
							/>
						</s.LectureTitle>

						<s.LectureFooter>
							<Typography
								variant="paragraph-regular"
								text={teacher}
							/>

							<s.LectureDuration>
								<TfiTime size={12} />
								<Typography
									variant="paragraph-regular"
									text={
										formattedClassDuration
									}
								/>
							</s.LectureDuration>
						</s.LectureFooter>
					</s.LectureDetails>

					<s.ImageContainer thumbnail={thumbnail}>
						{thumbnail !== ''
							? ''
							: lectureTypeIcon}

						<Pill
							variant="success"
							text="Texto"
						/>
					</s.ImageContainer>
				</s.CardContainer>
			</WaveclassTheme>
		</>
	);
};
