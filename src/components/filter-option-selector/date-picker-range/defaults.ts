import {
	addDays,
	endOfDay,
	startOfDay,
	startOfMonth,
	endOfMonth,
	addMonths,
	startOfWeek,
	endOfWeek,
	isSameDay,
} from 'date-fns';

const defineds = {
	startOfWeek: startOfWeek(new Date()),
	endOfWeek: endOfWeek(new Date()),
	startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
	endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
	startOfToday: startOfDay(new Date()),
	endOfToday: endOfDay(new Date()),
	startOfYesterday: startOfDay(addDays(new Date(), -1)),
	endOfYesterday: endOfDay(addDays(new Date(), -1)),
	startOfMonth: startOfMonth(new Date()),
	endOfMonth: endOfMonth(new Date()),
	startOfLastMonth: startOfMonth(
		addMonths(new Date(), -1)
	),
	endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
};

const staticRangeHandler = {
	range: {},
	isSelected(range: any) {
		//@ts-ignore
		const definedRange = this.range();
		return (
			isSameDay(
				range.startDate,
				definedRange.startDate
			) &&
			isSameDay(range.endDate, definedRange.endDate)
		);
	},
};

export function createStaticRanges(ranges: any) {
	return ranges.map((range: any) => ({
		...staticRangeHandler,
		...range,
	}));
}

export const defaultStaticRanges = createStaticRanges([
	{
		label: 'Hoje',
		range: () => ({
			startDate: defineds.startOfToday,
			endDate: defineds.endOfToday,
		}),
	},
	{
		label: 'Ontem',
		range: () => ({
			startDate: defineds.startOfYesterday,
			endDate: defineds.endOfYesterday,
		}),
	},

	{
		label: 'Esta semana',
		range: () => ({
			startDate: defineds.startOfWeek,
			endDate: defineds.endOfWeek,
		}),
	},
	{
		label: 'Última semana',
		range: () => ({
			startDate: defineds.startOfLastWeek,
			endDate: defineds.endOfLastWeek,
		}),
	},
	{
		label: 'Este mês',
		range: () => ({
			startDate: defineds.startOfMonth,
			endDate: defineds.endOfMonth,
		}),
	},
	{
		label: 'Último mês',
		range: () => ({
			startDate: defineds.startOfLastMonth,
			endDate: defineds.endOfLastMonth,
		}),
	},
]);
