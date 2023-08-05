import type { Meta, StoryObj } from '@storybook/react';
import { NotificationCard } from '../../src/components/notification-card';

const meta: Meta<typeof NotificationCard> = {
	title: 'Notification Card',
	component: NotificationCard,
	argTypes: {
		created_at: {
			table: { disable: true },
		},
		onButtonClick: {
			table: { disable: true },
		},
		onMarkAsRead: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof NotificationCard>;

export const standard: Story = {
	args: {
		title: 'Nova mensagem do suporte',
		message:
			'Mensagem de Leonardo S. Zuin: Ticket Aberto',
		sent_by: 'Leonardo Zuin',
		read: true,
		created_at: new Date(),
	},
};
export const notRead: Story = {
	args: {
		title: 'Nova mensagem do suporte',
		message:
			'Mensagem de Leonardo S. Zuin: Ticket Aberto',
		sent_by: 'Leonardo Zuin',
		read: false,
		created_at: new Date(),
	},
};
