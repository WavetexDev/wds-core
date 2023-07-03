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

export const LectureCard = ({
	cardVariant,
	lectureType,
	title,
	thumbnail,
	author,
	duration,
	pillVariant,
	pillText,
}: LectureCardProps): JSX.Element => {
	function formatClassDuration(duration: number) {
		const minutes = Math.floor(duration / 60);
		const seconds = duration % 60;

		let formattedDuration = '';
		if (minutes > 0) {
			formattedDuration += `${minutes}min `;
		}
		if (seconds > 0) {
			formattedDuration += `${seconds}seg`;
		}

		return formattedDuration;
	}

	function determineLectureTypeIcon(lectureType: string) {
		switch (lectureType) {
			case 'video':
				return <TfiControlPlay size={24} />;

			case 'audio':
				return <TfiHeadphone size={24} />;

			case 'material':
				return <TfiBookmarkAlt size={24} />;

			case 'text':
				return <TfiAgenda size={24} />;
		}
	}

	const formattedClassDuration =
		formatClassDuration(duration);

	const lectureTypeIcon =
		determineLectureTypeIcon(lectureType);

	return (
		<>
			<WaveclassTheme>
				<s.CardContainer variant={cardVariant}>
					<s.LectureDetails>
						<s.LectureTitle
							variant={cardVariant}
						>
							{lectureTypeIcon}
							<Typography
								variant="h4-bold"
								text={title}
							/>
						</s.LectureTitle>

						<s.LectureFooter>
							<Typography
								variant="paragraph-regular"
								text={author}
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
							variant={pillVariant}
							text={pillText}
						/>
					</s.ImageContainer>
				</s.CardContainer>
			</WaveclassTheme>
		</>
	);
};
