import React, { useState } from 'react';

import * as s from './styles';
import { WaveclassTheme } from '../../layout';

import { FilterOptionSelectorProps } from './types';

import { Typography } from '../typography';
import { SearchInput } from '../inputs/search';

import { theme } from '../../theme';
import { getThemeMode } from '../../utils/get-theme-mode';

import { DatePickerRange } from './date-picker-range';
import { getSchoolColors } from '../../utils/get-school-colors';

const currentMode = getThemeMode();

export function FilterOptionSelector({
	isOpen,
	options,
	selectedOptions,
	onOptionClick,
	filterType,
	startDate,
	endDate,
	onDateRangeChange,
}: FilterOptionSelectorProps) {
	const [searchTerm, setSearchTerm] = useState('');

	const { buttonColor } = getSchoolColors();

	const handleSearchInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSearchTerm(event.target.value);
	};

	const handleOptionSelect = (value: string) => {
		if (!options) return;

		const optIndex = options?.findIndex(
			(opt) => opt.value === value
		);

		if (optIndex !== -1 && onOptionClick)
			onOptionClick(options[optIndex]);
	};

	const filteredOptions = options?.filter((opt) =>
		opt.label
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<WaveclassTheme>
				{filterType === 'list' ? (
					<s.ModalWrapper isOpen={isOpen}>
						<s.ModalContent>
							<SearchInput
								// TODO Translation
								placeholder="Pesquisar..."
								onChange={
									handleSearchInputChange
								}
								customStyles={{
									borderBottom:
										'1px dashed',
								}}
							/>

							{filteredOptions?.map((opt) => {
								const selected =
									selectedOptions?.findIndex(
										(o) =>
											o.value ===
											opt.value
									) !== -1;

								return (
									<s.OptionWrapper
										key={opt.value}
									>
										<s.OptionCheckbox
											type="checkbox"
											checked={
												selected
											}
											onChange={() =>
												handleOptionSelect(
													opt.value.toString()
												)
											}
											color={
												buttonColor
											}
										/>

										<s.OptionName>
											<Typography
												variant={
													selected
														? 'h5-bold'
														: 'h5-regular'
												}
												text={
													opt.label
												}
											/>
										</s.OptionName>
									</s.OptionWrapper>
								);
							})}
						</s.ModalContent>
					</s.ModalWrapper>
				) : (
					<DatePickerRange
						startDate={
							startDate ??
							new Date().toISOString()
						}
						endDate={
							endDate ??
							new Date().toISOString()
						}
						onDateRangeChange={
							onDateRangeChange
						}
					/>
				)}
			</WaveclassTheme>
		</>
	);
}
