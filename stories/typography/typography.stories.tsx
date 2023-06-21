import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../src';

const meta: Meta<typeof Typography> = {
	component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const typography: Story = {
	args: {
		variant: 'h1-bold',
		content: 'Click me!',
	},
};
