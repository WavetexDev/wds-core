import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types';
import { Typography } from '../../typography';

export const Input = ({
	icon,
	showError,
	errorMessage,
	...props
}: InputProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.InputContainer>
					<s.InputWrapper>
						{icon}
						<s.Input
							type="text"
							placeholder={props.placeholder}
							required={props.required}
						/>
					</s.InputWrapper>

					{showError && (
						<s.ErrorMessage>
							<Typography
								variant={'small-regular'}
								content={errorMessage}
							/>
						</s.ErrorMessage>
					)}
				</s.InputContainer>
			</WaveclassTheme>
		</>
	);
};
