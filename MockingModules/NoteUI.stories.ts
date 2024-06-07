import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

import { saveNote } from '#app/action.mock'
import { createNotes } from '#mocks/notes'
import NoteUI from './note-ui'

const meta: Meta<typeof NoteUI> = {
  title: 'Mocked/NoteUI',
  component: NoteUI,
}

export default meta

type Story = StoryObj<typeof NoteUI>

const notes = createNotes()

export const SaveFlow: Story = {
  name: 'Save Flow ▶',
  args: {
    isEditing: true,
    note: notes[0],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const saveButton = canvas.getByRole('menuitem', { name: /done/i })
    await userEvent.click(saveButton);

    await expect(saveNote).toHaveBeenCalled();
  }
}