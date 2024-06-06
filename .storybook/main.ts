import type { StorybookConfig } from '@storybook/react'

const config: StorybookConfig = {
    framework: '@storybook/vue',
    // stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx'],
    stories: [
        {
            directory: '../src',
            titlePrefix: 'Custom',
        },
    ],
    addons: [
        // Other Storybook addons
        '@storybook/addon-interactions', //👈 Register the addon
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ],
    core: {
        builder: '@storybook/builder-vite', //👈 The builder enable here
    }
}

export default config;