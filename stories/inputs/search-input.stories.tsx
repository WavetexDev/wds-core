import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof SearchInput> = {
	component: SearchInput,
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const searchInput: Story = {
	args: {
		icon: <TfiUser size={18} />,
		showError: false,
		errorMessage: 'Error message',
		type: 'text',
		placeholder: 'Placeholder',
		required: true,
	},
};
