import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../../../src';

const meta: Meta<typeof SearchInput> = {
	title: 'Components/Inputs/Search Input',
	component: SearchInput,
	argTypes: {
		icon: {
			table: { disable: true },
		},
		required: {
			table: { disable: true },
		},
		type: {
			table: { disable: true },
		},
		customStyles: {
			table: {
				disable: true,
			},
		},
		disabled: {
			control: {
				type: 'boolean',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const standard: Story = {
	args: {
		showError: false,
		errorMessage: '',
		type: 'text',
		placeholder: 'Faça sua pesquisa',
	},
};

export const withError: Story = {
	args: {
		showError: true,
		errorMessage: 'Digite ao menos 3 dígitos',
		type: 'text',
		placeholder: 'Faça sua pesquisa',
	},
};
