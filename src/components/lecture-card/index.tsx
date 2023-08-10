import React from 'react';
import * as S from './styles';
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
	durationInSeconds,
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

	const lectureTypeIcon = determineLectureTypeIcon();

	return (
		<>
			<WaveclassTheme>
				<S.CardContainer
					variant={variant ?? 'secondary'}
					customStyles={customStyles}
				>
					<S.LectureDetails
						customStyles={customStyles}
					>
						<S.LectureTitle
							onClick={handleOnClick}
							variant={variant ?? 'secondary'}
							customStyles={customStyles}
						>
							{lectureTypeIcon}
							<Typography
								variant="h4-bold"
								text={name}
							/>
						</S.LectureTitle>

						{!avaliable && (
							<S.Avaliable
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
							</S.Avaliable>
						)}

						<S.LectureFooter
							customStyles={customStyles}
						>
							<S.LectureFineDetails
								customStyles={customStyles}
							>
								<Typography
									variant="paragraph-regular"
									text={teacher}
									customStyles={
										customStyles
									}
								/>

								<S.LectureDuration
									customStyles={
										customStyles
									}
								>
									<TfiTime size={14} />
									<Typography
										variant="paragraph-regular"
										text={secondsToFriendlyString(
											durationInSeconds
										)}
									/>
								</S.LectureDuration>
							</S.LectureFineDetails>

							{toggleFavorite !==
								undefined && (
								<S.FavoriteIconContainer
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
								</S.FavoriteIconContainer>
							)}
						</S.LectureFooter>
					</S.LectureDetails>

					<S.ImageContainer
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
					</S.ImageContainer>
				</S.CardContainer>
			</WaveclassTheme>
		</>
	);
};
