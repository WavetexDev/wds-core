import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterButton } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof FilterButton> = {
	title: 'Filter Button',
	component: FilterButton,
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const filterButton: Story = {
	args: {
		content: 'Click me!',
		icon: <TfiUser size={18} />,
	},
};
