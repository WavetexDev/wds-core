import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal, Input } from '../../src';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal,
	args: {
		isShowing: true,
		onClose: () => alert('fechando...'),
		title: 'Título',
	},
	argTypes: {
		onClose: {
			table: { disable: true },
		},
		children: {
			table: { disable: true },
		},
		confirmButton: {
			table: { disable: true },
		},
		cancelButton: {
			table: { disable: true },
		},
		dangerButton: {
			table: { disable: true },
		},
		customStyles: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

const CenterModalContent = () => {
	return (
		<div>
			<span>Link:</span>

			<input
				type="text"
				placeholder="https://www.youtube.com/watch?v=jfKfPfyJRdk"
				disabled
				style={{
					padding: '5px 10px',
					width: '100%',
				}}
			/>
		</div>
	);
};

const RightSideModalContent = () => {
	return (
		<>
			<label style={{ marginBottom: '10px' }}>
				<span style={{ display: 'block' }}>
					Nome
				</span>
				<Input type="text" />
			</label>

			<label style={{ marginBottom: '10px' }}>
				<span style={{ display: 'block' }}>
					Sobrenome
				</span>
				<Input type="text" />
			</label>

			<label style={{ marginBottom: 'auto' }}>
				<span style={{ display: 'block' }}>
					Email
				</span>
				<Input type="text" />
			</label>
		</>
	);
};

const CustomizedModalContent = () => {
	return (
		<>
			<label style={{ marginBottom: '10px' }}>
				<span style={{ display: 'block' }}>
					Nome
				</span>
				<Input type="text" />
			</label>

			<label style={{ marginBottom: '10px' }}>
				<span style={{ display: 'block' }}>
					Sobrenome
				</span>
				<Input type="text" />
			</label>

			<label style={{ marginBottom: 'auto' }}>
				<span style={{ display: 'block' }}>
					Email
				</span>
				<Input type="text" />
			</label>
		</>
	);
};

export const CenterModal: Story = {
	args: {
		children: <CenterModalContent />,
		position: 'center',
		size: 'sm',
		subtitle: 'subtítulo...',
	},
};

export const RightSideModal: Story = {
	args: {
		children: <RightSideModalContent />,
		position: 'right',
		size: 'sm',
		confirmButton: {
			show: true,
			text: 'Salvar',
			action: () => alert('salvando...'),
		},
		cancelButton: {
			show: true,
			action: () => alert('cancelando...'),
		},
		dangerButton: {
			show: true,
			action: () => confirm('Tem certeza?'),
		},
	},
};

export const CustomizedModal: Story = {
	args: {
		children: <CustomizedModalContent />,
		position: 'right',
		size: 'sm',
		confirmButton: {
			show: true,
			action: () => alert('salvando...'),
		},
		dangerButton: {
			show: true,
			action: () => confirm('tem certeza?'),
		},
		customStyles: {
			modal: {
				borderRadius: '10px 0 0 10px',
				width: '350px',
				backgroundColor: 'beige',
			},
		},
	},
};
