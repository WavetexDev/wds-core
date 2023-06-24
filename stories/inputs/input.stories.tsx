import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const input: Story = {
	args: {
		icon: <TfiUser size={18} />,
		showError: false,
		errorMessage: 'Error message',
		type: 'text',
		placeholder: 'Placeholder',
		required: true,
	},
};