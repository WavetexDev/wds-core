import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '../../../src/components/paper';

import { ModuleCard } from '../../../src/components/module-card';
import React from 'react';

const meta: Meta<typeof Paper> = {
	title: 'Components/Base components/Paper',
	component: Paper,
	argTypes: {
		customStyles: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const standard: Story = {
	args: {
		children: (
			<ModuleCard
				name={'Exemplificando o componente Paper'}
				draft={false}
				pos={0}
				itemcount={0}
				id={''}
				totaltime={''}
				available={false}
				available_at={''}
				availableMessage={''}
				percentProgress={0}
				totalFinishedItems={0}
				expanded={false}
				toggleExpanded={function (): void {
					throw new Error(
						'Function not implemented.'
					);
				}}
			/>
		),
	},
};
