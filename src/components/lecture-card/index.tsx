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
	TfiLock,
} from 'react-icons/tfi';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Pill } from '../pill';

import { secondsToFriendlyString } from '../../utils/format-seconds';

export const LectureCard = ({
	variant,
	type,
	name,
	thumbnail,
	teacher,
	duration,
	avaliable,
	avaliableMessage,
	finished,
	remainingSeconds,
	onClick,
	favorite,
	toggleFavorite,
	customStyles,
}: LectureCardProps): JSX.Element => {
	function determineLectureTypeIcon() {
		switch (type) {
			case 'VIDEO':
				return <TfiControlPlay size={24} />;

			case 'AUD':
				return <TfiHeadphone size={24} />;

			case 'MAT':
				return <TfiBookmarkAlt size={24} />;

			case 'TXT':
				return <TfiAgenda size={24} />;
		}
	}

	function handleOnClick() {
		if (avaliable) {
			onClick();
		} else {
			return;
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
					customStyles={customStyles}
				>
					<s.LectureDetails
						customStyles={customStyles}
					>
						<s.LectureTitle
							onClick={handleOnClick}
							variant={variant ?? 'secondary'}
							customStyles={customStyles}
						>
							{lectureTypeIcon}
							<Typography
								variant="h4-bold"
								text={name}
							/>
						</s.LectureTitle>

						{!avaliable && (
							<s.Avaliable
								customStyles={customStyles}
							>
								<TfiLock size={14} />
								<Typography
									variant="paragraph-bold"
									text={
										avaliableMessage ??
										''
									}
								/>
							</s.Avaliable>
						)}

						<s.LectureFooter
							customStyles={customStyles}
						>
							<s.LectureFineDetails
								customStyles={customStyles}
							>
								<Typography
									variant="paragraph-regular"
									text={teacher}
									customStyles={
										customStyles
									}
								/>

								<s.LectureDuration
									customStyles={
										customStyles
									}
								>
									<TfiTime size={14} />
									<Typography
										variant="paragraph-regular"
										text={
											formattedClassDuration
										}
									/>
								</s.LectureDuration>
							</s.LectureFineDetails>

							{toggleFavorite !==
								undefined && (
								<s.FavoriteIconContainer
									onClick={toggleFavorite}
									isFavorite={
										favorite ?? false
									}
									customStyles={
										customStyles
									}
								>
									{favorite ? (
										<AiFillStar
											size={24}
										/>
									) : (
										<AiOutlineStar
											size={24}
										/>
									)}
								</s.FavoriteIconContainer>
							)}
						</s.LectureFooter>
					</s.LectureDetails>

					<s.ImageContainer
						onClick={handleOnClick}
						thumbnail={thumbnail}
						customStyles={customStyles}
						hasPill={
							finished || remainingSeconds
								? true
								: false
						}
					>
						{thumbnail !== ''
							? ''
							: lectureTypeIcon}

						{finished ? (
							<Pill
								variant="success"
								text="Concluído"
							/>
						) : remainingSeconds ? (
							<Pill
								variant="primary"
								text={`Faltam ${secondsToFriendlyString(
									remainingSeconds
								)}`}
							/>
						) : null}
					</s.ImageContainer>
				</s.CardContainer>
			</WaveclassTheme>
		</>
	);
};
