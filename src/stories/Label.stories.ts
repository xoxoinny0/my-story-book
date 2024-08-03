import type { Meta, StoryObj } from "@storybook/react";
import Label from "@/components/Label";

const meta = {
  title: "text/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text", description: "Label의 for 속성" },
  },
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: "이메일",
  },
};
