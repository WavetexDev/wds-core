import React from 'react';
import { NotificationCardProps } from './types';

import { GridItem } from '../grid-item';
import { Typography } from '../typography';
import { RegularButton } from '../buttons/regular';

import { TfiTrash } from 'react-icons/tfi';

import { getSchoolColors } from '../../utils/get-school-colors';
import { getThemeMode } from '../..//utils/get-theme-mode';
import { formatDate } from '../../utils/format-date';

import { theme } from '../../theme';
import { WaveclassTheme } from '../../layout';

const schoolColors = getSchoolColors();
const currentMode = getThemeMode();

export function NotificationCard({
	title,
	message,
	sent_by,
	read,
	created_at,
	onButtonClick,
	onMarkAsRead,
}: NotificationCardProps) {
	return (
		<>
			<WaveclassTheme>
				<GridItem
					variant="row"
					customStyles={{
						background:
							theme[currentMode].colors.white,
						padding:
							theme[currentMode].spacing.sp16,
						border: `1px solid ${
							!read
								? theme[currentMode].colors
										.error
								: theme[currentMode].colors
										.gray300
						}`,
						borderRadius:
							theme[currentMode].spacing.sp6,
						flexDirection: 'column',
					}}
				>
					<GridItem variant="row">
						<Typography
							variant="h4-bold"
							text={title}
						/>
					</GridItem>

					<GridItem
						variant="row"
						customStyles={{
							flexDirection: 'column',
						}}
					>
						<Typography
							variant="h6-regular"
							text={message}
							customStyles={{
								alignSelf: 'flex-start',
							}}
						/>

						<GridItem
							variant="row"
							customStyles={{
								justifyContent: 'flex-end',
							}}
						>
							<RegularButton
								variant="primary-ghost"
								text="Ver aula"
								onClick={() =>
									onButtonClick
								}
								customStyles={{
									color: schoolColors.primaryColor,
									maxWidth: '145px',
								}}
							/>
						</GridItem>
					</GridItem>

					<GridItem
						variant="row"
						customStyles={{
							alignItems: 'flex-end',
							flexDirection: 'column',
						}}
					>
						<Typography
							variant="small-regular"
							text={`${formatDate(
								created_at
							)} por ${sent_by}`}
						/>

						<GridItem
							variant="row"
							customStyles={{
								justifyContent: 'flex-end',
							}}
						>
							{!read ? (
								<RegularButton
									variant="primary-text"
									text="Marcar como lida"
									onClick={() =>
										onMarkAsRead
									}
									customStyles={{
										maxWidth: '140px',
										color: schoolColors.primaryColor,
									}}
								/>
							) : null}

							<TfiTrash
								size={16}
								style={{
									color: theme[
										currentMode
									].colors.error,
									cursor: 'pointer',
								}}
							/>
						</GridItem>
					</GridItem>
				</GridItem>
			</WaveclassTheme>
		</>
	);
}
