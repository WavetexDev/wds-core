import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../src';

const meta: Meta<typeof Typography> = {
	title: 'Typography',
	component: Typography,
	argTypes: {
		customStyles: {
			table: { disable: true },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1Bold: Story = {
	name: 'H1 Bold',
	args: {
		variant: 'h1-bold',
		text: 'Click me!',
	},
};

export const H2Bold: Story = {
	name: 'H2 Bold',
	args: {
		variant: 'h2-bold',
		text: 'Click me!',
	},
};

export const H3Bold: Story = {
	name: 'H3 Bold',
	args: {
		variant: 'h3-bold',
		text: 'Click me!',
	},
};

export const H4Bold: Story = {
	name: 'H4 Bold',
	args: {
		variant: 'h4-bold',
		text: 'Click me!',
	},
};

export const H5Bold: Story = {
	name: 'H5 Bold',
	args: {
		variant: 'h5-bold',
		text: 'Click me!',
	},
};

export const H6Bold: Story = {
	name: 'H6 Bold',
	args: {
		variant: 'h6-bold',
		text: 'Click me!',
	},
};

export const SmallBold: Story = {
	name: 'Small Bold',
	args: {
		variant: 'small-bold',
		text: 'Click me!',
	},
};

export const ParagraphBold: Story = {
	name: 'Paragraph Bold',
	args: {
		variant: 'paragraph-bold',
		text: 'Click me!',
	},
};

export const LabelBold: Story = {
	name: 'Label  Bold',
	args: {
		variant: 'label-bold',
		text: 'Click me!',
	},
};

export const H1Regular: Story = {
	name: 'H1 Regular',
	args: {
		variant: 'h1-regular',
		text: 'Click me!',
	},
};

export const H2Regular: Story = {
	name: 'H2 Regular',
	args: {
		variant: 'h2-regular',
		text: 'Click me!',
	},
};

export const H3Regular: Story = {
	name: 'H3 Regular',
	args: {
		variant: 'h3-regular',
		text: 'Click me!',
	},
};

export const H4Regular: Story = {
	name: 'H4 Regular',
	args: {
		variant: 'h4-regular',
		text: 'Click me!',
	},
};

export const H5Regular: Story = {
	name: 'H5 Regular',
	args: {
		variant: 'h5-regular',
		text: 'Click me!',
	},
};

export const H6Regular: Story = {
	name: 'H6 Regular',
	args: {
		variant: 'h6-regular',
		text: 'Click me!',
	},
};

export const SmallRegular: Story = {
	name: 'Small Regular',
	args: {
		variant: 'small-regular',
		text: 'Click me!',
	},
};

export const ParagraphRegular: Story = {
	name: 'Paragraph Regular',
	args: {
		variant: 'paragraph-regular',
		text: 'Click me!',
	},
};

export const LabelRegular: Story = {
	name: 'Label  Regular',
	args: {
		variant: 'label-regular',
		text: 'Click me!',
	},
};

export const H1Italic: Story = {
	name: 'H1 Italic',
	args: {
		variant: 'h1-italic',
		text: 'Click me!',
	},
};

export const H2Italic: Story = {
	name: 'H2 Italic',
	args: {
		variant: 'h2-italic',
		text: 'Click me!',
	},
};

export const H3Italic: Story = {
	name: 'H3 Italic',
	args: {
		variant: 'h3-italic',
		text: 'Click me!',
	},
};

export const H4Italic: Story = {
	name: 'H4 Italic',
	args: {
		variant: 'h4-italic',
		text: 'Click me!',
	},
};

export const H5Italic: Story = {
	name: 'H5 Italic',
	args: {
		variant: 'h5-italic',
		text: 'Click me!',
	},
};

export const H6Italic: Story = {
	name: 'H6 Italic',
	args: {
		variant: 'h6-italic',
		text: 'Click me!',
	},
};

export const SmallItalic: Story = {
	name: 'Small Italic',
	args: {
		variant: 'small-italic',
		text: 'Click me!',
	},
};

export const ParagraphItalic: Story = {
	name: 'Paragraph Italic',
	args: {
		variant: 'paragraph-italic',
		text: 'Click me!',
	},
};

export const LabelItalic: Story = {
	name: 'Label  Italic',
	args: {
		variant: 'label-italic',
		text: 'Click me!',
	},
};
