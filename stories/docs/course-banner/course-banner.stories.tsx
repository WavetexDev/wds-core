import type { Meta, StoryObj } from '@storybook/react';
import { CourseBanner } from '../../../src/components/course-banner';

const meta: Meta<typeof CourseBanner> = {
	title: 'Components/Course components/Course Banner',
	component: CourseBanner,
	argTypes: {
		bannerImageUrl: {
			table: { disable: true },
		},
		courseId: {
			table: { disable: true },
		},
		customStyles: {
			table: { disable: true },
		},
		onClick: {
			table: { disable: true },
		},
	},
};

export default meta;
type Story = StoryObj<typeof CourseBanner>;

export const Empty: Story = {
	name: 'Empty',
	args: {
		courseName: 'Nome do curso',
		bannerImageUrl: '',
		courseId: '0',
	},
};

export const Filled: Story = {
	name: 'Filled',
	args: {
		courseName: 'Nome do curso',
		bannerImageUrl:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		courseId: '0',
	},
};
