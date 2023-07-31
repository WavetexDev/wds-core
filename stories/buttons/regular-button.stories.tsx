import type { Meta, StoryObj } from '@storybook/react';
import { RegularButton } from '../../src';

const meta: Meta<typeof RegularButton> = {
	title: 'Buttons/Regular Button',
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
				'danger-contained',
				'danger-ghost',
				'danger-text',
			],
		},
		disabled: {
			control: { type: 'boolean' },
		},
		onClick: {
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

export const DangerContained: Story = {
	args: {
		variant: 'danger-contained',
		text: 'Click me!',
	},
};

export const DangerGhost: Story = {
	args: {
		variant: 'danger-ghost',
		text: 'Click me!',
	},
};

export const DangerText: Story = {
	args: {
		variant: 'danger-text',
		text: 'Click me!',
	},
};

export const SuccessContained: Story = {
	name: 'Success',
	args: {
		variant: 'success-contained',
		text: 'Click me!',
	},
};

export const WarningContained: Story = {
	name: 'Warning',
	args: {
		variant: 'warning-contained',
		text: 'Click me!',
	},
};
