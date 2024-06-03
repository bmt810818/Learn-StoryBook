import type { Meta } from '@storybook/react'
import { ToanBui } from './ToanBui.stoies'

const meta: Meta<typeof ToanBui> = {
    component: ToanBui,
    decorators: [
        (Story) => (
            <div style={{ margin: ''}}>
                {/*👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it */}
                <Story />
            </div>
        )
    ]
}

export default meta;