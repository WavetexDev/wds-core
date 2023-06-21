import type { Meta, StoryObj } from '@storybook/react';
import { RegularButton } from '../../src';

const meta: Meta<typeof RegularButton> = {
    component: RegularButton,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: [
                'primary-contained',
                'primary-ghost',
                'primary-text',
                'secondary-contained',
                'secondary-ghost',
                'secondary-text',
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof RegularButton>;

export const PrimaryContained: Story = {
    args: {
        variant: 'primary-contained',
        content: 'Click me!'
    },
};

export const PrimaryGhost: Story = {
    args: {
        variant: 'primary-ghost',
        content: 'Click me!'
    },
};

export const PrimaryText: Story = {
    args: {
        variant: 'primary-text',
        content: 'Click me!'
    },
};

export const SecondaryContained: Story = {
    args: {
        variant: 'secondary-contained',
        content: 'Click me!'
    },
};

export const SecondaryGhost: Story = {
    args: {
        variant: 'secondary-ghost',
        content: 'Click me!'
    },
};

export const SecondaryText: Story = {
    args: {
        variant: 'secondary-text',
        content: 'Click me!'
    },
};
