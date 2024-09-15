import { Meta, StoryObj } from '@storybook/react'
import ShapeImage from './index'

const meta: Meta<typeof ShapeImage> = {
  title: 'Atoms/ShapeImage',
  component: ShapeImage,
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: '画像の形',
      table: {
        type: { summary: 'circle | square' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
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
}

export default meta

type Story = StoryObj<typeof ShapeImage>

export const Circle: Story = {
  args: {
    src: '/images/sample/1.jpg',
    shape: 'circle',
    width: 320,
    height: 320,
  },
}

export const Square: Story = {
  args: {
    src: '/images/sample/1.jpg',
    shape: 'square',
    width: 320,
    height: 320,
  },
}
