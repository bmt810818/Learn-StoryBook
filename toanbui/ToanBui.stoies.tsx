import type { Meta, StoryObj } from '@storybook/react';
import { Dev } from '../dev';

const meta: Meta<typeof Dev> = {
    component: Dev,
};

export default meta;
type Story = StoryObj<typeof Dev>;

export const FirstStory: Story = {
    args: {
        
    }
}