import type { Meta, StoryObj } from '@storybook/react'
import MockDate from 'mockdate'

import { getUserFromSession } from '#api/session.mock'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  component: Page,
  // Set the value of Date for every story in the file
  async beforeEach() {
    MockDate.set('2024-06-01')

    return () => {
      MockDate.reset();
    }
  }
}

export default meta

type Story = StoryObj<typeof Page>

export const Default: Story = {
  async play({ canvasElement }) {
    
  }
}