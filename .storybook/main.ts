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
    },
    // webpackFinal: async (config) => {
    //     if (config.resolve) {
    //         config.resolve.alias = {
    //             lodash: require.resolve('./lodash.mock'),
    //             '@/api$': path.resolve(__dirname, './api.mock.ts'),
    //             '@/app/action$': path.resolve(__dirname, './app/action.mock.ts'),
    //             '@/lib/session$': path.resolve(__dirname, './lib/session.mock.ts'),
    //             '@/lib/db$': path.resolve(__dirname, './lib/db.mock.ts'),
    //         };
    //     }

    //     return config;
    // },
};

export default config;