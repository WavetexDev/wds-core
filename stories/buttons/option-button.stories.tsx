import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionButton } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof OptionButton> = {
	component: OptionButton,
};

export default meta;

type Story = StoryObj<typeof OptionButton>;

export const optionButton: Story = {
	args: {
		content: 'Click me!',
		icon: <TfiUser size={18} />,
	},
};
