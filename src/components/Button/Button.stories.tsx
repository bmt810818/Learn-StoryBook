import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<Button> = {
    title: 'components/Button',
    component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>

const Primary: Story = {
    name: 'Primary',
    args: {
        label: 'Button',
    },
}