import type { Meta, StoryObj } from '@storybook/react';
import { StoryCircle } from '../../../src/components/story-circle';

const meta: Meta<typeof StoryCircle> = {
	title: 'Components/User data/Story Circle',
	component: StoryCircle,
	argTypes: {
		img: {
			table: { disable: true },
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

type Story = StoryObj<typeof StoryCircle>;

export const Empty: Story = {
	name: 'Empty',
	args: {
		name: 'User',
		img: '',
	},
};

export const Filled: Story = {
	name: 'Filled',
	args: {
		name: '',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
	},
};

export const EmptyHighlight: Story = {
	name: 'Empty Highlight',
	args: {
		name: 'User',
		img: '',
		highlight: true,
	},
};

export const FilledHighlight: Story = {
	name: 'Filled Highlight',
	args: {
		name: '',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		highlight: true,
	},
};
