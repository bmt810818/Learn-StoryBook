import type { Preview } from '@storybook/react'

const preview: Preview = {
    loaders: [
        async () => ({
            currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
        })
    ],
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