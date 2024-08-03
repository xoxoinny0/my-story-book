import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "@/components/PrimaryButton";
import { fn } from "@storybook/test";

const meta = {
  title: "buttons/PrimaryButton",
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["dark", "light", "social", "text"],
      description: "버튼 테마",
      table: {
        defaultValue: { summary: "dark" },
      },
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
      table: {
        defaultValue: { summary: "버튼" },
      },
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    isDisabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    children: "Button",
    theme: "dark",
    onClick: fn(),
    isDisabled: true,
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: "dark",
    isDisabled: false,
  },
};

export const Light: Story = {
  args: {
    theme: "light",
    isDisabled: false,
  },
};

export const Social: Story = {
  args: {
    theme: "social",
    isDisabled: false,
  },
};

export const Text: Story = {
  args: {
    theme: "text",
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {},
};
