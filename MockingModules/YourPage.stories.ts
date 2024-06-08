import type { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse, delay } from 'msw'
import { MyComponent } from './MyComponent'
import { DocumentScreen } from './YourPage'

const meta: Meta<typeof MyComponent> = {
  component: DocumentScreen,
}

export default meta
type Story = StoryObj<typeof MyComponent>

const TestData = {
  user: {
    userId: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approve',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content: 
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
}

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://', () => {
          return HttpResponse.json(TestData)
        })
      ]
    }
  }
}

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://', async () => {
          await delay(800)
          return HttpResponse.json({
            errors: [
              {
                message: 'Access denied',
              },
            ],
          });
        }),
      ],
    },
  },
}