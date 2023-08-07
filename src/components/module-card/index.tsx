import React from 'react';

import { WaveclassTheme } from '../../layout';
import { ModuleCardProps } from './types';

import * as S from './styles';
import { Typography } from '../typography';

import {
	TfiAngleDown,
	TfiAngleUp,
	TfiLock,
	TfiTime,
} from 'react-icons/tfi';
import { ProgressBar } from '../progress-bar';
import { GridItem } from '../grid-item';

export const ModuleCard = ({
	name,
	pos,
	totaltime,
	percentProgress,
	available,
	availableMessage,
	expanded,
	toggleExpanded,
	customStyles,
}: ModuleCardProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<S.ModuleCardContainer
					isComplete={percentProgress >= 100}
					customStyles={customStyles}
				>
					<S.ModuleMainDetails
						customStyles={customStyles}
					>
						<S.ModulePositionContainer
							customStyles={customStyles}
						>
							<Typography
								variant="h4-bold"
								text={`${pos}`}
							/>
						</S.ModulePositionContainer>

						<S.ModuleDetailsContainer
							customStyles={customStyles}
						>
							<Typography
								variant="h4-bold"
								text={name}
							/>

							<S.ModuleDetailsFooter
								customStyles={customStyles}
							>
								<S.ModuleDurationDisplay
									customStyles={
										customStyles
									}
								>
									<TfiTime size={12} />
									<Typography
										variant="small-regular"
										text={totaltime}
									/>
								</S.ModuleDurationDisplay>

								<GridItem variant="col-8">
									<ProgressBar
										percentProgress={
											percentProgress
										}
									/>
								</GridItem>
							</S.ModuleDetailsFooter>
						</S.ModuleDetailsContainer>
					</S.ModuleMainDetails>

					<S.ExpanderContainer
						customStyles={customStyles}
					>
						{available ? (
							<S.ExpanderIconContainer
								customStyles={customStyles}
							>
								{!expanded ? (
									<TfiAngleDown
										size={16}
										onClick={
											toggleExpanded
										}
									/>
								) : (
									<TfiAngleUp
										size={16}
										onClick={
											toggleExpanded
										}
									/>
								)}
							</S.ExpanderIconContainer>
						) : (
							<S.ExpanderIconContainer
								customStyles={customStyles}
							>
								<TfiLock size={16} />
								<Typography
									variant="small-regular"
									text={availableMessage}
								/>
							</S.ExpanderIconContainer>
						)}
					</S.ExpanderContainer>
				</S.ModuleCardContainer>
			</WaveclassTheme>
		</>
	);
};
