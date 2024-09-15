import { Meta, StoryObj } from '@storybook/react'
import React, { useState, useEffect, ComponentProps } from 'react'
import Dropzone from './index'
import Button from 'components/atoms/Button'
import Box from 'components/layout/Box'

const meta: Meta<typeof Dropzone> = {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      control: { type: 'object' },
      description: '受け付けるファイルタイプ',
      table: {
        type: { summary: 'array' },
      },
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    height: 200,
    width: '100%',
    hasError: false,
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  },
}

export default meta

type Story = StoryObj<typeof Dropzone>

const DropzoneWithHooks = (args: ComponentProps<typeof Dropzone>) => {
  const [files, setFiles] = useState<File[]>([])

  const handleDrop = (droppedFiles: File[]) => {
    setFiles(droppedFiles)
    args.onDrop?.(droppedFiles)
  }

  const fetchData = async () => {
    const res = await fetch('/images/sample/1.jpg')
    const blob = await res.blob()
    const file = new File([blob], '1.png', { type: blob.type })

    setFiles((prevFiles) => [...prevFiles, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Box marginBottom={1}>
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </Box>
      <Box marginBottom={1}>
        <Button onClick={fetchData}>画像を追加</Button>
      </Box>
      <Box marginBottom={2}>
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </Box>
      <Box>
        {files.map((f, i) => (
          <img
            src={URL.createObjectURL(f)}
            width="100px"
            key={i}
            alt="sample"
          />
        ))}
      </Box>
    </>
  )
}

export const Default: Story = {
  args: {},
  render: (args) => <DropzoneWithHooks {...args} />,
}
