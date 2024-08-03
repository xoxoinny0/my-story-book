import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar";
import { fn } from "@storybook/test";

const meta = {
  title: "navigation/NavigationBar",
  component: NavigationBar,
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
    isDark: {
      control: "boolean",
      description: "다크 모드 여부",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    showTitle: {
      control: "boolean",
      description: " 표시 여부",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    title: {
      control: "text",
      description: "타이틀",
      table: {
        defaultValue: { summary: "" },
      },
    },
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
  args: {
    isDark: false,
    title: "Title",
    showTitle: true,
    showBackButton: true,
    onBackButtonClick: fn(),
    showCloseButton: true,
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
