import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types';

import { Typography } from '../../typography';

export const SearchInput = ({
	icon,
	showError,
	errorMessage,
	...props
}: InputProps): JSX.Element => {
	return (
		<>
			<WaveclassTheme>
				<s.SearchInputContainer>
					<s.SearchInputWrapper>
						{icon}
						<s.SearchInput
							type="search"
							placeholder={props.placeholder}
							required={props.required}
						/>
					</s.SearchInputWrapper>

					{showError && (
						<s.ErrorMessage>
							<Typography
								variant={'small-regular'}
								content={errorMessage}
							/>
						</s.ErrorMessage>
					)}
				</s.SearchInputContainer>
			</WaveclassTheme>
		</>
	);
};
