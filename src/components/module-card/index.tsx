import React from 'react';

import { WaveclassTheme } from '../../layout';
import { ModuleCardProps } from './types';

import * as s from './styles';
import { Typography } from '../typography';

import { TfiAngleDown } from 'react-icons/tfi';

export const ModuleCard =
	({}: ModuleCardProps): JSX.Element => {
		return (
			<>
				<WaveclassTheme>
					<s.ModuleCardContainer>
						<s.ModuleMainDetails>
							<s.ModulePositionContainer>
								<Typography
									variant="h4-bold" // The Typography component does not have a variant that matches the size of the desing text
									text="1"
								/>
							</s.ModulePositionContainer>

							<s.ModuleDetailsContainer>
								<s.ModuleDetailsTitle>
									<Typography
										variant="h4-bold"
										text="Como criar uma aplicação React com Vite"
									/>
								</s.ModuleDetailsTitle>

								<s.ModuleDetailsFooter>
									<Typography
										variant="small-regular"
										text="*duração da aula"
									/>

									{/*
                                            ! Necessita da merge da ProgressBar
                                        */}
								</s.ModuleDetailsFooter>
							</s.ModuleDetailsContainer>
						</s.ModuleMainDetails>

						<s.ExpanderContainer>
							<TfiAngleDown size={18} />
						</s.ExpanderContainer>
					</s.ModuleCardContainer>
				</WaveclassTheme>
			</>
		);
	};
