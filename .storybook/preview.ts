import type { Preview } from '@storybook/react'

const preview: Preview = {
    loaders: [
        async () => ({
            currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
        })
    ]
}

export default preview;