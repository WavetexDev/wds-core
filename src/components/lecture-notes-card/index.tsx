import React from 'react';

import * as S from './styles';
import { LectureNotesCardProps } from './types';
import { WaveclassTheme } from '../../layout';

import { GridItem } from '../grid-item';
import { Typography } from '../typography';

import { theme } from '../../theme';
import { getThemeMode } from '../../utils/get-theme-mode';
import { getSchoolColors } from '../../utils/get-school-colors';
import { RegularButton } from '../buttons/regular';

const currentMode = getThemeMode();
const schoolColors = getSchoolColors();

export function LectureNotesCard({
	modname,
	itemname,
	notes,
	lastNote,
}: LectureNotesCardProps) {
	return (
		<>
			<WaveclassTheme>
				<S.LectureNotesCardContainer>
					<GridItem
						variant="row"
						customStyles={{
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant="h6-bold"
							text={modname}
							customStyles={{
								color: theme[currentMode]
									.colors.gray500,
							}}
						/>

						<Typography
							variant="h5-regular"
							text={`${notes?.length ?? 0}`}
							customStyles={{
								padding: `${theme[currentMode].spacing.sp4} ${theme[currentMode].spacing.sp12}`,
								color: theme[currentMode]
									.colors.white,
								background:
									schoolColors.primaryColor,
								borderRadius: '100vw', // Makes a pill shape
							}}
						/>
					</GridItem>

					<GridItem
						variant="row"
						customStyles={{
							marginBottom:
								theme[currentMode].spacing
									.sp32,
						}}
					>
						<Typography
							variant="h4-regular"
							text={itemname}
						/>
					</GridItem>

					<GridItem
						variant="row"
						customStyles={{
							flexDirection: 'column',
							alignItems: 'flex-start',
							gap: 0,
						}}
					>
						<Typography
							variant="h6-bold"
							text="ÚLTIMA ANOTAÇÃO"
							customStyles={{
								color: theme[currentMode]
									.colors.gray500,
							}}
						/>

						<Typography
							variant="h6-regular"
							text={lastNote}
							customStyles={{
								color: theme[currentMode]
									.colors.gray300,
							}}
						/>
					</GridItem>

					<GridItem
						variant="col-3"
						customStyles={{
							justifyContent: 'flex-end',
							alignSelf: 'flex-end',
						}}
					>
						<RegularButton
							variant="primary-text"
							text="VER TODAS"
							customStyles={{
								color: schoolColors.primaryColor,
							}}
						/>
					</GridItem>
				</S.LectureNotesCardContainer>
			</WaveclassTheme>
		</>
	);
}
