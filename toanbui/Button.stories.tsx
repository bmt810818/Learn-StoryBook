import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,

    //👇 Meta-level parameters
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },

    //👇 Creates specific argTypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        //👇 Now all Button stories will be primary.
        primary: true,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'I am the primary',
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        ...Primary.args,
        label: '😄👍😍💯',
        primary: false,
    },
};

export const Tertiary: Story = {
    args: {
        ...Primary.args,
        label: '📚📕📈🤓',
    },
};

export const ToanBui: Story = {
    args: {
        ...Secondary.args,
        label: '',
    },
};

export const OnDark: Story = {
    // Story-level parameters
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};






