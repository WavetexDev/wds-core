import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../src';

const meta: Meta<typeof Typography> = {
	title: 'Typography',
	component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1Bold: Story = {
	name: 'H1Bold',
	args: {
		variant: 'h1-bold',
		content: 'Click me!',
	},
};

export const H2Bold: Story = {
	name: 'H2Bold',
	args: {
		variant: 'h2-bold',
		content: 'Click me!',
	},
};

export const H3Bold: Story = {
	name: 'H3Bold',
	args: {
		variant: 'h3-bold',
		content: 'Click me!',
	},
};

export const H4Bold: Story = {
	name: 'H4Bold',
	args: {
		variant: 'h4-bold',
		content: 'Click me!',
	},
};

export const H5Bold: Story = {
	name: 'H5Bold',
	args: {
		variant: 'h5-bold',
		content: 'Click me!',
	},
};

export const H6Bold: Story = {
	name: 'H6Bold',
	args: {
		variant: 'h6-bold',
		content: 'Click me!',
	},
};

export const SmallBold: Story = {
	name: 'SmallBold',
	args: {
		variant: 'small-bold',
		content: 'Click me!',
	},
};

export const ParagraphBold: Story = {
	name: 'ParagraphBold',
	args: {
		variant: 'paragraph-bold',
		content: 'Click me!',
	},
};

export const H1Regular: Story = {
	name: 'H1Regular',
	args: {
		variant: 'h1-regular',
		content: 'Click me!',
	},
};

export const H2Regular: Story = {
	name: 'H2Regular',
	args: {
		variant: 'h2-regular',
		content: 'Click me!',
	},
};

export const H3Regular: Story = {
	name: 'H3Regular',
	args: {
		variant: 'h3-regular',
		content: 'Click me!',
	},
};

export const H4Regular: Story = {
	name: 'H4Regular',
	args: {
		variant: 'h4-regular',
		content: 'Click me!',
	},
};

export const H5Regular: Story = {
	name: 'H5Regular',
	args: {
		variant: 'h5-regular',
		content: 'Click me!',
	},
};

export const H6Regular: Story = {
	name: 'H6Regular',
	args: {
		variant: 'h6-regular',
		content: 'Click me!',
	},
};

export const SmallRegular: Story = {
	name: 'SmallRegular',
	args: {
		variant: 'small-regular',
		content: 'Click me!',
	},
};

export const ParagraphRegular: Story = {
	name: 'ParagraphRegular',
	args: {
		variant: 'paragraph-regular',
		content: 'Click me!',
	},
};

export const H1Italic: Story = {
	name: 'H1Italic',
	args: {
		variant: 'h1-italic',
		content: 'Click me!',
	},
};

export const H2Italic: Story = {
	name: 'H2Italic',
	args: {
		variant: 'h2-italic',
		content: 'Click me!',
	},
};

export const H3Italic: Story = {
	name: 'H3Italic',
	args: {
		variant: 'h3-italic',
		content: 'Click me!',
	},
};

export const H4Italic: Story = {
	name: 'H4Italic',
	args: {
		variant: 'h4-italic',
		content: 'Click me!',
	},
};

export const H5Italic: Story = {
	name: 'H5Italic',
	args: {
		variant: 'h5-italic',
		content: 'Click me!',
	},
};

export const H6Italic: Story = {
	name: 'H6Italic',
	args: {
		variant: 'h6-italic',
		content: 'Click me!',
	},
};

export const SmallItalic: Story = {
	name: 'SmallItalic',
	args: {
		variant: 'small-italic',
		content: 'Click me!',
	},
};

export const ParagraphItalic: Story = {
	name: 'ParagraphItalic',
	args: {
		variant: 'paragraph-italic',
		content: 'Click me!',
	},
};
