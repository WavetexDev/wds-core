import type { Meta, StoryObj } from '@storybook/react';
import { NumberBadge } from '../../src';

const meta: Meta<typeof NumberBadge> = {
    component: NumberBadge,
    argTypes: {
        value: {
            control: { type: 'number' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof NumberBadge>;

export const Zero: Story = {
    args: {
        value: 0
    },
};

export const Filled: Story = {
    args: {
        value: 6
    },
};
