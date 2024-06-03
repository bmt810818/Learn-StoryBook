import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import * as ButtonStories from './Button.stories';

const meta: Meta<typeof ButtonGroup> = {
    component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Pair: Story = {
    args: {
        buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.ToanBui.args }],
        orientation: 'horizontal',
    }
}
