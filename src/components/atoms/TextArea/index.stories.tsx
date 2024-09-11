import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./index";

const meta: Meta<typeof TextArea> = {
  title: "Atoms/TextArea",
  component: TextArea,
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "プレースホルダー",
      table: {
        type: { summary: "string" },
      },
    },
    rows: {
      control: { type: "number" },
      defaultValue: 5,
      description: "行数",
      table: {
        type: { summary: "number" },
      },
    },
    minRows: {
      control: { type: "number" },
      defaultValue: 5,
      description: "最小行数",
      table: {
        type: { summary: "number" },
      },
    },
    maxRows: {
      control: { type: "number" },
      defaultValue: 10,
      description: "最大行数",
      table: {
        type: { summary: "number" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "バリデーションエラーフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description: "onChangeイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Normal: Story = {};

export const Error: Story = {
  args: { hasError: true },
};
