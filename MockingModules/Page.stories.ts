import type { Meta, StoryObj } from '@storybook/react'

import { getUserFromSession } from '#api/session.mock'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  component: Page,
}

export default meta

type Story = StoryObj<typeof Page>

export const Default: Story = {
  async beforeEach() {
    getUserFromSession.mockReturnValue({ id: '1', name: 'Alice' })
  },
}