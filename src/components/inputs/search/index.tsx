import React from 'react';
import * as s from './styles';
import { WaveclassTheme } from '../../../layout';

import { InputProps } from '../types';

import { Typography } from '../../typography';
import { theme } from '../../../theme';
import { getThemeMode } from '../../../utils/get-theme-mode';
import { TfiSearch } from 'react-icons/tfi';

const currentTheme = getThemeMode();

export const SearchInput = ({
	hideDefaultIcon,
	icon,
	showError,
	errorMessage,
	...props
}: InputProps): JSX.Element => {
	const getDefaultIcon = () => {
		if (hideDefaultIcon) return null;
		else return <TfiSearch size={18} />;
	};

	return (
		<>
			<WaveclassTheme>
				<s.SearchInputContainer>
					<s.SearchInputWrapper>
						{getDefaultIcon() ?? icon}
						<s.SearchInput
							{...props}
							type="search"
						/>
					</s.SearchInputWrapper>

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
				</s.SearchInputContainer>
			</WaveclassTheme>
		</>
	);
};
