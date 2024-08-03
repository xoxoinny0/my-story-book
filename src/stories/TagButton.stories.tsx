import type { Meta, StoryObj } from "@storybook/react";
import TagButton from "@/components/TagButton";
import { fn } from "@storybook/test";

const meta = {
  title: "buttons/TagButton",
  component: TagButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 텍스트",
      table: {
        defaultValue: { summary: "버튼" },
      },
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isChecked: {
      control: "boolean",
      description: "버튼 체크 여부",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    children: "Button",
    onClick: fn(),
    isChecked: false,
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
