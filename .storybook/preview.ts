import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
    loaders: [mswLoader],
    tags: ['autodocs'],
    parameters: {
        // options: {
        //     storySort: (a, b) =>
        //         a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numberic: true }),
        // },
        options: {
            storySort: {
                method: '',
                order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components', '*', 'WIP'],
                locales: '',
            },
        },
    },
}

export default preview;