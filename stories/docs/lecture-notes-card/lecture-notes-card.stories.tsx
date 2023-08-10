import type { Meta, StoryObj } from '@storybook/react';
import { LectureNotesCard } from '../../../src/components/lecture-notes-card';

const meta: Meta<typeof LectureNotesCard> = {
	title: 'Components/Course components/Lecture Notes Card',
	component: LectureNotesCard,
};

export default meta;

type Story = StoryObj<typeof LectureNotesCard>;

export const standard: Story = {
	args: {
		modname: 'Módulo 1',
		itemname: 'Aula 1',
		notes: [
			{ date: 1, note: 'Nota 1' },
			{ date: 2, note: 'Nota 2' },
			{ date: 3, note: 'Nota 3' },
		],
		lastNote: 'Aula 1',
	},
};
