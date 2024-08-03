import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "@/components/IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "buttons/IconButton",
  component: IconButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt 속성",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "icon" },
      },
    },
    iconPath: { control: "text", description: "이미지의 경로" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    alt: "아이콘 버튼",
    onClick: fn(),
    iconPath: "/vite.svg",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
