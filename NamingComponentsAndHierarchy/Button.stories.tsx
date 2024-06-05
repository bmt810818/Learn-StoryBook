import type { Meta, StoryObj } from '@storybook/react'
import { Button as ButtonComponent } from './Button'

// Naming stories
const meta: Meta<typeof ButtonComponent> = {
    title: 'Design System/Atoms/Button',
    component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {};