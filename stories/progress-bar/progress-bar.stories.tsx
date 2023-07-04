import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../../src/components/progress-bar';

const meta: Meta<typeof ProgressBar> = {
	title: 'Progress Bar',
	component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const progressBar: Story = {
	name: 'Progress Bar',
	args: {
		percentProgress: 30,
	},
};
