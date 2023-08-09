import React from 'react';

import {
	ScaleUpCenterAnimation,
	WaveclassTheme,
} from '../../layout';
import { ModuleCardProps } from './types';

import * as s from './styles';
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
			<ScaleUpCenterAnimation>
				<WaveclassTheme>
					<s.ModuleCardContainer
						isComplete={percentProgress >= 100}
						customStyles={customStyles}
					>
						<s.ModuleMainDetails
							customStyles={customStyles}
						>
							<s.ModulePositionContainer
								customStyles={customStyles}
							>
								<Typography
									variant="h4-bold"
									text={`${pos}`}
								/>
							</s.ModulePositionContainer>

							<s.ModuleDetailsContainer
								customStyles={customStyles}
							>
								<Typography
									variant="h4-bold"
									text={name}
								/>

								<s.ModuleDetailsFooter
									customStyles={
										customStyles
									}
								>
									<s.ModuleDurationDisplay
										customStyles={
											customStyles
										}
									>
										<TfiTime
											size={12}
										/>
										<Typography
											variant="small-regular"
											text={totaltime}
										/>
									</s.ModuleDurationDisplay>

									<GridItem variant="col-8">
										<ProgressBar
											percentProgress={
												percentProgress
											}
										/>
									</GridItem>
								</s.ModuleDetailsFooter>
							</s.ModuleDetailsContainer>
						</s.ModuleMainDetails>

						<s.ExpanderContainer
							customStyles={customStyles}
						>
							{available ? (
								<s.ExpanderIconContainer
									customStyles={
										customStyles
									}
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
								</s.ExpanderIconContainer>
							) : (
								<s.ExpanderIconContainer
									customStyles={
										customStyles
									}
								>
									<TfiLock size={16} />
									<Typography
										variant="small-regular"
										text={
											availableMessage
										}
									/>
								</s.ExpanderIconContainer>
							)}
						</s.ExpanderContainer>
					</s.ModuleCardContainer>
				</WaveclassTheme>
			</ScaleUpCenterAnimation>
		</>
	);
};
