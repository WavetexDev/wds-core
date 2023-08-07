import type { Meta, StoryObj } from '@storybook/react';
import { LectureCard } from '../../../src/components/lecture-card';

const meta: Meta<typeof LectureCard> = {
	title: 'Components/Course components/Lecture Card',
	component: LectureCard,
	argTypes: {
		toggleFavorite: {
			table: { disable: true },
		},
		onClick: {
			table: { disable: true },
		},
		customStyles: {
			table: { disable: true },
		},
		thumbnail: {
			table: { disable: true },
		},
	},
};

export default meta;
type Story = StoryObj<typeof LectureCard>;

export const primaryLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was clicked'),
		variant: 'primary',
		avaliable: true,
	},
};

export const secondaryLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
	},
};

export const finishedLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
		finished: true,
	},
};

export const inProgressLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
		remainingSeconds: 300,
	},
};

export const unavailableLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWR3VYAjPhTwAXgJ7-DuANYixP2OE_8bLsw&usqp=CAU',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: false,
		avaliableMessage: 'Disponível em XX/XX/XXXX',
	},
};

export const videoLectureCard: Story = {
	args: {
		type: 'VIDEO',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail: '',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
	},
};

export const audioLectureCard: Story = {
	args: {
		type: 'AUD',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail: '',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
	},
};

export const materialLectureCard: Story = {
	args: {
		type: 'MAT',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail: '',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
	},
};

export const textLectureCard: Story = {
	args: {
		type: 'TXT',
		name: 'Postando depoimentos em áudios nos stories',
		thumbnail: '',
		teacher: 'Ana Tex',
		duration: 605,
		toggleFavorite: () => alert('Favorite was clicked'),
		onClick: () => alert('Lecture Card was click'),
		variant: 'secondary',
		avaliable: true,
	},
};
