import type { Meta, StoryObj } from '@storybook/react';
import { ModuleCard } from '../../src/components/module-card';

const meta: Meta<typeof ModuleCard> = {
	title: 'Module Card',
	component: ModuleCard,
	argTypes: {
		available: {
			control: { type: 'boolean' },
		},
		draft: {
			table: {
				disable: true,
			},
		},
		is_default: {
			table: {
				disable: true,
			},
		},
		isBonus: {
			table: {
				disable: true,
			},
		},
		expire: {
			table: {
				disable: true,
			},
		},
		itemcount: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		available_at: {
			table: {
				disable: true,
			},
		},
		totalFinishedItems: {
			table: {
				disable: true,
			},
		},
		items: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ModuleCard>;

export const moduleCard: Story = {
	args: {
		name: 'Nome',
		pos: 1,
		totaltime: '00h37m',
		percentProgress: 100,
		available: true,
		availableMessage: 'Disponível',
	},
};
