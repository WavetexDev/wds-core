import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionButton } from '../../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof OptionButton> = {
	title: 'Components/Buttons/Option Button',
	component: OptionButton,
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

type Story = StoryObj<typeof OptionButton>;

export const standard: Story = {
	args: {
		text: 'Click me!',
		icon: <TfiUser size={18} />,
	},
};
