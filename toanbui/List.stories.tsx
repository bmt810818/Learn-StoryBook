import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { Selected, Unselected } from './ListItem.stories';

const meta: Meta<typeof List> = {
    component: List,
    subcomponents: { ListItem },
};

export default meta;
type Story = StoryObj<typeof List>;

//👇 Always an empty list, not super interesting
export const Empty: Story = {}

export const OneItem: Story = {
    render: (args) => (
        <List {...args}>
            <ListItem />
        </List>
    ),
};

export const ManyItems: Story = {
    render: (args) => (
        <List {...args}>
            <ListItem {...Selected.args} />
            <ListItem {...Unselected.args} />
            <ListItem {...Unselected.args} />
        </List>
    ),
};

