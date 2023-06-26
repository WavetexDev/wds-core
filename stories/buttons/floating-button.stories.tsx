import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FloatingButton } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof FloatingButton> = {
	title: 'Floating Button',
	component: FloatingButton,
	argTypes: {
		disabled: {
			control: { type: 'boolean' },
		},
		text: {
			table: { disable: true },
		},
		onClick: {
			table: { disable: true },
		},
		icon: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof FloatingButton>;

export const PrimaryFloatingButton: Story = {
	args: {
		variant: 'primary',
		icon: <TfiUser size={18} />,
	},
};

export const SecondaryFloatingButton: Story = {
	args: {
		variant: 'secondary',
		icon: <TfiUser size={18} />,
	},
};
