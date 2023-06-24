import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types';
import { Typography } from '../../typography';
import { theme } from '../../../theme';
import { getThemeMode } from '../../../utils/get-theme-mode';

import { TfiEmail, TfiLock } from 'react-icons/tfi';

const currentTheme = getThemeMode();

export const Input = ({
	icon,
	showError,
	errorMessage,
	hideDefaultIcon,
	...props
}: InputProps): JSX.Element => {
	const getDefaultIcon = () => {
		if (hideDefaultIcon) return null;
		switch (props.type) {
			case 'email':
				return <TfiEmail size={18} />;
			case 'password':
				return <TfiLock size={18} />;
			default:
				return null;
		}
	};

	return (
		<>
			<WaveclassTheme>
				<s.InputContainer>
					<s.InputWrapper>
						{getDefaultIcon() ?? icon}
						<s.Input {...props} />
					</s.InputWrapper>

					{showError && (
						<Typography
							variant={'small-regular'}
							content={errorMessage}
							customStyles={{
								color: theme[currentTheme]
									.colors.error,
							}}
						/>
					)}
				</s.InputContainer>
			</WaveclassTheme>
		</>
	);
};
