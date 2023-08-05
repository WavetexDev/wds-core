import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FilterOptionSelector } from '../../src/components/filter-option-selector';

const meta: Meta<typeof FilterOptionSelector> = {
	title: 'Filter Option Selector',
	component: FilterOptionSelector,
	argTypes: {
		options: {
			table: { disable: true },
		},
		selectedOptions: {
			table: { disable: true },
		},
		onOptionClick: {
			table: { disable: true },
		},
		onDateRangeChange: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilterOptionSelector>;

export const list: Story = {
	args: {
		isOpen: true,
		filterType: 'list',
		options: [
			{
				value: '1',
				label: '1',
			},
			{
				value: '2',
				label: '2',
			},
			{
				value: '3',
				label: '3',
			},
		],
		selectedOptions: [
			{
				value: '2',
				label: '2',
			},
		],
	},
};

export const period: Story = {
	args: {
		isOpen: true,
		filterType: 'period',
	},
};
