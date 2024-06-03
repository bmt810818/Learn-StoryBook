import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// Applying tags
const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs', 'stable', '!dev'],// Docs-only stories => !dev
}

export default meta;

type Story = StoryObj<typeof Button>;
export const ExperimentalFeatureStory: Story = {
    tags: ['!stable','experimental'],
}

// Combo stories, still tested individually
export const Variant1: Story = {
    tags: ['!dev', '!autodocs'],
    args: { variant: 1 },
}

export const Variant2: Story = {
    tags: ['!dev', '!autodocs'],
    args: { variant: 2 },
}

export const Combo: Story = {
    // 👇 This story should not be tested, but will appear in the sidebar and docs page
    tags: ['!test'],
    render: () => (
      <>
        <Button variant={1}>
        <Button variant={2}>
        {/* Etc... */}
      </>
    ),
  };
