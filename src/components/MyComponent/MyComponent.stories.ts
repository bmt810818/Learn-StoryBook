import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './MyComponent'

const meta: Meta<typeof MyComponent> = {
    component: MyComponent,
    title: 'components/MyComponent/MyComponent',
}

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
    args: {
        something: 'Something else',
    }
}