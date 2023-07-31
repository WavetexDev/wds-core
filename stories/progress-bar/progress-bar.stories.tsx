import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../../src/components/progress-bar';

const meta: Meta<typeof ProgressBar> = {
	title: 'Progress Bar',
	component: ProgressBar,
	argTypes: {
		customStyles: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const standard: Story = {
	args: {
		percentProgress: 30,
	},
};
