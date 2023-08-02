import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../src';

import { TfiUser } from 'react-icons/tfi';

const meta: Meta<typeof Input> = {
	title: 'Components/Inputs/Input',
	component: Input,
	argTypes: {
		icon: {
			table: { disable: true },
		},
		required: {
			table: { disable: true },
		},
		customStyles: {
			table: {
				disable: true,
			},
		},
		type: {
			options: [
				'text',
				'email',
				'number',
				'password',
			],
			control: {
				type: 'select',
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

type Story = StoryObj<typeof Input>;

export const standard: Story = {
	args: {
		icon: <TfiUser size={18} />,
		showError: false,
		errorMessage: '',
		type: 'text',
		placeholder: 'Insira seu nome',
	},
};

export const withDefaultEmailIcon: Story = {
	args: {
		showError: false,
		errorMessage: '',
		type: 'email',
		placeholder: 'Insira seu e-mail',
	},
};

export const withDefaultPasswordIcon: Story = {
	args: {
		showError: false,
		errorMessage: '',
		type: 'password',
		placeholder: 'Insira sua senha',
	},
};

export const withError: Story = {
	args: {
		showError: true,
		errorMessage: 'Senha inválida',
		type: 'password',
		placeholder: 'Insira sua senha',
	},
};
