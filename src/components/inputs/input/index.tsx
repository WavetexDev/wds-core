import React from 'react';
import * as S from './styles';
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
	customStyles,
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
				<S.InputContainer
					customStyles={customStyles}
				>
					<S.InputWrapper
						customStyles={customStyles}
					>
						{getDefaultIcon() ?? icon}
						<S.Input {...props} />
					</S.InputWrapper>

					{showError && (
						<Typography
							variant={'small-regular'}
							text={errorMessage ?? ''}
							customStyles={{
								color: theme[currentTheme]
									.colors.error,
							}}
						/>
					)}
				</S.InputContainer>
			</WaveclassTheme>
		</>
	);
};
