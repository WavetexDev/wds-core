import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types';
import { Typography } from '../../typography';

export const Input = ({
	icon,
	showError,
	errorMessage,
	type,
	placeholder,
	required,
}: InputProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.InputContainer>
					<s.InputWrapper>
						{icon}
						<s.Input
							type={type}
							placeholder={placeholder}
							required={required}
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
