import { addons } from '@storybook/manager-api'

addons.setConfig({
    sidebar: {
        // showRoots: false,
        renderLabel: ({ name, type }) => {type === 'story' ? name : startCase(name)},
    },
})