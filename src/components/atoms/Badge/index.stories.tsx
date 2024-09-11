import { Meta, StoryObj } from "@storybook/react";
import Badge from "./index";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "バッジのテキスト",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "バッジの色",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Orange: Story = {
  args: { content: "1", backgroundColor: "#ed9f28" },
};

export const Green: Story = {
  args: { content: "2", backgroundColor: "#32bf00" },
};

export const Red: Story = {
  args: { content: "10", backgroundColor: "#d4001a" },
};
