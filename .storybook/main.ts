import type { StorybookConfig } from '@storybook/react'

const config: StorybookConfig = {
    framework: '@storybook/vue',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx'],
    addons: [
        // Other Storybook addons
        '@storybook/addon-interactions', //👈 Register the addon
    ]
}

export default config;