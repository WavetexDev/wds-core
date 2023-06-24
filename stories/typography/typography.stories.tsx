import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../src';

const meta: Meta<typeof Typography> = {
	title: 'Typography',
	component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1Bold: Story = {
	args: {
		variant: 'h1-bold',
		content: 'Click me!',
	},
};

export const H2Bold: Story = {
	args: {
		variant: 'h2-bold',
		content: 'Click me!',
	},
};

export const H3Bold: Story = {
	args: {
		variant: 'h3-bold',
		content: 'Click me!',
	},
};

export const H4Bold: Story = {
	args: {
		variant: 'h4-bold',
		content: 'Click me!',
	},
};

export const H5Bold: Story = {
	args: {
		variant: 'h5-bold',
		content: 'Click me!',
	},
};

export const H6Bold: Story = {
	args: {
		variant: 'h6-bold',
		content: 'Click me!',
	},
};

export const SmallBold: Story = {
	args: {
		variant: 'small-bold',
		content: 'Click me!',
	},
};

export const ParagraphBold: Story = {
	args: {
		variant: 'paragraph-bold',
		content: 'Click me!',
	},
};

export const H1Regular: Story = {
	args: {
		variant: 'h1-regular',
		content: 'Click me!',
	},
};

export const H2Regular: Story = {
	args: {
		variant: 'h2-regular',
		content: 'Click me!',
	},
};

export const H3Regular: Story = {
	args: {
		variant: 'h3-regular',
		content: 'Click me!',
	},
};

export const H4Regular: Story = {
	args: {
		variant: 'h4-regular',
		content: 'Click me!',
	},
};

export const H5Regular: Story = {
	args: {
		variant: 'h5-regular',
		content: 'Click me!',
	},
};

export const H6Regular: Story = {
	args: {
		variant: 'h6-regular',
		content: 'Click me!',
	},
};

export const SmallRegular: Story = {
	args: {
		variant: 'small-regular',
		content: 'Click me!',
	},
};

export const ParagraphRegular: Story = {
	args: {
		variant: 'paragraph-regular',
		content: 'Click me!',
	},
};

export const H1Italic: Story = {
	args: {
		variant: 'h1-italic',
		content: 'Click me!',
	},
};

export const H2Italic: Story = {
	args: {
		variant: 'h2-italic',
		content: 'Click me!',
	},
};

export const H3Italic: Story = {
	args: {
		variant: 'h3-italic',
		content: 'Click me!',
	},
};

export const H4Italic: Story = {
	args: {
		variant: 'h4-italic',
		content: 'Click me!',
	},
};

export const H5Italic: Story = {
	args: {
		variant: 'h5-italic',
		content: 'Click me!',
	},
};

export const H6Italic: Story = {
	args: {
		variant: 'h6-italic',
		content: 'Click me!',
	},
};

export const SmallItalic: Story = {
	args: {
		variant: 'small-italic',
		content: 'Click me!',
	},
};

export const ParagraphItalic: Story = {
	args: {
		variant: 'paragraph-italic',
		content: 'Click me!',
	},
};
