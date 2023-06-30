import type { Meta, StoryObj } from '@storybook/react';
import { GridItem } from '../../src/components/grid-item';

const meta: Meta<typeof GridItem> = {
	title: 'Grid Item',
	component: GridItem,
};

export default meta;

type Story = StoryObj<typeof GridItem>;

export const gridItem: Story = {
	args: {
		variant: 'row',
		id: '1',
		// ? Does custom styles go in here?
	},
};
