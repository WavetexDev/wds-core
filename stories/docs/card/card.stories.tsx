import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../../src/components/card';

const meta: Meta<typeof Card> = {
	title: 'Components/Text display/Card',
	component: Card,
	argTypes: {
		customStyles: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const standard: Story = {
	args: {
		title: 'Titúlo do Card',
		text: 'Texto do Card',
		message: 'Mensagem do Card',
		customStyles: { minHeight: '150px' },
	},
};
