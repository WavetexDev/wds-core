import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../src/components/avatar';

const meta: Meta<typeof Avatar> = {
	title: 'Avatar',
	component: Avatar,
	argTypes: {
		size: {
			options: ['sm', 'md', 'lg', 'xl'],
			control: { type: 'radio' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Empty: Story = {
	args: {
		size: 'sm',
		name: 'Gustavo Zuin',
	},
};

export const Filled: Story = {
	args: {
		size: 'sm',
		name: 'Gustavo Zuin',
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		customStyles: {},
	},
};
