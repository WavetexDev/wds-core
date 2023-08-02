import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from '../../../src/components/pill';

const meta: Meta<typeof Pill> = {
	title: 'Components/Text display/Pill',
	component: Pill,
	argTypes: {
		customStyles: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Primary: Story = {
	name: 'Primary',
	args: {
		variant: 'primary',
		text: 'Texto',
	},
};

export const Secondary: Story = {
	name: 'Secondary',
	args: {
		variant: 'secondary',
		text: 'Texto',
	},
};

export const Success: Story = {
	name: 'Success',
	args: {
		variant: 'success',
		text: 'Texto',
	},
};

export const Warning: Story = {
	name: 'Warning',
	args: {
		variant: 'warning',
		text: 'Texto',
	},
};

export const Error: Story = {
	name: 'Error',
	args: {
		variant: 'error',
		text: 'Texto',
	},
};

export const Info: Story = {
	name: 'Info',
	args: {
		variant: 'info',
		text: 'Texto',
	},
};

export const SuccessOutline: Story = {
	name: 'Success Outline',
	args: {
		variant: 'success-outline',
		text: 'Texto',
	},
};

export const WarningOutline: Story = {
	name: 'Warning Outline',
	args: {
		variant: 'warning-outline',
		text: 'Texto',
	},
};

export const ErrorOutline: Story = {
	name: 'Error Outline',
	args: {
		variant: 'error-outline',
		text: 'Texto',
	},
};

export const InfoOutline: Story = {
	name: 'Info Outline',
	args: {
		variant: 'info-outline',
		text: 'Texto',
	},
};
