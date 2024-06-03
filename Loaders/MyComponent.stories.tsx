import type { Meta, StoryObj } from '@storybook/react'
import fetch from 'node-fetch'
import { TodoItem } from './TodoItem'

const meta: Meta<typeof TodoItem> = {
    component: TodoItem,
    render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
    
}

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
    loaders: [
        async () => ({
            todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
        }),
    ]
}