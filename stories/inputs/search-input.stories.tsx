import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof SearchInput> = {
	title: 'Search Input',
	component: SearchInput,
	argTypes: {
		icon: {
			table: { disable: true }
		},
		required: {
			table: { disable: true }
		},
		type: {
			table: { disable: true }
		},
		disabled: {
			control: {
				type: 'boolean'
			}
		}
	}
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const standart: Story = {
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
