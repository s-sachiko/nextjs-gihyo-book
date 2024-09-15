import { Meta, StoryObj } from '@storybook/react'
import RectLoader from './index'

export default {
  title: 'Atoms/RectLoader',
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta<typeof RectLoader>

export const Normal: StoryObj<typeof RectLoader> = {
  render: (args) => <RectLoader {...args} />,
}
