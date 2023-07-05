import type { Meta, StoryObj } from '@storybook/react';
import { ModuleCard } from '../../src/components/module-card';

const meta: Meta<typeof ModuleCard> = {
	title: 'Module Card',
	component: ModuleCard,
};

export default meta;

type Story = StoryObj<typeof ModuleCard>;

export const moduleCard: Story = {
	args: {},
};
