import React from 'react';

import { WaveclassTheme } from '../../layout';
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
}: ModuleCardProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.ModuleCardContainer
					isComplete={percentProgress >= 100}
				>
					<s.ModuleMainDetails>
						<s.ModulePositionContainer>
							<Typography
								variant="h4-bold"
								text={`${pos}`}
							/>
						</s.ModulePositionContainer>

						<s.ModuleDetailsContainer>
							<Typography
								variant="h4-bold"
								text={name}
							/>

							<s.ModuleDetailsFooter>
								<s.ModuleDurationDisplay>
									<TfiTime size={12} />
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

					<s.ExpanderContainer>
						{available ? (
							<s.ExpanderIconContainer>
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
							<s.ExpanderIconContainer>
								<TfiLock size={16} />
								<Typography
									variant="small-regular"
									text={availableMessage}
								/>
							</s.ExpanderIconContainer>
						)}
					</s.ExpanderContainer>
				</s.ModuleCardContainer>
			</WaveclassTheme>
		</>
	);
};
