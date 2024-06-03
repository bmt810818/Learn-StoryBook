import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { RegistrationForm } from './RegistrationForm'

const meta: Meta<typeof RegistrationForm> = {
    component: RegistrationForm,
}

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByLabelText('email', {
            selector: 'input',
        })

        await userEvent.type(emailInput, 'example-email@email.com', {
            delay: 100,
        })

        const passwordInput = canvas.getByLabelText('password', {
            selector: 'input',
        })

        await userEvent.type(passwordInput, 'ExamplePassword', {
            delay: 100,
        })

        const submitButton = canvas.getByRole('button');

        await userEvent.click(submitButton);
    }
};