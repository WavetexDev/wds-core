import type { Meta, StoryObj } from '@storybook/react';
import { RegularButton } from '../../src';

const meta: Meta<typeof RegularButton> = {
	title: 'Regular Button',
	component: RegularButton,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: [
				'primary-contained',
				'primary-ghost',
				'primary-text',
				'secondary-contained',
				'secondary-ghost',
				'secondary-text',
			],
		},
		disabled: {
			control: { type: 'boolean' },
		},
		onClick: {
			table: { disable: true },
		},
	},
};

export default meta;
type Story = StoryObj<typeof RegularButton>;

export const PrimaryContained: Story = {
	args: {
		variant: 'primary-contained',
		text: 'Click me!',
	},
};

export const PrimaryGhost: Story = {
	args: {
		variant: 'primary-ghost',
		text: 'Click me!',
	},
};

export const PrimaryText: Story = {
	args: {
		variant: 'primary-text',
		text: 'Click me!',
	},
};

export const SecondaryContained: Story = {
	args: {
		variant: 'secondary-contained',
		text: 'Click me!',
	},
};

export const SecondaryGhost: Story = {
	args: {
		variant: 'secondary-ghost',
		text: 'Click me!',
	},
};

export const SecondaryText: Story = {
	args: {
		variant: 'secondary-text',
		text: 'Click me!',
	},
};
