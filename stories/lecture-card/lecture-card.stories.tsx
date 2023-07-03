import type { Meta, StoryObj } from '@storybook/react';
import { LectureCard } from '../../src/components/lecture-card';

const meta: Meta<typeof LectureCard> = {
	title: 'Lecture Card',
	component: LectureCard,
	argTypes: {
		thumbnail: {
			table: { disable: false }, // * Toggle this to test thumbnail icon
		},
	},
};

export default meta;
type Story = StoryObj<typeof LectureCard>;

export const lectureCard: Story = {
	args: {
		lectureType: 'video',
		title: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		author: 'Ana Tex',
		duration: 605,
		pillVariant: 'success',
		pillText: 'Concluída',
	},
};
