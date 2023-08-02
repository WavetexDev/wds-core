import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterButton } from '../../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof FilterButton> = {
	title: 'Components/Buttons/Filter Button',
	component: FilterButton,
	argTypes: {
		disabled: {
			control: { type: 'boolean' },
		},
		onClick: {
			table: { disable: true },
		},
		icon: {
			table: { disable: true },
		},
		customStyles: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof FilterButton>;

export const standard: Story = {
	args: {
		text: 'Click me!',
		icon: <TfiUser size={18} />,
		onClick: () => alert('I was clicked!'),
	},
};

export const disabled: Story = {
	args: {
		text: 'Click me!',
		icon: <TfiUser size={18} />,
		onClick: () => alert('I was clicked!'),
		disabled: true,
	},
};
