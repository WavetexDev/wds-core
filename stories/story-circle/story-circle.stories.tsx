import type { Meta, StoryObj } from '@storybook/react';
import { StoryCircle } from '../../src/components/story-circle';

const meta: Meta<typeof StoryCircle> = {
	title: 'Story Circle',
	component: StoryCircle,
};

export default meta;

type Story = StoryObj<typeof StoryCircle>;

export const Empty: Story = {
	name: 'Empty',
	args: {
		username: 'User',
		profilePictureUrl: '',
	},
};

export const Filled: Story = {
	name: 'Filled',
	args: {
		username: '',
		profilePictureUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
	},
};
