import type { Meta, StoryObj } from '@storybook/react'
import { Foo } from './Foo'

const meta: Meta<typeof Foo> = {
    title: 'OtherFoo/Bar',
    component: Foo,
    id: 'Foo/Bar',
}

export default meta
type Story = StoryObj<typeof Foo>

export const Baz: Story = {
    name: 'Insert name here',
}