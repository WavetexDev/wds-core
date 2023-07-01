import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../layout';
import { Typography } from '../typography';

import { LectureCardProps } from './types';

import { TfiTime } from 'react-icons/tfi';

export const LectureCard = ({
	icon,
	title,
	thumbnail,
	author,
	duration,
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

	const formattedClassDuration =
		formatClassDuration(duration);

	return (
		<>
			<WaveclassTheme>
				<s.CardContainer>
					<s.LectureDetails>
						<s.LectureTitle>
							{icon}
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

					<s.ImageContainer>
						<img src={thumbnail} alt="" />
					</s.ImageContainer>
				</s.CardContainer>
			</WaveclassTheme>
		</>
	);
};
