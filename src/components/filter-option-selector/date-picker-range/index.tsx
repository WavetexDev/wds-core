import React, { useEffect, useState } from 'react';
import * as s from './styles';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { ptBR } from 'date-fns/locale';

import { defaultStaticRanges } from './defaults';

import { PropsT, RangeT } from './types';

export function DatePickerRange({
	startDate,
	endDate,
	onDateRangeChange,
}: PropsT) {
	const [selectedRange, setSelectedRange] =
		useState<RangeT>({
			startDate: new Date(),
			endDate: new Date(),
			key: 'main',
		});

	useEffect(() => {
		const newStartDate =
			new Date(startDate) ?? selectedRange.startDate;
		const newEndDate =
			new Date(endDate) ?? selectedRange.endDate;

		setSelectedRange({
			...selectedRange,
			startDate: newStartDate,
			endDate: newEndDate,
		});
	}, [startDate, endDate]);

	const handleRangeChange = (mainRange: {
		main: RangeT;
	}) => {
		if (!onDateRangeChange) return;

		onDateRangeChange(
			mainRange.main.startDate.toISOString(),
			mainRange.main.endDate.toISOString()
		);
	};

	return (
		<s.DatePickerWrapper>
			<DateRangePicker
				ranges={[selectedRange]}
				//@ts-ignore
				onChange={handleRangeChange}
				locale={ptBR}
				weekdayDisplayFormat="EEEEE"
				staticRanges={defaultStaticRanges}
			/>
		</s.DatePickerWrapper>
	);
}
