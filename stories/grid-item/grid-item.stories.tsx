import type { Meta, StoryObj } from '@storybook/react';
import { GridItem } from '../../src/components/grid-item';

const meta: Meta<typeof GridItem> = {
	title: 'Grid Item',
	component: GridItem,
	argTypes: {
		customStyles: {
			table: { disable: true },
		},
		id: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof GridItem>;

export const row: Story = {
	name: 'Row',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'brown',
		},
		children: 'children',
	},
};
export const col1_blue: Story = {
	name: 'Col 1 - Blue',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'blue',
		},
		children: 'children',
	},
};
export const col2_red: Story = {
	name: 'Col 2 - Red',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'red',
		},
		children: 'children',
	},
};
export const col3_yellow: Story = {
	name: 'Col 3 - Yellow',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'yellow',
		},
		children: 'children',
	},
};
export const col4_green: Story = {
	name: 'Col 4 - Green',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'green',
		},
		children: 'children',
	},
};
export const col5_orange: Story = {
	name: 'Col 5 - Orange',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'orange',
		},
		children: 'children',
	},
};
export const col6_purple: Story = {
	name: 'Col 6 - Purple',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'Purple',
		},
		children: 'children',
	},
};
export const col7_pink: Story = {
	name: 'Col 7 - Pink',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'pink',
		},
		children: 'children',
	},
};
export const col8_black: Story = {
	name: 'Col 8 - Black',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'black',
		},
		children: 'children',
	},
};
export const col9_limeGreen: Story = {
	name: 'Col 9 - Limegreen',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'limegreen',
		},
		children: 'children',
	},
};
export const col10_lightBlue: Story = {
	name: 'Col 10 - LightBlue',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'lightblue',
		},
		children: 'children',
	},
};
export const col11_gray: Story = {
	name: 'Col 11 - Gray',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'gray',
		},
		children: 'children',
	},
};
export const col12_gold: Story = {
	name: 'Col 12 - Gold',
	args: {
		variant: 'row',
		id: '1',
		customStyles: {
			background: 'gold',
		},
		children: 'children',
	},
};
