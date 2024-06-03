import { Preview } from '@storybook/react'

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'light', value: '#fff' },
                { name: 'dark', value: '#333' },
            ],
        },
    },
};

export default preview;
// this is the file where you configure all stories
