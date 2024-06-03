import type { Meta, StoryObj } from '@storybook/react'
import { fireEvent, userEvent, waitFor, within } from '@storybook/test'
import { MyComponent } from './MyComponent'

const meta: Meta <typeof MyComponent> = {
    component: MyComponent,
}

export default meta;
type Story = StoryObj<typeof MyComponent>;

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Composing stories
export const FirstStory: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
    }
}

export const Secondary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByTestId('other-element'), 'another value');
    }
}

export const CombinedStories: Story = {
    play: async (context) => {
        const canvas = within(context.canvasElement);

        await FirstStory.play(context);
        await Secondary.play(context);
        await userEvent.type(canvas.getByTestId('another-element'), 'random value');
    }
}

// Working with events
export const ClickExample: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole('button'));
    }
}

export const FireEventExample: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await fireEvent.click(canvas.getByTestId('data-testid'));
    }
}

export const ExampleChangeEvent: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const select = canvas.getByRole('listbox');

        await userEvent.selectOptions(select, ['One Item']);
        await sleep(2000);

        await userEvent.selectOptions(select, ['Another Item']);
        await sleep(2000);

        await userEvent.selectOptions(select, ['Yet another item']);
    }
}

export const DelayedStory: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const exampleElement = canvas.getByLabelText('example-element');

        // The delay option sets the amount of milliseconds between characters being typed
        await userEvent.type(exampleElement, 'random string', {
            delay: 100,
        })

        const AnotherExampleElement = canvas.getByLabelText('another-example-element');
        await userEvent.type(AnotherExampleElement, 'another random string', {
            delay: 100,
        })
    }
}

export const ExampleAsyncStory: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const Input = canvas.getByLabelText('Username', {
            selector: 'input',
        })

        await userEvent.type(Input, 'WrongInput', {
            delay: 100,
        })

        const Submit = canvas.getByRole('button');
        await userEvent.click(Submit);

        await waitFor(async () => {
            await userEvent.hover(canvas.getByTestId('error'))
        })
    }
}

// Querying elements
export const ExampleWithRole: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
    }
}

export const AsyncExample: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Other steps

        // Waits for the component to be rendered before querying the element
        await canvas.findByRole('button', { name: / button label/i});
    }
}

// Working with the Canvas
export const ExampleStory: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.type(canvas.getByTestId('example-element'), 'something');
        await userEvent.click(canvas.getByRole('another-element'));
    }
}