import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal, Input, RegularButton } from '../../src';

const meta: Meta<typeof Modal> = {
	title: 'Modal',
	component: Modal,
	args: {
		isShowing: true,
		title: 'Título',
		onClose: () => alert('fechando...'),
	},
};

export default meta;

type Story = StoryObj<typeof Modal>;

const CenterModalContent = () => {
	return (
		<>
			<div style={{ marginBottom: '30px' }}>
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
		</>
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

			<RegularButton
				text="salvar"
				variant="primary-contained"
			/>
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

			<div style={{ display: 'flex', gap: '10px' }}>
				<RegularButton
					text="salvar"
					variant="primary-contained"
				/>
				<RegularButton
					text="cancelar"
					variant="primary-ghost"
				/>
			</div>
		</>
	);
};

export const CenterModal: Story = {
	args: {
		children: <CenterModalContent />,
		position: 'center',
		subtitle: 'subtítulo...',
		customStyle: {
			modal: {
				width: '450px',
			},
		},
	},
};

export const RightSideModal: Story = {
	args: {
		children: <RightSideModalContent />,
		position: 'right',
	},
};

export const CustomizedModal: Story = {
	args: {
		children: <CustomizedModalContent />,
		position: 'right',
		customStyle: {
			modal: {
				borderRadius: '10px 0 0 10px',
				width: '300px',
				backgroundColor: 'beige',
			},
		},
	},
};
